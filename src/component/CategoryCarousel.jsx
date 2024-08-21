import { Link} from "react-router-dom"
import { genres,http } from "./genre"
export default function Couresel({films}) {       
  return (
    <div className='flex flex-row justify-between min-w-full mx-2 space-x-2 max-h-46 rounded-lg items-center bg-cover bg-opacity-70 bgImg'
      style={{backgroundImage:`url(${http+films.backdrop_path})`}}>
        <Link to={`/download/${films.id}:${films.title.toLowerCase().split(" ").join("-")}?media_type=${films.media_type}`}>
        <div className='flex justify-start'>
                <img className='max-h-full max-w-32 rounded-l-lg' src={http+films.poster_path} alt={films.title}/>
            </div>
            <div className='box-border article backdrop-blur-md min-h-fit'>
            { <span className='font-semibold'>{films.title}</span>}
            <span className='block text-xs'>{films.overview} </span>
         <span className='space-x-1 text-sm'>{films.genre_ids.flatMap(g=>genres.filter(genre=>genre.id===g).map((r)=>(<span className='inline-block text-sm border-slate-900 border-2 rounded-sm'>{r.name}</span>)))}</span>
            </div>
        </Link>
           
    </div>
  )
  
}