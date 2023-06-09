import React from 'react';
import {v1} from "uuid";
import {FilterType} from "../exampleAddComponents/FilterExample";

type moneyType = {
    id: string
    banknote: string
    value: number
    number: string
}

type currentMoneyType = {
    currentMoney: moneyType[]
    onClickFilterHandler: (name: FilterType) => void
}

export function Filter(props: currentMoneyType) {

    return (
        <>
            <ul>
                {props.currentMoney.map(e => {
                    return <li key={v1()}>
                        <span>{e.banknote}</span>
                        <span>{e.value}</span>
                        <span>{e.number}</span>
                    </li>
                })}
            </ul>
            <div style={{margin: '35px'}}>
                <button onClick={() => props.onClickFilterHandler('All')}>ALL</button>
                <button onClick={() => props.onClickFilterHandler('USD')}>USD</button>
                <button onClick={() => props.onClickFilterHandler('RUB')}>RUB</button>
            </div>
        </>
    );
}