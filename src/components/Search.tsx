import React, {useContext, useEffect } from 'react'
import { TodoContext } from '../context/TodoContext'
import { useInputForm } from '../hooks/useInputForm'
import { filterTodos, clearSearch } from '../reducer/todoActions'

export const Search: React.FC = () => {

  const [formValues, setFormValues, reset] = useInputForm({ search: "" })
  const [context, dispatch] = useContext(TodoContext)
  let { search } = formValues

  useEffect(() => {
    if (context && context.searchFilter !== "") {
      setFormValues({name: "search", value: context.searchFilter })
    }
  }, [])

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) : void => {
    setFormValues(event.target)
    dispatch && dispatch(filterTodos(event.target.value))
  }

  const handleReset = () => {
    reset();
    dispatch && dispatch(clearSearch())
  }

  return (
    <div className="w-full border-b border-b-blueish-100 border-b-solid pb-10 mb-5">
      <input
        id="search"
        type="text" 
        name="search"
        value={search}
        className="search-box p-3 text-sm text-blueish-600 border border-solid border-white focus:border-indigo-500 focus:outline-none"
        autoComplete="false"
        placeholder="Filter"
        onChange={handleInputChange}  />
      <button
        className="clear-btn px-6 py-3 text-sm bg-indigo-500 border border-solid border-indigo-500 text-white hover:bg-indigo-700"
        onClick={handleReset}>Clear</button>
    </div>
  )
}
