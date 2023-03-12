import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from './screens/Home';
import NotFound from './screens/NotFound';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/home',
    element: <Home />,
  },
  {
    path: '/home',
    element: <Home />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
]);

export default function App() {
  return (
    <div className='flex items-center justify-center h-screen w-screen'>
      <div className='h-screen w-screen'>
        <RouterProvider router={router} />
      </div>
    </div>
  );
};
