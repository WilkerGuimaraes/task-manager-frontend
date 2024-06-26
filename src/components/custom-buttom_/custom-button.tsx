import { CustomButtomStyle } from "./custom-button.style";

interface CustomButtonProps {
  children: any;
  onClick: () => void;
}

export function CustomButtom({ children, onClick }: CustomButtonProps) {
  return <CustomButtomStyle onClick={onClick}>{children}</CustomButtomStyle>;
}
