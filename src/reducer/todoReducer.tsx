import { Todo } from '../types/types';

export const ActionsTypes = {
  sortAsc: "[Sort] Asc",
  sortDesc: "[Sort] Desc",
  filter: "[Filter] Search",
  fetch: "[Fetching] Fetch",
  toggleComplete: "[Toggle] Complete",
  pageNext: "[Page] Next",
  pagePrev: "[Page] Prev",
  clearSeach: "[Search] Clear"
}


export const TodoReducer = (state: any, action: any) => {

  const SortedTodos: Todo[] = Array.from(state.todos);

  switch (action.type) {
    case ActionsTypes.fetch:
      return {
        ...state,
        ...action.payload,
      }
    
    case ActionsTypes.sortAsc:
      SortedTodos.sort((a, b) => a.title < b.title ? 1 : -1);
      return {
        ...state,
        todoOrder: "ASC",
        todos: SortedTodos
      };

    case ActionsTypes.sortDesc:
      SortedTodos.sort((a, b) => a.title < b.title ? -1 : 1);
      return {
        ...state,
        todoOrder: "DESC",
        todos: SortedTodos
      };

    case ActionsTypes.pageNext:
      return {
        ...state,
        page: action.payload
      };
    
    case ActionsTypes.pagePrev:
      return {
        ...state,
        page: action.payload
      };
  

    case ActionsTypes.filter:
      return {
        ...state,
        searchFilter: action.payload.toLowerCase()
      };
    
    case ActionsTypes.toggleComplete:
      return {
        ...state,
        showCompleted: !state.showCompleted
      };
    case ActionsTypes.clearSeach:
      return {
        ...state,
        searchFilter: ""
      };
      
    default:
      return state;
  }
}