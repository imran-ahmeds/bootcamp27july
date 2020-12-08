import React, {useState} from 'react'
import {Message} from './Message';
import './App.css';
function Counter(){
    let [count, setCount] = useState(0);
    return(
        <div className='box'>
            <Message setCounter= {count}/>
            <input type="number" value = {count} className="add"></input>
            <input type="button" value="submit" 
            onClick= {()=> setCount (count += parseInt(count))}/>
                
        </div>
    );
}
export default Counter;