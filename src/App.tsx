import React from 'react';
import './App.css';
import {ButtonExample} from "./exampleAddComponents/ButtonExample";
import {UseStateExample} from "./exampleAddComponents/UseStateExample";
import {CarsMapExample, StudentsMapExample} from "./exampleAddComponents/MapExample";
import {students, topCars} from "./exampleAddComponents/AllData";
import {Filter} from "./exampleAddComponents/Filter";


function App() {
    return (
        <div>
            {/*<ButtonExample/>*/}
            {/*<UseStateExample/>*/}
            {/*<StudentsMapExample students={students}/>*/}
            {/*<CarsMapExample topCars={topCars}/>*/}
            <Filter/>
        </div>
    );
}

export default App;
