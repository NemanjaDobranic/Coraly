import { render, fireEvent, cleanup } from "@testing-library/react";
import React from "react";
import "@testing-library/jest-dom";
import CoralyLink from "../../components/CoralyLink";
import { BrowserRouter, Route, Routes } from "react-router-dom";

afterEach(() => {
  cleanup();
});

test("Coraly Link", () => {
  let { container } = render(
    <BrowserRouter>
      <Routes>
        <Route path="" element={<CoralyLink to="/board" children="Board" />} />
        <Route path="/board" element={<div id="board">Board page</div>} />
      </Routes>
    </BrowserRouter>
  );
  const link = container.firstChild;
  expect(link).toBeInTheDocument();
  expect(link).toHaveTextContent("Board");
  expect(link).toHaveAttribute("href");
  expect(link).toContainHTML("span");

  fireEvent.click(link as Element, { button: 0 });
  const board = container.firstChild;
  expect(board).toBeInTheDocument();
  expect(board).toHaveTextContent("Board page");
});
