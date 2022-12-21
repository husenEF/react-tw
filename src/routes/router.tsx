import { Component, FC, lazy, Suspense } from 'react';
import {
  createBrowserRouter,
  Navigate,
  useLocation,
  useParams,
} from 'react-router-dom';

import useAuth from '../context/authContext';
import { GlobalLayout } from './Layout';

const Loadable = (Component: FC) => (props: JSX.IntrinsicAttributes) =>
  (
    <Suspense fallback={<p>Loading ....</p>}>
      <Component {...props} />
    </Suspense>
  );

const Layout = Loadable(lazy(() => import('./Layout')));
const DashboardPage = Loadable(lazy(() => import('../pages/Dashboard')));
const Welcomepage = Loadable(lazy(() => import('../pages/Welcome')));
const ContactPage = Loadable(lazy(() => import('../pages/Contact')));
const ErrorPage = Loadable(lazy(() => import('../pages/ErrorPage')));
const SigninPage = Loadable(lazy(() => import('../pages/Signin')));
const SignUppage = Loadable(lazy(() => import('../pages/Signup')));

interface PropType {
  component: React.FC;
}

const PrivateRoute: FC<PropType> = ({ component: Component }) => {
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

const router = createBrowserRouter([
  {
    path: '/',
    element: <GlobalLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '',
        element: <GlobalRoute component={Welcomepage} />,
      },
      {
        path: 'login',
        element: <GlobalRoute component={SigninPage} />,
      },
      {
        path: 'signup',
        element: <GlobalRoute component={SignUppage} />,
      },
      {
        path: 'dashboard',
        element: <Layout />,
        children: [
          {
            path: '',
            element: <PrivateRoute component={DashboardPage} />,
          },
        ],
      },
    ],
  },
]);

export default router;
