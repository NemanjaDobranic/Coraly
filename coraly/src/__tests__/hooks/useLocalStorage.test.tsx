import { renderHook, act } from "@testing-library/react-hooks";
import { testKey } from "../../config/localStorageKeys";
import useLocalStorage from "../../hooks/useLocalStorage";

test("useLocalStorage hook", () => {
  const { result } = renderHook(() =>
    useLocalStorage(testKey, { id: 1, test: "test 1" })
  );
  const storage = result.current[0];
  expect(storage.id).toBe(1);
  expect(storage.test).toBe("test 1");
});
