import React from 'react';
import './Home.css';
import Search from '../search/Search';
import Appbar from '../Appbar'


function Home() {
  return (
    <div className='home'>
        <Appbar/>
      <div className='home__body'>
        
          <center>
          <Search />
          </center>
      </div>
    </div>
  )
}

export default Home;