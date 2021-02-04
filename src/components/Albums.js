import React, { useState } from 'react'
import '../App.css'
export default function Albums(props) {

    const [isPlaylist1open, setPlaylist1open] = useState(false);

    const playlistOpen = () => isPlaylist1open ? '' : 'hide';

    return (
        <> 
            <div className= {isPlaylist1open ? 'showplaylist1' : ''}>

                <button id='playlist-btn' className={isPlaylist1open ? '' : 'hide'}
                                onClick={() => setPlaylist1open(!isPlaylist1open)}>
                                X</button>

                <li className={playlistOpen()}>
                    <ul><button className={'audioplayer'}>audio player</button></ul>
                    <ul><button className={'audioplayer'}>audio player</button></ul>
                    <ul><button className={'audioplayer'}>audio player</button></ul>
                    <ul><button className={'audioplayer'}>audio player</button></ul>
                </li>
            </div>
            
            <div className='btn-container'>
                <button 
                    className="btn album-cover-1"
                    isPlaylist1open={isPlaylist1open} 
                    onClick={() => setPlaylist1open(!isPlaylist1open)}>Chill
                </button>
                
                <button className="btn album-cover-2"
                        >Hype
                
                </button>
            </div>
            <div className='btn-container'>
                <button className="btn album-cover-3">Sad</button>
                <button className="btn album-cover-4">Love</button>
            </div>
        </>
    )
}
