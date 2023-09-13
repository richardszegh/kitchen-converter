import { createBrowserRouter } from 'react-router-dom';

import { RouteWrapper } from '@/components/utils/route-wrapper';

import { Home } from '@/pages/index';

const router = createBrowserRouter([
  {
    element: <RouteWrapper guard={null} layout={null} />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
    ],
  },
]);

export { router };
