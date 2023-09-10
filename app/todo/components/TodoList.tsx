'use client'

import React, { useState } from 'react'
import Todo from '../components/Todo'
import Filter from './Filter';
import { TodoType, FilterType } from '@/types.d';

type Props = {
  todos: TodoType[],
  handleTodoCheck: (id: number) => void,
  handleTodoDelete: (id: number) => void,
  handleClearCompleted: () => void,
}

export default function TodoList({ todos, handleTodoCheck, handleTodoDelete, handleClearCompleted }: Props) {
  const [currentFilter, setCurrentFilter] = useState(FilterType.ALL);
  const handleFilterSelection = (filter: FilterType) => {
    setCurrentFilter(filter);
  }

  const getFilteredTodos = () => {
    switch (currentFilter) {
      case FilterType.ACTIVE:
        return todos.filter(todo => !todo.status);
      case FilterType.COMPLETED:
        return todos.filter(todo => todo.status);
      case FilterType.ALL:
      default:
        return todos;
    }
  }

  return (
    <>
      <div >
        <div className='max-h-[334px] overflow-scroll overflow-x-hidden'>
          {getFilteredTodos().map((each, index, filteredTodos) => (
            <Todo
              key={each.id}
              item={each}
              isLast={index === filteredTodos.length - 1}
              isFirst={index === 0}
              checkTodo={handleTodoCheck}
              deleteTodo={handleTodoDelete}
              clearCompleted={handleClearCompleted}
            />
          ))}
        </div>
        <div className='flex shadow-lg items-center justify-between bg-[var(--todo-background)] rounded-b-[5px] px-5 gap-3 text-xs text-[var(--footer-text-color)] h-[50px]'>
          <div>
            {todos.filter(each => each.status === false).length} items left
          </div>
          <div className='capitalize cursor-pointer' onClick={handleClearCompleted}>
            clear completed
          </div>
        </div>
      </div>
      <Filter activeFilter={currentFilter} onFilterSelect={handleFilterSelection} />
    </>
  )
}
