import { ProvideTheme } from "../../ProvideTheme/provideTheme";
import React, { FC } from "react";
import Col, { ColProps } from "../col";
import Row from "../../row/row";

const Example: FC<ColProps> = ({ ...props }) => {
  return (
    <ProvideTheme t="light">
      <Row
        style={{
          backgroundColor: "blue",
        }}
      >
        {new Array(4).fill(null).map((_, index) => (
          <Col
            key={`div-${index}`}
            {...props}
            style={{
              height: 50,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "#fff",
              fontWeight: 800,
              fontSize: 26,
            }}
          >
            {index + 1}
          </Col>
        ))}
      </Row>
    </ProvideTheme>
  );
};

export default Example;
