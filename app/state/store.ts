import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './features/layout/layoutSlice';

const store = configureStore({
  reducer: {
    theme: themeReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat((store) => (next) => (action) => {
      let result = next(action);
      if (action.type === "theme/toggleTheme") {
        const currentTheme = store.getState().theme.value;
        localStorage.setItem('theme', currentTheme);
        document.documentElement.setAttribute("data-theme", currentTheme);
      }
      return result;
    }),
});


export default store;
