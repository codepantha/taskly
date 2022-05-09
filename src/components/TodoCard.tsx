import React, { useEffect, useState } from 'react';
import { Todo } from '../model';
import { AiFillEdit, AiFillDelete } from 'react-icons/ai';
import { MdDone } from 'react-icons/md';
import './styles.css';

type Props = {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

const TodoCard: React.FC<Props> = ({ todo, todos, setTodos }: Props) => {
  const [editedTask, setEditedTask] = useState<string>(todo.name);
  const [isEditing, setIsEditing] = useState<boolean>(false);

  useEffect(() => {
    setTodos(
      todos.map((t) => {
        if (t.id === todo.id) todo.name = editedTask;
        return t;
      })
    );
  }, [editedTask])

  const handleDone = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
      )
    );
  };

  const handleEdit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsEditing(false);
  };

  const handleChange = (e: React.FormEvent) => {
    const target = e.target as HTMLInputElement;
    setEditedTask(target.value);
  }

  const handleDelete = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <form className="todos__single" onSubmit={handleEdit}>
      {isEditing ? (
        <input
          onChange={handleChange}
          className={`todos__single--text ${todo.isCompleted ? 'dash' : ''}`}
          value={editedTask}
          autoFocus
        />
      ) : (
        <span
          className={`todos__single--text ${todo.isCompleted ? 'dash' : ''}`}
        >
          {todo.name}
        </span>
      )}

      <div>
        <button
          type="button"
          className="icon"
          onClick={() => setIsEditing(!isEditing)}
        >
          <AiFillEdit />
        </button>
        <button
          type="button"
          className="icon"
          onClick={() => handleDelete(todo.id)}
        >
          <AiFillDelete />
        </button>
        <button
          type="button"
          className="icon"
          onClick={() => handleDone(todo.id)}
        >
          <MdDone />
        </button>
      </div>
    </form>
  );
};

export default TodoCard;
