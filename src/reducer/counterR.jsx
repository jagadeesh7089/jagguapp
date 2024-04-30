import React,{useReducer} from "react";
  function reducer(state,action){
    if(action.type==="inc"){
       return {count:state.count+1}
    }
    if(action.type==="dec"){
        if(state.count>0){ 
            return {count:state.count-1}
        }
    }
  }
function CounterR(){
   var [state,dispatch]=useReducer(reducer,{count:0})
   
    return (
        <div>
            <h1>CounterR:{state.count}</h1>
            <button onClick={()=>{dispatch({type:"inc"})}}>Increment</button>
            <button onClick={()=>{dispatch({type:"dec"})}}>Decrement</button>
        </div>
    )
}

 export default CounterR