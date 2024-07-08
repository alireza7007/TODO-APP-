import React, { useState } from 'react'
import Header from './Header'
import Todo from './Todo'
import AddIcon from '@mui/icons-material/Add';

export default function TodoList() {

    const [todos, settodos] = useState([])
    const [todoTitle, setTodoTitle] = useState('')
    const [status, setStatus] = useState('all')

    const handelChengeInput = (event) => {
        setTodoTitle(event.target.value)
    }

    const handelSubmitTodoForm = (event) => {
        event.preventDefault()
        let todo = {
            title:todoTitle,
            completed:false,
            id:todos.length + 1
        }
        settodos(oldTodos=>[...oldTodos,todo])
        setTodoTitle('')
    }
    
    const handelRemoveTodo = (todoId)=>{
        console.log(todoId);
        const newTodo = [...todos]
        const mainTodo = newTodo.filter(todo=>{return todo.id !== todoId})
        settodos(mainTodo)
    }
    const handelEditTodo= (todoId) => {
        let newTodos = [...todos]
       newTodos.map(todo=>{
            if(todo.id === todoId){
                todo.completed = !todo.completed
            }
        })
        settodos(()=>[...newTodos])
        console.log(newTodos);
        
    }
  return (
    <>
    <Header />
    <form onSubmit={handelSubmitTodoForm}> 
        <input type="text" className="todo-input" maxLength="40" onChange={handelChengeInput} value={todoTitle}/>
        <button className="todo-button" type="submit" >
        <AddIcon />
        </button>
        
        <div className="select">
            <select name="todos" className="filter-todo" onChange={(e)=> setStatus(e.target.value)}>
                <option value="all">All</option>
                <option value="completed">Completed</option>
                <option value="uncompleted">Uncompleted</option>
            </select>
        </div>
    </form>



    

    <div className="todo-container">
        <ul className="todo-list">
            
                {status ==='all' && todos.map(todo=>{return <Todo 
                {...todo}
                key={todo.id}
                handelEdit={()=>handelEditTodo(todo.id)} 
                handelRemove={()=>handelRemoveTodo(todo.id)} 
                 />})}
             {status === 'completed' && todos.filter(todo=>{return Todo.completed = todo.completed}).map(todo=>{return <Todo 
                {...todo}
                key={todo.id}
                handelEdit={()=>handelEditTodo(todo.id)} 
                handelRemove={()=>handelRemoveTodo(todo.id)} 
                 />})}
     {status === 'uncompleted' && todos.filter(todo=>{return Todo.completed = !todo.completed}).map(todo=>{return <Todo 
                {...todo}
                key={todo.id}
                handelEdit={()=>handelEditTodo(todo.id)} 
                handelRemove={()=>handelRemoveTodo(todo.id)} 
                 />})}
         
        </ul>
    </div>
</>
  )
}
