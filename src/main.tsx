import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import GalleryRoute from 'routes/galleryRoute';
import GalleryViewRoute from 'routes/galleryViewRoute';
import LandingRoute from 'routes/landingRoute';

const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingRoute />
  },
  {
    path: '/gallery-view',
    element: <GalleryViewRoute />
  },
  {
    path: '/gallery',
    element: <GalleryRoute />
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
