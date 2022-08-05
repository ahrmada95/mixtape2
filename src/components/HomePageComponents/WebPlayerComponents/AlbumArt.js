import "./webplayer.css"
import React, {useState, useEffect, useRef} from "react"

const SongName = 'Morning, Thinker'
const ArtistName = 'Mattias Haggstrom Gerdt'

const AlbumArt = () => {
    const [playState, setPlayState] = useState(true);
    const [currentTime, setcurrentTime] = useState(0);
    const [updateValue, setUpdateValue] = useState(0);

    const mp3Player = useRef();

    const play = () => {
        mp3Player.current.play();
    };

    const pause = () => {
        mp3Player.current.pause();
    };

    const source = localStorage.getItem('CURR_SONG');

    const AlbumArtUrl = './music/album_art/These Roots.jpg';

    const handlePlayPause = () => {
        setPlayState(!playState);
        if(playState === true){
            play();
        } else {
            pause();    
        }

    }

    const onPlaying = () => {
        setcurrentTime(mp3Player.current.currentTime);
        setUpdateValue(
            (mp3Player.current.currentTime / mp3Player.current.duration) * 100
        );
    }

    return (
        <div id="player-album-art">
            <div id="album-art-attract">
                <img src={AlbumArtUrl} id='album-art-img'/>
                <audio
                        src={source}
                        ref={mp3Player}
                        onTimeUpdate={onPlaying}/>
            </div>
            <div id="album-art-bottom-row">
                <div id='album-art-details'>
                    <p id='song-name'>{SongName}</p>
                    <p id='song-artist'>{ArtistName}</p>
                </div>
                <div id='album-art-controls'>
                        <p id='timer'>{currentTime}</p>
                        <input id='scrubber'
                            type="range"
                            min="0"
                            max="100"
                            step="1"
                            value={updateValue}
                            onChange={(e) => {
                            const seekto = mp3Player.current.duration * (e.target.value / 100);
                            mp3Player.current.currentTime = seekto;
                            setUpdateValue(e.target.value);}} />
                    <div id='button-layer'>
                        <img src='./assets/images/prev_btn.png' className='control-btn-small'/>
                        {(playState === true) ? <img src='./assets/images/play_btn.png' className='control-btn-large' onClick={handlePlayPause}/>:<img src='./assets/images/pause_btn.png' className='control-btn-large' onClick={handlePlayPause}/>}
                        {/* <img src='./assets/images/play_btn.png' className='control-btn-large' onClick={handlePlayPause}/> */}
                        <img src='./assets/images/next_btn.png' className='control-btn-small'/>
                    </div>
                </div>
                <div id='album-art-share'>
                    <div className="circleBase">
                        <img src='./mixtape_logo.png' id='share_icon'/>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default AlbumArt;