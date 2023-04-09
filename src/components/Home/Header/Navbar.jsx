import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { HiChevronDoubleRight } from 'react-icons/hi';
import "./Navbar.css"
import logo from '../../../assets/images/logo.png';

const Navbar = () => {
    const [stickyClass, setStickyClass] = useState('');
    useEffect(() => {
        window.addEventListener('scroll', stickNavbar);
        return () => window.removeEventListener('scroll', stickNavbar);
    }, []);

    const stickNavbar = () => {
        if (window !== undefined) {
            let windowHeight = window.scrollY;
            // window height changed for the demo
            if (windowHeight > 100) {
                document.getElementById('navbar').classList.add('sticky')
                setStickyClass('fixed')
            } else {
                setStickyClass('')
            }

        }
    };

    return (
        <header className={`text-gray-400 bg-[#454545] w-full body-font ${stickyClass} z-50`} id="navbar">
            <div className="mx-auto flex p-1 items-center">
                <Link to="/" className="flex title-font font-medium items-center text-gray-900 xl:ml-24 lg:ml-24 md:ml-4 ">
                    <img className='w-[55%]' src={logo} alt="logo" />
                </Link>
                <div className=" md:ml-auto hidden xl:flex lg:flex md:flex sm:hidden w-[28%] xl:w-[28%] lg:w-[28%] md:w-[31%]">
                    <nav className="flex flex-wrap items-center text-base justify-center">
                        <a href='https://app.toolsfix.net/signup' className="mr-4 text-xl font-semibold cursor-pointer p-2 text-gray-300 hover:text-white hover:border-b-2 hover:border-white" id='btn'>Buy Subscriptions</a>
                        <a href='https://app.toolsfix.net/member' className=" mr-10 text-xl font-semibold cursor-pointer p-2 text-gray-300 hover:text-white hover:border-b-2 hover:border-white" id='btn'>Member Area</a>
                    </nav>
                </div>
                <a href='https://app.toolsfix.net/signup' className="mr-2 xl:mr-16 lg:mr-16 md:mr-2 sm:mr-2 inline-flex items-center text-[#454545] bg-[#FFFEFA] border-4 border-white p-2 px-0 xl:px-5 lg:px-5 md:px-5 sm:px-0 focus:outline-none hover:text-[#FFFEFA] hover:bg-[#454545] rounded-full text-lg xl:text-xl lg:text-xl md:text-xl sm:text-lg font-semibold md:mt-0 w-[50%] xl:w-[15%] lg:w-[15%] md:w-[26%] sm:w-[51%] justify-center">
                    Signup Today <span><HiChevronDoubleRight /></span>
                </a>
            </div>
        </header>
    )
}

export default Navbar