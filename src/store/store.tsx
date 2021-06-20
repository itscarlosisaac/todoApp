
import { TypeInitialState } from '../context/TodoContext';

export const initialState: TypeInitialState = {
  todoOrder: "ASC",
  todos: [],
  searchFilter: "",
  page: 0,
  isLoading: true,
  error: null
}