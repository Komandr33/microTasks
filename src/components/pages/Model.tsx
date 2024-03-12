import React from 'react';
import {useParams} from 'react-router-dom';
import {adidasArr} from './data';


export function Model() {
  let params = useParams()
  return (
    <div>
      {adidasArr[Number(params.id)-1].model}
    </div>
  );
};

