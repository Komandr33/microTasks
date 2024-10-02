import React from 'react';
import s from './components/Site.module.css';
import {Link, NavLink, Outlet, useNavigate} from 'react-router-dom';
import {PATH} from './routes/router';
import {useWindowSize} from './halpers/useWindowSize';

export const App = () => {
  const size = useWindowSize()
  const navigate = useNavigate()

  const onClickBackHandler = () => {
    return navigate(-1)
  }

  return (
    <div>
      {/*якорь*/}
      <div  id="top" className={s.header}><h1>HEADER</h1></div>
      <div className={s.body}>
        {
          size >= 1000 // если ширина экрана >= 1000px, то покажи меню навигации, иначе пустую div
            ? <div className={s.nav}>
              <div><NavLink to={PATH.ADIDAS}
                            className={({isActive}) => isActive ? s.active : s.customLink}>ADIDAS</NavLink></div>
              {/*ещё вариант стилизации*/}
              {/* <div><NavLink to={PATH.ADIDAS}*/}
              {/*              style={({isActive} ) => { /!*деструктуризация входящего параметра*!/*/}
              {/*                return {color: isActive ? 'lightblue' : 'green'}*/}
              {/*              }}>ADIDAS</NavLink></div>*/}
              <div><NavLink to={PATH.PUMA}
                            className={({isActive}) => isActive ? s.active : s.customLink}>PUMA</NavLink></div>
              <div><NavLink to={PATH.NIKE}
                            className={({isActive}) => isActive ? s.active : s.customLink}>NIKE</NavLink></div>
              <div><NavLink to={PATH.PROTECTED}
                            className={({isActive}) => isActive ? s.active : s.customLink}>PROTECTED PAGE</NavLink></div>
              <div><NavLink to={PATH.PRICES}
                            className={({isActive}) => isActive ? s.active : s.customLink}>PRICES</NavLink></div>
            </div>
            : <div></div>
        }
        <div className={s.content}>
          <div className={s.HorizontalNavigation}>
            <Link to={PATH.ADIDAS} className={s.LinkLikeButton}>ГЛАВНАЯ СТРАНИЦА(ADIDAS)</Link>
            <button onClick={onClickBackHandler} className={s.ButtonLikeLink}>НАЗАД</button>
          </div>
          <Outlet/>
          {/*<Routes>
            <Route path={'/'} element={<Navigate to={PATH.ADIDAS}/>}/>
            <Route path={PATH.ADIDAS} element={<Adidas/>}/>
            <Route path={PATH.PUMA} element={<Puma/>}/>
            <Route path={PATH.NIKE} element={<Nike/>}/>
            <Route path={`${PATH.ADIDAS}${PATH.MODEL}/:id`} element={<Model/>}/>
            <Route path={'*'} element={<GlobalError/>}/>

            {вариант с вложенностью}
            <Route path={`${PATH.ADIDAS}/*`} element={(
            <>
              <Adidas/>
              <Routes>
                <Route path={`${PATH.MODEL}/:id`} element={<Model/>}/>
              </Routes>
            </>
            )}/>
          </Routes>*/}
        </div>
      </div>
      <div className={s.footer}>site 2024</div>
    </div>
  );
}
