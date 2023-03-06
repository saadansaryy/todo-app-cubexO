import React from 'react'
import { useNavigate } from 'react-router-dom'

function EditTodo() {
    const navigate = useNavigate();
  return (
    <div className='space-x-3'>
        <input className='border-2 border-black focus:outline-none border-none shadow-sm shadow-black p-1' type="text" name="editTodoInput" id="" placeholder='Edit your task'/>
        <button className='bg-blue-500 text-white px-3 py-1 text-sm border-r-2 border-b-2 border-blue-900 hover:bg-blue-600 transition-all duration-300'>Save</button>
        <button className='bg-red-500 text-white px-3 py-1 text-sm border-r-2 border-b-2 border-red-900 hover:bg-red-600 transition-all duration-300' onClick={()=>navigate("/")}>Discard</button>
    </div>
  )
}

export default EditTodo