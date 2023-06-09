import React from 'react';
import './App.css';
import {ButtonExample} from "./exampleAddComponents/ButtonExample";
import {UseStateExample} from "./exampleAddComponents/UseStateExample";
import {CarsMapExample, StudentsMapExample} from "./exampleAddComponents/MapExample";
import {students, topCars} from "./exampleAddComponents/AllData";
import {FilterExample} from "./exampleAddComponents/FilterExample";


function App() {
    return (
        <div>
            {/*<ButtonExample/>*/}
            {/*<UseStateExample/>*/}
            {/*<StudentsMapExample students={students}/>*/}
            {/*<CarsMapExample topCars={topCars}/>*/}
            <FilterExample/>
        </div>
    );
}

export default App;
