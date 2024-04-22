import * as React from 'react';
import {ReactComponentElement, useState} from 'react';
import {Navigate} from 'react-router-dom';
import {PATH} from './router';
import {Simulate} from 'react-dom/test-utils';
import input = Simulate.input;

type PropsType = {
  children: ReactComponentElement<any> // типизация для компонент React
};
export const ProtectedRoute: React.FC<PropsType> = ({children}) => {


  const logged = true
  return(

  logged ? children : <Navigate to={PATH.ERROR}/>
)
  ;
};