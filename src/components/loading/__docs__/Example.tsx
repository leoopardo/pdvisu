import { ProvideTheme } from "../../ProvideTheme/provideTheme";
import React, { FC } from "react";
import Loading, { LoadingProps } from "../loading";

const Example: FC<LoadingProps> = ({ size, theme }) => {
  return (
    <ProvideTheme t={theme}>
      <div className="flex justify-center align-middle w-12/12">
        <Loading size={size} />
      </div>
    </ProvideTheme>
  );
};

export default Example;
