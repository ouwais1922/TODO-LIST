import React from 'react'
import Todo from './Todo'
const TodoList = ({todos,setTodos}) => {
  return (
    <div className="todo-container">
      <ul className="todo-list">
         {
                todos.map(p=>(
                <Todo 
                    key={p.id}
                    text={p.text}
                    current={p}
                    todos ={todos}
                    setTodos ={setTodos}
                >
                </Todo>
           ))
            }
      </ul>
    </div>
  )
}

export default TodoList