import Icon from "../../icons/icons";
import { ProvideTheme } from "../../ProvideTheme/provideTheme";
import Button, { ButtonProps } from "../button";
import React, { FC } from "react";

const Example: FC<ButtonProps> = ({
  children,
  theme,
  variant,
  disabled,
  iconPosition,
}) => {
  return (
    <ProvideTheme t={theme}>
      <div className="flex w-2/12">
        <Button
          style={{ width: "100%" }}
          theme={theme}
          variant={variant}
          icon={<Icon name="ArrowRightIcon" />}
          disabled={disabled}
          iconPosition={iconPosition}
        >
          {children}
        </Button>
      </div>
    </ProvideTheme>
  );
};

export default Example;
