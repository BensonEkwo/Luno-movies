import { useState, useEffect, useContext } from "react";
import TrendingCard from "../component/TrendingCard";
import CarouselCard from "../component/CarouselCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { Link } from "react-router-dom";
import { myContext } from "@/Main";
export default function Home() {
  const { value1 } = useContext(myContext);
  const [movies, setMovies] = value1;
  const url =
    "https://api.themoviedb.org/3/trending/movie/week?api_key=0a8e7dd4a181f960199fb0449537a9f6&language=en-US";
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        if (!data.errors) {
          setMovies(data.results);
        } else {
          setMovies([]);
        }
      });
  }, []);

  return (
    <div className="bg-black">
      <div className="text-center pb-4 md:text-2xl text-xl font-semibold">
        <h1>Trending Movies</h1>
      </div>

      <Carousel
        plugins={[
          Autoplay({
            delay: 3000,
            stopOnInteraction: false,
            stopOnMouseEnter: true,
          }),
        ]}
        className="md:hidden flex flex-row flex-shrink-0 mr-2 my-1 overflow-scroll ml-2  relative"
      >
        <CarouselContent className="">
          {movies.map((movie, index) => (
            <CarouselItem key={index}>
              <Link
                to={`/download/${movie.id}-${movie.title
                  .toLowerCase()
                  .split(" ")
                  .join("-")}?media_type=${movie.media_type}`}
              >
                <CarouselCard films={movie} />
              </Link>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      <div className=" md:flex md:flex-row grid grid-cols-3 overflow-x-auto md:flex-shrink-0 md:space-x-3 space-x-0 text-center gap-1 mx-2 ">
        {movies.map((movie, index) => (
          // eslint-disable-next-line react/jsx-key

          <TrendingCard films={movie} />
        ))}
      </div>
    </div>
  );
}
