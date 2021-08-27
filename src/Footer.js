import React, {useEffect, useState} from 'react';
import './Footer.css';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import ShuffleIcon from '@material-ui/icons/Shuffle';
import RepeatIcon from '@material-ui/icons/Repeat';
import { Grid, Slider} from '@material-ui/core';
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay';
import PauseCircleOutlineIcon from '@material-ui/icons/PauseCircleOutline';
import VolumeDownIcon from '@material-ui/icons/VolumeDown';
import {useDataLayerValue} from "./DataLayer";

export default function Footer({spotify}) {
    const [playing, setPlaying] = useState(false);
    const [shuffle, setShuffle] = useState(null);
    const [currentTrack, setCurrentTrack] = useState(null);
    const [repeat, setRepeat] = useState('off');
    const [playState, setPlayState] = useState(null);
    const [sliderValue, setSliderValue] = useState(0);
    const [{token}, dispatch] = useDataLayerValue();

    useEffect(() => {
        setInterval(() => {
            spotify.getMyCurrentPlaybackState().then(x => {
                if (x) {
                    setSliderValue(x.device.volume_percent)
                    if (shuffle !== x.shuffle_state) {
                        setShuffle(x.shuffle_state)
                    }
                    if (currentTrack !== x.item) {
                        setCurrentTrack(x.item)
                    }
                    if (playing != x.is_playing) {
                        setPlaying(!playing)
                    }
                    if (repeat !== x.repeat_state) {
                        setRepeat(x.repeat_state)
                    }
                }
            })
        }, 1000)
    }, [])

    const handleRepeat = () => {
        spotify.setRepeat(repeat)
    }
    const shuffleChange = () => {
        spotify.setShuffle(!shuffle)
    }
    return(
        <div className='footer'>
            <div className='footer-left'>
                <img
                    src={currentTrack?.album?.images[0]?.url}
                    className='footer-albumLogo'
                />
                <div className='footer-songInfo'>
                    <h4>{currentTrack?.name}</h4>
                    <p>{currentTrack?.artists[0]?.name}</p>
                </div>
            </div>
            <div className='footer-center'>
                <ShuffleIcon onClick={shuffleChange} className={shuffle ? 'footer-icon-green' : 'footer-icon-inactive'}/>
                <SkipPreviousIcon onClick={spotify.skipToPrevious} className='footer-icon' />
                {playing ? (
                    <div onClick={() => {
                        spotify.pause()
                    }}>
                        <PauseCircleOutlineIcon fontSize='large' className='footer-icon-green' />
                    </div>
                ): (
                    <div onClick={() => {
                        spotify.play()
                    }}>
                        <PlayCircleOutlineIcon fontSize='large' className='footer-icon-inactive' />
                    </div>

                )}
                <SkipNextIcon onClick={spotify.skipToNext} className='footer-icon' />
                <RepeatIcon className={repeat === 'context' || repeat === 'track' ? 'footer-icon-green' : 'footer-icon-inactive'} onClick={handleRepeat}/>

            </div>
            <div className='footer-right'>
                <Grid container spacing={2}>
                    <Grid item>
                        <PlaylistPlayIcon />
                    </Grid>
                    <Grid item>
                        <VolumeDownIcon />
                    </Grid>
                    <Grid item xs>
                        <Slider min={0} max={100} value={sliderValue} onChange={(x) => spotify.setVolume(x)}/>
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}
