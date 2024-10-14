import React,{useContext} from 'react'
import { Link } from 'react-router-dom';
import { myContext } from '@/Main';
import { http } from './genre';
function ShowsCard({films}) {
    const {value4}=useContext(myContext);
    const [isSearchOpen,setIsSearchOpen]=value4;
   
  return (
    <div  className='bg-none  w-[150px] md:w-[200px] m-4 flex-none rounded-md' >
        <Link onClick={()=> setIsSearchOpen(false)} to={`/download/${films.id}:${films.name?.toLowerCase().split(" ").join("-")}?media_type=${films.name&&'tv'}`}>
            {films.poster_path?<img className='rounded-xl max-w-[100%] ' src={http+films.poster_path} alt={films.name}/>:<></>}
            <div className='flex justify-center gap-1'>
            <h3 className='overflow-hidden overflow-ellipsis whitespace-nowrap text-sm md:text-base' >{films.name}</h3>
            <span className='text-sm'>({films.first_air_date.substring(0,4)})</span>
       </div>

        </Link>
      
   
       
    </div>
  )
}

export default ShowsCard