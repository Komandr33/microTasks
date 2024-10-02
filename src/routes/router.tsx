import {createBrowserRouter, Navigate, RouteObject} from 'react-router-dom'
import {App} from '../App';
import {GlobalError} from '../globalError/GlobalError';
import {Adidas} from '../components/pages/Adidas';
import React from 'react';
import {Puma} from '../components/pages/Puma';
import {Nike} from '../components/pages/Nike';
import {Model} from '../components/pages/Model';
import {Prices} from '../components/pages/Prices';
import {Login} from '../ui/Login';
import {ProtectedPage} from '../components/pages/ProtectedPage';
import {ProtectedRoute} from './ProtectedRoute';

export const PATH = {
  ROOT: '/',
  ADIDAS: '/adidas',
  PUMA: '/puma',
  NIKE: '/nike',
  MODEL: `:model/:id`,
  PRICES: '/prices',
  PROTECTED: '/protected',
  LOGIN: '/login',
  ERROR: '/error'
} as const


const publicRouters: RouteObject[] = [
  {
    path: PATH.ROOT,
    element: <Navigate to={PATH.ADIDAS}/>
  },
  {
    path: PATH.ADIDAS,
    element: <Adidas/>
  },
  {
    path: PATH.MODEL,
    element: <Model/>
  },
  {
    path: PATH.PUMA,
    element: <Puma/>
  },
  {
    path: PATH.NIKE,
    element: <Nike/>
  },
  {
    path: PATH.PRICES,
    element: <Prices/>
  },
  {
    path: PATH.ERROR,
    element: <GlobalError/>
  },
  {
    path: PATH.LOGIN,
    element: <Login/>
  },

]
const privateRoutes: RouteObject[] = [{
  path: PATH.PROTECTED,
  element: <ProtectedPage/>
}]

export const router = createBrowserRouter(
  [
    {
      path: PATH.ROOT,
      element: <App/>,
      errorElement: <Navigate to={PATH.ERROR}/>,
      children: [
        ...publicRouters,
        {
          element: <ProtectedRoute/>,
          children: privateRoutes
        }
      ]
    }
  ]
)