import { useContext } from "react";
import { User } from "./User";
import { UserContext } from "../context/user";
import { NoDataCard } from "./NoDataCard";

export const UsersList = () => {
  const { users } = useContext(UserContext);
  return (
    <div className="container-users">
      {users.length > 0 ? (
        users.map((user, index) => {
          return <User user={user} key={index} />;
        })
      ) : (
        <NoDataCard />
      )}
    </div>
  );
};
