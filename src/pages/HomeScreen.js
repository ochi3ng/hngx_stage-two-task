import React from 'react'
import "./HomeScreen.css"
import SearchResults from './SearchResults';

function HomeScreen() {
  return (
    <div className='background'>
      <div className="seach"><SearchResults /></div>
      <h1>John Wich 3:
        Parabellum</h1>
      <p>John Wick is on the run after killing a member of 
        the international assassins' guild, and with a $14 million 
        price tag on his head, he is the target of hit men and 
        women everywhere.</p>
        <button className='buttn'>WATCH TRAILER</button>
    </div>
  )
}

export default HomeScreen
