import React, {useContext, FormEvent } from 'react'
import { TodoContext } from '../context/TodoContext'
import { useInputForm } from '../hooks/useInputForm'
import { filterTodos } from '../reducer/todoActions'

export const Search = () => {

  const [formValues, setFormValues, reset] = useInputForm({ search: "" })
  const [, dispatch] = useContext(TodoContext)
  const { search } = formValues

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) : void => {
    setFormValues(event.target)
    if (dispatch) {
      dispatch(filterTodos(event.target.value))
    }
  }

  return (
    <div className="w-full border-b border-b-blueish-100 border-b-solid pb-10 mb-5">
      <input
        style={{width:"80%"}}
        id="search"
        type="text" 
        name="search"
        value={search}
        className="p-3 text-sm text-blueish-600 border border-solid border-gray-200 focus:border-indigo-500 focus:outline-none"
        autoComplete="false"
        placeholder="Filter"
        onChange={handleInputChange}  />
      <button
        style={{width:"20%"}}
        className="px-6 py-3 text-sm bg-indigo-500 border border-solid border-indigo-500 text-white hover:bg-indigo-700"
        onClick={reset}>Reset</button>
    </div>
  )
}
