import React, {useEffect, useState} from 'react';
import SpotifyWebApi from 'spotify-web-api-js';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Login from "./Login";
import Player from "./Player";
import './App.css';
import {getTokenFromUrl} from "./spotify";
import {useDataLayerValue} from './DataLayer';
import Playing from "./Playing";


const spotify = new SpotifyWebApi();

function App() {
    const [{user, token, playlists}, dispatch] = useDataLayerValue();

    useEffect(() => {
        const hash = getTokenFromUrl();
        window.location.hash = '';
        const _token = hash.access_token;

        if (_token) {
            dispatch({
                type: 'SET_TOKEN',
                token: _token
            })

            spotify.setAccessToken(_token);

            spotify.getMe().then(user => {

                dispatch({
                    type: 'SET_USER',
                    user: user,
                });
            });
            spotify.getUserPlaylists().then((playlists) => {
                dispatch({
                    type: 'SET_PLAYLISTS',
                    playlists: playlists,
                });
                spotify.getPlaylist(playlists.items[0].id).then(playlist => {
                    dispatch({
                        type: 'SET_DISCOVER_WEEKLY',
                        discover_weekly: playlist
                    })
                })
            })
        }
    }, [])

  return (
    <Router>
        <div className="App col-12 col-m-12 co-l-12 flex">
            <div className='app-blur col-12 col-m-12 col-l-12'/>
            { token ? (
                <Playing  spotify={spotify}/>
            ) : (
                <Login />
            )
            }
        </div>
    </Router>
  );
}

export default App;
