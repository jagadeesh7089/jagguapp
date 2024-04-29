import React, { useState } from "react";
function Counter(){
var [count,setCount]=useState(0)
function inc(){
     setCount(count+1)
}
function dec(){
      if(count>0){
        setCount(count-1)
      }
}
    return <div>

           <h1>Counter:{count}</h1>
           <button onClick={()=>{inc()}}>Increment</button>
           <button onClick={()=>{dec()}}>Decrement</button>

        </div>
}
export default Counter