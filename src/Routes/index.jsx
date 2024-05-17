import React from 'react';
import { useRoutes } from 'react-router-dom';
import DefaultLayout from '../Layouts/DefaultLayout';
import Subjects from '../Pages/Subjects';
import Login from '../Pages/Auth/Login';
import Register from '../Pages/Auth/Register';
import Topic from '../Pages/Topic';
import Topics from '../Pages/Topics';

function CustomRoutes() {
  const routes = useRoutes([
    {
      path: '/',
      element: <DefaultLayout />,
      children: [
        {path: "/login", element: <Login/>},
        {path: "/register", element: <Register/>},
        {path: "/", element: <Subjects/>},

        {path: '/topic/:topic', element: <Topic/>},
        {path: '/topics/:topic', element: <Topics/>}
      ]
    },
  ]);
  return routes;
}

export default CustomRoutes;