import React from 'react';
import {Link, useLocation, useParams} from 'react-router-dom';
import {store, storeType} from './data';
import s from '../Site.module.css';
import {PATH} from '../../routes/router';

export function Model() {
  // const params = useParams() // предоставляет доступ к параметрам маршрута (возвращает в виде объекта)
  const {model, id} = useParams()
  const locale = useLocation() //предоставляет доступ к объекту location, который содержит инфу о текущем URL

  let product = model ? (store as storeType)[model].find(el => el.id === id) : null
  // let product = null

  // if (model === 'puma') {
  //   product = store.puma.find(el => el.id === id)
  // }
  // if ((model === 'adidas')) {
  //   product = store.adidas.find(el => el.id === id)
  // }

  // console.log(`${model} ${id}`)
  return (
    <div className={s.card}>
      {product
        ? <>
          <h1>{(product && product.model)}</h1>
          <h3>{product && product.collection}</h3>
          <img src={product && product.picture} alt={product && product.model}/>
          <div>{product && `PRICE: ${product.price}`}</div>
        </>
        : <h2>Извините, товар закончился :(</h2>}

      {locale.pathname === `${PATH.ADIDAS}${PATH.MODEL}/3` &&  //сравниваю путь в адр.строке с последней карточкой
          <>
              <div style={{margin: '30px'}}>Можем вам посоветовать ещё перейти в раздел NIKE</div>
              <Link to={PATH.NIKE} className={s.LinkLikeButton}>Перейти в NIKE</Link>
          </>}
    </div>
  );
}

