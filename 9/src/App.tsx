import { useState } from "react";
import users from "./data/users.json";

export const APp = () => {
  const [userList, setUserList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const onClickFetchUser = () => {
    setIsLoiading(true);
    setIsError(false);
  }

  setUserList(users);

  
}
