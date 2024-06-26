import { ProvideTheme } from "../../ProvideTheme/provideTheme";
import React, { FC } from "react";
import Loading, { LoadingProps } from "../loading";

const Example: FC<LoadingProps> = ({ theme, ...props }) => {
  return (
    <ProvideTheme t={theme}>
      <div className="flex justify-center align-middle w-12/12">
        <Loading {...props} />
      </div>
    </ProvideTheme>
  );
};

export default Example;
