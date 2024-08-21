import React,{useContext,useEffect, useState} from 'react'
import { myContext } from '@/Main'
import { http } from '@/component/genre';
import { MdBookmarkRemove } from "react-icons/md";
import { MdCancelPresentation } from "react-icons/md";
import { Link } from 'react-router-dom';
export default function Watchlist() {
  const {value5}=useContext(myContext);
  const [watchlist,setWatchlist]=value5;
  let items=null;
  useEffect(()=>{
    localStorage.getItem('watchlist')? items=JSON.parse(localStorage.getItem('watchlist')):items=[];
    setWatchlist(items)
   },[])
  const removeItem=(id)=>{
    const newWatchlist= watchlist.filter(watchlist=>watchlist.id!==id)
    localStorage.setItem('watchlist',JSON.stringify(newWatchlist))
    setWatchlist(newWatchlist);
    
  }
  const clearWatchlist=()=>{
    localStorage.setItem('watchlist',[])
    setWatchlist([])
  }

  return (
    <div className='flex flex-col justify-start mx-3 space-y-3  text-center'>
      <h1 className='md:text-2xl text-xl font-semibold'>My watchlist</h1>
      <div className='relative'>
        {watchlist.length>0?<h3>{watchlist.length} Item Added</h3>:<h3>watchlist is empty</h3>}
        {watchlist.length>0&&<button  className='absolute top-0 right-0 text-xl'onClick={clearWatchlist}>
        <MdCancelPresentation />
        </button>}
      </div>
      {watchlist.map((watchlist,id)=>(
        <div className='flex justify-normal space-x-2 relative'key={watchlist.id} >
          <Link to={`/download/${watchlist.id}:${watchlist.title?.toLowerCase().split(" ").join("-")||watchlist.name.toLowerCase().split(" ").join("-")}?media_type=${watchlist.title?'movie':'tv'}`}>
          <img className='h-[180px] max-w-[180px]' src={http+watchlist.poster_path} alt={watchlist.title||watchlist.name}/>
          </Link>
          
            
            <div className='flex flex-col justify-center items-start'>
            <Link to={`/download/${watchlist.id}:${watchlist.title?.toLowerCase().split(" ").join("-")||watchlist.name.toLowerCase().split(" ").join("-")}?media_type=${watchlist.title?'movie':'tv'}`}>
            <h3>{watchlist.title||watchlist.name}</h3>
            </Link>
          <h3 className='text-sm'>{watchlist.title? " movie":"Tv Series"}</h3>
          
          </div>
            
          
         
          <button className='absolute top-0 right-0' onClick={()=>removeItem(watchlist.id)}>
            <span className='text-xl text-purple-500'>
            <MdBookmarkRemove />
            </span>
          </button>
        </div>

      ))}
    </div>
  )
}
