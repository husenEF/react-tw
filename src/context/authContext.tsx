import { createContext, ReactNode, useContext, useState } from 'react';

export interface IAuthContextInterface {
  isLogin: boolean;
  token: string | null;
  idToken: string | null;
  expiresAt: number | null;
  handleAuthentication: () => void;
  login: () => void;
  logout: () => void;
}

export interface IAuthProvider {
  children: ReactNode;
}

export const authContextDefaults: IAuthContextInterface = {
  isLogin: false,
  expiresAt: null,
  token: null,
  idToken: null,
  handleAuthentication: () => null,
  login: () => null,
  logout: () => null,
};

export const AuthContext =
  createContext<IAuthContextInterface>(authContextDefaults);

export default function AuthProvider({ children }: IAuthProvider) {
  const [isLogin, setLogin] = useState<boolean>(false);

  const handleAuthentication = (): void => {};

  const handleLogin = (): null => {
    setLogin(true)
    return null;
  };

  const handleLogout = (): null => {
    return null;
  };

  const authValue: IAuthContextInterface = {
    isLogin,
    token: '',
    idToken: null,
    expiresAt: null,
    handleAuthentication,
    login: handleLogin,
    logout: handleLogout,
  };
  return (
    <AuthContext.Provider value={authValue}>{children}</AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
