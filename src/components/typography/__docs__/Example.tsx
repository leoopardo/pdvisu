import React, { FC } from "react";
import { ProvideTheme } from "../../ProvideTheme/provideTheme";
import Typography, { TypographyProps } from "../typography";

const Example: FC<TypographyProps> = ({ children, theme, ...props }) => {
  return (
    <ProvideTheme t={theme}>
      <Typography {...props}>{children}</Typography>
    </ProvideTheme>
  );
};

export default Example;
