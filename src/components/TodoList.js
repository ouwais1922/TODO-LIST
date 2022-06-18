import React from 'react'
import Todo from './Todo'
const TodoList = ({todos,setTodos,filterTodo}) => {
  return (
    <div className="todo-container">
      <ul className="todo-list">
         {
                filterTodo.map(p=>(
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