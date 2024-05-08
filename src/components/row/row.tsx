import React, {
  ReactChild,
  forwardRef,
  ForwardedRef,
  createContext,
  useContext,
  useRef,
  useEffect,
} from "react";
import { StyledRow } from "./style";

// Criar um contexto para armazenar o valor de gutter e a quantidade de filhos
interface RowContextProps {
  gutter: number | null;
  childCount: number | null;
}

const RowContext = createContext<RowContextProps>({
  gutter: null,
  childCount: null,
});

export interface RowProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: ReactChild | string | any;
  gutter?: number;
  gutterX?: number;
  gutterY?: number;
  align?: "top" | "bottom" | "center";
  justify?:
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-between"
    | "space-evenly"
    | "space-around";
  wrap?: boolean;
}

// Adicione uma nova prop "forwardedRef" ao tipo RowProps
export interface ForwardedRowProps extends RowProps {
  forwardedRef?: ForwardedRef<HTMLDivElement>;
}

// Use React.forwardRef para encaminhar a ref para StyledRow
const Row = forwardRef<HTMLDivElement, ForwardedRowProps>(
  ({ children, forwardedRef, gutter, ...props }: ForwardedRowProps, ref) => {
    const childCountRef = useRef<number>(0);

    useEffect(() => {
      if (Array.isArray(children)) {
        childCountRef.current = children.length;
      } else {
        childCountRef.current = children ? 1 : 0;
      }
    }, [children]);

    // Provedor de contexto para fornecer o valor de gutter e a quantidade de filhos para os componentes filhos
    return (
      <RowContext.Provider
        value={{
          gutter: props.gutterX || gutter || 8,
          childCount: childCountRef.current,
        }}
      >
        <StyledRow {...props} ref={forwardedRef || ref} gutter={gutter}>
          {children}
        </StyledRow>
      </RowContext.Provider>
    );
  },
);

// Componente funcional para acessar o contexto de gutter e a quantidade de filhos
export const useRowContext = () => useContext(RowContext);

Row.displayName = "Row";

export default Row;
