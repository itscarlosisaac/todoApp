import React, { ComponentType } from 'react'
import { useFetch } from '../../hooks/useFetch'
import { Todo as TodoType } from '../../types/types'
import { Todo } from './Todo'


export const TodoList: ComponentType = () => {
  const [todos, isLoading, error] = useFetch("https://jsonplaceholder.typicode.com/todos")

  return (
    <div>
      {
        todos.map((todo: TodoType, index: number) => (
          <Todo key={`key__${todo.id}`} {...todo} />
       )) 
      }
    </div>
  )
}
