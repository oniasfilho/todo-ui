import React from 'react'
import TodoHeader from './components/TodoHeader'
import NewTodo from './components/NewTodo'
import TodoList from './components/TodoList'
import Filter from './components/Filter'

export default function Todo() {
  return (
    <main className=' relative z-0 w-screen py-[48px] px-[24px] h-screen grid todo-outer-wrapper bg-[#171823] min-w-[321px] min-h-screen'>
      <div className='relative z-1 grid grid-rows-[60px_64px_384px_60px_auto] w-full h-full todo-inner-wrapper'>
        <TodoHeader />
        <NewTodo />
        <TodoList />
        <Filter />
        <div className='text-center text-[var(--footer-text-color)] text-sm mt-10'>Drag and drop to reorder list</div>
      </div>
    </main>
  )
}
