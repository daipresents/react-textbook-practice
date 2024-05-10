import { useState } from "react";
import result from "../data/users.json";

export const useFetchUsers = () => {
  const [userList, setUserList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const onClickFetchUser = () => {
    setIsLoading(true);
    setIsError(false);

    const users = result.map(user => ({
      id: user.id,
      name: `${user.lastname} ${user.firstname}`,
      age: user.age
    }));

    setUserList(users);
    setIsLoading(false);
  };

  return { userList, isLoading, isError, onClickFetchUser };
}
