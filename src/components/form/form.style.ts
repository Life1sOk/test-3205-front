import styled from "styled-components";

export const FormContainer = styled.div`
  padding: 22px 55px;
  background-color: rgba(255, 255, 255, 0.6);
  border: 1px solid rgba(255, 255, 255, 0.6);
  border-radius: 3px;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 11px;

  & > h2 {
    margin: 10px 0;
  }
`;

export const FormStyle = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 15px;
`;
