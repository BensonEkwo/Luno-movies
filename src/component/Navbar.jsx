import { RiMovie2Fill } from "react-icons/ri";
import { IoIosSearch } from "react-icons/io";
import { IoMdHome } from "react-icons/io";
import { BiSolidCategory } from "react-icons/bi";
import { IoAddSharp } from "react-icons/io5";
import { IoMenu } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { PiTelevisionLight } from "react-icons/pi";
import { Link } from "react-router-dom";
import React,{ useContext, useState } from "react";
import { useRef } from "react";
import { myContext } from "@/Main";
import { IoHome } from "react-icons/io5";
import { HiMiniQueueList } from "react-icons/hi2";
import { PiTelevisionSimple } from "react-icons/pi";
  

const Navbar = () => {
  const [isOpen,SetIsOpen]=useState(false) 
  const [focus,setFocus]=useState(false)
  const {value3,value4}=useContext(myContext)
  const [isSearchOpen,setIsSearchOpen]=value4
  const [value,setValue]=value3
  const valueRef=useRef(null)
  
  const focusin=(e)=>{
    e.preventDefault()
    setFocus(true);
    return setIsSearchOpen(true)
  }
  const handleSearch=(e)=>{
    e.preventDefault()
    setIsSearchOpen(!isSearchOpen)
    setFocus(!focus)
    return setValue('')
  };

  return (
    <div className="flex top-0">
      <nav className="top-0 mt-0 pt-4 z-[100] pb-6 fixed flex  w-full justify-between mx-auto items-center flex-wrap bg-blur backdrop-blur-md bg-opacity-50 rounded-b-sm">
        <div className=" flex items-center mx-2 md:mx-4">
          <span className="text-3xl md:text-4xl">
            <RiMovie2Fill />
          </span>
          <span className="inline-block font-semibold text-xl">luno</span>
          <div className="ml-4 md:ml-8">
            <form  onFocus={focusin}  className={`group relative rounded-xl py-1 md:py-2 px-2 md:min-w-[50vw] max-w-[50vw] bg-slate-700  items-start flex justify-between leading-tight ${focus&&'border-2 border-slate-200 '} `}>
              <input
                className={`focus:outline-none bg-transparent min-w-full text-sm font-normal${focus&&' scale-105 transition-all ease-in-out'}`}
                type="text"
                value={value}
                placeholder="search"
                onChange={(e)=>setValue(e.target.value)}
                ref={valueRef}
              />
              
              
               {isSearchOpen? <button onClick={handleSearch} className="absolute right-2 bg-slate-600 rounded-full text-sm">
                <IoMdClose/></button>:<button onClick={focusin} className="absolute right-2 text-sm">
              <IoIosSearch />
              </button>
                 } 
              
            </form>
          </div>
        </div>
        <div className="hidden md:flex mr-auto ml-14 items-center space-x-4 ">
          <Link to='/' className="flex text-xl hover:text-gray-500 hover:scale-110 transition-transform ease-in-out duration-300 ">
            <IoMdHome />
            <span className="text-sm ml-1">Home</span>
          </Link>
          <Link to='/Categories' className="flex text-xl ml-1 hover:text-gray-500 hover:scale-110 transition-transform ease-in-out duration-300">
            <BiSolidCategory />
            <span className="text-sm ml-1">Categories</span>
          </Link>
          <Link to='/Watchlist' className="flex text-xl ml-1 hover:text-gray-500 hover:scale-110 transition-transform ease-in-out duration-300">
            <IoAddSharp />
            <span className="text-sm">Watchlist</span>
          </Link>
          <Link to='/Tvshows' className="flex text-xl ml-1 hover:text-gray-500 hover:scale-110 transition-transform ease-in-out duration-300">
          <PiTelevisionLight />
            <span className="text-sm">TvShows</span>
          </Link>
        </div>
        <div className="md:hidden flex mx-auto mr-4">
          <button onClick={()=>SetIsOpen(!isOpen)} className="text-3xl transition-all ease-out">
            {isOpen ? <IoMdClose /> : <IoMenu />}
          </button>
        </div>
      </nav>
     {isOpen&&
       <div className={`md:hidden fixed h-screen bg-slate-900/90 min-w-[50vw] flex flex-col  items-center right-0 p-4 top-7 mt-4 z-50 ${isOpen? 'transition-transform duration-300 ease-in-out translate-x-0 ':'transition-transform duration-300 -translate-x-full'}`} >
      <div className="flex flex-col space-y-8 font-semibold mt-4"> 
      <Link  to='/' className="text-white text-3xl flex hover:text-blue-200">
      <IoHome />
        <span className="text-base ml-1">  Home</span></Link>
      <Link  to='/Categories' className="text-white text-3xl flex hover:text-blue-200">
      <BiSolidCategory />
        <span className="text-base ml-1">Categories</span></Link>
      <Link  to='/Watchlist' className="text-white text-3xl flex hover:text-blue-200">
      <HiMiniQueueList />
        <span className="text-base ml-1">Watchlist</span></Link>
      <Link  to='/Tvshows' className="text-white text-3xl flex hover:text-blue-200">
      <PiTelevisionSimple />
        <span className="text-base ml-1">Tv Shows</span></Link>
      <Link  to='/' className="text-white text-3xl flex hover:text-blue-200">
      <RiMovie2Fill />
        <span className="text-base ml-1">Movies</span></Link>
      </div>
      </div>
     }
      
        
      
    </div>
  );
};
export default Navbar;
