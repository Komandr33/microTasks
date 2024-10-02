import * as React from 'react';
import {KeyboardEvent, useState} from 'react';

export const Login = () => {
  const [isLogged, setIsLogged] = useState(true)
  const [pass, setPass] = useState('')
  const [passValue, setPassValue] = useState('')
  let password = 'admin'

  const onClickHandler = () => {
    setPassValue(pass)
  }

  const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.charCode === 13) {
      setPassValue(pass);
    }
  }

  return <>

    <div style={{textAlign: 'center', marginTop: 50}}>
      <input type="password" onChange={e => setPass(e.currentTarget.value)} onKeyPress={onKeyPressHandler}/>
      <button onClick={onClickHandler}>login</button>
    </div>

  </>
}