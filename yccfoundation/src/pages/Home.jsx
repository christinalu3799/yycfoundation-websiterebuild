import React from 'react'
import Logo from '../assets/yycnewlogo_600x600-transparent.png'
import BoyGuitar from '../assets/YYCBOYGUITAR3.jpeg'
import Image1 from '../assets/IMG_0020.jpeg'
import Image2 from '../assets/IMG_0053.jpeg'

const Home = () => {
    return (
        <div className='flex flex-col items-center'>
        
            <div className='flex flex-col justify-center items-center w-screen min-h-screen md:h-fit pt-24 max-w-[1000px]'>
                <div className='h-[300px] mt-8 mb-4'> 
                    <img 
                        src={Logo} 
                        alt='YYC Foundation logo'
                        className='object-cover h-full'
                    />
                </div>

                <div className='font-body flex flex-col items-center text-center'>
                    <p>A 501(c)(3) NON - PROFIT ORGANIZATION</p>
                    <p className='text-4xl my-2'>Inspiring & Empowering Kids through Music</p>
                    <p className='text-xl'>Your greatest struggle may lead you to your greatest gift!</p>
                    <button className='bg-blue p-2 rounded text-white m-4'>
                        DONATE TODAY!
                    </button>
                </div>
            </div>

            <div className='flex justify-center bg-blue w-screen h-[500px] py-24'>
                <div className='h-[250px] w-[300px] mx-6 overflow-hidden border-white border-4 rounded-lg'>
                    <img src={BoyGuitar} alt='boy playing guitar' className='object-cover w-full'/>
                </div>
                <div className='h-[250px] w-[300px mx-6 border-white border-4 rounded-lg'>
                    <img src={Image1} alt='group photo with students' className='object-cover h-full'/>
                </div>
                <div className='h-[250px] w-[300px mx-6 border-white border-4 rounded-lg'>
                    <img src={Image2} alt='group photo of students' className='object-cover h-full'/>
                </div>
            </div>
        </div>
    )
}

export default Home