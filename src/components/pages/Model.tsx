import React from 'react';
import {useParams} from 'react-router-dom';
import {adidasArr} from './data';
import s from '../Site.module.css';

export function Model() {
  let params = useParams()
  let product = adidasArr.find(el => el.id === (Number(params.id)))
  return (
    <div className={s.card}>
      {product
          ? <>
            <h1>{(product && product.model)}</h1>
            <h3>{product && product.collection}</h3>
            <img src={product && product.picture} alt={product && product.model}/>
            <div>{product && `PRICE: ${product.price}`}</div>
          </>
          : <h2>Извинете, товар закончился :(</h2>}
    </div>
  );
};

