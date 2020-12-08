import React, {useState} from 'react';
import {Message} from './Message';
import './count.css';
function Counter(){
    let [count, setCount] = useState(0);
    let [isMorning, setMorning] = useState(false);
    return(
        <div className={"box  $ {isMorning ? 'dayTime' :  '' }"} >
            
            <h1>Day time = {isMorning ? 'Morning' : 'Night'}</h1>
            <button 
            onClick= {()=> setMorning (!isMorning)}>
            Update Time
            </button>


            <Message setCounter= {count}/>
            
            <button 
            onClick = 
            {()=> setCount (count += 
            parseInt(prompt('Enter a number')))}>
            </button>
                
        </div>
    );
}
export default Counter;