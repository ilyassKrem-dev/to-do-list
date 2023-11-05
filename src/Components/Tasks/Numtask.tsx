


export default function Numtask(props:any) {

    
    return (
        <>
             <div className='mt-11 mx-3 md:mx-0 '>
                <div className='flex justify-between font-bold text-white max-[350px]:flex-col min-[700px]:mr-0 max-[800px]:mx-2 '>
                    <div className='flex flex-row items-center'>
                        <p className='mr-2 text-[#4EA8DE] max-[200px]:text-[0.8rem]'>Tasks created</p>
                        <p className='bg-[#333333] rounded-full py-0.5 px-2'>{props.taskCreated}</p>
                    </div>
                    <div className='flex flex-row items-center max-[400px]:mt-3'>
                        <p className='mr-2 text-[#8284FA] max-[200px]:text-[0.8rem]'>Completed</p>
                        <p className='bg-[#333333] rounded-full py-0.5 px-2 max-[200px]:px-1'>{props.taskCompleted} of {props.taskCreated}</p>
                    </div>
                </div>
            </div>
        </>
    )
}