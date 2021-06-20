import React, { createContext } from "react";
import { Todo } from "../types/types";

export type OrderType = "ASC" | "DESC" 

export type TypeInitialState = {
  page: number,
  todos: Todo[],
  isLoading: boolean,
  error: null | Error,
  todoOrder: OrderType,
  searchFilter: string,
  showCompleted: boolean
}

export const TodoContext = createContext<[TypeInitialState, React.Dispatch<any>] | []>([]);
