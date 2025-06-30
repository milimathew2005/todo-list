import {useState,useEffect} from "react";
const Input=({onAddTask})=>{
    const[newTask,setNewTask]=useState("")
    const[valid,setValid]=useState(false)
    useEffect(()=>{
        if (newTask.length>3){
            setValid(true);
        }
        else{
            setValid(false);
        }
    },[newTask])
    const handleSubmit=(event)=>{
        event.preventDefault();
        const value={
            text: newTask,
            id:Math.random()
        }
        onAddTask(value)
        console.log(value)
        
    }
    return(
    <>
    Typed: {newTask}
    <form id="add task">
          <input className='task-input'
          value={newTask}
          placeholder= 'add new task'
          onChange={(event)=>setNewTask(event.target.value)}
          />
          <button className='add-task-button' onClick={handleSubmit}
            disabled={!valid} >
            Add task
          </button>
    </form>
    </>
    )
}
export default Input