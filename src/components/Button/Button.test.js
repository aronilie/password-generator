import { render, screen } from "@testing-library/react";
import Button from "./Button";

describe("Given a Button component", () => {
  describe("When it is instantiated", () => {
    test("Then it should be renderized", () => {
      render(<Button />);

      const button = screen.getByRole("button");

      expect(button).toBeInTheDocument();
    });
  });
});
