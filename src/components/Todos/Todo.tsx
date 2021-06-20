import React, { ComponentType, useState } from 'react'
import { CheckCircleIcon } from '@heroicons/react/outline';
import { Link } from 'react-router-dom';

export const Todo: ComponentType<any> = ({ id, completed, title }) => {
  
  const [isCompleted, setIsCompleted] = useState<boolean>(completed)
  
  
  const handleToggleComplete = () => {
    setIsCompleted(prev => !prev)
  }

  return (
    <li
      style={{minWidth: "300px"}}
      className={`todo 
      ${isCompleted ? 'completed' : ''}
      p-4 bg-white mb-4 border-gray-100 border-solid border-1 shadow-sm rounded-4 flex items-center`} >
      <CheckCircleIcon
        onClick={handleToggleComplete}
        style={{minWidth: "40px"}}
        className={`cursor-pointer h-10 w-10 pr-4 border-r border-r-solid border-r-black mr-4 ${isCompleted ? `text-blue-500` : `text-blue-50 `}`} />
      <span className="text-orange-500 mr-2">{id}. </span>
      <Link to={`/todo/${id}`} className="text-blueish-700">{title}</Link>
    </li>
  )
}
