'use client'
import React, { useState } from 'react'
import { Draggable, DragDropContext } from 'react-beautiful-dnd';
import { StrictModeDroppable } from '../../util/StrictModeDroppable'
import Todo from '../components/Todo'
import Filter from './Filter';
import { TodoType, FilterType } from '@/types.d';

type Props = {
  todos: TodoType[],
  handleTodoCheck: (id: number) => void,
  handleTodoDelete: (id: number) => void,
  handleClearCompleted: () => void,
  onReorder: (startIndex: number, endIndex: number) => void,
}

export default function TodoList({ todos, handleTodoCheck, handleTodoDelete, handleClearCompleted, onReorder }: Props) {
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

  const handleOnDragEnd = (result: any) => {
    if (!result.destination) return;
    const { source, destination } = result;
    if (source.index !== destination.index) {
      onReorder(source.index, destination.index); // Call the passed function
    }
  };

  return (
    <>
      <div >
        <div className='max-h-[334px] overflow-scroll overflow-x-hidden'>
          <DragDropContext onDragEnd={handleOnDragEnd}>
            <StrictModeDroppable droppableId="todosDroppable">
              {(provided: any) => (
                <div {...provided.droppableProps} ref={provided.innerRef}>
                  {getFilteredTodos().map((each, index) => (
                    <Draggable key={each.id} draggableId={String(each.id)} index={index}>
                      {(provided) => (
                        <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                          <Todo
                            item={each}
                            isLast={index === todos.length - 1}
                            isFirst={index === 0}
                            checkTodo={handleTodoCheck}
                            deleteTodo={handleTodoDelete}
                            clearCompleted={handleClearCompleted}
                          />
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </StrictModeDroppable>
          </DragDropContext>
        </div>
        <div className='flex shadow-lg items-center justify-between bg-[var(--todo-background)] rounded-b-[5px] px-5 gap-3 text-xs text-[var(--footer-text-color)] h-[50px]'>
          <div>
            {todos.filter(each => each.status === false).length} items left
          </div>

          <div className='hidden md:block lg:block'>
            <Filter activeFilter={currentFilter} onFilterSelect={handleFilterSelection} />
          </div>

          <div className='capitalize cursor-pointer' onClick={handleClearCompleted}>
            clear completed
          </div>
        </div>
      </div>
      <div className='md:hidden lg:hidden'>
        <Filter activeFilter={currentFilter} onFilterSelect={handleFilterSelection} />
      </div>
    </>
  )
}
