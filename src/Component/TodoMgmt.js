import React,{useState} from 'react'
import TodoList from './TodoList';
const TodoMgmt = () => {
    const[task,setTask]=useState('');
    const[todos,setTodos]=useState([]);
    const changeHandler = e => {
        setTask(e.target.value);
    }
    const submitHandler = e => {
        e.preventDefault();
        const newTodos=[...todos,task]
        setTodos(newTodos); 
        setTask("");       
    }
    const deleteHandler = (indexValue) => {
        const newTodos=todos.filter((todo,index) => index !== indexValue)
        setTodos(newTodos);
    }
  return (
    <div>
        <center>
            <div className='card'>
                <div className='card-body'>
                    <form onSubmit={submitHandler}>
                        <h2>Todo Management List</h2><br/>
                        <input type="text" name="task" value={task} onChange={changeHandler}/>&nbsp;&nbsp;
                        <button className='btn btn-primary'>Add</button>
                    </form>
                    <TodoList todos={todos} deleteHandler={deleteHandler}/>
                </div>
            </div>
        </center>
    </div>
  )
}

export default TodoMgmt