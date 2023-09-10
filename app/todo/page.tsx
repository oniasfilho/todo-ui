'use client'
import TodoApp from './pages/TodoApp';
import React from 'react'
import { Provider } from 'react-redux';
import store from '../state/store'

export default function Todo() {
  return (
    <Provider store={store}>
      <TodoApp />
    </Provider>
  )
}
