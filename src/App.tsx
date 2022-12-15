import { Suspense } from 'react';
import { RouterProvider } from 'react-router-dom';

import router from './routes/router';
const App = () => {
  return (
    <Suspense fallback={<p>Loading component...</p>}>
      <RouterProvider router={router} />;
    </Suspense>
  );
};

export default App;
