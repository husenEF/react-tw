import React, { FC, ReactNode, useContext, useState } from 'react';
import { redirect } from 'react-router-dom';

export interface IAuth {
  loggedIn: boolean;
  role: string;
  logIn: () => void;
  logOut: () => void;
}

export interface IProvider {
  children: ReactNode;
}

const defaultStae: IAuth = {
  loggedIn: false,
  role: '',
  logIn: () => {},
  logOut: () => {},
};

export const AuthContext = React.createContext<IAuth>(defaultStae);
AuthContext.displayName = 'AuthContext';

export const AuthProvider: FC<IProvider> = ({ children }) => {
  const [auth, setAuth] = useState({
    loggedIn: false,
    role: '',
  });

  const logIn = () => {
    setAuth((prevState) => ({
      ...prevState,
      loggedIn: true,
    }));
  };

  const logOut = () => {
    setAuth((prevState) => ({
      ...prevState,
      loggedIn: false,
    }));
  };

  return (
    <AuthContext.Provider
      // Here as value you need to pass the same interface as IAuth
      // You can also just pass setAuth and do whatever you want
      // from the children
      value={{
        ...auth,
        logIn,
        logOut,
      }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);
export default useAuth;
