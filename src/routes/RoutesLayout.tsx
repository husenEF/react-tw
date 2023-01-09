import React, { FC } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

import useAuth from '../context/authContext';

interface PropType {
  component: React.FC;
}

export const PrivateRoute: FC<PropType> = ({ component: Component }) => {
  const { loggedIn } = useAuth();
  const locations = useLocation();

  if (loggedIn) return <Component />;
  return (
    <Navigate
      to="/login"
      state={{ from: locations?.pathname ?? '/?to=home' }}
    />
  );
};

const GlobalRoute: FC<PropType> = ({ component: Component }) => {
  const auth = useAuth();
  const location = useLocation();

  if (location?.pathname === '/login' && auth?.loggedIn)
    return <Navigate to={location?.state?.from ?? '/'} />;

  return <Component />;
};

export default GlobalRoute;
