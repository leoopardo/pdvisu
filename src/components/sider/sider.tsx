import React, { ReactChild, useState } from "react";
import Logo from "../logo/logo";
import { StyledSider } from "./style";

export interface SiderProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: ReactChild;
  open?: boolean;
}

const Sider = ({ children, open, ...props }: SiderProps) => {
  const [openByClick] = useState<boolean | undefined>(undefined);
  return (
    <StyledSider {...props} open={openByClick || open}>
      <Logo variant="dark" />
      {children}
    </StyledSider>
  );
};

export default Sider;
