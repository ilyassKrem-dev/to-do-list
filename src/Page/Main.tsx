
import Top from '@/Components/Top/Top';
import Input from '@/Components/Input/Input';
import { useEffect, useState } from 'react';
import Tasks from '@/Components/Tasks/Tasks';
import Notask from '@/Components/Tasks/Notask';
import Numtask from '@/Components/Tasks/Numtask';
import { nanoid } from 'nanoid';

interface Task {
    task: string;
    checked: boolean;
    id: string;
  }
function Main() {
    const [num , setNum] = useState(1)
    const [tasks , setTasks] = useState<Task[]>([])
    const [taskCreated , setTaskCreated] = useState(0)
    const [taskCompleted , setTaskCompleted] = useState(0)
    function updateTasks(task:any) {
        
        const taskAdd = {task:task,checked:false,id:nanoid()};

        const updatedTasks = [taskAdd, ...tasks];

        setTasks(updatedTasks);
        setTaskCreated(taskCreated+1)
    }
    useEffect(() => {
        console.log(tasks);
        console.log(taskCompleted)
    }, [tasks]);

    
    function handleChange(id:any) {
        const changeValue = tasks.map((item) => {
            if(item.id === id) {
                return {...item,checked: !item.checked}
            } else {
                return  item
            }
            
        })
        const completedCount = changeValue.filter((item) => item.checked === true).length;
        setTasks(changeValue)
        setTaskCompleted(completedCount)
        
    }
      const tasksElement = tasks.map((item,index) => {
            return <Tasks key={item.id} addTask={item} check={() => handleChange(item.id)} />
    })
    
    
    return (    
        <main className='h-screen w-screen flex flex-col  mx-auto  sm:max-w-3xl'>
            <Top />
            <Input update={updateTasks}/>     
            <Numtask taskCreated={taskCreated} taskCompleted={taskCompleted}/>
            {tasks.length === 0 &&<Notask />}

            {tasksElement}
        </main>
    )
}

export default Main

