import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import AlbumViewRoute from 'routes/albumViewRoute';
import GalleryRoute from 'routes/galleryRoute';
import LandingRoute from 'routes/landingRoute';

const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingRoute />
  },
  {
    path: '/albums',
    element: <AlbumViewRoute />
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
