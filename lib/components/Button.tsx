import { ReactNode } from "react";
import { PressEvent, Button as RacButton } from "react-aria-components";

export interface IButton {
  type: "info" | "success" | "danger";
  onPress: (e: PressEvent) => void;
  children: ReactNode;
}

export const Button = (props: IButton) => {
  const { type, onPress, children } = props;

  let styleClassName = "";

  switch (type) {
    case "success":
      styleClassName = " button-success";
      break;
    case "info":
      styleClassName = " button-info";
      break;
    case "danger":
      styleClassName = " button-danger";
      break;

    default:
      break;
  }

  return (
    <RacButton className={`button ${styleClassName}`} onPress={onPress}>
      {children}
    </RacButton>
  );
};
