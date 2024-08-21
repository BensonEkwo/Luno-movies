import React, { useState,useEffect,useContext } from 'react'
import { myContext } from '@/Main'
import MovieCard from './MovieCard'
import ShowsCard from './ShowsCard'


  
export default function SearchFeed() {
    const {value1,value2,value3}=useContext(myContext)
    const [value,setValue]=value3 
    const [movies,setMovies]=value1
    const [series,setSeries]=value2 
    const movieUrl=`https://api.themoviedb.org/3/search/movie?api_key=0a8e7dd4a181f960199fb0449537a9f6&query=${value}&include_adult=false&language=en-US&page=1`
    const tvUrl=`https://api.themoviedb.org/3/search/tv?api_key=0a8e7dd4a181f960199fb0449537a9f6&query=${value}&include_adult=false&language=en-US&page=1`
useEffect(()=>{
    const fetchItems= async()=>{
        if(value.trim()===''){
            setMovies([]);
            setShows([]);
            return
        }
        try{
            const movieRes= await fetch(movieUrl);
            const movieData= await movieRes.json()
            const tvRes= await fetch(tvUrl);
            const tvData= await tvRes.json();
            if(!movieData.errors && movieData.results){
                const movie=movieData.results.filter(m=>m.title.toLowerCase().includes(value.toLowerCase()))
                setMovies(movie)
            }else{
                setMovies([])
            }
            if(!tvData.errors&&tvData.results){
                const show= tvData.results.filter(show=>show.name.toLowerCase().includes(value.toLowerCase()))
                setSeries(show)
            }
        }
        catch(error){
            console.error('error fetching data:', error);
            setseries([])
        }
    }
    fetchItems();
    
},[value])
console.log(value)
  return (
    <div className=' text-center flex-col md:space-y-10 '>
        {movies.length>0&&<h2 className='font-bold mb-3 text-lg'> Movies Results</h2>}
   <div className='flex flex-shrink-0 overflow-x-auto mb-5 overflow-y-visible'>
    
    {movies.map((movie)=>(
        <MovieCard key={movie.id}films={movie}/>
    ))}
   </div> 
   {series.length>0&&<h2 className='font-bold mb-3 text-lg'>Shows Results</h2>}
        <div className='flex overflow-x-auto'>
            {series.map((show)=>(
                <ShowsCard key={show.id} films={show}/>
            ))}
        </div>
        <div>
            {movies.length+series.length>0&&<h3>{`Results(${movies.length+series.length})`}</h3>}
        </div>
    </div>
  )
}
