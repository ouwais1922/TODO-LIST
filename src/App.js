import React, { useEffect,useState } from 'react';
import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList'
function App() {
  
    const [input,setInput] = useState('');
    const [todos,setTodos] = useState([]);


  return (
   <>
    <div className="App">
      <Form
        input =  {input}
        setInput = {setInput}
        todos = {todos}
        setTodos = {setTodos}
      >
      </Form>
      <TodoList
        todos = {todos}
        setTodos = {setTodos}
      ></TodoList>
    </div>
   </>
  );
}

export default App;
