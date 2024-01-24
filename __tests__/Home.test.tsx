import { render, screen, waitFor } from "@testing-library/react";
import Home from "../src/app/(user)/page";
import "@testing-library/jest-dom";

describe("Home", () => {
  it("Should Have Learn Text", async () => {
    // Arrange
    render(<Home />);

    // Act
    // Wait for the text to appear in the document
    const LearnText = await screen.findByText("Welcome to Coding Crossroads.");

    // Assert
    expect(LearnText).toBeInTheDocument();
  });
});
