'use client'

import React, { useState } from 'react'
import Todo from '../components/Todo'
import Filter from './Filter';
import { TodoType, FilterType } from '@/types.d';

export default function TodoList() {
  const [currentFilter, setCurrentFilter] = useState(FilterType.ALL);
  const [todos, setTodos] = useState<TodoType[]>([
    {
      id: 1,
      status: true,
      content: 'Complete online JavaScript course'
    },
    {
      id: 2,
      status: false,
      content: 'Jog around the park 3x'
    },
    {
      id: 3,
      status: false,
      content: '10 minutes meditation'
    },
    {
      id: 4,
      status: false,
      content: 'Read for 1 hour'
    },
    {
      id: 5,
      status: false,
      content: 'Pick up groceries'
    },
    {
      id: 6,
      status: false,
      content: 'Complete Todo App'
    }
  ]);

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

  return (
    <>
      <div>
        {getFilteredTodos().map((each, index, filteredTodos) => (
          <Todo
            key={each.id}
            item={each}
            isLast={index === filteredTodos.length - 1}
            isFirst={index === 0}
            check={handleTodoCheck}
          />
        ))}
        <div className='flex shadow-lg items-center justify-between bg-[var(--todo-background)] rounded-b-[5px] px-5 gap-3 text-xs text-[var(--footer-text-color)] h-[50px]'>
          <div>
            {todos.filter(each => each.status === false).length} items left
          </div>
          <div className='capitalize'>
            clear completed
          </div>
        </div>
      </div>
      <Filter activeFilter={currentFilter} onFilterSelect={handleFilterSelection} />
    </>
  )
}
