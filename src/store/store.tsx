
import { TypeInitialState } from '../context/TodoContext';

export const initialState: TypeInitialState = {
  todoOrder: "ASC",
  todos: [],
  searchFilter: "",
  page: 1,
  isLoading: true,
  error: null,
  showCompleted: true,
}