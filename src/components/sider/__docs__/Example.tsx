import { ProvideTheme } from "../../ProvideTheme/provideTheme";
import React, { FC } from "react";
import Sider, { SiderProps } from "../sider";
import Layout from "../../layout/layout";
import Icon from "../../icons/icons";

const Example: FC<SiderProps> = ({ ...props }) => {
  return (
    <ProvideTheme t="light">
      <Layout style={{ display: "flex", flexDirection: "row" }}>
        <Sider
          routes={[
            {
              key: "dashboard",
              label: "Dashboard",
              icon: <Icon name="HomeIcon" />,
              path: "/dashboard",
              disabled: true,
            },
            {
              key: "franquias",
              label: "Franquias",
              icon: <Icon name="BuildingStorefrontIcon" />,
              path: "/Franquias",
            },
            {
              key: "terminais",
              label: "Terminais",
              icon: <Icon name="CalculatorIcon" />,
              childrens: [
                {
                  key: "geral",
                  label: "Geral",
                  path: "/terminais/geral",
                },
              ],
            },
            {
              key: "usuarios",
              label: "Usuários",
              icon: <Icon name="UserIcon" />,
              childrens: [
                {
                  key: "user-geral",
                  label: "Geral",
                  path: "/usuarios/geral",
                },
              ],
            },
          ]}
          {...props}
        />
        <h1 style={{ color: "#fff", padding: 16 }}>Conteúdo da pagina</h1>
      </Layout>
    </ProvideTheme>
  );
};

export default Example;
