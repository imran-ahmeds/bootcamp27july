import React from 'react'
import './App.css';
import Dinner from './dinner';
import Counter from './count';

function App() {
  return (
    <div className='App'>
    <Dinner dishName="Nihari"sweetName="Doodh Dulari"/>
    <Dinner dishName="Biryani" sweetName="Kheer"/>
    <Dinner dishName="Korma" drinkName="Marinda"/>
    <Counter />
    </div>
  );
}

export default App;
