


export default function Numtask(props:any) {

    
    return (
        <>
             <div className='mt-11 mx-3 md:mx-0 '>
                <div className='flex justify-between font-bold text-white '>
                    <div className='flex flex-row items-center'>
                        <p className='mr-2 text-[#4EA8DE]'>Tasks created</p>
                        <p className='bg-[#333333] rounded-full py-0.5 px-2'>{props.taskCreated}</p>
                    </div>
                    <div className='flex flex-row items-center'>
                        <p className='mr-2 text-[#8284FA]'>Completed</p>
                        <p className='bg-[#333333] rounded-full py-0.5 px-2'>{props.taskCompleted} of {props.taskCreated}</p>
                    </div>
                </div>
            </div>
        </>
    )
}