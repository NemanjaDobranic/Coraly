import { useState, useCallback, useRef, useEffect } from "react";

interface IApi {
  error?: { statusText: string; message: string } | null;
  loading?: boolean;
  response?: object | string | number | null;
}

export enum HttpMethods {
  GET = "GET",
  POST = "POST",
  PUT = "PUT",
  PATCH = "PATCH",
  DELETE = "DELETE",
}

interface IApiArgs {
  path: string;
  options: {
    method: HttpMethods;
    headers?: {
      "Content-Type"?: string;
    };
    body?: string;
  };
}

const useApi = (
  { path, options }: IApiArgs,
  executeOnMount = false
): [IApi, () => Promise<Response>] => {
  const baseUrl = "http://localhost:4000";
  const initialState: IApi = {
    error: null,
    loading: false,
    response: null,
  };
  const [state, updateState] = useState<IApi>(initialState);

  const setState = useCallback(
    (newState: Partial<IApi>) =>
      updateState((prevState) => ({ ...prevState, ...newState })),
    [updateState]
  );

  const mountRef: any = useRef(true);

  const executeApiCall = useCallback(async () => {
    try {
      setState({ error: null, loading: true });
      const response = await fetch(baseUrl + path, options);

      const data = await response.json();
      if (response.ok) {
        setState({ loading: false, response: data });
      } else {
        setState({
          loading: false,
          error: { statusText: response.statusText, message: data },
        });
      }

      return response;
    } catch (e) {
      const typedErr = e as Error;
      console.log(typedErr);
      throw new Error(typedErr.message);
    }
  }, [path, options.body]);

  useEffect(
    () => () => {
      mountRef.current = false;
    },
    []
  );

  useEffect(() => {
    if (executeOnMount) {
      executeApiCall();
    }
  }, []);

  return [state, executeApiCall];
};

export default useApi;
