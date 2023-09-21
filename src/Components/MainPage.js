import React from 'react';
import Header from './Header';
import RightPanel from './RightPanel';
import dot from '../assets/dots-bg.svg';
import cauliflower from '../assets/leafe.png';
import plate from '../assets/Pngtree-delicious-food.png';
import foodImg from '../assets/food.svg'
import location from '../assets/place-holder.svg';
import leftArrow from '../assets/left-arrow.svg';
import rightArrow from '../assets/right-arrow.svg';
import Card from './CardB';

const MainPage = () => {
  return (
    <>
    <div className=' h-auto mx-auto'>
        <div className='main-wrapper'>
            <div className='flex justify-center items-center'>
                <Header />
                <RightPanel />
            </div>
            <div className='main_body_content w-full h-full relative top-0 left-0'>
                <div className='top_1_section flex'>
                    <div className='left_title_section w-3/4 relative top-0 left-20'>
                        <img src={foodImg} alt='Food' className='relative top-20 left-0 w-1/3 h-20' />
                        <h1 className='w-full h-auto relative left-0 top-20 text-4xl font-bold text-purple-950'>Discover Restorants
                        <br />& Delicious Food</h1>
                        <div className=''>
                            <input type='text' placeholder='Search' className='w-1/3 mt-7 drop-shadow-xl pl-5 h-10 relative left-0 top-20' />
                            <button className='relative -left-20 top-20 w-20 rounded-tl-full h-9 bg-green-600'>Go</button>
                        </div>
                    </div>
                    <div className='plate_img_section w-1/3 h-full bg-teal-700 '>
                        <img src={dot} alt='dot' className='w-full h-1/4 relative top-14 right-full ml-10' />
                        <img src={cauliflower} alt='cauliflower' className='w-1/3 h-auto -ml-40 absolute bottom-1/3 -mt-20 right-1/5' />
                        <img src={plate} alt='plate' className='w-1/2 h-auto absolute top-1/4 -mt-28 right-1/4 -mr-40' />
                    </div>
                </div>
                <div className='button_arrow_section flex justify-between mx-auto items-center relative -left-10 bottom-28'>
                  <div className='flex'>
                    <button className='w-40 rounded-r-full h-auto relative top-0 -left-10 bg-teal-900 text-white'>Indore</button>
                    <img src={location} alt='location' className='h-auto relative top-0 -left-48' />
                  </div>
                  <div className='flex'>
                    <img src={leftArrow} alt='leftArrow' className='mr-10 w-12' />
                    <img src={rightArrow} alt='rightArrow' className='w-14' />
                  </div>
                </div>
            </div>
            <div className='title_2_section border flex justify-start items-center pt-10 relative bottom-0 ml-24 '>
                <p className='w-3 h-12 bg-teal-900 mr-10'></p>
                <h1 className='font-bold text-2xl w-1/3'>Some Top Restorants For<br />
                Dining in and out!</h1>
                <p className=' w-2/3 h-auto relative top-0 left-40 font-serif text-gray-500 text-md'>ddfgfg fvgvfrh ygvf hdfvhf fbbfyhef eyhbfhyfvb<br />
                bfhbfh brfhbhj jbhbrtv bfujbu bhebfyu hbrbubg bf<br/>
                hbbrfhbjh hfbhrb jhbfhbgvhhh hbfhb rtbgh bfvufb</p>
            </div>
            <div className='card_2_section border border-teal-800 mt-5 w-full h-auto p-3'>
              <Card />
            </div>
            <div className=''>
              {/* <Cb /> */}
            </div>
      
        </div>
    </div>

</>
  )
}

export default MainPage
