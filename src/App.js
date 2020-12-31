import React, { useState } from 'react';
//Styling
import "./styles/app.scss";
//Components
import Nav from './components/Nav';
import Player from './components/Player';
import Song from './components/Song';
import Catalog from './components/Catalog';
//Song Library
import data from './library';



function App() {
  //State
  const [songs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [catalogShow, setCatalogShow] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  return (
    <div className={`App ${catalogShow ? 'catalog-active' : ''} ${isDarkMode ? 'dark' : ''}`}>
      <Nav catalogShow={catalogShow} setCatalogShow={setCatalogShow} isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}/>
      <Song currentSong={currentSong} isPlaying={isPlaying} />
      <Player isPlaying={isPlaying} setIsPlaying={setIsPlaying} currentSong={currentSong} setCurrentSong={setCurrentSong} songs={songs} />
      <Catalog songs={songs} currentSong={currentSong} setCurrentSong={setCurrentSong} catalogShow={catalogShow}/>
    </div>
  );
}

export default App;
