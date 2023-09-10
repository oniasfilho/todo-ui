'use client'
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '@/app/state/features/layout/layoutSlice';
import { RootState } from '@/types';

export default function TodoHeader() {
  const dispatch = useDispatch();
  const theme = useSelector((state: RootState) => state.theme.value);

  const [isDark, setIsDark] = useState(true)

  useEffect(() => {
    switch (theme) {
      case 'dark':
        setIsDark(true);
        break;
      case 'light':
      default:
        setIsDark(false);
    }
  }, [theme])

  const handleThemeSwitch = () => {
    dispatch(toggleTheme());
  }
  return (
    <div className='flex align-top justify-between h-[60px]'>
      <img src="todo-logo.svg" className='max-w-[109px] h-[20px] cursor-pointer' alt="Todo Logo" />
      <img src={`theme-switch-${isDark ? 'dark' : 'light'}.svg`} className='max-h-[20px] cursor-pointer' alt="Theme toggle button" onClick={handleThemeSwitch} />
    </div>
  )
}
