import React, { useState } from 'react'

export const TodoForm = ({addTask}) => {
  const [value, setValue] = useState('');

const handleSubmit = (e) => {
  e.preventDefault();

  addTask(value);
  setValue('');

}

  return (
    <form className='TodoForm' onSubmit={handleSubmit}>
      <input type='text' className='todo-input' placeholder='What we are going to do today?' value={value} onChange={(e) => setValue(e.target.value)} />
      <button type='submit' className='todo-btn'>Add new task</button>
    </form>
  )
}
