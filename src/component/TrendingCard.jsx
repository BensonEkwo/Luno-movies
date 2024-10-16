import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { genres,http } from "./genre";

export default function TrendingCard({films}) {
  const [isHover, setIsHover] = useState(false);
  const Onhover = () => {
    setIsHover(!isHover);
  };
  return (
    <div
      onMouseEnter={Onhover} onMouseLeave={Onhover}
      className="flex-none   bg-slate-900 rounded-sm shadow-xl md:hover:scale-105 transition-all ease-in-out "
    ><Link to={`/download/${films.id}:${films.title?.toLowerCase().split(" ").join("-")||films.name.toLowerCase().split(" ").join("-")}?media_type=${films.media_type}`}>

      <div className=" inline-block relative">
        <img
          className="rounded-sm md:w-300 md:h-450 max-w-50 max-h-[350px]"
          src={http + films.poster_path}
          alt={films.title||films.name}
        />
        {isHover && <div className="hidden md:block absolute top-36 backdrop-blur-sm space-y-1 space-x-1">
          <h3 className="block text-xs text-white">{films.overview}</h3>
          
          {films.genre_ids.flatMap(g=>genres.filter(genre=>genre.id===g).map((r)=>(<p className="inline-block text-sm border-slate-900 border-2 rounded-sm">{r.name}</p>)))}
          </div>}
      </div>
    
      <div className="">
        <h3 className="overflow-hidden overflow-ellipsis whitespace-nowrap">
          {films.media_type=='movie'? <>{films.title}</>:<>{films.original_name}</>}
        </h3>
        {films.media_type=='movie'?  <h4>{films.release_date?.substring(0, 4)}</h4>: <h4>{films.first_air_date?.substring(0, 4)}</h4>}
      </div>
      </Link>
    </div>
  );
}
