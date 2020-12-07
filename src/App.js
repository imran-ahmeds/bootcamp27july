import React from 'react'
import './App.css';
import Dinner from './dinner';


function App() {
  return (
    <div className='App'>
    <Dinner dishName="Nihari"sweetName="Doodh Dulari"/>
    <Dinner dishName="Biryani" sweetName="Kheer"/>
    <Dinner dishName="Korma" drinkName="Marinda"/>
    
    </div>
  );
}

export default App;
