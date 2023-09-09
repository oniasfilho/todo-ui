import React from 'react'

type Props = {
  item: Todo,
  isLast: boolean,
  isFirst: boolean,
  check: (id: number) => void;
}

export default function Todo({ item, isLast, isFirst, check }: Props) {
  return (
    <div className={`bg-[var(--todo-background)] h-[52px] text-xs border-b-[1px] border-[#76799249]
                    flex items-center px-5 gap-3 justify-between ${isFirst ? "rounded-t-[5px]" : ""} ${isLast ? "border-b-0" : ""}`}>
      <div className={`flex items-center gap-3 ${item.status ? 'line-through text-[var(--todo-done-item-text-colo)]' : 'text-[var(--todo-title-text-color)]'}`}>
        <input type='checkbox' checked={item.status} onChange={() => check(item.id)} />
        {item.content}
      </div>
      <div className='flex items-center justify-center'>
        <img src="delete.png" className='cursor-pointer' alt="Delete TODO item" />
      </div>
    </div>
  )
}
