
import Image from 'next/image';
import rocketimg from '../../../public/logos/rocket.svg'

export default function Top() {

    return (
        <>
            <div className="flex  justify-center items-center ">
                <div className='flex flex-col items-center mt-10 sm:mt-20 sm:flex-row'>
                    <Image src={rocketimg} className="mr-3" alt="Rocket img" />
                    <p className="text-[#4EA8DE] text-3xl sm:text-4xl font-[900] text-center">to
                        <span className="text-[#5E60CE]">do</span>
                    </p>
                </div>    
            </div>
        </>
    )
}