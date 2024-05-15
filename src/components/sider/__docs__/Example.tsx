import { ProvideTheme } from "../../ProvideTheme/provideTheme";
import React, { FC } from "react";
import Sider, { SiderProps } from "../sider";
import Layout from "../../layout/layout";
import { Button } from "../../button";
import Typography from "../../typography/typography";

const Example: FC<SiderProps> = ({ theme, ...props }) => {
  return (
    <ProvideTheme t={theme}>
      <Layout style={{ display: "flex", flexDirection: "row" }}>
        <Sider
          footer={<Button style={{ width: "100%" }}>Sair</Button>}
          {...props}
        />
        <Layout style={{ padding: 8 }}>
          <Typography level="h3">Conteúdo da página</Typography>
        </Layout>
      </Layout>
    </ProvideTheme>
  );
};

export default Example;
