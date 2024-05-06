import { Input, InputProps } from "../input";
import React, { FC } from "react";

const Example: FC<InputProps> = ({
  disabled = false,
  placeholder = "test",
}) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
      }}
    >
      <Input placeholder={placeholder} disabled={disabled} />
    </div>
  );
};

export default Example;
