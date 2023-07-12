import { DataType } from "../../types/data";

import { UserContainer, UserStyle } from "./users.style";

type UsersType = {
  data: DataType[];
};

const Users = ({ data }: UsersType) => {
  return (
    <UserContainer>
      {data.map((user, index) => (
        <UserStyle key={index}>
          <span>{user.email}</span>
          <span>{user.number}</span>
        </UserStyle>
      ))}
    </UserContainer>
  );
};

export default Users;
