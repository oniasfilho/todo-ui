import React from 'react'

export default function Filter() {
  return (
    <div className='shadow-lg bg-[var(--todo-background)] rounded-[5px] h-[48px] text-[var(--main-text-color)] text-xs
                    flex items-center justify-center px-5 gap-3'>
      <div className='flex w-[166px] justify-between text-sm font-bold'>
        <p className='text-[var(--selected-filter-color)]'>All</p>
        <p>Active</p>
        <p>Completed</p>
      </div>
    </div>
  )
}
