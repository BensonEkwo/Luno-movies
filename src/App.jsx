import React, { useState,useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import Navbar from './component/Navbar';
import SearchFeed from './component/SearchFeed';
import { myContext } from './Main';


function App() {
  const [isOpen, setIsOpen] = useState(false);
  const {value4}=useContext(myContext);
  const [isSearchOpen,setIsSearchOpen]=value4;
 
  

  return (
    <div>
      <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
      <main className='mt-16'>
        <div>
          {isSearchOpen ? (
            <SearchFeed />
          ) : (
            <div>
              <div className="md:hidden bg-white h-screen flex flex-col absolute right-0 top-10 my-4 mx-4">
                {isOpen && (
                  <div className="fixed">
                    <Link className="my-1" to='/'>Home</Link>
                    <Link className="my-1" to='/Categories'>Categories</Link>
                    <Link className="my-1" to='/Watchlist'>Watchlist</Link>
                  </div>
                )}
              </div>
              <Outlet />
            </div>
          )}

        </div>
      </main>
    </div>
  );
}

export default App;

