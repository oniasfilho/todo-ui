'use client'

import { TodoType } from '@/types.d'
import React, { useState } from 'react'
import { IDGenerator } from '@/app/util/IDGenerator';


type Props = {
  onCreateTodo: (item: TodoType) => void
}

export default function NewTodo({ onCreateTodo }: Props) {
  const generateBlankTodo = () => {
    return {
      id: IDGenerator.getNextID(),
      content: "",
      status: false,
    }
  }

  const [newTodo, setNewTodo] = useState<TodoType>(generateBlankTodo())

  const handleCheck = () => {
    setNewTodo(oldVal => {
      return {
        ...oldVal,
        status: !oldVal.status
      }
    })
  }

  const handleText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTodo(oldVal => {
      return {
        ...oldVal,
        content: e.target.value
      }
    })
  }

  const handleSubmit = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      onCreateTodo(newTodo)
      setNewTodo(generateBlankTodo())
    }
  }

  return (
    <div className='shadow-lg bg-[var(--todo-background)] rounded-[5px] h-[48px] text-[var(--main-text-color)] text-xs
                    flex items-center px-5 gap-3'>
      <input type='checkbox'
        onChange={handleCheck}
        checked={newTodo.status}
      />
      <input type="text"
        placeholder='Create a new todo...'
        onChange={handleText}
        onKeyDown={handleSubmit}
        value={newTodo.content}
      />
    </div>
  )
}
