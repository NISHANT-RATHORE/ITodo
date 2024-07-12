import React, { useEffect, useRef, useState } from 'react'
import todo_icon from '../assets/todo_icon.png'
import TodoItem from './TodoItem'



const Todo = () => {
    const Inputref = useRef();
    const [TodoList, setTodoList] = useState(localStorage.getItem('TodoList')?JSON.parse(localStorage.getItem('TodoList')):[]);

    const add = () => {
        const inputText = Inputref.current.value.trim();
        if(inputText==="") return null;
        console.log(inputText);
        const newTodo = {
            id : Date.now(),
            text : inputText,
            isCompleted : false
        }
        setTodoList((prev)=>[...prev,newTodo]);
        Inputref.current.value = "";
    }

    const deleteTodo = (id) => {
        setTodoList((prevtodo)=>prevtodo.filter((item)=>item.id!==id));
    }

    const toggle = (id) => {
        setTodoList((prevtodo)=>prevtodo.map((item)=>{
            if(item.id===id){
                return {...item,isCompleted:!item.isCompleted}
            }
            return item;
        }));
    }

    useEffect(() => {
        localStorage.setItem('TodoList',JSON.stringify(TodoList));
    }, [TodoList])


    
  return (
    <div className='bg-white place-self-center w-11/12 max-w-md flex flex-col p-7 min-h-[450px] rounded-xl'>
        <div className='flex items-center mt-7 gap-2'>
            <img src={todo_icon} alt='todo icon' className='w-10 h-10'/>
            <h1 className='text-3xl font-semibold'>To-do List</h1>
        </div>
        {/* input text  */}
        <input ref={Inputref} type='text'  placeholder='Add a task' className='mt-7 p-3 border border-gray-300 rounded-lg'/>
        {/* button */}
        <button onClick={add} className='mt-3 p-1 bg-gradient-to-r from-purple-400 to-purple-700 text-white rounded-lg'>Add</button>
        {/* list of tasks} */}
        <div>
            {TodoList.map((item,index)=>(<TodoItem key={index} text={item.text} id={item.id} isCompleted={item.isCompleted} deleteTodo={deleteTodo} toggle={toggle}/>))}
        </div>
        
    </div>
  )
}

export default Todo