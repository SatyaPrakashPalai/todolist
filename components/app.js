import React from 'react'
import { useState } from 'react'


const App = () => {

  const [userInput,setUserInput]=useState('')
  const [todoList,setTodoList]=useState([])
  const handleChange= (e) =>{
    e.preventDefault()
    setUserInput(e.target.value)
    console.log(userInput)

  }
  const handleSubmit = (e) => {
    e.preventDefault()
    setTodoList([
      userInput,
      ...todoList
    ])

    setUserInput('')
  }

  const handleDelete = (todo)=> {
    const updatedArr = todoList.filter(todoItem => todoList.indexOf(todoItem) != todoList.indexOf(todo))
    setTodoList(updatedArr)

  }

  return(
    <>
    
    <div className="bg-amber-100 flex items-center absolute top-0 bottom-0 right-0 left-0 justify-center text-center">
      <div className="bg-yellow-500 w-1/4 h-4/6">
        
        <h1 className='text-4xl font-bold my-8'>To do List</h1>
        <form action="" className='flex justify-center'>
          <input type="text" value={userInput} onChange={handleChange} />
          <div className='bg-cyan-500 w-5 ml-3 flex text-justify'><button onClick={handleSubmit}>+</button></div>
          
        </form>
        <ul className='my-4 mx-20 text-left'>
        {
          todoList.length>=1 ? todoList.map((todo,idx) => {
            return <li key={idx}><button className='ml-4 my-1 w-5 bg-red-500' onClick={
              (e)=>{
                e.preventDefault()
                handleDelete(todo)

              }
            }>-</button>{todo}</li>

          }
          ):"Enter a todo item"
        }
        </ul>
        
        
      </div>  
    </div>
    </>
  )
}
export default App
