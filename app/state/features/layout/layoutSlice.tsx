import { createSlice } from '@reduxjs/toolkit';
import { ThemeState } from '@/types';

const initialState: ThemeState = {
  value: typeof window !== 'undefined' && window.matchMedia("(prefers-color-scheme: dark)").matches ? 'dark' : 'light'
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.value = state.value === 'light' ? 'dark' : 'light';
    },
  },
});

export const { toggleTheme } = themeSlice.actions;

export default themeSlice.reducer;
