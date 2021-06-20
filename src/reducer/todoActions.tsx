import { Todo } from "../types/types"
import { ActionsTypes } from "./todoReducer"

export const fetchingTodos = (todos: Todo[], isLoading: boolean, error: Error | null) => {
  return {
    type: ActionsTypes.fetch,
    payload: {
      todos,
      isLoading,
      error,
      searchFilter: "",
    }
  }
}

export const sortTodos = (currentOrder: string | undefined) => {
  return currentOrder === "ASC" ?
    { type: ActionsTypes.sortDesc, payload: "DESC" } :
    { type: ActionsTypes.sortAsc, payload: "ASC" }
}


export const filterTodos = (searchParam: string) => {
  return {
    type: ActionsTypes.filter,
    payload: searchParam.toLowerCase()
  }
}

export const toggleCompleted = () => {
  return {
    type: ActionsTypes.toggleComplete
  }
}

export const goToNextPage = (page:number) => {
  return {
    type: ActionsTypes.pageNext,
    payload: page
  }
}
export const goToPrevPage = (page:number) => {
  return {
    type: ActionsTypes.pagePrev,
    payload: page
  }
}