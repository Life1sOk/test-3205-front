import styled from "styled-components";

export const ButtonStyle = styled.button`
  display: inline-block;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;

  background-color: rgb(244, 244, 244);
  border: 1px solid rgb(222, 222, 222);

  &:active {
    opacity: 0.9;
  }

  &:hover {
    cursor: pointer;
    border: 1px solid blue;
    color: blue;
  }
`;
