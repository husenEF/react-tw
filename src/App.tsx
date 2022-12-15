import { Suspense } from 'react';
import { RouterProvider } from 'react-router-dom';
import AuthProvider from './context/authContext';

import router from './routes/router';
const App = () => {
  return (
    <AuthProvider>
      <Suspense fallback={<p>Loading component...</p>}>
        <RouterProvider router={router} />
      </Suspense>
    </AuthProvider>
  );
};

export default App;
