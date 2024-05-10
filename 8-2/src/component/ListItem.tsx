import type { FC } from "react";
import type { User } from "../types/user";

export const ListItem: FC<User> = props => {
  const { id, name, age, personalColor = "gray" } = props;
  return (
    <p style={{ color: personalColor }}>
      {id}: {name}({age})
    </p>
  );
};

// 非推奨
// ListItem.defaultProps = {
//   personalColor: "gray"
// };
