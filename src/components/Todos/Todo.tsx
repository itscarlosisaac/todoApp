import React, { ComponentType } from 'react'



export const Todo: ComponentType<any> = ({ id, completed, title }) => {
  
  return (
    <div>
      {id}. - {title}
      {completed && <small>completed!</small>}
    </div>
  )
}
