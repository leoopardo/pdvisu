import Select, { SelectProps } from "../Select";
import React, { FC } from "react";
import { ProvideTheme } from "../../ProvideTheme/provideTheme";
import { Icon } from "../../icons";

const Example: FC<SelectProps> = ({ disabled = false, theme, ...props }) => {
  return (
    <ProvideTheme t={theme}>
      <Select
        disabled={disabled}
        addonBefore={<Icon name="UserCircleIcon" size="large" />}
        style={{ width: 300 }}
        {...props}
      />
    </ProvideTheme>
  );
};

export default Example;
