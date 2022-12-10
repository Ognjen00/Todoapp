import React,{useState,useEffect} from 'react';
import './App.css';

import Form from './components/Form';
import TodoList from './components/TodoList';



function App() {
  
  const [inputText,setInputText]= useState("");
  const [todos,setTodos] = useState([]);
  const [status,setStatus] = useState('all');
  const [filterdTodos,setFilterdTodos] = useState([]);
  // useEffect
  useEffect(() => {
    const filterHandler = () => {
      switch(status){
        case 'completed':
          setFilterdTodos(todos.filter(todo => todo.completed === true))
          break;
          case 'uncompleted' :
            setFilterdTodos(todos.filter(todo => todo.completed === false))
            break;
            default:
              setFilterdTodos(todos);
              break;
      }
    }
    filterHandler();
  },[todos,status ]); 
  //function
  
  return (
      <div className="App">
        <header>
            <h1> Todo List</h1>
        </header>
        <Form   
        inputText={inputText}
        setTodos={setTodos}
        todos={todos} 
        setInputText={setInputText}
        setStatus={setStatus}
        
        />
       
        <TodoList 
        setTodos={setTodos}
        todos={todos}
        filterdTodos={filterdTodos}
        />
      </div>
      
  );
}

export default App;