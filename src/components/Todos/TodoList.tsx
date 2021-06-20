import { ComponentType, useContext } from 'react'
import { TodoContext } from '../../context/TodoContext'
import { Todo as TodoType } from '../../types/types'
import { Todo } from './Todo'

export const TodoList: ComponentType = () => {
  const [context] = useContext(TodoContext)

  const { todos, searchFilter } = context!;
  const filteredTodos = todos.filter((todo:any) => (
    todo.title.toLowerCase().includes(searchFilter))
  )

  return (
    <>
      <ul>
        {
          filteredTodos.map((todo: TodoType, index: number) => (
            <Todo key={`key__${todo.id}`} {...todo} />
          ))
        }
        </ul>
    </>
  )
}
