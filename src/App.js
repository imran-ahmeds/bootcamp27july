import React from 'react'
import './App.css';
import Dinner from './dinner';
import Have from './components';

function App() {
  
  return (
    <div className='App'>
    <Dinner dishName="Nihari"sweetName="Doodh Dulari"/>
     <Have/>
    </div>
  );
}

export default App;
