import React from 'react'

export default function CatalogSong({ song, songs, setCurrentSong, currentSong }) {
    function handleSelectSong() {
        setCurrentSong(song)
        //add active state
        songs.map(s => song.id !== s.id ? s.active=false : s.active = true)
    }
    return (
        <div onClick={handleSelectSong} className={`catalog-song ${song.id === currentSong.id ? 'selected' : ""}`}>
            <img src={song.cover} alt={song.name}/>
            <div className="song-description">
                <h3>{song.name}</h3>
                <h4>Martin Nelson</h4>
            </div>
        </div>
    )
}
