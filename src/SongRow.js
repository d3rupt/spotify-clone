import React, {useEffect, useState} from 'react';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd';
import './SongRow.css';
import {useDataLayerValue} from "./DataLayer";

export default function SongRow({spotify, track}) {
    const [{discover_weekly}, dispatch] = useDataLayerValue();
    useEffect(() => {
        console.log(track)
    }, [])
    const handleClick = () => {
        spotify.play()
    }
    return(
        <div className='songRow' onClick={handleClick} key={track.id}>
            <img className='songRow-album' src={track?.track?.album?.images[0]?.url} alt=''/>
            <div className='songRow-info'>
                <div>
                    <h1>{track.name}</h1>
                    <p>
                        {track.track.artists
                            .map((artist) => artist.name)
                            .join(', ')} -{' '}{track?.track?.album?.name}
                    </p>
                </div>
                <div className='songRow-icons'>
                    <PlaylistAddIcon onClick={() => {
                        spotify.getMyDevices().then(x => spotify.queue(track.track.url, x.id))
                    }}/>
                    <PlayArrowIcon />
                </div>
            </div>
        </div>
    )
}
