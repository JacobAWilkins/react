import {useState} from 'react';
import uuid from 'react-uuid'; // npm install --save react-uuid
import Todos from './Components/Todos'

import './App.css';

function App() {

  const [todos, updateTodos] = useState([
    {
      id: '111',
      title: "Complete exercise 1",
      isChecked: true
    },
    {
      id: '222',
      title: "Complete exercise 2",
      isChecked: false
    }
  ]);
  
  const [input, updateInput] = useState('');
  const handleInputChange = e => updateInput(e.target.value);

  function createTodo() {
    if (input) {
      updateTodos([...todos,
        {
          id: uuid(),
          title: input,
          isChecked: false
        }]);
      updateInput('');
    }
  }

  function deleteTodo(id) {
    const update = todos.filter(todo => todo.id !== id);
    updateTodos([...update]);
  }

  function toggleCheck(id) {
    const update = todos.map(todo => {
      return todo.id === id ? {...todo, isChecked: !todo.isChecked} : todo;
    })
    updateTodos([...update]);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>React To-Do List</h1>
        <div className="input-group">
          <input 
            value={input}
            onChange={handleInputChange}
            type="text"
            placeholder="New Task.."
          />
          <button
            onClick={createTodo}>
              Add New Task
          </button>
        </div>
        <br/>
        <Todos
          todos={todos}
          toggleCheck={toggleCheck}
          deleteTodo={deleteTodo}
        />
    </header>
    </div>
  );
}

export default App;
