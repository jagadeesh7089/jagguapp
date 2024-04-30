import React, { useReducer } from "react";
function reducer(state,action){
    if(action.type==="AddTodo"){
       return { 
        person:[...state.person,state.newtodo],
        newtodo:""
      }
      
      
    } 
    if(action.type==="updatetodo"){
        return {
            ...state,
            newtodo:action.payload
        }
       
    }
}
function TodolistR(){
    var[state,dispatch]=useReducer(reducer,{
      person:["jagadeesh","lakshman","suribabu","Anil"],
      newtodo:""
    })
    return (
        <div>
             <input type="text" id="d1" value={state.newtodo} onChange={(e)=>{dispatch({type:"updatetodo",payload:e.target.value})}}/>
             <button onClick={()=>{dispatch({type:"AddTodo"})}}>Add Todo</button>
            <ul>
              {
               state.person.map((s)=>{
                 return <li>{s}</li>   
               })  
             }
           </ul>
        </div>
    )
}
export default TodolistR