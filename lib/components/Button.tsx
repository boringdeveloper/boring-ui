import { ReactNode } from "react";
import { PressEvent, Button as RacButton } from "react-aria-components";

export interface IButton {
  className?: string;
  type: "info" | "success" | "danger";
  onPress: (e: PressEvent) => void;
  children: ReactNode;
}

export const Button = (props: IButton) => {
  const { className, type, onPress, children } = props;

  let __className = `button ${className}`;

  switch (type) {
    case "success":
      __className += " button-success";
      break;
    case "info":
      __className += " button-info";
      break;
    case "danger":
      __className += " button-danger";
      break;

    default:
      break;
  }

  return (
    <RacButton className={__className} onPress={onPress}>
      {children}
    </RacButton>
  );
};
