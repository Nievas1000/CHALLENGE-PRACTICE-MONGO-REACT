import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [query, setQuery] = useState("");
  const [error, setError] = useState("");

  const getData = async () => {
    try {
      const response = await fetch(
        `http://localhost:3001/api/users?q=${query}`
      );
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    getData();
  }, [query]);

  return (
    <UserContext.Provider
      value={{ users, setQuery, getData, error, setError, setUsers }}
    >
      {children}
    </UserContext.Provider>
  );
};

UserProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
