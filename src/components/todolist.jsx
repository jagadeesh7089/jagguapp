import React, { useState } from "react";
import { useRef } from "react";
function Todos() {
    var [todos, setTodos] = useState([])

    var iref = useRef()
    function additem() {
        let obj = {
            "task": iref.current.value,
            "status": false
        }
        setTodos([...todos, obj])
        iref.current.value = ""
    }

    const doneFn=(i)=>{

    }

    //   console.log(todos);
    return <div>
        <input type="text" ref={iref} id="d1"></input>
        <button onClick={() => { additem() }}>Add list</button>
        {
            todos.map((s, i) => {
                return <li key={i}>
                    <span>
                        {s.task}
                    </span>
                    {!s.status && <>
                     <button onClick={()=>{}}>Done</button>
                        <button onClick={()=>{}}>Edit</button>
                    </>}
                    {s.status && <>
                        <button onClick={()=>{}}>Undo</button>
                        <button onClick={()=>{}}>Delete</button>
                    </>}
                </li>
            })
        }
    </div>


}
export default Todos