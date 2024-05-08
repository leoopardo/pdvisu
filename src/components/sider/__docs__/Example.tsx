import { ProvideTheme } from "../../ProvideTheme/provideTheme";
import React, { FC } from "react";
import Sider, { SiderProps } from "../sider";
import Layout from "../../layout/layout";

const Example: FC<SiderProps> = ({ ...props }) => {
  return (
    <ProvideTheme t="light">
      <Layout>
        <Sider {...props}></Sider>
      </Layout>
    </ProvideTheme>
  );
};

export default Example;
