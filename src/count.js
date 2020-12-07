import React, {useState} from 'react'
import {Message} from './Message';

function Counter(){
    let [count, setCount] = useState(0);
    return(
        <div>
            <Message setCounter= {count}/>
            <input></input>
            <button onClick= {()=> setCount (count += parseInt(prompt('enter number')))}>Update Counter</button>
        </div>
    );
}
export default Counter;