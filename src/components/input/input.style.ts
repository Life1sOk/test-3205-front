import styled from "styled-components";

export const InputContainer = styled.div`
  width: fit-content;
  height: fit-content;

  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
`;

export const InputStyle = styled.input`
  width: 217px;
  height: 29px;

  letter-spacing: 1px;
  color: black;
  padding-left: 5px;

  border: 3px solid transparent;
  border-radius: 3px;

  &:focus {
    outline: none;
    border-bottom: 3px solid rgb(0, 112, 201);
  }

  &:focus:invalid {
    border-bottom: 3px solid rgb(255, 36, 36);
  }
`;

export const Label = styled.label`
  font-size: 12.5px;
  font-weight: 600;
  letter-spacing: 0.5px;
  padding-bottom: 5px;
  padding-left: 3px;

  & > strong {
    color: rgb(255, 36, 36);
  }
`;
