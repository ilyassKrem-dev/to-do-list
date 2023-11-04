import Image from 'next/image';
import clipboard from '../../../public/logos/Clipboard.png'

export default function Notask() {


    return (
        <>
            <div className='border-t mt-5 border-[#333333] '>
                <div className='p-20 flex flex-col items-center justify-center'>
                    <Image src={clipboard} alt="" />
                    <p className='text-[#808080] text-base text-center font-bold mt-2'>You don't have tasks registered yet 
                       <span className='font-normal block'> Create tasks and organize your to-do items</span> 
                    </p>
                </div>
            </div>
        </>
    )
}