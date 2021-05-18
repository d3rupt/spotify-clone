import React, {useEffect, useState} from 'react';
import Header from './Header';
import './Body.css';
import {useDataLayerValue} from "./DataLayer";
import {PlayCircleFilled} from "@material-ui/icons";
import {Favorite} from "@material-ui/icons";
import {MoreHoriz} from "@material-ui/icons"
import SongRow from './SongRow';
import SongRowSearch from './SongRowSearch';


export default function Body({spotify}) {

    const [{discover_weekly, route, searchResults}, dispatch] = useDataLayerValue();
    const [playlist, setPlaylist] = useState(null);
    const [playlistDisplay, setPlaylistDisplay] = useState(true);
    const [tracks, setTracks] = useState(null);

    useEffect(() => {
        spotify.getPlaylist(discover_weekly?.id).then(list => {
            setPlaylist(list);
        })
    }, [discover_weekly]);

    useEffect(() => {
        route === 'Home' ? setPlaylistDisplay(true) : setPlaylistDisplay(false)
    }, [route]);

    useEffect(() => {
        spotify.searchTracks(searchResults).then(i => {
            setTracks(i.tracks.items)
            console.log(i.tracks.items)
        })
    }, [searchResults]);

    return(
        <div className='body'>
            <Header spotify={spotify} />
            {
                playlistDisplay ? (
                    <div className='body-info'>
                        <img src={discover_weekly?.images[0]?.url} alt='' />
                        <div className='body-infoText'>
                            <strong>PLAYLIST</strong>
                            <h2>{discover_weekly?.name}</h2>
                            <p>{discover_weekly?.description}</p>
                        </div>
                    </div>
                ) : (
                    <div className='body-searchSpacer' />
                )
            }

            <div className='body-songs'>
                {
                    playlistDisplay ? (
                        <div className='body-icons'>
                            <PlayCircleFilled className='body-shuffle body-icon'/>
                            <Favorite className='body-icon'/>
                            <MoreHoriz className='body-icon' />
                        </div>
                    ) : null
                }
                {
                    playlistDisplay ? (

                            playlist?.tracks?.items?.map((track, index) => (
                            <SongRow spotify={spotify} track={track} index={index} />
                        ))

                    ) : (
                        tracks?.map(track => (
                            <SongRowSearch spotify={spotify} track={track} search={true}/>
                    )
                    )
                    )
                }
            </div>
            <div className='body-spacer' />
        </div>
    )
}

/*
tracks:
href: "https://api.spotify.com/v1/search?query=%5Bobject+Object%5D&type=track&offset=0&limit=20"
items: Array(20)
0:
album: {album_type: "album", artists: Array(1), available_markets: Array(177), external_urls: {…}, href: "https://api.spotify.com/v1/albums/2SWmXOdNAbDfXeIYaE8iOW", …}
artists: [{…}]
available_markets: (177) ["AD", "AE", "AG", "AL", "AM", "AO", "AR", "AT", "AU", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BI", "BJ", "BN", "BO", "BR", "BS", "BT", "BW", "BY", "BZ", "CA", "CH", "CI", "CL", "CM", "CO", "CR", "CV", "CY", "CZ", "DE", "DJ", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FJ", "FM", "FR", "GA", "GB", "GD", "GE", "GH", "GM", "GN", "GQ", "GR", "GT", "GW", "GY", "HK", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JM", "JO", "JP", "KE", "KG", "KH", "KI", "KM", "KN", "KR", "KW", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "MA", "MC", "MD", "ME", …]
disc_number: 1
duration_ms: 248373
explicit: false
external_ids: {isrc: "GBMWL1200017"}
external_urls: {spotify: "https://open.spotify.com/track/4U7Tml0i4YRHX11mY97xMO"}
href: "https://api.spotify.com/v1/tracks/4U7Tml0i4YRHX11mY97xMO"
id: "4U7Tml0i4YRHX11mY97xMO"
is_local: false
name: "Objects Objects"
popularity: 20
preview_url: "https://p.scdn.co/mp3-preview/102207fb1a9502364036302b819b458da5ec1a34?cid=b4e57e3c448a4bafa65dda31668f22bf"
track_number: 5
type: "track"
uri: "spotify:track:4U7Tml0i4YRHX11mY97xMO"
__proto__: Object
 */
