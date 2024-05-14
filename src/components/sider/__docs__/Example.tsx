import { ProvideTheme } from "../../ProvideTheme/provideTheme";
import React, { FC } from "react";
import Sider, { SiderProps } from "../sider";
import Layout from "../../layout/layout";

const Example: FC<SiderProps> = ({ ...props }) => {
  return (
    <ProvideTheme t="light">
      <Layout style={{ display: "flex", flexDirection: "row" }}>
        <Sider {...props} />
        <h1 style={{ color: "#fff", padding: 13 }}>Conteúdo da pagina</h1>
      </Layout>
    </ProvideTheme>
  );
};

export default Example;
