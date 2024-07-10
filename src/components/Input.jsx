import React from 'react'

const Input = ({onInputChange,onAddClick,item}) => {
  return (
    <>
      <div className="input-group mb-3">
        <input type="text" className="form-control" placeholder="Enter here..." onChange={onInputChange} value={item} />
        <button className="btn btn-outline-primary" type="button" onClick={onAddClick}>Add</button>
      </div>

    </>
  )
}

export default Input
