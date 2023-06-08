import React from 'react';
import './App.css';
import {ButtonExample} from "./exampleAddComponents/ButtonExample";
import {UseStateExample} from "./exampleAddComponents/useStateExample";


function App() {
  return (
    <div className="App">
      <ButtonExample/>
        <UseStateExample/>
    </div>
  );
}

export default App;
