import { render, screen } from "@testing-library/react";
import React from "react";
import { describe, expect, it } from "vitest";
import { ThemeProvider } from "../../../themeProvider";
import { ProvideTheme } from "../../ProvideTheme/provideTheme";
import { Button } from "../button";

describe("Button component", () => {
  it("Button should render correctly", () => {
    render(
      <ThemeProvider defaultTheme={"dark"}>
        <ProvideTheme>
          <Button variant="default" size="default">
            teste
          </Button>
        </ProvideTheme>
      </ThemeProvider>,
    );
    const button = screen.queryByTestId("button-teste");
    expect(button).toBeTruthy();
  });
});
