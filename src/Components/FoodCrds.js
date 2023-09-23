import React from 'react';
import cardimg1 from '../assets/ham-sandwich.png'

const FoodCrds = () => {
  return (
    <>
        <div className='food_card_container'>
            <div className='card_content m-3 shadow-lg p-4'>
                <img src={cardimg1} alt='ham_img' className='w-full mb-4' />
                <div className='text-center md:text-left'>
                    <div className='mb-2 flex justify-around items-center'>
                        <small className='block'>Ham Sandwich</small>
                        <strong className='block'>$10.50</strong>
                    </div>
                    <p className='text-sm md:text-base'>gsdcghdv hfvghd hfvbfbvf hdfvbhjdbv cvdhfcbjfb hjbfhjbv dfbjhdfb</p>
                </div>
            </div>

        </div>
    </>
  )
}

export default FoodCrds
