import React from 'react';
import './MapExample.css'

type StudentsType = {
    id: number
    name: string
    age: number
}

type MapExampleType = {
    students: StudentsType[]
}

type TypeOfCar = {
    manufacturer: string
    model: string
}

type TopCarsType = {
    topCars: TypeOfCar[]
}

export function StudentsMapExample(props: MapExampleType) {

    return (
        <ul>
            {props.students.map(e => {
                return <li key={e.id}>{`${e.name} Age: ${e.age} `}</li>
            })}
        </ul>

    );
}

// HOMEWORK //

export function CarsMapExample(props: TopCarsType) {

    return (
        <table>
            <tbody>
            <tr>
                <th scope="col">Id number</th>
                <th scope="col">Stamp</th>
                <th scope="col">Model</th>
            </tr>
            {props.topCars.map((e, i) => {
                return <tr key={i}>
                    <td>{i + 1}</td>
                    <td>{e.manufacturer}</td>
                    <td>{e.model}</td>
                </tr>
            })}
            </tbody>
            <caption>Premium Cars</caption>
        </table>
    );
}
