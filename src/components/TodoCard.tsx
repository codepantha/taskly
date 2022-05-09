import React from 'react'
import { Todo } from '../model'
import { AiFillEdit, AiFillDelete } from 'react-icons/ai'
import { MdDone } from 'react-icons/md';
import './styles.css';

type Props = {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoCard: React.FC<Props> = ({ todo, todos, setTodos }: Props) => {
  return (
    <form className="todos__single">
      <span className="todos__single--text">{todo.name}</span>

      <div>
        <button type="button" className="icon">
          <AiFillEdit />
        </button>
        <button type="button" className="icon">
          <AiFillDelete />
        </button>
        <button type="button" className="icon">
          <MdDone />
        </button>
      </div>
    </form>
  )
}

export default TodoCard