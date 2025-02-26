import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import App from "../App";
import { describe, it, expect } from "vitest";
import "@testing-library/jest-dom/vitest";

describe("App Component", () => {
  it("navigates slide next correctly", async () => {
    render(<App />);
    const nextButton = screen.getByTestId("btn_next");
    expect(nextButton).toBeEnabled();
    fireEvent.click(nextButton);

    await waitFor(() => {
      expect(nextButton).toBeEnabled();
    });
  });

  it("adds a new card upon form submission", async () => {
    render(<App />);

    const addButton = screen.getAllByTestId("add_card_btn");
    fireEvent.click(addButton[0]);

    fireEvent.change(screen.getByPlaceholderText("Put card holder"), {
      target: { value: "John Doe" },
    });
    fireEvent.change(screen.getByPlaceholderText("Credit card number"), {
      target: { value: "1234567890123456" },
    });
    fireEvent.change(screen.getByPlaceholderText("Credit card expired date"), {
      target: { value: "2025-12-31" },
    });
    fireEvent.change(screen.getByLabelText(/Credit Card Spend Color/i), {
      target: { value: "#00ff00" },
    });

    fireEvent.submit(screen.getByTestId("form_add_card"));

    expect(await screen.findByText("John Doe")).toBeInTheDocument();
  });

  it("handles input changes in the form", () => {
    render(<App />);
    const addButton = screen.getAllByTestId("add_card_btn");
    fireEvent.click(addButton[0]);
    const input = screen.getByPlaceholderText("Put card holder");
    fireEvent.change(input, { target: { value: "John Doe" } });

    expect(input).toHaveValue("John Doe");
  });
  it("opens and closes the add card modal", () => {
    render(<App />);

    const addButton = screen.getAllByTestId("add_card_btn");
    fireEvent.click(addButton[0]);

    expect(screen.getByText(/Credit Card Holder/i)).toBeInTheDocument();

    const cancelButton = screen.getByText(/Cancel/i);
    fireEvent.click(cancelButton);

    expect(screen.queryByText(/Credit Card Holder/i)).not.toBeInTheDocument();
  });
});
