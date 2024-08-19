// src/Task2APIFetchTest.test.js
import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom"; // Correct import
import Task2APIFetch from "./components/Task2APIFetch";

beforeAll(() => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      ok: true,
      json: () =>
        Promise.resolve([
          { id: 1, name: "John Doe", email: "john@example.com" },
          { id: 2, name: "Jane Doe", email: "jane@example.com" },
        ]),
    })
  );
});

afterAll(() => {
  global.fetch.mockClear();
});

test("renders the user list and displays the correct number of users", async () => {
  render(<Task2APIFetch />);

  expect(screen.getByText(/user list/i)).toBeInTheDocument();

  const userItems = await waitFor(() => screen.findAllByRole("listitem"));

  expect(userItems).toHaveLength(2);

  expect(screen.getByText("John Doe")).toBeInTheDocument();
  expect(screen.getByText("Jane Doe")).toBeInTheDocument();
});

test("handles fetch error", async () => {
  global.fetch.mockImplementationOnce(() =>
    Promise.reject(new Error("Failed to fetch"))
  );

  render(<Task2APIFetch />);

  const errorMessage = await waitFor(() =>
    screen.getByText(/error: failed to fetch/i)
  );

  expect(errorMessage).toBeInTheDocument();
});
