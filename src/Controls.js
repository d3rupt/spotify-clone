import React, {useEffect, useState} from 'react';
import {FavoriteBorder, FirstPage, LastPage, Pause, PlayArrow, Replay, Shuffle} from "@material-ui/icons";
import './Controls.css';

function Controls({img, track, progress, artist, spotify, playing}) {

    const [shuffle, setShuffle] = useState(false)
    const [repeat, setRepeat] = useState('off')

    useEffect(() => {
        document.querySelector('.playing-controls').addEventListener('click', (event) => {
            if (event.target.classList.contains('button')) {
                if (event.target.classList.contains('playing-button')) {
                    event.target.classList.toggle('button-pressed')
                    setTimeout(() => {
                        event.target.classList.toggle('button-pressed')
                    }, 100)
                } else if (event.target.parentElement.classList.contains('playing-button')) {
                    event.target.parentElement.classList.toggle('button-pressed')
                    setTimeout(() => {
                        event.target.parentElement.classList.toggle('button-pressed')
                    }, 100)
                }
            }

            if (event.target.classList.contains('stay-button')) {
                event.target.classList.toggle('button-pressed')
            } else if (event.target.parentElement.classList.contains('stay-button')) {
                event.target.parentElement.classList.toggle('button-pressed')
            }
        })
    }, [])

    let playState = () => {
        if (playing == true) {
            return spotify.pause();
        } else {
            return spotify.play();
        }
    }

    let repeatState = () => {
        if (repeat === 'off') {
            setRepeat('track');
            spotify.setRepeat('track')
            //return('track');
        } else {
            setRepeat('off');
            spotify.setRepeat('off')
            //return('off');
        };
    }

    let shuffleState = () => {
        if (shuffle == true) {
            setShuffle(false);
            spotify.setShuffle(false);
        } else {
            setShuffle(true);
            spotify.setShuffle(true);
        }
    }

    return (
        <div className='playing-right flex col-12 col-sm-7 col-m-5 col-l-5'>
            <div className='playing-info flex col-12 col-m-12 col-l-12'>
                {img ? <img src={img} alt='' /> : <></>}
                <div className='img-shader' />
                <div className='playing-infoText flex'>
                    <h6>Now Playing</h6>
                    {track ? <p><strong>{track} - </strong>{artist}</p> : <p>-</p>}
                </div>
            </div>
            <div className='playing-controls flex col-12 col-m-12 col-l-12'>
                <div className='playing-button stay-button flex' onClick={shuffleState}>
                    <Shuffle style={shuffle ? {color: '#1bd954'} : {}} className='button'/>
                </div>
                <div className='playing-button button flex' onClick={() => {spotify.skipToPrevious()}}>
                    <FirstPage className='button'/>
                </div>
                <div className='playing-button playing-playButton button flex' onClick={playState}>
                    {playing ? <Pause /> : <PlayArrow className='button'/>}
                </div>
                <div className='playing-button button flex' onClick={() => {spotify.skipToNext()}}>
                    <LastPage className='button' />
                </div>
                <div className='playing-button stay-button button flex' onClick={repeatState}>
                    <Replay style={repeat === 'track' ? {color: '#1bd954'} : {}} className='button'/>
                </div>
            </div>
        </div>
    );
}

export default Controls;
