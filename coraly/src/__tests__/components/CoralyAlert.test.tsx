import { render, screen, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import CoralyAlert from "../../components/CoralyAlert";

afterEach(() => {
  cleanup();
});

test("Coraly Alert", () => {
  expect(true).toBe(true);
  render(
    <CoralyAlert
      message="alert test"
      color="error"
      changeVisibility={(isVisible) => console.log(isVisible)}
    />
  );
  const alert = screen.getByTestId("alert-1");
  expect(alert).toBeInTheDocument();
  expect(alert).toHaveTextContent("alert test");
  expect(alert).toHaveAttribute("role");
  expect(alert).toContainHTML("svg");
});

