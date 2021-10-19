import { configureStore } from '@reduxjs/toolkit';
import counterReducter from '../features/Counter/counterSlice';
const rootReducer = {
  counter: counterReducter,
};

const store = configureStore({
  reducer: rootReducer,
});
export default store;
