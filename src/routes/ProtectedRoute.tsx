import * as React from 'react';
import {ReactComponentElement, useState} from 'react';
import {Navigate, Outlet} from 'react-router-dom';
import {PATH} from './router';


export const ProtectedRoute = () => {
  const [isLogged, setIsLogged] = useState(false)

  return isLogged ? <Outlet/> : <Navigate to={PATH.LOGIN}/>
};

