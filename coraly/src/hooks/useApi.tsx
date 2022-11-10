import { useState, useCallback, useRef, useEffect } from "react";

interface IApi {
  error?: string | null;
  loading?: boolean;
  response?: JSON | string | number | null;
}

export enum HttpMethods {
  GET = "GET",
  POST = "POST",
  PUT = "PUT",
  PATCH = "PATCH",
  DELETE = "DELETE",
}

interface IApiArgs {
  url: string;
  options: {
    method: HttpMethods;
    headers?: {
      "Content-Type"?: string;
    };
    body?: string;
  };
}

const useApi = (
  { url, options }: IApiArgs,
  executeOnMount = false
): [IApi, () => Promise<Response>] => {
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
      const response = await fetch(url, options);

      if (response.ok) {
        const data = await response.json();
        setState({ loading: false, response: data });
      } else {
        setState({ loading: false, error: response.statusText });
      }

      return response;
    } catch (e) {
      const typedErr = e as Error;
      throw new Error(typedErr.message);
    }
  }, []);

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
