{/* <p>Now I can render any React component on any DOM node I want using ReactDOM.render</p> */}

import React, { useState } from "react";

const App = ()=>{
    const [newTodo,setNewTodo] = useState('');
    const [count,setCount] = useState(0);
    const [input,setInput] = useState('');
    const [todo,setTodo] = useState([]);
    console.log(todo);
    return(
        <div id="main">
           <h1>My todos</h1>
           <p>{newTodo}</p>
           <button id="add-todo-btn" onClick={()=>(
            setNewTodo('New Todo')
           )}>Add Todo</button>

           <div>
            Count : {count} <button id="incr-cnt" onClick={()=>(setCount(count+1))}>+</button>
           </div>

           <h1>React.memo</h1>
           <input type="text" placeholder="todo task "  onChange={(e)=>(setInput(e.target.value))}/>
           <button id="skill-input" onClick={()=>(
            setTodo([...todo,input])
           )}>
            Add Skill</button>
            <ul>
            {todo && (todo.map((task)=>(
                <li>{task}</li>
            )))
            }
            </ul>
        </div>
    )
}
export default App;