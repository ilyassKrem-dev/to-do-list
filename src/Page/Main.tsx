
import Image from 'next/image';
import { Inter } from 'next/font/google'
import Top from '@/Components/Top/Top';
import clipboard from '../../public/logos/Clipboard.png'
import Input from '@/Components/Input/Input';
import { useState } from 'react';

export const inter = Inter({
    subsets: ['latin'],
    weight:['900']
})

function Main() {

    const [task , setTask] = useState(1)
    return (
        <main className='h-screen w-screen flex flex-col  mx-auto  sm:max-w-4xl'>
            <Top />
            <Input />

            
            <div className='mt-11 mx-3 sm:mx-0'>
                <div className='flex justify-between font-bold text-white '>
                    <div className='flex flex-row items-center'>
                        <p className='mr-2 text-[#4EA8DE]'>Tasks created</p>
                        <p className='bg-[#333333] rounded-full py-0.5 px-2'>0</p>
                    </div>
                    <div className='flex flex-row items-center'>
                        <p className='mr-2 text-[#8284FA]'>Completed</p>
                        <p className='bg-[#333333] rounded-full py-0.5 px-2'>0</p>
                    </div>
                </div>
            </div>
            <div className='border-t mt-5 border-[#333333]'>
                {task === 0 && <div className='p-20 flex flex-col items-center justify-center'>
                    <Image src={clipboard} alt="" />
                    <p className='text-[#808080] text-base text-center font-bold mt-2'>You don't have tasks registered yet 
                       <span className='font-normal block'> Create tasks and organize your to-do items</span> 
                    </p>
                </div>}
                <div className='flex flex-col justify-center'>
                    <div className='flex items-start bg-[#262626] border border-[#333] w-full p-4 rounded-lg '>
                        <div className="round">
                            <input type="checkbox" id="checkbox" placeholder='check'/>
                            <label htmlFor="checkbox"></label>
                        </div>
                        <p className='text-white mr-10 ml-4'>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                        <input type="checkbox" name="checkbox" id="checkbox" placeholder='check'/>
                    </div>

                </div>
            </div>
            
        </main>
    )
}

export default Main

