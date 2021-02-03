import React, { useState } from 'react'
import '../App.css'

export default function Albums(props) {

    const [isPlaylist1open, setPlaylist1open] = useState(false);

    const playlistbuttonClass = () => isPlaylist1open ? '' : 'hide';

    return (
        <> 
            <div className= {isPlaylist1open ? 'showplaylist1' : ''}>

                <li className={isPlaylist1open ? '' : 'hide'}>

                    <button className={playlistbuttonClass() + 'playlist-btn'}
                            onClick={() => setPlaylist1open(!isPlaylist1open)}>
                            Home</button>
                    <ul>link1</ul>
                    <ul>link1</ul>
                    <ul>link1</ul>
                    <ul>link1</ul>

                </li>
            </div>
            <div className='btn-container'>
                <button 
                    className="btn album-cover-1"
                    isPlaylist1open={isPlaylist1open} 
                    onClick={() => setPlaylist1open(!isPlaylist1open)}
                ></button>
                
                <button className="btn album-cover-2"></button>
            </div>
            <div className='btn-container'>
                <button className="btn album-cover-3"></button>
                <button className="btn album-cover-4"></button>
            </div>
        </>
    )
}
