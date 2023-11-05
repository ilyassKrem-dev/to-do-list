
import { useEffect, useState } from 'react';
import Rocket from './Rocket';
export default function Input(props:any) {
    const [task , setTask] = useState({
        task: ""
    })  
    function handleChange(event:any) {
        const {name , value} = event.target
        const updateTask = {
            ...task,[name]: value
        }
        setTask(updateTask)
    }

    function addToList() {
        if (task.task !== "") {
            props.update(task.task)
            task.task = ""
        } else {
            console.log("Empty")
        }
        
    }
    useEffect(() => {
        function handleEvent(event:any)  {
            if(event.key === 'Enter') {
                addToList()
            }
        }
        document.addEventListener('keydown' , handleEvent)
        return function() {
            document.removeEventListener('keydown' , handleEvent)
        }
    },  [task])
    return (
        <>
            <div className='flex flex-col justify-center sm:items-center mt-10 w-full sm:flex-row sm-mt-20 font-bold'>
                <input className="rounded-[0.5rem] border mx-2 border-[#0D0D0D] bg-[#262626] w-30 p-3.5 sm:mr-4 sm:w-[50rem] outline-none text-white overflow-x-scroll sm:w-full" type="text" placeholder='Add a new task' name="task" value={task.task} onChange={handleChange} title='Add a new task'/>
                
                <button className='text-white text-sm mx-2 bg-[#1E6F9F] p-4 rounded-[0.5rem] cursor-pointer mt-2 sm:mt-0  flex items-center justify-center' onClick={addToList} type='button'>
                    Create 
                    <Rocket />
                </button>
            </div>
        </>
    )
}