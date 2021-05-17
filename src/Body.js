import React, {useEffect} from 'react';
import Header from './Header';
import './Body.css';
import {useDataLayerValue} from "./DataLayer";
import {PlayCircleFilled} from "@material-ui/icons";
import {Favorite} from "@material-ui/icons";
import {MoreHoriz} from "@material-ui/icons"
import SongRow from './SongRow';

export default function Body({spotify}) {

    const [{discover_weekly}, dispatch] = useDataLayerValue();
    useEffect(() => {
        console.log(discover_weekly)
    }, [discover_weekly])

    return(
        <div className='body'>
            <Header spotify={spotify} />
            <div className='body-info'>
                <img src={discover_weekly?.images[0].url} alt='' />
                <div className='body-infoText'>
                    <strong>PLAYLIST</strong>
                    <h2>{discover_weekly?.name}</h2>
                    <p>{discover_weekly?.description}</p>
                </div>
            </div>
            <div className='body-songs'>
                <div className='body-icons'>
                    <PlayCircleFilled className='body-shuffle'/>
                    <Favorite fontSize='large'/>
                    <MoreHoriz />
                </div>
                {discover_weekly?.tracks.items.map(item => (
                     <SongRow spotify={spotify} track={item.track} />
                ))}
            </div>
            <div className='body-spacer' />
        </div>
    )
}

/*
{collaborative: false, description: "", external_urls: {…}, followers: {…}, href: "https://api.spotify.com/v1/playlists/5KsudmChXrVKlMsGSjHJqM", …}
collaborative: false
description: ""
external_urls: {spotify: "https://open.spotify.com/playlist/5KsudmChXrVKlMsGSjHJqM"}
followers: {href: null, total: 0}
href: "https://api.spotify.com/v1/playlists/5KsudmChXrVKlMsGSjHJqM"
id: "5KsudmChXrVKlMsGSjHJqM"
images: Array(1)
0:
height: 640
url: "https://i.scdn.co/image/ab67616d0000b273492e4f2e9575b698b649572e"
width: 640
__proto__: Object
length: 1
__proto__: Array(0)
name: "My Playlist #2"
owner: {display_name: "Nathan Durupt", external_urls: {…}, href: "https://api.spotify.com/v1/users/12185398062", id: "12185398062", type: "user", …}
primary_color: null
public: true
snapshot_id: "MixjZjk4YjYyZThiZTkzZDhkYmVmZTM3ZmY2MGQzNjZiNTU2ZWE0OGNj"
tracks: {href: "https://api.spotify.com/v1/playlists/5KsudmChXrVKlMsGSjHJqM/tracks?offset=0&limit=100", items: Array(1), limit: 100, next: null, offset: 0, …}
type: "playlist"
uri: "spotify:playlist:5KsudmChXrVKlMsGSjHJqM"
__proto__: Object
 */
