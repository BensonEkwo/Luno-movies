import React from "react"
import action from "/src/images/ai-generated-8172236_640.png"
import adventure from "/src/images/ai-generated-8455007_640.jpg"
import cartoon from "/src/images/ai-generated-8708710_1280.jpg"
import family from "/src/images/ai-generated-8793499_1280.png"
import horror from "/src/images/aliens-4954404_1280.png"
import thriller from "/src/images/burglary-2022162_1280.png"
import crime from "/src/images/business-man-6640060_1280.jpg"
import mystery from "/src/images/church-157066_1280.png"
import comedy from "/src/images/clown-8807958_1280.jpg"
import Fantasy from "/src/images/fantasy-7464308_1280.png"
import romance from "/src/images/couple-7737589_1280.png"
import war from "/src/images/soldiers-311384_1280.png"
import documnetry from "/src/images/istockphoto-1140019778-1024x1024.jpg"
import Western from "/src/images/man-and-horses-2389833_1280.png"
import history from "/src/images/julius-caesar-4877717_1280.png"
import scienceFiction from "/src/images/science-fiction-1828602_1280.png"
import drama from "/src/images/theater-158172_1280.png"
import { Link } from "react-router-dom";

export default function Categories() {
  
  return (
    <div className='flex flex-col items-center justify-center space-y-8 ' >
      <div className='text-xl font-semibold'><h3>Categories</h3></div>
      <div className='grid grid-cols-3  md:grid-cols-4 gap-2 mx-2'>
          <Link to='/Categories/drama'>
        <div className='relative '>
          <img className='h-[140px] md:h-[265px] w-[338px]' src={drama} alt='drama'/>
          <h3 className='absolute md:left-32 left-10 bottom-2 md:text-lg text-md font-semibold z-100 '>Drama</h3>
        </div>
          </Link>
          <Link to='/Categories/comedy'>
        <div className='relative'>
          <img className=' h-[140px]  md:h-[265px] w-[338px]' src={comedy} alt='comedy'/>
          <h3 className='absolute md:left-32 left-8 bottom-3 md:text-lg text-md font-semibold '>Comedy</h3>
        </div>
          </Link>
          <Link to='/Categories/action'>
        <div className='relative'>
          <img className='h-[140px] md:h-[265px] w-[338px]' src={action} alt='action'/>
          <h3 className='absolute md:right-36 right-10 bottom-3 md:text-lg text-md font-semibold '>Action</h3>
        </div>
          </Link>
        <Link to='/Categories/crime'>
        <div className='relative'>
          <img className='h-[140px] md:h-[265px] w-[338px]' src={crime} alt='crime'/>
          <h3 className='absolute md:left-32 left-10 bottom-1 md:text-lg text-mdfont-semibold text-slate-800 '>Crime</h3>
        </div>
        </Link>
        <Link to='/Categories/fantasy'>
        <div className='relative'>
          <img className='h-[140px] md:h-[265px] w-[338px]' src={Fantasy} alt='fantasy'/>
          <h3 className='absolute md:left-32 left-8 bottom-3 md:text-lg text-md font-semibold '>Fantasy</h3>
        </div>
        </Link>
        <Link to='/Categories/history'>
        <div className='relative'>
          <img className='h-[140px] md:h-[265px] w-[338px]' src={history} alt='history'/>
          <h3 className='absolute md:right-36 right-8 bottom-3 md:text-lg text-md font-semibold '>History</h3>
        </div>
        </Link>
        <Link to='/Categories/horror'>
        <div className='relative'>
          <img className='h-[140px] md:h-[265px] w-[338px]' src={horror} alt='horror'/>
          <h3 className='absolute md:left-32 left-10 bottom-3 tmd:text-lg text-md font-semibold '>Horror</h3>
        </div>
        </Link>
        <Link to='/Categories/documentary'>
        <div className='relative'>
          <img className='h-[140px] md:h-[265px] w-[338px]' src={documnetry} alt='documentry'/>
          <h3 className='absolute md:left-32 right-2 bottom-3 md:text-lg text-md font-semibold '>Documentary</h3>
        </div>
        </Link>
        <Link to='/Categories/war'>
        <div className=' bg-gray-500 relative'>
          <img className='h-[140px] md:h-[265px] w-[338px]' src={war} alt='war'/>
          <h3 className='absolute md:left-32 right-12 bottom-3 md:text-lg text-md font-semibold '>War</h3>
        </div>
        </Link>
        <Link to='/Categories/mystery'>
        <div className='relative'>
          <img className='h-[140px] md:h-[265px] w-[338px]' src={mystery} alt='mystery'/>
          <h3 className='absolute md:left-32 left-8 bottom-3 md:text-lg text-md font-semibold '>Mystery</h3>
        </div>
        </Link>
        <Link to='/Categories/romance'>
        <div className='relative'>
          <img className='h-[140px] md:h-[265px] w-[338px]' src={romance} alt='romance'/>
          <h3 className='absolute md:left-32 left-8 md:bottom-1 bottom-0 d:text-lg text-md text-black font-semibold '>Romance</h3>
        </div>
        </Link>
        <Link to='/Categories/adventure'>
        <div className='relative'>
          <img className='h-[140px] md:h-[265px] w-[338px]' src={adventure} alt='adventure'/>
          <h3 className='absolute md:left-32 right-6 bottom-3 md:text-lg text-md font-semibold '>Adventure</h3>
        </div>
        </Link>
        
        <Link to='/Categories/western'>
        <div className='relative'>
          <img className='h-[140px] md:h-[265px] w-[338px]' src={Western} alt='western'/>
          <h3 className='absolute md:left-32 left-8 bottom-1 md:text-lg text-md font-semibold '>Western</h3>
        </div>
        </Link>
        <Link to='/Categories/family'>
        <div className='relative'>
          <img className='h-[140px] md:h-[265px] w-[338px]' src={family} alt='family'/>
          <h3 className='absolute md:left-36 right-8 bottom-1 md:text-lg text-md font-semibold '>Family</h3>
        </div>
        </Link>
        <Link to='/Categories/thriller'>
        <div className='relative'>
          <img className='h-[140px] md:h-[265px] w-[338px]' src={thriller} alt='thriller'/>
          <h3 className='absolute md:left-32 left-8 bottom-2 md:text-lg text-md font-semibold '>Thriller</h3>
        </div>
        </Link>
        <Link to='/Categories/sci-fi'>
        <div className='relative'>
          <img className='h-[140px] md:h-[265px] w-[338px]' src={scienceFiction} alt='acienceFiction'/>
          <h3 className='absolute md:left-32 left-8 bottom-1 md:text-lg text-md font-semibold '>Sci-Fi</h3>
        </div>
        </Link>
      </div>
    </div>
  )
}
