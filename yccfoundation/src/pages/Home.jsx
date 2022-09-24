import React from 'react'
import Logo from '../assets/yycnewlogo_600x600-transparent.png'
 
const Home = () => {
  return (
    <div className='flex flex-col items-center'>

    
    <div className='flex flex-col justify-center items-center w-screen md:h-fit pt-24 max-w-[1000px]'>
        <div className='h-[250px] mt-8 mb-4'> 
            <img 
                src={Logo} 
                alt='YYC Foundation logo'
                className='object-cover h-full'
            />
        </div>
        <div className='font-body flex flex-col items-center text-center'>
            <p>A 501(c)(3) NON - PROFIT ORGANIZATION</p>
            <p className='text-3xl'>Inspiring & Empowering Kids through Music</p>
            <p className=''>Your greatest struggle may lead you to your greatest gift!</p>
        </div>
    </div></div>
  )
}

export default Home