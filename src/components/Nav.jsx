import React from 'react';
import { BsMusicNoteList, BsSun, BsMoon } from "react-icons/bs";

export default function Nav({catalogShow, setCatalogShow, isDarkMode, setIsDarkMode}) {
    return (
            <nav>
                <h1>{"<Code></FM>"}</h1>
                <div>
                <BsMusicNoteList size="2rem" className={`cat-btn ${catalogShow ? 'highlight' : ''}`} onClick={() => setCatalogShow(!catalogShow)}/>
                {isDarkMode ? (
                    <BsSun className="cat-btn" size="2rem" onClick={() => setIsDarkMode(!isDarkMode)}/>
                ) : (
                    <BsMoon className="cat-btn" size="2rem" onClick={() => setIsDarkMode(!isDarkMode)}/>
                )}
                </div>
            </nav>
    )
}
