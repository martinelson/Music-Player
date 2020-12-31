import React, { useRef, useState } from 'react';
import { AiFillCaretRight, AiFillFastForward, AiFillFastBackward, AiOutlinePause } from "react-icons/ai";
import { BsShuffle } from "react-icons/bs";
import { IconContext } from "react-icons";

export default function Player({ currentSong, setCurrentSong, isPlaying, setIsPlaying, songs }) {
    //useRef
    const audioRef = useRef(null); 

    //handlers
    function handlePlay(){
        isPlaying ? audioRef.current.pause() : audioRef.current.play();
        setIsPlaying(!isPlaying);
    }

    function handleNext(){
        let next
        if(isShuffle) {
            //grabbing random song if on shuffle, not to play two songs in a row
            next = Math.floor(Math.random()*songs.length);
            setPrevSong([...prevSong, currentSong]);
            if(currentSong === songs[next]) next += 1;
            setCurrentSong(songs[next]);
        } else{
            songs.find(song => currentSong === song ? next=songs.indexOf(song) + 1 : next=0);
            songs.length > next ? setCurrentSong(songs[next]) : setCurrentSong(songs[0]);
        }
        
    }

    function handleBack(){
        let back
        if(isShuffle) {
            //using previous song state to go back through the correct shuffle order clicked on back
            if(prevSong.length > 0){
                let i
                const shuffleLength = prevSong.length;
                back = shuffleLength - 1;
                songs.filter(song => prevSong[back] === song ? i = songs.indexOf(song) : back);
                prevSong.splice(back, 1);
                setCurrentSong(songs[i]);
            } else{
                songs.find(song =>currentSong === song ? back = songs.indexOf(song) - 1 : back=0);
                back < 0 ? setCurrentSong(songs[0]) : setCurrentSong(songs[back]);
            }
        } else{
            songs.find(song =>currentSong === song ? back = songs.indexOf(song) - 1 : back=0);
            back < 0 ? setCurrentSong(songs[0]) : setCurrentSong(songs[back]);
        }

        audioRef.current.currentTime = 0;
    }

    function handleTimeUpdate(e) {
        const { currentTime } = e.target;
        let animationPercentage = Math.round((currentTime/songInfo.duration)*100);
        if (animationPercentage === 99) animationPercentage += 1
        setSongInfo({...songInfo, currentTime: currentTime, animationPercentage});
    }

    function handleDuration(e) {
        const { duration } = e.target;
        setSongInfo({...songInfo, duration})
    }

    function handleDrag(e) {
        const { value } = e.target;
        audioRef.current.currentTime = value;
        setSongInfo({...songInfo, currentTime: value});
    }

    //keep playing if skip buttons are pressed while play button is activated
    function handleAutoPlay(){
        if(isPlaying) {
            audioRef.current.play();
        }
    }

    //formatting time function
    function getTime(time) {
        const minutes = Math.floor(time/60);
        const seconds = Math.floor(time%60)
        const secondsWithZero = String(seconds).padStart(2, "0")
        return `${minutes}:${secondsWithZero}`
    }

    //state
    const [songInfo, setSongInfo] = useState({
        currentTime: 0,
        duration: null,
        animationPercentage: 0
    });

    const [isShuffle, setShuffle] = useState(false);

    const [prevSong, setPrevSong] = useState([]);

    //animation styling
    const trackAnim = {
        transform: `translateX(${songInfo.animationPercentage}%)`
    }

    return (
        <div className="player">
            <div className="time-control">
            <p>{getTime(songInfo.currentTime)}</p>

                <div style={{background: `linear-gradient(to right, ${currentSong.color[0]}, ${currentSong.color[1]})`}} className="track">
                <input min={0} max={songInfo.duration} value={`${songInfo.currentTime}`}  onChange={handleDrag} type="range"/>
                <div style={trackAnim} className="animate-track"></div>
                </div>
                <p>{getTime(songInfo.duration)}</p>
            </div>
            <div className="play-control">
                <IconContext.Provider value={{size: "2em", className: "gloabal-class-name"}}>
                    <AiFillFastBackward onClick={handleBack} className="previous"/>
                    {isPlaying ? (
                        <AiOutlinePause onClick={handlePlay} className="pause" />
                    ) : (
                        <AiFillCaretRight onClick={handlePlay} className="play"/>
                    )}
                    <BsShuffle className={`${isShuffle ? 'highlight' : ''}`} onClick={()=> setShuffle(!isShuffle)}/>
                    <AiFillFastForward onClick={handleNext} className="next"/>
                </IconContext.Provider>
            </div>
            <audio onEnded={handleNext} onLoadedData={handleAutoPlay} onLoadedMetadata={handleDuration} onTimeUpdate={handleTimeUpdate} ref={audioRef} src={currentSong.audio} type="audio/x-m4a"></audio>
        </div>
    )
}
