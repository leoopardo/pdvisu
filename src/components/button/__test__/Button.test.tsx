import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Button from "../button";
import React from "react";
import { ProvideTheme } from "../../ProvideTheme/provideTheme";
import { ThemeProvider } from "../../../themeProvider";

describe("Button component", () => {
  it("Button should render correctly", () => {
    render(
      <ThemeProvider theme={{ theme: "dark" }}>
        <ProvideTheme>
          <Button>teste</Button>
        </ProvideTheme>
      </ThemeProvider>,
    );
    const button = screen.queryByTestId("button-teste");
    expect(button).toBeTruthy();
  });
});
