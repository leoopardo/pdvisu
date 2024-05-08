import { ProvideTheme } from "../../ProvideTheme/provideTheme";
import React, { FC } from "react";
import Layout, { LayoutProps } from "../layout";

const Example: FC<LayoutProps> = ({ ...props }) => {
  return (
    <ProvideTheme t="light">
      <div style={{ height: "100vh" }}>
        <Layout {...props}></Layout>
      </div>
    </ProvideTheme>
  );
};

export default Example;
