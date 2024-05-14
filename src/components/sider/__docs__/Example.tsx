import { ProvideTheme } from "../../ProvideTheme/provideTheme";
import React, { FC } from "react";
import Sider, { SiderProps } from "../sider";
import Layout from "../../layout/layout";
import { Button } from "../../button";

const Example: FC<SiderProps> = ({ ...props }) => {
  return (
    <ProvideTheme t="light">
      <Layout style={{ display: "flex", flexDirection: "row" }}>
        <Sider
          footer={<Button style={{ width: "100%" }}>Sair</Button>}
          {...props}
        />
        <h1 style={{ color: "#000", padding: 13 }}>Conteúdo da pagina</h1>
      </Layout>
    </ProvideTheme>
  );
};

export default Example;
