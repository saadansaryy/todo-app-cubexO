import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

function Todo({todo,todoList,setTodoList}) {
    const navigate = useNavigate();
    const [completed,setCompleted] = useState(JSON.parse(localStorage.getItem(`${todo.id}completed`))?JSON.parse(localStorage.getItem(`${todo.id}completed`)):todo.completed)

    const handleRemoveTodo = () => {
        const filteredTodoList = todoList.filter((element) => element.id!==todo.id);
        setTodoList(filteredTodoList)
        localStorage.removeItem(`${todo.id}completed`)
    }

    const handleCompletedTodo = () => {
        console.log("Hello")
        setCompleted(!completed);
    }

    useEffect(()=>{
        localStorage.setItem(`${todo.id}completed`,JSON.stringify(completed));
    },[completed])

  return (
    <div className='grid grid-cols-4 gap-5'>
        <input type="checkbox" name="" id="" onClick={handleCompletedTodo} checked={completed} className="cursor-pointer"/>
        <p className={`${completed?"text-green-500":"text-yellow-500"}`} >{todo.value}</p>
        <Link className='bg-blue-500 text-white px-3 py-1 text-sm border-r-2 border-b-2 border-blue-900 hover:bg-blue-600 transition-all duration-300' onClick={()=>navigate("/editTodo")}>Edit</Link>
        <button className='bg-red-500 text-white px-3 py-1 text-sm border-r-2 border-b-2 border-red-900 hover:bg-red-600 transition-all duration-300' onClick={handleRemoveTodo}>Delete</button>
    </div>
  )
}

export default Todo