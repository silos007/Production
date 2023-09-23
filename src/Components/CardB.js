import React from 'react'
import fireWater from '../assets/fire-water.png'
import dotupper from '../assets/dots-bg1.png'

const Card_2 = () => {
  return (
    <>
        <div className='CardB'>
            <div className='Card_wrapper max-w-[800px] md:w-1/2 lg:w-1/3 rounded-xl h-[400px] mx-auto'>
              <img src={dotupper} alt='dot' className='relative -top-10 -left-40 max-w-[300px] md:w-[300px] h-[200px] md:h-[300px]' />
              <img src={fireWater} alt='fire-water' className='max-w-[250px] md:max-w-[340px] h-auto relative -left-28 bottom-[300px] md:mt-0' />
              <h1 className='text-xl md:text-2xl font-bold mt-6'>Fire Water</h1>
              <p className='bg-teal-700 opacity-50 max-w-[250px] md:max-w-[340px] h-28 md:h-36 rounded-b-xl rounded-t-xl mt-2 md:mt-0 px-4 py-2'>dgvge fvgvfhg hvfhgvg vfghfvvgdvh vhvhg hgvfrg gcgfe cghevchg hgvghvfg hvhbvh fhbvhjg nvjrbgh </p>
            </div>

        </div>
    </>
  )
}

export default Card_2
