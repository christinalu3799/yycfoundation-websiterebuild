import React from 'react'
import Logo from '../assets/yycnewlogo_600x600-transparent.png'
import BoyGuitar from '../assets/YYCBOYGUITAR3.jpeg'
import Image1 from '../assets/IMG_0020.jpeg'
import Image2 from '../assets/IMG_0053.jpeg'
import Main from '../components/Main'
import Footer from '../components/Footer'

const Home = () => {
    return (
        <div className='flex flex-col items-center relative pb-60'>
        
            <div className='flex flex-col justify-center items-center w-screen min-h-screen md:h-fit pt-24 px-4 max-w-[1000px]'>
                <div className='h-[300px] mt-8 mb-4'> 
                    <img 
                        src={Logo} 
                        alt='YYC Foundation logo'
                        className='object-cover h-full'
                    />
                </div>

                <div className='font-body flex flex-col items-center text-center'>
                    <p>A 501(c)(3) NON - PROFIT ORGANIZATION</p>
                    <p className='text-3xl sm:text-4xl my-2'>Inspiring & Empowering Kids Through Music</p>
                    <p className='text-lg sm:text-xl'>Your greatest struggle may lead you to your greatest gift!</p>
                    <button className='bg-blue p-4 rounded text-white m-4'>
                        DONATE TODAY!
                    </button>
                </div>
            </div>

            <div className='bg-blue h-fit'>  
                <p className='text-2xl font-bold text-white text-center pt-16 px-8'>
                    KEEPING MUSIC IN OUR UNDER SERVED SCHOOLS AND GIVING OUR YOUTH A BRIGHTER FUTURE. YES YOU CAN!
                </p>
                <p className='text-white text-center my-4 px-8'>
                    One person can make a difference. Imagine the possibilities if we all help..... Let's start the MOVEMENT today. Make a difference! 
                </p>
                {/* IMAGES */}
                <div className='grid grid-cols-1 md:grid-cols-3 gap-4 w-screen pb-24 pt-12 mx-auto md:px-48'>
                    <div className='h-[250px] w-[400px] mx-auto shadow-md shadow-[#4f4f4f] overflow-hidden'>
                        <img src={BoyGuitar} alt='boy playing guitar' className='object-cover w-full'/>
                    </div>
                    <div className='h-[250px] w-[400px] mx-auto shadow-md shadow-[#4f4f4f] overflow-hidden'>
                        <img src={Image1} alt='group photo with students' className='object-cover h-full'/>
                    </div>
                    <div className='h-[250px] w-[400px] mx-auto shadow-md shadow-[#4f4f4f] overflow-hidden'>
                        <img src={Image2} alt='group photo of students' className='object-cover'/>
                    </div>
                </div>
            </div>
            
            <Main />

            <Footer />
        </div>
    )
}

export default Home