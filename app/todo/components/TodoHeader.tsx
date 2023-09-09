import React from 'react'

export default function TodoHeader() {
  return (
    <div className='flex align-top justify-between h-[60px]'>
      <img src="todo-logo.svg" className='max-w-[109px] h-[20px] cursor-pointer' alt="Todo Logo" />
      <img src="theme-switch.svg" className='max-h-[20px] cursor-pointer' alt="Theme toggle button" />
    </div>
  )
}
