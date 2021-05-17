import React, {useEffect} from 'react';
import './SongRow.css';

export default function SongRow({spotify, track}) {
    useEffect(() => console.log(JSON.stringify(track)), [])
    return(
        <div className='songRow'>
            <img className='songRow-album' src={track.album.images[0].url} alt=''/>
            <div className='songRow-info'>
                <h1>{track.name}</h1>
                <p>
                    {track.artists
                        .map((artist) => artist.name)
                        .join(', ')} -{' '}{track.album.name}
                </p>
            </div>
        </div>
    )
}
