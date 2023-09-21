import React from 'react'
import fireWater from '../assets/fire-water.png'
import dotupper from '../assets/dots-bg1.png'

const Card_2 = () => {
  return (
    <>
        <div className='Card'>
            <div className='Card_wrapper w-1/3 rounded-xl h-auto'>
              <img src={dotupper} alt='dot' className='' />
                <img src={fireWater} alt='fire-water' className='w-full h-auto relative -top-56 left-7' />
                <p className='bg-teal-700 w-full absolute left-0 bottom-1/2'></p>
            </div>
        </div>
    </>
  )
}

export default Card_2
