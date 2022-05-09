import React from 'react';
import './styles.css';

const InputField = () => {
  return (
    <form className="input">
      <input type="text" name="task" placeholder="Enter a task" className="input__box" />
      <button type="submit" className="input__submit">Go</button>
    </form>
  )
}

export default InputField