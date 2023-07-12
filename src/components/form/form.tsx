import { useState, useRef } from "react";

import { getOnlyNumbers, modifyNumbers } from "../../helpers/modify-text";

import Input from "../input/input";

import { DataType } from "../../types/data";
import { FormContainer, FormStyle } from "./form.style";
import { ButtonStyle } from "../button.style";

type FormType = {
  findUserHandler: (sendData: DataType) => void;
};

const Form = ({ findUserHandler }: FormType) => {
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");

  const numRef = useRef<HTMLInputElement>(null);

  // Имейл
  const onEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  // Номер - фильтрация - маска
  const onNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const currentData = event.target.value;

    if (currentData.length < 1) return setNumber(currentData);

    // Фильтруем - оставляем только числа
    const onlyNumbers = getOnlyNumbers(currentData);
    if (onlyNumbers.length < 1) return (event.target.value = "");

    // Save numbers
    setNumber(onlyNumbers);

    // Подставляем дефис
    const modifiedNumbers = modifyNumbers(onlyNumbers);
    if (modifiedNumbers) event.target.value = modifiedNumbers;
  };

  // Submit
  const onSubmitHandler = (event: React.SyntheticEvent) => {
    event.preventDefault();

    const sendData: DataType = { email: email.toString(), number: Number(number) };

    findUserHandler(sendData);
  };

  return (
    <FormContainer>
      <h2>Find user</h2>
      <FormStyle onSubmit={onSubmitHandler}>
        <Input
          label="Email"
          type="email"
          placeholder="example@gmail.com"
          required
          onChange={onEmailChange}
        />
        <Input
          label="Number"
          type="text"
          placeholder="11-11-11"
          ref={numRef}
          onChange={onNumberChange}
          maxLength={8}
        />
        <ButtonStyle type="submit">Find</ButtonStyle>
      </FormStyle>
    </FormContainer>
  );
};

export default Form;
