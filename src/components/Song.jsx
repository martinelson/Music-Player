import React from 'react'

export default function Song({currentSong , isPlaying}) {
    return (
        <div className="song-container">
            <img className={`${isPlaying ? 'spin' : ''}`} src={currentSong.cover} alt={currentSong.name}/>
            <h2>{currentSong.name}</h2>
            <h3>Martin Nelson</h3>
        </div>
    )
}
