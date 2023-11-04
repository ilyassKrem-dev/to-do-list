
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
    function updateTasks(task:any) {
        // Define your logic to update the tasks here
        const taskAdd = {task:task,checked:false,id:nanoid()};
        setTasks([...tasks, taskAdd]);
        // Call setTasks with the updated tasks
    }
    useEffect(() => {
        // This code will run whenever tasks state is updated
        console.log(tasks);
    }, [tasks]);

    
    function handleChange(id:any) {
        const changeValue = tasks.map((item) => {
            if(item.id === id) {
                return {...item,checked: !item.checked}
            } else {
                return  item
            }
            
        })
        setTasks(changeValue)
    }
      const tasksElement = tasks.map((item,index) => {
            return <Tasks key={item.id} addTask={item} check={() => handleChange(item.id)} />
    })
    
    
    return (    
        <main className='h-screen w-screen flex flex-col  mx-auto  sm:max-w-3xl'>
            <Top />
            <Input update={updateTasks}/>     
            <Numtask />
            {num=== 0&&<Notask />}

            {tasksElement}
        </main>
    )
}

export default Main

