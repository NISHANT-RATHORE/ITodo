import React from 'react'
import tick from '../assets/tick.png'
import not_tick from '../assets/not_tick.png'
import delete_icon from '../assets/delete.png'

const TodoItem = ({text,id,isCompleted,deleteTodo,toggle}) => {
  return (
    <div className='flex items-center my-3 gap-2'>
        <div onClick={()=>toggle(id)} className='flex flex-1 items-center cursor-pointer'>
            <img src={isCompleted ? tick : not_tick} alt='tick' className='w-6 h-6 mx-2'/>
            <p className={`text-lg ${isCompleted?"line-through":""}`}>{text}</p>
        </div>
        <img src={delete_icon} onClick={()=>deleteTodo(id)} alt='delete' className='w-6 h-6 cursor-pointer'/>
    </div>
  )
}

export default TodoItem