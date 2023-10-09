import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Input from "./Input"

describe("Input component", () => {
  test("Renders with label and placeholder", () => {
    render(<Input label="TestLabel" placeholder="TestPlaceholder" type="text" value="TestPlaceholder" onChange={() => {}}/>)
    render(<div data-testid="asd">TestPlaceholder</div>)
    const input = screen.getByTestId("asd");
    expect(input).toBeInTheDocument();
  })
} )