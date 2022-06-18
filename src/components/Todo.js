import React from 'react'

const Todo = ({id,text,todos,setTodos,current}) => {

  const checkHandler = ()=>{

         setTodos(todos.map((element)=>{

          if(element.id === current.id)
          {
            return{
              ...element,completed: !element.completed
            };
          }
          return element;
      }));
  }

  const deleteHandler = ()=>{

      setTodos(todos.filter((i)=> i.id !== current.id));
  }


  return (
    <div className="todo" >
        
        <li className= {current.completed ? "completed": " "}>&nbsp;&nbsp;{text}</li>
        <button className='complete-btn' onClick={checkHandler}>
            <i className='fas fa-check'></i>
        </button>
        <button className='trash-btn' onClick={deleteHandler}>
            <i className='fas fa-trash'></i>
        </button>
    </div>
  )
}

export default Todo