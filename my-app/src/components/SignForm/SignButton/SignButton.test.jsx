import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import SignButton from "./SignButton";

describe("SignButton component", () => {
  test("Renders with text", () => {
    render(<SignButton
      type="button"
       text={"Sign Up"}
       onClick={() => {}}
       customClass="sign__button"
     />)
     const button = screen.getByText("Sign Up")
     expect(button).toBeInTheDocument();
  })
})