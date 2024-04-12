import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Root from './components/Root/Root';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import UpdateProfile from './components/UpdateProfile/UpdateProfile';
import AuthProviders from './providers/AuthProviders';
import PrivateRoutes from './components/Routes/PrivateRoutes';
import UserProfile from './components/UserProfile/UserProfile';
import ViewProperty from './components/ViewProperty/ViewProperty';
import ClientReview from './components/ClientReview/ClientReview';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/update-profile",
        element: <PrivateRoutes><UpdateProfile></UpdateProfile></PrivateRoutes>,
      },
      {
        path: "/user-profile",
        element: <PrivateRoutes><UserProfile></UserProfile></PrivateRoutes>
      },
      {

        path : "/view-property/:id",
        element: <PrivateRoutes><ViewProperty></ViewProperty></PrivateRoutes>,
        loader : () => fetch('../public/data.json'),
      },
      {
        path: "client-review",
        element: <PrivateRoutes><ClientReview></ClientReview></PrivateRoutes>,
      }
    ],
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProviders>
      <RouterProvider router={router} />
    </AuthProviders>
  </React.StrictMode>,
)
