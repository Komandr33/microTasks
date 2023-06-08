import React from 'react';
import {Button} from "../components/Button";

export function ButtonExample() {
    const Button1Foo = (subscriber: string) => {
        console.log(subscriber)
    }

    const Button2Foo = (sub: number) => {
        console.log(sub)
    }

    const Button3Foo = () => {
        console.log("i'm stupid button")
    }

    return (
        <div className={'App'}>
            <Button name={'MyYouTubeChanel-1'} callBack={() => Button1Foo('Sam')}/>
            <Button name={'MyYouTubeChanel-2'} callBack={() => Button2Foo(15)}/>
            <Button name={'MyYouTubeChanel-2'} callBack={Button3Foo}/>
        </div>
    );
}