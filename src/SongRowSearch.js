import React, {useEffect, useState} from 'react';
import './SongRow.css';
import {useDataLayerValue} from "./DataLayer";

export default function SongRowSearch({spotify, track}) {
    useEffect(() => {
        console.log(track)
    }, [])

    const handleClick = () => {
        spotify.play()
    }
    return(
        <div className='songRow' onClick={handleClick} key={track.id}>
            <img className='songRow-album' src={track?.album?.images[0]?.url} alt=''/>
            <div className='songRow-info'>
                <h1>{track.name}</h1>
                <p>
                    {track.artists
                        .map((artist) => artist.name)
                        .join(', ')} -{' '}{track?.album?.name}
                </p>
            </div>
        </div>
    )
}
