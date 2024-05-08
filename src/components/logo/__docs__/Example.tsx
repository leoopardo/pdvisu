import { ProvideTheme } from "../../ProvideTheme/provideTheme";
import React, { FC } from "react";
import Logo, { LogoProps } from "../logo";

const Example: FC<LogoProps> = ({ theme, variant, ...props }) => {
  return (
    <ProvideTheme t={theme}>
      <div className="flex justify-center align-middle w-12/12">
        <Logo variant={variant} {...props} />
      </div>
    </ProvideTheme>
  );
};

export default Example;
