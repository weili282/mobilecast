import React, { createContext, useState, useEffect } from "react";
import { useAuthConnect } from "@ionic-enterprise/auth-react";
// create context
const UserContext = createContext();

const UserContextProvider = ({ children }) => {
  // the value that will be given to the context
  const [user, setUser] = useState(null);
  const {  getIdToken } = useAuthConnect();
  // fetch a user from a fake backend API
  useEffect(() => {
    const fetchUser = () => {
      getIdToken().then((result)=>{
       // console.log(result)
        setUser(result)
      })
      // this would usually be your own backend, or localStorage
      // for example
      //
    };

    fetchUser();
  }, []);

  return (
    // the Provider gives access to the context to its children
    <UserContext.Provider value={user}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserContextProvider };