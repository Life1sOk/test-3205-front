import { forwardRef, useId } from "react";

import { InputContainer, InputStyle, Label } from "./input.style";

type InputType = {
  label: string;
  type: string;
  placeholder: string;
  required?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  maxLength?: number;
};

const Input = forwardRef<HTMLInputElement, InputType>(
  ({ label, type, placeholder, required, onChange, maxLength }, ref) => {
    const id = useId();

    return (
      <InputContainer>
        <Label htmlFor={`${id}`}>
          {label}
          {required && <strong> *</strong>}
        </Label>
        <InputStyle
          id={id}
          ref={ref}
          type={type}
          placeholder={placeholder}
          required={required}
          onChange={onChange}
          maxLength={maxLength}
        />
      </InputContainer>
    );
  }
);

export default Input;
