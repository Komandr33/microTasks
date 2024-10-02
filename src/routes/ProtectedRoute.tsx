import * as React from 'react';
import {ReactComponentElement, useState} from 'react';
import {Navigate} from 'react-router-dom';
import {PATH} from './router';

type PropsType = {
  children: ReactComponentElement<any> // типизация для компонент React или ReactNode
};
export const ProtectedRoute: React.FC<PropsType> = ({children}) => {
  const [isLogged, setIsLogged] = useState(false)

  return isLogged ? children : <Navigate to={PATH.ERROR}/>
};

