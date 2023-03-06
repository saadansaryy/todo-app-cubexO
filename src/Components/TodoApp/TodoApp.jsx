import React, { useEffect } from 'react'
import TodoList from '../TodoList/TodoList';
import { useState } from 'react';
import { Routes,Route } from 'react-router-dom';
import EditTodo from '../EditTodo/EditTodo';
function 
TodoApp() {
    const [todo,setTodo] = useState(JSON.parse(localStorage.getItem("todoInput"))?JSON.parse(localStorage.getItem("todoInput")):{
        id:"",
        value:"",
        completed:false
    })

    const [todoList,setTodoList] = useState(JSON.parse(localStorage.getItem("todoList"))?JSON.parse(localStorage.getItem("todoList")):[])

    const handleTodoInput = (e) => {
        setTodo({...todo,value:e.target.value});
    }
    useEffect(() => {
        localStorage.setItem("todoInput",JSON.stringify(todo))
    },[todo])

    const handleAddTodo = () => {
        if(todo.value!==""){
            setTodoList([...todoList,{id:todoList.length+1,value:todo.value,completed:todo.completed}])
            setTodo({...todo,value:""})
        }
    }
    useEffect(()=>{
        localStorage.setItem("todoList",JSON.stringify(todoList));
    },[todoList])
  return (
    <div className='flex flex-col items-center justify-center space-y-5 my-10 p-4'>
        <div className='flex flex-row justify-center items-center space-x-3 bg-stone-800 p-4 shadow-md shadow-slate-600'>
            <div>
                <input className='border-2 border-black focus:outline-none p-1' type="text" name="addTodoInput" placeholder='Enter your task here...' value={todo.value} onChange={handleTodoInput}/>
            </div>
            <div>
                <button className='text-white bg-blue-500 px-3 py-1 hover:bg-blue-700 transition-all duration-300' onClick={handleAddTodo}>+</button>
            </div>
        </div>
        <div className='w-full bg-stone-600 shadow-md shadow-stone-900 p-4'>
            <Routes>
                <Route path='/' element={<TodoList todoList={todoList} setTodoList={setTodoList}/>}/>
                <Route path='/editTodo' element={<EditTodo />}/>
            </Routes>
        </div>
    </div>
  )
}

export default 
TodoApp