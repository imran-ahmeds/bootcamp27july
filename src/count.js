import React, {useState} from 'react'

function Counter(){
    let [count, setCount] = useState(0);
    return(
        <div>
            <h3>The counter in now set to: {count}</h3>
            <button onClick= {()=> setCount (++count)}>Update Counter</button>
        </div>
    );
}
export default Counter;