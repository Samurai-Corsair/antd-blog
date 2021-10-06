import { Button as AntDButton } from "antd";
import { BaseButtonProps } from "antd/es/button/button";

interface IButton {
  text: string;
  disabled: boolean;
  handleClick: () => void;
}

export const Button = ({
  text,
  type = "primary",
  disabled,
  handleClick,
}: BaseButtonProps & IButton) => {
  return (
    <AntDButton type={type} disabled={disabled} onClick={handleClick}>
      {text}
    </AntDButton>
  );
};
