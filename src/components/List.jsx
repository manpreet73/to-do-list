import React, { useState } from 'react'

const List = ({itemName,onDelete,handleEdit}) => {

  const [done,setDone]=useState('none')

  const handleDone=()=>{
    setDone('line-through')
  }
  return (
    <div className='list'>
      <ul className="list-group">
        <li className="list-group-item" style={{textDecoration:done}}>{itemName}</li>
      </ul>
      <button type="button" className="btn btn-primary" onClick={handleDone}>Done</button>
      <button type="button" className="btn btn-secondary" onClick={()=>handleEdit(itemName)}>Edit</button>
      <button type="button" className="btn btn-danger" onClick={()=>onDelete(itemName)}>Delete</button>

    </div>
  )
}

export default List
