import {useState,useEffect,useContext} from 'react'
import TrendingCard from "../component/TrendingCard";
import CarouselCard from "../component/CarouselCard";
import {Carousel,CarouselContent,CarouselItem,CarouselNext,CarouselPrevious,} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import Autoscroll from "embla-carousel-auto-scroll"
import { Link } from 'react-router-dom';
import { myContext } from '@/Main';
function Tvshows() {
    const {value2} = useContext(myContext);
    const [series,setSeries]=value2;
  const url =
    "https://api.themoviedb.org/3/trending/tv/week?api_key=0a8e7dd4a181f960199fb0449537a9f6&language=en-US";
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        if (!data.errors) {
          setSeries(data.results);
        } else {
          setSeries([]);
        }
      });
  }, []);

  return (
    <div className='bg-black'>
      <div className="text-center pb-4 md:text-2xl text-xl font-semibold">
      <h1>Trending Series</h1>
      </div>
      <Carousel
      plugins={[
        Autoplay({
          delay: 3000,
          stopOnInteraction: false,
          stopOnMouseEnter: true
        }),
      ]} 
       className="md:hidden flex flex-row flex-shrink-0 mr-2 my-1 overflow-scroll ml-2 relative">
       
        <CarouselContent className="">
          {series.map((serie,index)=>(
              <CarouselItem key={index}>
                <Link to={`/download/${serie.name}`}>
                <CarouselCard films={serie}/> 
                </Link>
              </CarouselItem>
              
          ))} 
        </CarouselContent>
        
        
      
      </Carousel>
        
        
        
          

      <div plugins={[
        Autoscroll({
          stopOnInteraction: false,
          stopOnMouseEnter: true
        }),
      ]}
      className=" md:flex md:flex-row grid grid-cols-3 overflow-x-auto md:flex-shrink-0 md:space-x-3 space-x-0 text-center gap-1 mx-2 ">
        {series.map((serie, index) => (
          // eslint-disable-next-line react/jsx-key
          
            <TrendingCard films={serie} /> 
          
        ))}
      </div>
        
       
    </div>
  )
}

export default Tvshows