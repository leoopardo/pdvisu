import React from "react";
import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import Button from "../button";

describe("Button component", () => {
  it("Button should render correctly", () => {
    render(<Button text="teste"/>);
    const button = screen.queryByTestId("button-teste");
    expect(button).toBeTruthy();
  });
});