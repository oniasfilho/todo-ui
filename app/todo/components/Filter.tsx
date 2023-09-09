import React from 'react'
import { FilterType } from '@/types.d';

interface FilterProps {
  activeFilter: FilterType;
  onFilterSelect: (filter: FilterType) => void;
}

export default function Filter({ activeFilter, onFilterSelect }: FilterProps) {
  const filters = Object.values(FilterType);
  return (
    <div className='shadow-lg bg-[var(--todo-background)] rounded-[5px] h-[48px] text-[var(--main-text-color)] text-xs
                    flex items-center justify-center px-5 gap-3'>
      <div className='flex w-[166px] justify-between text-sm font-bold'>
        {filters.map(filter => (
          <p
            key={filter}
            className={filter === activeFilter ? 'text-[var(--selected-filter-color)]' : ''}
            onClick={() => onFilterSelect(filter)}
          >
            {filter}
          </p>
        ))}
      </div>
    </div>
  )
}
