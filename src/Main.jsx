import React,{createContext, useState} from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Home from "./pages/Home.jsx";
import Categories from "./pages/Categories.jsx";
import Watchlist from "./pages/Watchlist.jsx";
import Tvshows from "./pages/Tvshows.jsx";
import { createHashRouter, RouterProvider } from "react-router-dom";
import Subcategory from "./pages/Subcategory.jsx";
import DownloadPage1 from "./pages/DownloadPage1.jsx";
 
export const myContext = createContext();


const router = createHashRouter([
  {
    element: <App />,
    children: [
      { element: <Home />, path: '/' },
      { element: <Categories />, path: '/Categories' },
      { element: <Watchlist />, path: '/Watchlist' },
      { element: <Tvshows />, path: '/Tvshows' },
      { element: <Subcategory />, path: '/Categories/:genres' },
      { element: <DownloadPage1 />, path: '/download/:movieId' },
    ],
  },
]);


const Main = () => {
  const [value, setValue] = useState('');
  const [movies, setMovies] = useState([]);
  const [series,setSeries] = useState([]);
  const [isSearchOpen, setIsSearchOpen] = useState(false); 
  const [watchlist,setWatchlist]=useState([]);
  return (
    <React.StrictMode>
      <myContext.Provider value={{value1:[movies, setMovies],value2:[series,setSeries],value3:[value,setValue],value4:[isSearchOpen,setIsSearchOpen],value5:[watchlist,setWatchlist]}}>
       
        <RouterProvider router={router} />
      </myContext.Provider>
    </React.StrictMode>
  );
};


ReactDOM.createRoot(document.getElementById("root")).render(
  <Main/>
)
