import {createBrowserRouter, Navigate} from 'react-router-dom'
import {App} from '../App';
import {Error404} from '../components/pages/Error404';
import {Adidas} from '../components/pages/Adidas';
import React from 'react';
import {Puma} from '../components/pages/Puma';
import {Nike} from '../components/pages/Nike';
import {Model} from '../components/pages/Model';
import {ProtectedPage} from '../components/pages/ProtectedPage';
import {ProtectedRoute} from './ProtectedRoute';
import {Prices} from '../components/pages/Prices';

export const PATH = {
  ROOT: '/',
  ADIDAS: '/adidas',
  PUMA: '/puma',
  NIKE: '/nike',
  MODEL: `:model/:id`,
  PRICES: '/prices',
  PROTECTED: '/protected',
  ERROR: '/error'
} as const

export const router = createBrowserRouter(
  [
    {
      path: PATH.ROOT,
      element: <App/>,
      errorElement: <Error404/>,
      children: [
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
          element: <Error404/>
        },
        {
          path: PATH.PROTECTED,
          element: (
            <ProtectedRoute>
              <ProtectedPage/>
            </ProtectedRoute>
          )
        },
      ]
    }
  ]
)