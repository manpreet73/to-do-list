
import { useState } from 'react'
import './App.css'
import Input from './components/Input'
import List from './components/List'

function App() {
  const [item,setItem]=useState('');
  const [savedInput,setSavedInput]=useState([])

  const handleInputChange=(e)=>{
    setItem(e.target.value)
  }

  const handleAdd=()=>{
    setSavedInput([...savedInput,item]);
    setItem('')
  }

  const handleDelete=(text)=>{
    setSavedInput(savedInput.filter(items=>items!==text))
  }

  const handleEdit=(text)=>{
    setItem(text);
    handleDelete(text)
  }

  return (
    <>
    <h1>To Do List</h1>
      <Input onInputChange={handleInputChange} onAddClick={handleAdd} item={item}/>
      <h4>My to do work appears here...</h4>
      {savedInput.map((items,i)=>(
        <List key={i} itemName={items} onDelete={handleDelete} handleEdit={handleEdit}/>
      ))}
      
    </>
  )
}

export default App
