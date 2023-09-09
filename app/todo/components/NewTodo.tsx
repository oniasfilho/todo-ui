import React from 'react'

export default function NewTodo() {
  return (
    <div className='shadow-lg bg-[var(--todo-background)] rounded-[5px] h-[48px] text-[var(--main-text-color)] text-xs
                    flex items-center px-5 gap-3'>
      <input type='checkbox' />
      Create a new todo...
    </div>
  )
}
