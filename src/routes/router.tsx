import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';

// import RootElement from './root';
const RootElement = lazy(() => import('./root'));
const ErrorPage = lazy(() => import('../pages/ErrorPage'));
const ContactPage = lazy(() => import('../pages/Contact'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootElement />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: 'contacts/:contactId',
        element: <ContactPage />,
      },
    ],
  },
]);

export default router;
