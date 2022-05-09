import React, { useState } from 'react';
import './App.css';
import InputField from './components/InputField';
import { Todo } from './model';

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>('');
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    if (todo) {
      setTodos([...todos, { id: Date.now(), name: todo, isCompleted: false }])
      setTodo('');
    }
  }

  return <div className="App">
    <h1 className="heading">Taskly</h1>
    <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
    { todos.map(todo => <p>{todo.name}</p>)}
  </div>;
}

export default App;
