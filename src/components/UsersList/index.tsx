import React, { useEffect } from "react";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import {useActions} from "../../hooks/useActions";

const UsersList: React.FC = () => {
  const { users, error, loading } = useTypedSelector((state) => state.users);
  const {fetchUsers} = useActions()

  useEffect(() => {
    fetchUsers();
  }, []);

  if (loading) {
    return <h2>Loading...</h2>;
  }
  if (error) {
    return <h2>error: {error}</h2>;
  }

  return (
    <div>
      {users.map((user) => (
        <div key={user.id}>{user.name}</div>
      ))}
    </div>
  );
};

export default UsersList;
