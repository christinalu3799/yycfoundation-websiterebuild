import React from 'react'
import NavBtn from './NavBtn'
import Logo from '../assets/yycnewlogo_600x600-icon-whitebg.jpeg'
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className='fixed flex justify-center items-center px-4 top-0 bg-coral text-white w-screen h-24'>
        
        <Link to='/' className='w-[80px]'>
            <img src={Logo} alt='YYC logo' className='object-cover'/>
        </Link>
        <ul className='hidden md:flex justify-center flex-wrap items-center'>
            <NavBtn navItem = {'Home'} linkTo={'/'}/>
            <NavBtn navItem = {'News'} linkTo={'/news'}/>
            <NavBtn navItem = {'Our Mission'} linkTo={'/mission'}/>
            <NavBtn navItem = {'Programs'} />
            <NavBtn navItem = {'Schools'} />
            <NavBtn navItem = {'Individual Giving'} />
            <NavBtn navItem = {'Testimonials'} />
            <NavBtn navItem = {'Founder'} />
            <NavBtn navItem = {'Board'} />
            <NavBtn navItem = {'Sponsors'} />
            <NavBtn navItem = {'Become a Corporate Sponsor'} />
            <NavBtn navItem = {'Volunteer'} />
            <NavBtn navItem = {'YYC Donors'} />
            <NavBtn navItem = {'Contact Us'} />
            <NavBtn navItem = {'Links'} />
        </ul>
    </nav>
  )
}
export default Nav