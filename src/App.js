import React, { useEffect,useState } from 'react';
import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList'
function App() {
  
    const [input,setInput] = useState('');
    const [todos,setTodos] = useState([]);
    const [status,setStatus] = useState('all');
    const [filterTodo,setFilterTodo] = useState([]);

    function todoFiltered(){

        switch(status){

              case "completed":
                  setFilterTodo(todos.filter((todo)=>todo.completed === true ));
                  break;
              case "uncompleted": 
                  setFilterTodo(todos.filter((todo)=>todo.completed === false));
                  break;
              default:
                  setFilterTodo(todos);
                  break;
        }
      
    }

    useEffect(()=>{
      todoFiltered();
    },[todos,status]);

  return (
   <>
    <div className="App">
      <Form
        input =  {input}
        setInput = {setInput}
        todos = {todos}
        setTodos = {setTodos}
        setStatus = {setStatus}
      >
      </Form>
      <TodoList
        todos = {todos}
        setTodos = {setTodos}
        filterTodo = {filterTodo}
      ></TodoList>
    </div>
   </>
  );
}

export default App;
