import { ChangeEvent } from "react";

import { CustomInputContainer } from "./custom-input.style";

interface CustomInputProps {
  label: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export function CustomInput({ label, value, onChange }: CustomInputProps) {
  return (
    <CustomInputContainer>
      <input type="text" value={value} onChange={(e) => onChange(e)} />

      {label ? (
        <label
          className={`custom-input-label ${value.length > 0 ? "shrink" : ""}`}
        >
          {label}
        </label>
      ) : null}
    </CustomInputContainer>
  );
}
