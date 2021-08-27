import React, {useEffect, useState} from 'react';
import Header from './Header';
import './Playing.css';
import {useDataLayerValue} from "./DataLayer";
import logo from './images/logo.svg';
import Reel from "./Reel";
import Controls from "./Controls";
import ProgressBar from "./ProgressBar";

export default function Playing({spotify}) {

    const [playing, setPlaying] = useState(false)
    const [progress, setProgress] = useState(null)
    const [track, getTrack] = useState(null);
    const [artist, getArtist] = useState(null);
    const [img, getImg] = useState(null);
    const [{discover_weekly, route, searchResults}, dispatch] = useDataLayerValue();
    const [playlist, setPlaylist] = useState(null);
    const [playlistDisplay, setPlaylistDisplay] = useState(true);
    const [tracks, setTracks] = useState(null);

    useEffect(() => {
        //document.querySelector('.playing').style.height = `${document.querySelector('.player').scrollHeight / 2}px`
    }, [])

    useEffect(() => {
        spotify.getMyDevices().then(devices => {
            console.log(devices);
        })
        setInterval(() => {
            spotify.getMyCurrentPlayingTrack().then(track => {
                //console.log(track)
                if (track.hasOwnProperty('item') && track.item.hasOwnProperty('name')) {
                    getTrack(track.item.name);
                    getArtist(track.item.artists[0].name);
                    getImg(track.item.album.images[0].url)
                    setPlaying(track.is_playing);
                    setProgress([track.progress_ms, track.item.duration_ms])
                }
            })
        }, 1000);
    }, [])

    useEffect(() => {
        console.log(discover_weekly)
        spotify.getPlaylist(discover_weekly?.id).then(list => {
            setPlaylist(list);
        })
    }, [discover_weekly]);

    useEffect(() => {
        route === 'Home' ? setPlaylistDisplay(true) : setPlaylistDisplay(false)
    }, [route]);

    useEffect(() => {
        if (searchResults.length > 1) {
            spotify.searchTracks(searchResults).then(i => {
                setTracks(i.tracks.items)
                console.log('SEARCHRTACKS')
                console.log(i)
            })
        }
    }, [searchResults]);

    return(
        <div className='player-container col-12 col-sm-12 col-m-12 col-l-12'>
            <div className='playing flex col-12 col-sm-12 col-m-12 col-l-12'>
                <div className='playing-top flex col-12 col-sm-12 col-m-12 col-l-12'>
                    <Reel
                        playing={playing}
                        logo={logo}
                    />
                    <Controls
                        spotify={spotify}
                        artist={artist}
                        img={img}
                        track={track}
                        progress={progress}
                        playing={playing}
                    />
                </div>
                <ProgressBar playing={playing} progress={progress} spotify={spotify}/>
            </div>
        </div>
    )
}
