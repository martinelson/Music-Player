import React from 'react'
import CatalogSong from './CatalogSong';

export default function Catalog({ songs, setCurrentSong, catalogShow, currentSong }) {
    return (
        <div className={`catalog ${catalogShow ? 'active-catalog' : ''}`}>
            <h2>Library</h2>
            <div className="catalog-songs">
                {songs.map(song => <CatalogSong id={song.id} currentSong={currentSong} key={song.id} songs={songs} setCurrentSong={setCurrentSong} song={song}/>)}
            </div>
        </div>
    )
}
