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

  const handleEnterSubmit = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      onCreateTodo(newTodo)
      setNewTodo(generateBlankTodo())
    }
  }

  const handleButtonSubmit = () => {
    onCreateTodo(newTodo)
    setNewTodo(generateBlankTodo())
  }

  return (
    <div className='shadow-lg bg-[var(--todo-background)] rounded-[5px] h-[48px] text-[var(--main-text-color)] text-xs
                    flex items-center px-5 justify-between'>
      <div className='flex gap-3'>
        <input type='checkbox'
          onChange={handleCheck}
          checked={newTodo.status}
        />
        <input type="text"
          placeholder='Create a new todo...'
          className='min-w-[250px] min-h-full'
          onChange={handleText}
          onKeyDown={handleEnterSubmit}
          value={newTodo.content}
        />
      </div>
      <div className='grid place-content-center'>
        <button onClick={handleButtonSubmit} className='mr-[5px] cursor-pointer w-[40px] h-[48px] flex justify-end items-center' >
          <img src="send.png" alt="Submit Button Icon" className='flex opacity-40 w-3 h-3' />
        </button>
      </div>
    </div>
  )
}
