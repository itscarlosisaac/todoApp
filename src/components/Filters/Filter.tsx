import { SortAscendingIcon, SortDescendingIcon } from '@heroicons/react/outline';
import { useContext } from 'react';
import { TodoContext } from '../../context/TodoContext';
import { sortTodos, toggleCompleted } from '../../reducer/todoActions';

export const Filter = () => {

  const [context, dispatch] = useContext(TodoContext);

  const sorting = () => {
    if (dispatch) {
      dispatch(sortTodos(context?.todoOrder))
    }
  }

  const toggle = () => {
    if (dispatch) {
      dispatch(toggleCompleted())
    }
  }

  return (
    <div className="flex ">
      {/* <small onClick={toggle} className="cursor-pointer hover:text-blue-500">{context?.showCompleted ? "Hide" : "Show"} completed</small> */}
      <small className="mx-3">|</small>
      <small className="mr-3">Sort by: </small>
      <div onClick={sorting}>
        {
          context?.todoOrder === "ASC" ?
          <SortAscendingIcon className="cursor-pointer h-5 w-5 text-blue-500" /> :
          <SortDescendingIcon className="cursor-pointer h-5 w-5 text-blue-500" />
        }
      </div>
    </div>
  )
}
