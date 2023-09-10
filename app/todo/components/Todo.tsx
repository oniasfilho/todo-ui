import { TodoType } from '@/types.d';
import React from 'react'

type Props = {
  item: TodoType,
  isLast: boolean,
  isFirst: boolean,
  checkTodo: (id: number) => void,
  deleteTodo: (id: number) => void,
  clearCompleted: () => void,
}

export default function Todo({ item, isLast, isFirst, checkTodo, deleteTodo }: Props) {
  return (
    <div className={`bg-[var(--todo-background)] h-[52px] text-xs border-b-[1px] border-[#76799249]
                    flex items-center px-5 gap-3 justify-between ${isFirst ? "rounded-tl-[5px]" : ""} ${isLast ? "border-b-0" : ""}`}>
      <div className={`flex items-center gap-3 ${item.status ? 'line-through text-[var(--todo-done-item-text-color)]' : 'text-[var(--main-text-color)]'}`}>
        <input type='checkbox' checked={item.status} onChange={() => checkTodo(item.id)} />
        {item.content}
      </div>
      <div className='flex items-center justify-center'>
        <img
          src="delete.png"
          className='cursor-pointer'
          alt="Delete TODO item"
          onClick={() => deleteTodo(item.id)}
        />
      </div>
    </div>
  )
}
