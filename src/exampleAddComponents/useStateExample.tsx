import React from 'react';
import {useState} from "react";

export function UseStateExample() {
    let [a, setA] = useState(0);

    const onClickHandler = () => {
        setA(++a);
    }

    const onClickHandler_1 = () => {
        setA(a = 0);
        console.log(a)
    }

    return (
        <div className="App">
            <h1>{a}</h1>
            <button onClick={onClickHandler}>number</button>
            <button onClick={onClickHandler_1}>0</button>
        </div>
    );
}