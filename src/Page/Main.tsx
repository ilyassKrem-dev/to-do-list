
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
    const isLocalStorageAvailable = typeof localStorage !== 'undefined';

    const [tasks , setTasks] = useState<Task[]>([])
    const [taskCreated , setTaskCreated] = useState(0)
    const [taskCompleted , setTaskCompleted] = useState(0)

    useEffect(() => {
        if (isLocalStorageAvailable) {
            const storedTasks = localStorage.getItem('task');
            const initialTasks = storedTasks ? JSON.parse(storedTasks) : [];
    
            const storedTasksCreated = localStorage.getItem('taskCreated');
            const initialTasksCreated = storedTasksCreated ? JSON.parse(storedTasksCreated) : 0;
    
            const storedtaskCompleted = localStorage.getItem('taskCompleted');
            const initialtaskCompleted = storedtaskCompleted ? JSON.parse(storedtaskCompleted) : 0;
    
            setTasks(initialTasks);
            setTaskCreated(initialTasksCreated);
            setTaskCompleted(initialtaskCompleted);
        }
    }, []);

    function updateTasks(task:any) {
        
        const taskAdd = {task:task,checked:false,id:nanoid()};

        const updatedTasks = [taskAdd, ...tasks];

        setTasks(updatedTasks);
        setTaskCreated(taskCreated+1)
    }

    useEffect(() => {
        localStorage.setItem("task" , JSON.stringify(tasks))
        localStorage.setItem("taskCreated" , JSON.stringify(taskCreated))
        localStorage.setItem("taskCompleted" , JSON.stringify(taskCompleted))
    } , [tasks , taskCreated , taskCompleted])

    
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
    
    function removeTask(id:any) {
        const removedList = tasks.filter(task => task.id !== id)
        const removedTask = tasks.find((task) => task.id === id);
        setTasks(removedList)
        setTaskCreated(taskCreated-1)
        let completedCount = taskCompleted;

        if (removedTask && removedTask.checked) {
            completedCount--; 
        }

        setTaskCompleted(completedCount);
        
        
    }
      const tasksElement = tasks.map((item) => {
            return <Tasks key={item.id} addTask={item} check={() => handleChange(item.id)} remove={() =>removeTask(item.id)}/>
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

