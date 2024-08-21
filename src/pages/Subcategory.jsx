import React, { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import CategoryTrending from "../component/CategoryTrending";
import CategoryCarousel from "../component/CategoryCarousel";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { Link } from "react-router-dom";
import { myContext } from "@/Main";
export default function Subcategory() {
  const { genres } = useParams();
  let genre = 1;
  switch (genres) {
    case "drama":
      genre = 18;
      break;
    case "action":
      genre = 28;
      break;
    case "adveneture":
      genre = 12;
      break;
    case "comedy":
      genre = 35;
      break;
    case "animation":
      genre = 16;
      break;
    case "crime":
      genre = 80;
      break;
    case "family":
      genre = 10751;
      break;
    case "history":
      genre = 36;
      break;
    case "horror":
      genre = 27;
      break;
    case "mystery":
      genre = 9648;
      break;
    case "romance":
      genre = 10749;
      break;
    case "sci-fi":
      genre = 878;
      break;
    case "thriller":
      genre = 53;
      break;
    case "war":
      genre = 10752;
      break;
    case "western":
      genre = 37;
      break;

    default:
      console.log("code did not work");
  }
  const { value1 } = useContext(myContext);
  const [movies, setMovies] = value1;
  const url = `https://api.themoviedb.org/3/discover/movie?api_key=0a8e7dd4a181f960199fb0449537a9f6&with_genres=${genre}`;
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
        <h1>{genres}</h1>
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
              <Link to={`/download/${movie.title}`}>
                <CategoryCarousel films={movie} />
              </Link>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      <div className=" md:flex md:flex-row grid grid-cols-3 overflow-x-auto md:flex-shrink-0 md:space-x-3 space-x-0 text-center gap-1 mx-2 ">
        {movies.map((movie, index) => (
          // eslint-disable-next-line react/jsx-key

          <CategoryTrending films={movie} />
        ))}
      </div>
    </div>
  );
}
