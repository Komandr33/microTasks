import React from 'react';
import s from '../Site.module.css';
import {store} from '../../state/store';
import {Link} from 'react-router-dom';
import {PATH} from '../../routes/router';

export const Adidas = () => {
  return (
    <div>
      <h2> ADIDAS</h2>
      <div className={s.visual}>
        {store.adidas.map(el => <Link key={el.id} to={`${PATH.ADIDAS}/${el.id}`}>
          <img src={el.picture} alt={el.model}/>
        </Link>)}
      </div>
      <p>
        <p style={{textAlign: 'right'}}><a href="#bottom" style={{textDecoration: 'none', color: 'yellow'}}>вниз</a>
        </p>
        <p>What is Lorem Ipsum?
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
          standard
          dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type
          specimen book.
          It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially
          unchanged.
          It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more
          recently
          with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

          Why do we use it?
          It is a long established fact that a reader will be distracted by the readable content of a page when looking
          at
          its layout.
          The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to
          using
          'Content here,
          content here', making it look like readable English. Many desktop publishing packages and web page editors now
          use Lorem Ipsum
          as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their
          infancy.
          Various versions
          have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
        </p>
        <>
          {/*якорь*/}
          <p style={{textAlign: 'right'}}>
            <a id="bottom" href="#top" style={{textDecoration: 'none', color: 'yellow'}}>вверх</a></p>
        </>

      </p>
    </div>
  );
};

