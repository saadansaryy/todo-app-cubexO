import React from 'react'
import Todo from '../Todo/Todo'

function TodoList({todoList,setTodoList}) {
  return (
    <div className='space-y-4'> 
    {todoList.length>0?
        todoList.map((todo,index)=>{
            return(
                <Todo todo={todo} todoList={todoList} setTodoList={setTodoList} key={`${index+1}Task`}/>
            )
        }):<p className='text-white text-opacity-60 text-center'>"No Tasks to Preview"</p>
    }
    </div>
  )
}

export default TodoList