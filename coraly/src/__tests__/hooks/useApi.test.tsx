import { renderHook, act } from "@testing-library/react-hooks";
import useApi, { HttpMethods } from "../../hooks/useApi";

describe("useApi", () => {
  test("Default value of loading will be false and null for response and error", () => {
    const { result } = renderHook(() => useApi());
    const { loading, response, error } = result.current[0];
    expect(loading).toBe(false);
    expect(response).toBe(null);
    expect(error).toBe(null);
  });

  test("Hook will not run on mount phase, if true is not passed as second argument", () => {
    const { result } = renderHook(() =>
      useApi({
        path: `/users`,
        options: {
          method: HttpMethods.GET,
        },
      })
    );
    const { loading } = result.current[0];
    expect(loading).toBe(false);
  });

  test("Hook will run on mount phase, if true is  passed as second argument", () => {
    const { result } = renderHook(() =>
      useApi(
        {
          path: `/users`,
          options: {
            method: HttpMethods.GET,
          },
        },
        true
      )
    );

    const { loading } = result.current[0];
    expect(loading).toBe(true);
  });

  test("callback api function", async () => {
    const { result } = renderHook(() => useApi());

    const executeApiCall = result.current[1];
    await act(async () => {
      const data = await executeApiCall(`/users`, {
        method: HttpMethods.GET,
      });

      expect(data.status).toBe(200);
      expect(data.ok).toBe(true);
    });
  });
});
