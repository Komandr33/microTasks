
import * as React from 'react';
import {ReactComponentElement} from 'react';
import {Navigate} from 'react-router-dom';
import {PATH} from './router';

type PropsType = {
  children: ReactComponentElement<any> // типизация для компонент React
};
export const ProtectedRoute: React.FC<PropsType> = ({children}) => {
  const logged = false
  return (
    logged ? children : <Navigate to={PATH.ERROR}/>
  );
};