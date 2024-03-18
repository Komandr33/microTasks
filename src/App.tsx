import React from 'react';
import s from './components/Site.module.css';
import {NavLink, Outlet} from 'react-router-dom';


export const PATH = {
  ADIDAS: '/adidas',
  PUMA: '/puma',
  NIKE: '/nike',
  MODEL: '/model'
} as const

function App() {

  return (
    <div><button id="top" ></button> {/*якорь*/}
      <div className={s.header}><h1>HEADER</h1></div>
      <div className={s.body}>
        <div className={s.nav}>
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
        </div>
        <div className={s.content}>
          <Outlet/>

          {/*<Routes>*/}
          {/*  <Route path={'/'} element={<Navigate to={PATH.ADIDAS}/>}/>*/}
          {/*  <Route path={PATH.ADIDAS} element={<Adidas/>}/>*/}
          {/*  <Route path={PATH.PUMA} element={<Puma/>}/>*/}
          {/*  <Route path={PATH.NIKE} element={<Nike/>}/>*/}
          {/*  <Route path={`${PATH.ADIDAS}${PATH.MODEL}/:id`} element={<Model/>}/>*/}
          {/*  <Route path={'*'} element={<Error404/>}/>*/}
          {/*  /!*{вариант с вложенностью}*!/*/}
          {/*  /!*<Route path={`${PATH.ADIDAS}/*`} element={(*!/*/}
          {/*  /!*  <>*!/*/}
          {/*  /!*    <Adidas/>*!/*/}
          {/*  /!*    <Routes>*!/*/}
          {/*  /!*      <Route path={`${PATH.MODEL}/:id`} element={<Model/>}/>*!/*/}
          {/*  /!*    </Routes>*!/*/}
          {/*  /!*  </>*!/*/}
          {/*  /!*)}/>*!/*/}
          {/*</Routes>*/}
        </div>
      </div>
      <div className={s.footer}>site 2024</div>
    </div>
  );
}


export default App;
