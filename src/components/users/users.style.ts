import styled from "styled-components";

export const UserContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 22px;
`;

export const UserStyle = styled.div`
  background-color: rgba(255, 255, 255, 0.6);
  border: 1px solid rgba(255, 255, 255, 0.6);
  border-radius: 3px;

  padding: 5px 44px;
  font-size: 18px;

  & > span {
    display: block;
    padding: 3px;
  }
`;
