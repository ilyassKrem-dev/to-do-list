import Image from 'next/image';
import trashsvg from '../../../public/logos/trash.svg'

export default function Tasks(props:any) {

   
    return (
        <>
            <div className='flex flex-col mx-3 md:mx-0 mt-5'>
                    <div className='flex items-start bg-[#262626] border border-[#333] w-full p-4 rounded-lg  '>
                        <div className="round w-[1.25rem] flex justify-center">
                            <input onChange={props.check} checked={props.addTask.checked} type="checkbox" id={props.addTask.id}  placeholder='check'/>
                            <label htmlFor={props.addTask.id}></label>
                        </div>
                        <p className={`mr-10 ml-3 flex-1 -translate-y-[0.2rem] ${props.addTask.checked ? "line-through text-[#808080]":"text-white"} max-[220px]:mr-1 max-[220px]:overflow-x-scroll` }>{props.addTask.task}</p>
                
                        <Image onClick={props.remove} className='w-3 h-3 sm:w-4 sm:h-4 cursor-pointer' src={trashsvg} alt="" />
                        
                    </div>

                </div>
        </>
    )
}