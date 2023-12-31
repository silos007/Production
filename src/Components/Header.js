import React from 'react'
import logo from '../assets/logo.svg'

const Header = () => {
  return (
    <>
        <div className='w-full h-14 flex justify-start items-center ml-20'>
            <img src={logo} alt='..' className='h-14 bg-white w-1/6 ' />
            <div className='relative bottom-0 left-0 w-2/3'>
                <ul className='flex justify-evenly items-center text-purple-900 font-semibold text-xs ml-10'>
                    <li className='hover:text-orange-500 hover:font-bold'>Menu One</li>
                    <li className='hover:text-orange-500 hover:font-bold'>Menu Two</li>
                    <li className='hover:text-orange-500 hover:font-bold'>Menu Three</li>
                    <li className='hover:text-orange-500 hover:font-bold'>Menu Four</li>
                </ul>
            </div>
        </div>
    </>
  )
}

export default Header
