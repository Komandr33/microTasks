import {createBrowserRouter} from 'react-router-dom'
import App from '../App';
import {Error404} from '../components/pages/Error404';
import {Adidas} from '../components/pages/Adidas';
import React from 'react';
import {Puma} from '../components/pages/Puma';
import {Nike} from '../components/pages/Nike';
import {Model} from '../components/pages/Model';

export const PATH = {
  ADIDAS: '/adidas',
  PUMA: '/puma',
  NIKE: '/nike',
  MODEL: '/model'
} as const

export const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <App/>,
      errorElement: <Error404/>,
      children: [
        {
          path: PATH.ADIDAS,
          element: <Adidas/>
        },
        {
          path: `${PATH.ADIDAS}${PATH.MODEL}/:id`,
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
      ]
    }
  ]
)