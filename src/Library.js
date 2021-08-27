import React, {useState, useEffect} from 'react';
import './Library.css';
import {useDataLayerValue} from "./DataLayer";

export default function Library({spotify}) {

    const [likedSongs, getLikedSongs] = useState(null);
    const [{playlists}, dispatch] = useDataLayerValue();

    useEffect(() => {
        spotify.getMe().then(res => {
            console.log(res)
            getLikedSongs(res)
        })
    },[])
    return(
        <div className='lib-container'>
            <div className='lib-header'>
                <h3>Playlists</h3>
            </div>
            <div className='lib-body'>

            </div>
        </div>
    )
}
