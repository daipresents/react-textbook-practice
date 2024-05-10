import { useState } from "react";
import { ListItem } from "./component/ListItem";
import userList from "./data/userList.json";
import type { User } from "./types/user";

function App() {
  const [users, setUsers] = useState<User[]>(userList);

  return (
    <div>
      {users.map(user => (
        <ListItem id={user.id} name={user.name} age={user.age} personalColor={user.personalColor} />
      ))}
    </div>
  );
}

export default App;
