import React, { useState } from 'react';
import "./App.css";
import List from './List';
import Data from './Data';


function App () {
    const [people,setPeople]=useState(Data)
   
    return (
        <>
        <main>
        <section className='container'>
        <h1>{people.length} Birthday Today</h1>
        <List people={people}/>
        <button onClick={()=>{setPeople([])}}> Clear All</button>
        </section>
        </main>

        </>
    )
}

export default App;

