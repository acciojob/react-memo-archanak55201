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

           <div id="incr-cnt">
            <span id="calc">Count : {count} </span><button id="todo-0" onClick={()=>(setCount(count+1))}>New Todo</button>
           </div>


           <h1>React.memo</h1>
           <input id="skill-input" type="text" placeholder="todo task "  onChange={(e)=>(setInput(e.target.value))}/>
           <button id="skill-btn" onClick={()=>(
            setTodo([...todo,input])
           )}>
            Add Skill</button>
            <ul id="item-jumbotron">
            {todo && (todo.map((task)=>(
                <li>{task}</li>
            )))
            }
            </ul>
        </div>
    )
}


export default App;