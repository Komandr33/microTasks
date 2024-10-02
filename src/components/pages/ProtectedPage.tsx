import * as React from 'react';

export const ProtectedPage = () => {
  const logOutHandler = () => {

  }
  return <div style={{textAlign: 'center'}}>
    <h3>Protected Page</h3>
    <p>information for the admin</p>
    <button onClick={logOutHandler}>Log Out</button>
  </div>
}