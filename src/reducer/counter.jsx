import React,{useState} from "react";

function Counter(){
    var[count,setCount]=useState(0)
    function inc(){
        setCount((prev)=>prev+1)
    }
    function dec(){
        setCount(prev=>prev-1)
    }
    return(
        <div>
            <h1>Counter:{count}</h1>
            <button onClick={()=>{inc()}}>Increment</button>
            <button onClick={()=>dec()}>Decrement</button>
        </div>
    )
}
export default Counter