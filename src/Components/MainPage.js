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
import CardA from './CardA';
import leaf from '../assets/leafe.png'
import spinech from '../assets/cauliflower.png';
import dotsp from '../assets/dots-bg3.svg'
import FoodCrds from './FoodCrds';
import googlePlay from '../assets/google-play-badge.png'
import appStore from '../assets/App_Store_Badge.png'
import phonephoto from '../assets/app-screen.png'
import fb from '../assets/fb.svg';
import ln from '../assets/lin.svg';
import insta from '../assets/insta.svg';
import bottomleaf from '../assets/footer-leaf.png';
import arroesearch from '../assets/arrow.svg'

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
            <div className='title_2_section border flex flex-col md:flex-row items-center justify-center pt-10 md:pt-0 md:items-start text-center md:text-left'>
              <p className='w-3 h-12 bg-teal-900 mb-4 md:mb-0'></p>
              <div className=' flex justify-evenly items-center'>
                  <h1 className='font-bold text-xl mb-4 space-x-6'>Some Top Restaurants For Dining in and out!</h1>
                  <p className='text-gray-500 text-sm md:text-md lg:text-lg space-x-6'>ddfgfg fvgvfrh ygvf hdfvhf fbbfyhef eyhbfhyfvb bfhbfh brfhbhj jbhbrtv bfujbu bhebfyu hbrbubg bf hbbrfhbjh hfbhrb jhbfhbgvhhh hbfhb rtbgh bfvufb</p>
              </div>
            </div>
            <div className='card_2_section border border-teal-800 max-w-[1024px] h-screen flex mt-20'>
              <Card className=''/>
              <CardA className=''/>
            </div>
            <div className='advanced_booking_section '>
              <div className='max-w-[1024px] md:max-w-[786px] lg:max-w-[1024px] bg-gray-100 flex items-center'>
                <img src={leaf} alt='leafe' className='max-w-[500px] h-[900px] relative -top-[130px] right-[120px]' />
                <div className='bg-green-300 text-purple-900 max-w-1/2 h-auto relative -top-20 ledt-10'>
                  <p></p>
                  <h1>Advanced Booking</h1>
                  <input vtype='text' className='border border-gray-300' placeholder='Search' />
                  <ul className='flex justify-evenly items-center'>
                    <div>
                      <h1>Date</h1>
                      <li>22.09.23</li>
                    </div>
                    <div>
                      <h1>Time</h1>
                      <li>09.23</li>
                    </div>
                    <div>
                      <h1>Guests</h1>
                      <li>2 people</li>
                    </div>
                  </ul>
                </div>
                <div className='flex'>
                <img src={dotsp} alt='dot' className='h-auto max-w-[250px] relative -top-44 left-20' />
                <img src={spinech} alt='spinech' className='max-w-[300px] h-auto' />
                </div>
              </div>
            </div>
            <div className='our_services_section text-center md:text-left'>
                <div className='flex flex-col md:flex-row justify-evenly items-center'>
                    <p className='bg-teal-900 w-3 h-14 mb-4 md:mb-0'></p>
                    <div className='text-center md:text-left'>
                        <h1 className='text-2xl md:text-4xl font-bold mb-4'>Our Services</h1>
                        <p className='text-sm md:text-md lg:text-lg mb-6'>fghfv hfjhfvbhj jgbjjg jbkjnbj jfbjfgb hjbfb gfhfv hjfvhg hvhv hgyu gvgcf gftrc ghgrbg bhgt ghgrbgdwgfdgvf gfhfvh bghfb hghub hg hfgug hgbrhbng hb htrb</p>
                    </div>
                </div>
            </div>
            <div className='advanced_table_booking_section border border-b-2 p-4 md:p-8 text-center md:text-left'>
                <img src='' alt='dot_bg' className='hidden md:block' />
                <div className='flex flex-col md:flex-row justify-evenly items-center'>
                    <div className='mb-6 md:mb-0'>
                        <img src='' alt='' className='' />
                        <div className='text-xl md:text-2xl font-bold mb-2'>
                            <h1>Food For Free ----24/7</h1>
                        </div>
                        <p className='text-sm md:text-md lg:text-lg mb-4'>dcgsvc cvghdvch hjbvhfdv hbvjhdbv jhb bcjhb bfjb jfbjbj jbrjj fbjref hbrhg djfbju vfgevf hbfre hjfbge hjegfeg hfregurf hjegfeu</p>
                    </div>
                    <div className='mb-6 md:mb-0'>
                        <div className='text-xl md:text-2xl font-bold mb-2'>
                            <h1>Advanced Table Booking</h1>
                        </div>
                        <p className='text-sm md:text-md lg:text-lg mb-4'>dcgsvc cvghdvch hjbvhfdv hbvjhdbv jhb bcjhb bfjb jfbjbj jbrjj fbjref hbrhg djfbju vfgevf hbfre hjfbge hjegfeg hfregurf hjegfeu</p>
                        <img src='' alt='' className='' />
                    </div>
                    <div>
                        <img src='' alt='' className='' />
                        <div className='text-xl md:text-2xl font-bold mb-2'>
                            <h1>Free Home Delivery at Your Doorsteps</h1>
                        </div>
                        <p className='text-sm md:text-md lg:text-lg mb-4'>dcgsvc cvghdvch hjbvhfdv hbvjhdbv jhb bcjhb bfjb jfbjbj jbrjj fbjref hbrhg djfbju vfgevf hbfre hjfbge hjegfeg hfregurf hjegfeu</p>
                    </div>
                </div>
            </div>
            <div className='explore_our_foods_section text-center md:text-left px-4 md:px-0'>
                <h1 className='text-2xl md:text-3xl lg:text-4xl font-bold mb-4'>Explore our foods</h1>
                <p className='text-sm md:text-md lg:text-lg mb-6'>dvcb dbvhdbv bfhjbfv jhfbvhjdfvb bdfbvhbv vdfvbhdvb hjdbfhj </p>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                    <FoodCrds />
                    <FoodCrds />
                    <FoodCrds />
                    <FoodCrds />
                    <FoodCrds />
                    <FoodCrds />
                </div>
            </div>
            <div className='download_app_section text-center md:text-left'>
                <div className='download_app_wrapper flex flex-col md:flex-row justify-center md:justify-evenly items-center'>
                    <div className='mb-8 md:mb-0'>
                        <div className='mb-4'>
                            <h1 className='text-2xl md:text-3xl lg:text-4xl font-bold mb-2'>Download App for more Exciting deals</h1>
                        </div>
                        <p className='text-sm md:text-md lg:text-lg mb-4'>vdhgd hggdv hdgvdhs hdgfyv dhvfge ygfuygv fhegfge fdhg ghgfev hgegvfhg fghefgf fhgefge f tfgtstdcd fytv weeftv vygfter vyfgtv grefrv tfyre</p>
                        <div className='flex justify-center md:justify-start items-center'>
                            <img src={googlePlay} alt='google_play' className='mr-4 md:mr-7' />
                            <img src={appStore} alt='app_store' className='mr-4' />
                        </div>
                    </div>
                    <div>
                        <img src={phonephoto} alt='phone_img' className='max-w-[300px] h-auto' />
                    </div>
                </div>
            </div>
            <div className='get_notified_section'>
                <div className='get_notified_wrapper flex flex-col md:flex-row justify-center md:items-center text-center md:text-left'>
                  <img src={bottomleaf} alt='leaf' className='max-w-[400px] h-auto mb-5 md:mb-0 md:mr-10' />
                <div>
                  <h1 className='text-2xl md:text-3xl lg:text-4xl text-purple-950 mb-4'>Get notified <br /> about new amazing products</h1>
                  <p className='text-sm md:text-md lg:text-lg mb-4'>gvh vfgv dfvhgf vvh hgfher hergfhe bn fgf hgfvghed hfh g bjgfr hfrb jhgfhrb hgfgrhfgyu dgb hvhrbhj jhgbjht hjtgbh htgb n</p>
                <div className='mb-3 flex items-center'>
                  <input type='text' className='w-full md:w-[300px] px-4 py-3 rounded-full shadow-2xl shadow-gray-700' placeholder='Search here...' />
                  <img src={arroesearch} alt='searcharrow' className='md:relative top-1 left-[-72px]' />
                </div>
                  <ul className='flex justify-center md:justify-start items-center text-sm font-semibold opacity-60 space-x-3'>
                      <li>Product</li>
                      <li>Company</li>
                      <li>Learn More</li>
                      <li>Get in touch</li>
                  </ul>
            </div>
</div>

                <div>
                      <ul className='flex justify-end items-center space-x-4'>
                        <li><img src={fb} alt='fb_img' className='' /></li>
                        <li><img src={ln} alt='fb_img' className='' /></li>
                        <li><img src={insta} alt='fb_img' className='' /></li>
                        <li><p>vchdvhc cdhgvch</p></li>
                      </ul>
                  </div>
            </div>
        </div>
    </div>

</>
  )
}

export default MainPage
