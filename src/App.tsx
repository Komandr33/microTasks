import React from 'react';
import styles from './components/Site.module.css';
import {Adidas} from './components/pages/Adidas';
import {Puma} from './components/pages/Puma';
import {Nike} from './components/pages/Nike';
import {Navigate, NavLink, Route, Routes} from 'react-router-dom';
import {Error404} from './components/pages/Error404';
import {Model} from './components/pages/Model';


export const PATH = {
  ADIDAS: '/adidas',
  PUMA: '/puma',
  NIKE: '/nike',
  MODEL: '/adidas/model'
} as const

function App() {

  return (
    <div>
      <div className={styles.header}><h1>HEADER</h1></div>
      <div className={styles.body}>
        <div className={styles.nav}>
          <div><NavLink to={PATH.ADIDAS}
                        className={({isActive}) => isActive ? styles.active : styles.customLink}>ADIDAS</NavLink></div>
          <div><NavLink to={PATH.PUMA}
                        className={({isActive}) => isActive ? styles.active : styles.customLink}>PUMA</NavLink></div>
          <div><NavLink to={PATH.NIKE}
                        className={({isActive}) => isActive ? styles.active : styles.customLink}>NIKE</NavLink></div>
        </div>
        <div className={styles.content}>
          <Routes>
            <Route path={'/'} element={<Navigate to={PATH.ADIDAS}/>}/>
            <Route path={PATH.ADIDAS} element={<Adidas/>}/>
            <Route path={PATH.PUMA} element={<Puma/>}/>
            <Route path={PATH.NIKE} element={<Nike/>}/>
            <Route path={`${PATH.MODEL}/:id`} element={<Model/>}/>
            <Route path={'*'} element={<Error404/>}/>
          </Routes>
        </div>
      </div>
      <div className={styles.footer}>site 2023</div>
    </div>
  );
}


export default App;
