import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Button from "../button";
import React from "react";

describe("Button component", () => {
  it("Button should render correctly", () => {
    render(<Button text="teste" />);
    const button = screen.queryByTestId("button-teste");
    expect(button).toBeTruthy();
  });
});
