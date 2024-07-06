import { configureStore } from '@reduxjs/toolkit';
import tasksReducer from './tasksSlice';

// Load tasks from localStorage
const loadState = () => {
  try {
    const serializedState = localStorage.getItem('tasks');
    return serializedState ? JSON.parse(serializedState) : [];
  } catch (e) {
    console.warn("Could not load state", e);
    return [];
  }
};

const preloadedState = loadState();

const store = configureStore({
  reducer: {
    tasks: tasksReducer,
  },
  preloadedState: {
    tasks: preloadedState
  }
});

// Save tasks to localStorage on state change
store.subscribe(() => {
  try {
    const serializedState = JSON.stringify(store.getState().tasks);
    localStorage.setItem('tasks', serializedState);
  } catch (e) {
    console.warn("Could not save state", e);
  }
});

export { store };
