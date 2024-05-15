import Input, { InputProps } from "../input";
import React, { FC } from "react";
import { ProvideTheme } from "../../ProvideTheme/provideTheme";
import { Icon } from "../../icons";

const Example: FC<InputProps> = ({ disabled = false, theme, ...props }) => {
  return (
    <ProvideTheme t={theme}>
      <Input
        disabled={disabled}
        addonBefore={<Icon name="UserCircleIcon" size="large" />}
        style={{ width: 300 }}
        placeholder="Placeholder"
        {...props}
      />
    </ProvideTheme>
  );
};

export default Example;
