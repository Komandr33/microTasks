import * as React from 'react';
import {useState} from 'react';

export const ProtectedPage = () => {
  const [pass, setPass] = useState('')
  const [passValue, setPassValue] = useState('')
  let password = 'admin'

  const onClickHandler = () => {
    setPassValue(pass)
    console.log(passValue)
  }
  return (
    <div>
      <div>
        <input type="password" onChange={e => setPass(e.currentTarget.value)}/>
        <button onClick={onClickHandler}>login</button>
      </div>
      {password === passValue ?
        <div>
          <h3>Protected Page</h3>
          <p>information for the admin</p>
        </div> :
        <div>INCORRECT PASSWORD</div>}
    </div>
  );
};