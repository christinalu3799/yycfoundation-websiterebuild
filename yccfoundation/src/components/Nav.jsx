import React, {useState} from 'react'
import NavBtn from './NavBtn'
import Logo from '../assets/yycnewlogo_600x600-icon-whitebg.jpeg'
import { Link } from "react-router-dom";
import {FaBars, FaTimes} from 'react-icons/fa'

const Nav = () => {
    // toggle hamburger menu on click
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)
    return (
        <nav className='justify-between fixed flex sm:justify-center items-center px-4 top-0 bg-coral text-white w-screen h-24 z-10'>
            
            {/* LOGO IN NAV BAR - redirects to home page on click */}
            <Link to='/' >
                <div className='h-[80px] w-[80px]'>
                    <img src={Logo} alt='YYC logo' className='object-cover h-full w-full rounded'/>
                </div>
            </Link>

            {/* NAV BAR LINKS */}
            <div className='hidden md:flex flex-col justify-center items-center flex-wrap'>

                <ul className='hidden md:flex items-center'>
                    <NavBtn navItem = {'Home'} linkTo={'/'}/>
                    <NavBtn navItem = {'News'} linkTo={'/news'}/>
                    <NavBtn navItem = {'Our Mission'} linkTo={'/mission'}/>
                    <NavBtn navItem = {'Programs'} />
                    <NavBtn navItem = {'Schools'} />
                    <NavBtn navItem = {'Volunteer'} />
                    <NavBtn navItem = {'Testimonials'} />
                    <NavBtn navItem = {'Individual Giving'} />
                </ul>
                <ul className='hidden md:flex items-center'>
                    <NavBtn navItem = {'Founder'} />
                    <NavBtn navItem = {'Board'} />
                    <NavBtn navItem = {'Sponsors'} />
                    <NavBtn navItem = {'Become a Corporate Sponsor'} />
                    <NavBtn navItem = {'YYC Donors'} />
                    <NavBtn navItem = {'Links'} />
                </ul>
            </div>

            <button className=' hidden md:flex bg-white text-[#000000] text-center rounded w-fit'>
                <NavBtn navItem = {'Contact Us'} />
            </button>

            {/* hamburger */}
            <div onClick={handleClick} className='sm:hidden z-10'>
                {!nav ? <FaBars color='#ffffff'/> : <FaTimes color='#ffffff'/>}
            </div>
        </nav>
    )
}
export default Nav