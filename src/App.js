
import React from 'react';

import {  Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import MovieDetails from './components/MovieDetails';



function App() {
  return (
        <div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path='/movies/:id' element={<MovieDetails />} />
      </Routes>
        </div>
  );
}

export default App;