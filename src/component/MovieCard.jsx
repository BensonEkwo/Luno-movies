import { myContext } from '@/Main';
import React,{useContext} from 'react'
import { Link } from 'react-router-dom';
import { http } from './genre';



export default function({films}) {
   const {value4}=useContext(myContext);
   const [IsSearchOpen,setIsSearchOpen]=value4
  
  
  return (
    <div  className='h-[225px] md:h-[300px]  w-[150px] md:w-[200px] m-4 flex-none ' >
       <Link onClick={()=>setIsSearchOpen(!IsSearchOpen)} to={`/download/${films.id}:${films.title?.toLowerCase().split(" ").join("-")}?media_type=${films.title?'movie':'tv'}`}>
            {films.poster_path?<img className='rounded-xl max-w-[100%] max-h-full ' src={http+films.poster_path} alt={films.title}/>:<></>}
            <div className='flex justify-center gap-1 rounded-b-xl'>
            <h3 className='overflow-hidden overflow-ellipsis whitespace-nowrap text-sm md:text-base' >{films.title}</h3>
            <span className='text-sm'>({films.release_date.substring(0,4)})</span>
       </div>
      </Link>
      
   
       
    </div>
  )
}
