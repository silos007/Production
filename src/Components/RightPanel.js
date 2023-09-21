import React from 'react'
import user from '../assets/userpic.png';
import dropdown from '../assets/caret-down.svg'

const RightPanel = () => {
  return (
    <>
        <div className='w-1/2 h-14 bg-teal-700'>
            <div>
                <ul className='flex justify-center items-center'>
                    <li className='mr-4'><img src={user} alt='' className='pt-1' /></li>
                    <li className='mr-4 text-white'>User</li>
                    <li className='mr-4'><img src={dropdown} alt='' className=''  /></li>
                </ul>
            </div>
        </div>
        
    </>
  )
}

export default RightPanel
