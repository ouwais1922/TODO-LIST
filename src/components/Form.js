import React from 'react'

const Form = ({input,todos,setInput,setTodos,setStatus}) => {

    const submitHandler = (e)=>{

        e.preventDefault();
       setTodos([
                ...todos,{id: Math.random()*1000,text:input,completed:false}
            ]);
        setInput('');
    }

    const inputHandler = (e)=>{

        console.log('hello');
        setInput(e.target.value);
    }

    const selectHandler = (e)=>{
      setStatus(e.target.value);
    }
    
  return (
     <form onSubmit={submitHandler}>
      <input type="text"  className="todo-input" value = {input} onChange={inputHandler}/>
      <button className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select name="todos" className="filter-todo" onChange={selectHandler}>
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  )
}

export default Form