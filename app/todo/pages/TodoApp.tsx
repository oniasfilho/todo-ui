'use client'

import React, { useState, useEffect } from 'react'
import { TodoType } from '@/types.d'
import { IDGenerator } from '@/app/util/IDGenerator';
import { useSelector } from 'react-redux';
import TodoHeader from '../components/TodoHeader'
import NewTodo from '../components/NewTodo'
import TodoList from '../components/TodoList'

export default function TodoApp() {
  const theme = useSelector((state: any) => state.theme.value);
  const [todos, setTodos] = useState<TodoType[]>([
    {
      id: IDGenerator.getNextID(),
      status: true,
      content: 'Complete online JavaScript course'
    },
    {
      id: IDGenerator.getNextID(),
      status: false,
      content: 'Jog around the park 3x'
    },
    {
      id: IDGenerator.getNextID(),
      status: false,
      content: '10 minutes meditation'
    },
    {
      id: IDGenerator.getNextID(),
      status: false,
      content: 'Read for 1 hour'
    },
    {
      id: IDGenerator.getNextID(),
      status: false,
      content: 'Pick up groceries'
    },
    {
      id: IDGenerator.getNextID(),
      status: false,
      content: 'Complete Todo App'
    }
  ]);

  const handleTodoSubmition = (newTodo: TodoType) => {
    setTodos(oldVal => {
      oldVal.push(newTodo)
      return [
        ...oldVal
      ]
    })
  }

  const handleTodoCheck = (id: number) => {
    setTodos(oldVal => {
      return oldVal.map(todo => {
        if (todo.id === id) {
          return { ...todo, status: !todo.status };
        }
        return todo;
      })
    })
  }

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme])

  return (
    <main className=' relative z-0 w-screen py-[48px] px-[24px] h-screen grid todo-outer-wrapper bg-[var(--main-background)] min-w-[321px] min-h-screen'>
      <div className='relative z-1 grid grid-rows-[60px_64px_384px_60px_auto] w-full h-full todo-inner-wrapper'>
        <TodoHeader />
        <NewTodo onCreateTodo={handleTodoSubmition} />
        <TodoList todos={todos} handleTodoCheck={handleTodoCheck} />
        <div className='text-center text-[var(--footer-text-color)] text-sm mt-10'>Drag and drop to reorder list</div>
      </div>
    </main>
  )
}
