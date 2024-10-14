import React, { useContext, useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { myContext } from "@/Main";
import { FaCloudDownloadAlt } from "react-icons/fa";
import { BiAddToQueue } from "react-icons/bi";
import { http } from "@/component/genre";

export default function DownloadPage1() {
  const { movieId } = useParams();
  const [params] = useSearchParams();
  const mediaType = params.get("media_type");
  const Ids = movieId.split(":");
  const Id = Ids[0];

  const movieUrl = `https://api.themoviedb.org/3/${mediaType}/${Id}?api_key=0a8e7dd4a181f960199fb0449537a9f6&language=en-US`;
  const showUrl = `https://api.themoviedb.org/3/${mediaType}/${Id}?api_key=0a8e7dd4a181f960199fb0449537a9f6&language=en-US`;
  const { value5 } = useContext(myContext);
  const [watchlist, setWatchlist] = value5;
  const [film, setFilm] = useState([]);
  const [episodes, setEpisodes] = useState([]);
  useEffect(() => {
    if (mediaType === "movie") {
      fetch(movieUrl)
        .then((res) => res.json())
        .then((data) => {
          if (!data.errors) {
            setFilm(data);
          } else {
            setFilm({});
          }
        });
    } else if (mediaType === "tv") {
      fetch(showUrl).then((res) =>
        res.json().then((data) => {
          if (!data.errors) {
            setFilm(data);
          } else {
            setFilm({});
          }
        })
      );
    }
  }, []);

  const addToWatchlist = () => {
    setWatchlist((c) => {
      localStorage.setItem("watchlist", JSON.stringify([...c, film]));
      return [...c, film];
    });
    console.log(film);
  };

  const isDisable = !!watchlist.find((watchlist) => watchlist.id === film.id);
  const filmId = film.imdb_id;

  const [disk, setDisk] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const ytsUrl = `https://yts.mx/api/v2/movie_details.json?imdb_id=${filmId}`;
        const res = await fetch(ytsUrl);
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        const result = await res.json();
        const data = result.data?.movie;
        const torrent = data.torrents;
        setDisk(torrent);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [filmId]);
  const [link, setLink] = useState();

  const download = () => {
    window.location.href = link;
  };
  const [clicked, setClicked] = useState(null);
  const handleClick = (index) => {
    setClicked(index);
  };
  const [seasonClicked,setSeasonClicked]= useState(null)
  const [episodeClicked,setEpisodeClicked]= useState(null)
  const [isClicked,setIsclicked]= useState(false)
  const handleSeasonClick = (index) => {
    const seasonUrl = `https://api.themoviedb.org/3/tv/${Id}/season/${index}?api_key=0a8e7dd4a181f960199fb0449537a9f6&language=en-US`;
    fetch(seasonUrl)
      .then((res) => res.json())
      .then((data) => {
        if (!data.errors) {
          setEpisodes(data.episodes);
        } else {
          setEpisodes([]);
        }
        setIsclicked(true)
        setSeasonClicked(index)
        console.log(episodes)
      });}
      const errormessage='No Episode available for Download'
      const handleEpisodeClicked=(index)=>{
        setEpisodeClicked(index)
      }
  return (
    <div className="flex-col mx-0 h-screen ">
      <div
        className="flex-row bg-cover md:h-[50vh] h-[50vh] relative"
        style={{ backgroundImage: `url(${http + film.backdrop_path})` }}
      >
        <div className="rounded-md">
          <img
            className="max-h-[300px] mr-5 p-5 "
            src={http + film.poster_path}
            alt={film.title}
          ></img>
        </div>
        <div className="flex items-center justify-center absolute bottom-0 left-5 flex-wrap">
          <h2 className="rounded-lg p-2 ">
            {film.genres?.map((genre) => (
              <span className="space-x-2 font-semibold mx-1 border-4 border-neutral-900 rounded-lg p-1 text-sm inline-block whitespace-normal">
                {genre.name}
              </span>
            ))}
          </h2>
        </div>
      </div>

      <div className="my-5 flex md:justify-start justify-center flex-row gap-1">
        <h3 className="font-semibold text-lg md:ml-16">
          {film.title || film.name}
          <span className="text-sm font-light">{`(${
            film.release_date?.substring(0, 4) ||
            film.first_air_date?.substring(0, 4)
          })`}</span>
        </h3>
      </div>
      <div>
        <h3 className="space-x-3 ml-2 space-y-2">
          {film.seasons?.map((season, index) => (
            <button
              key={index}
              onClick={()=>handleSeasonClick(index)}
              className={` rounded-xl p-1 ${seasonClicked===index? 'bg-cyan-700': 'bg-cyan-500'}`}
            >
              {season.name}
            </button>
          ))}
        </h3>
        {isClicked && 
        <h3 className="space-x-3 ml-4 my-3 space-y-2">
          <p className="text-sm font-semibold">Episodes:</p>
         {episodes?.map((episode,index)=>(
          <button key={index} onClick={()=>handleEpisodeClicked(index)} className={` rounded-lg px-2 ${episodeClicked===index? 'bg-cyan-950' : 'bg-cyan-600'} `}>{episode.episode_number }</button>
         ))?? errormessage}

        </h3>}
      </div>
      <h3 className="ml-12 mb-1">Quality:</h3>

      {disk ? (
        disk?.map((disk, index) => (
          <button
            key={index}
            onClick={() => {
              setLink(disk?.url);
              handleClick(index);
            }}
            className={`bg-cyan-500 p-1 px-4 ml-3 mb-4 rounded-lg ${
              clicked === index && "bg-cyan-800"
            }`}
          >
            {disk?.quality}
          </button>
        ))
      ) : (
        <h3 className="ml-8 mb-4">
          sorry no torrent file available for download, check back later
        </h3>
      )}

      <div className="flex  gap-5 relative">
        <button
          onClick={download}
          className="ml-10 flex items-center gap-1 bg-purple-700 p-3 rounded-3xl hover:bg-purple-900"
        >
          <span className="text-xl text-amber-200">
            <FaCloudDownloadAlt />
          </span>
          <span className="text-sm">Download </span>
        </button>
        <button
          onClick={addToWatchlist}
          disabled={isDisable}
          className={`flex items-center gap-1  p-3 rounded-3xl hover:bg-purple-900 ${
            isDisable ? "bg-purple-400" : "bg-purple-700"
          }`}
        >
          <span className="text-xl text-amber-200 ">
            <BiAddToQueue />
          </span>
          <span className="text-sm ">Add to watchlist</span>
        </button>
      </div>

      <div className="  p-10 flex-grow-0 ">
        <h2 className="font-semibold">Overview</h2>
        <p className="text-sm bg-neutral-700 p-5 rounded-xl line-clamp-6 md:line-clamp-none">
          {film.overview}
        </p>
      </div>
    </div>
  );
}
