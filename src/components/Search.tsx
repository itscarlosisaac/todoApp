import React from 'react'
import { useInputForm } from '../hooks/useInputForm'

export const Search = () => {

  const [formValues, setFormValues, reset] = useInputForm({
    search: ""
  })

  const {search} = formValues

  const handleInputChange = (event: React.FormEvent<HTMLInputElement>) : void => {
    setFormValues(event.target)
  }

  return (
    <div>
      <input
        id="search"
        type="text" 
        name="search"
        value={search}
        className="p-3"
        autoComplete="false"
        placeholder="Search"
        onChange={handleInputChange}  />
      <button
        className="ml-4 px-6 py-2 bg-indigo-500 text-white"
        onClick={reset}>Reset</button>
    </div>
  )
}
