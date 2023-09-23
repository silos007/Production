import React from 'react'
import wontons from '../assets/the-wonton.png'
import dotlower from '../assets/dots-bg3.svg'

const CardA = () => {
  return (
    <>
        <div className='cardA'>
        <div className='Card_wrapper w-full md:w-1/4 lg:w-1/3 rounded-xl h-[400px] mx-auto md:ml-10 relative'>
            <img src={dotlower} alt='dot' className='relative -bottom-[100px] left-[60px] max-w-[600px] md:w-[400px] h-[200px] md:h-[300px]' />
            <img src={wontons} alt='fire-water' className='max-w-[250px] md:max-w-[340px] h-auto relative -left-1 bottom-[300px] md:mt-0' />
            <h1 className='text-xl md:text-2xl font-bold mt-6 md:mt-0'>Fire Water</h1>
            <p className='bg-teal-700 opacity-50 max-w-[300px] md:max-w-[340px] h-28 md:h-36 rounded-b-xl rounded-t-xl mt-2 md:mt-0 md:relative md:top-[10px] px-4 py-2'>dgvge fvgvfhg hvfhgvg vfghfvvgdvh vhvhg hgvfrg gcgfe cghevchg hgvghvfg hvhbvh fhbvhjg nvjrbgh </p>
        </div>
        </div>
    </>
  )
}

export default CardA
