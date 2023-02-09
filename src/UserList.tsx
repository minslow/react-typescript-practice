import React from "react";
import styled from "styled-components";

const UsernameContainer = styled.div<{ user: IUser }>`
  cursor: pointer;
  color: ${(props) => (props.user.active ? "green" : "black")};
`;

interface IUser {
  id: number;
  username: string;
  email: string;
  active: boolean;
}

interface Props {
  onRemove: (id: number) => void;
  onToggle: (id: number) => void;
}

interface UserListProps extends Props {
  users: IUser[];
}

interface UserProps extends Props {
  user: IUser;
}

const User = React.memo(({ user, onRemove, onToggle }: UserProps) => {
  return (
    <div>
      <UsernameContainer user={user} onClick={() => onToggle(user.id)}>
        {user.username}
      </UsernameContainer>
      &nbsp;
      <span>({user.email})</span>
      <button onClick={() => onRemove(user.id)}>삭제</button>
    </div>
  );
});

function UserList({ users, onRemove, onToggle }: UserListProps) {
  return (
    <div>
      {users.map((user) => (
        <User
          user={user}
          key={user.id}
          onRemove={onRemove}
          onToggle={onToggle}
        />
      ))}
    </div>
  );
}

export default React.memo(UserList);
