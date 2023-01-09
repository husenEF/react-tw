import { FC, lazy, Suspense } from 'react';
import { createBrowserRouter, Navigate, useLocation } from 'react-router-dom';

import GlobalRoute, { PrivateRoute } from './RoutesLayout';
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
  {
    path: 'login',
    element: <GlobalRoute component={SigninPage} />,
  },
  {
    path: 'register',
    element: <GlobalRoute component={SignUppage} />,
  },
]);

export default router;
