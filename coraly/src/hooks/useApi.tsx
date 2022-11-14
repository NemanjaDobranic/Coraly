import { useState, useCallback, useRef, useEffect } from "react";

interface IApi {
  error?: { statusText: string; message: string } | null;
  loading?: boolean;
  response?: any;
}

export enum HttpMethods {
  GET = "GET",
  POST = "POST",
  PUT = "PUT",
  PATCH = "PATCH",
  DELETE = "DELETE",
}

interface IApiArgs {
  path: string | undefined;
  options:
    | {
        method: HttpMethods;
        headers?: {
          "Content-Type"?: string;
        };
        body?: string;
      }
    | undefined;
}

const useApi = (
  { path, options }: IApiArgs = { path: undefined, options: undefined },
  executeOnMount = false
): [
  IApi,
  (
    urlPath?: string,
    urlOptions?: {
      method: HttpMethods;
      headers?:
        | {
            "Content-Type"?: string | undefined;
          }
        | undefined;
      body?: string | undefined;
    }
  ) => Promise<Response>
] => {
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

  const executeApiCall = useCallback(
    async (urlPath = path, urlOptions = options) => {
      try {
        setState({ error: null, loading: true });
        const response = await fetch(baseUrl + urlPath, urlOptions);

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
    },
    [path, options]
  );

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
