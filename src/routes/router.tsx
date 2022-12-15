import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';

// import RootElement from './root';
const RootElement = lazy(() => import('./root'));
const LayoutElement = lazy(() => import('./Layout'));
const WelcomePage = lazy(() => import('../pages/Welcome'));
const ErrorPage = lazy(() => import('../pages/ErrorPage'));
const ContactPage = lazy(() => import('../pages/Contact'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <LayoutElement />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '',
        element: <WelcomePage />,
      },
      {
        path: 'contacts/:contactId',
        element: <ContactPage />,
      },
    ],
  },
]);

export default router;
