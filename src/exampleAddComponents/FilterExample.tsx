import React, {useState} from 'react';
import {v1} from "uuid";
import {Filter} from "../components/Filter";

export type FilterType = 'All' | 'USD' | 'RUB'


export function FilterExample() {
    const [money, setMoney] = useState([
        {id: v1(), banknote: 'USD', value: 100, number: ' a1234567890'},
        {id: v1(), banknote: 'USD', value: 50, number: ' z1234567890'},
        {id: v1(), banknote: 'RUB', value: 100, number: ' w1234567890'},
        {id: v1(), banknote: 'USD', value: 100, number: ' e1234567890'},
        {id: v1(), banknote: 'USD', value: 50, number: ' c1234567890'},
        {id: v1(), banknote: 'RUB', value: 100, number: ' r1234567890'},
        {id: v1(), banknote: 'USD', value: 50, number: ' x1234567890'},
        {id: v1(), banknote: 'RUB', value: 50, number: ' v1234567890'},
    ]);

    let currentMoney = money;

    const [filter, setFilter] = useState<FilterType>('All');
    if (filter === 'USD') {
        currentMoney = money.filter(e => e.banknote === 'USD');
    }
    if (filter === 'RUB') {
        currentMoney = money.filter(e => e.banknote === 'RUB');
    }

    function onClickFilterHandler(name: FilterType) {
        setFilter(name)
    }

    return (
        <>
            <Filter currentMoney={currentMoney} onClickFilterHandler={onClickFilterHandler}/>
            {/*<ul>*/}
            {/*    {currentMoney.map(e => {*/}
            {/*        return <li key={v1()}>*/}
            {/*            <span>{e.banknote}</span>*/}
            {/*            <span>{e.value}</span>*/}
            {/*            <span>{e.number}</span>*/}
            {/*        </li>*/}
            {/*    })}*/}
            {/*</ul>*/}
            {/*<div style={{margin: '35px'}}>*/}
            {/*    <button onClick={() => onClickFilterHandler('All')}>ALL</button>*/}
            {/*    <button onClick={() => onClickFilterHandler('USD')}>USD</button>*/}
            {/*    <button onClick={() => onClickFilterHandler('RUB')}>RUB</button>*/}
            {/*</div>*/}
        </>
    );
}
