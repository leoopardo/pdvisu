import { ProvideTheme } from "../../ProvideTheme/provideTheme";
import React, { FC } from "react";
import Row, { RowProps } from "../row";

const Example: FC<RowProps> = ({ ...props }) => {
  return (
    <ProvideTheme t="light">
      <Row
        {...props}
        style={{
          backgroundColor: "red",
        }}
      >
        {new Array(17).fill(null).map((_, index) => (
          <div
            key={`div-${index}`}
            style={{
              backgroundColor: "blue",
              width: "50px",
              height: "50px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "#fff",
              fontWeight: 800,
              fontSize: 24,
            }}
          >
            {index}
          </div>
        ))}
      </Row>
    </ProvideTheme>
  );
};

export default Example;
