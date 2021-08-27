import React, {useEffect, useState} from 'react';
import {VolumeUp, VolumeMute, FiberManualRecord} from "@material-ui/icons";

function ProgressBar({playing, progress, spotify}) {

    const [convertedProgress, getConvertedProgress] = useState([])
    const [percentage, setPercentage] = useState('')
    const [volume, setVolume] = useState(1);

    useEffect(() => {
        document.querySelector('.slider').addEventListener('mouseup', (input) => {
            spotify.setVolume(parseInt(document.querySelector('.slider').value));
            setVolume(parseInt(document.querySelector('.slider').value));
        })
    }, [])

    useEffect(() => {
        if (progress) {
            progressBar(progress[0], progress[1])
            getConvertedProgress([millisToMinutesAndSeconds(progress[0]), millisToMinutesAndSeconds(progress[1])])
        }
    },[progress])

    let progressBar = (total, progress) => {
        let percentage = (total / progress) * 100;
        setPercentage(percentage);
        console.log(percentage)
    }

    let millisToMinutesAndSeconds = (millis) => {
        var minutes = Math.floor(millis / 60000);
        var seconds = ((millis % 60000) / 1000).toFixed(0);
        return (minutes + ":" + (seconds < 10 ? '0' : '') + seconds);
    }

    return (
        <div className='playing-bottom flex col-12 col-sm-12 col-m-12 col-l-12'>
            <div className='progress-text flex col-12 col-sm-12 col-m-12 col-l-12'>
                <div className='progress-textInner flex'>
                    <FiberManualRecord className='play-indicator' style={playing ? { color: '#1bd954'} : {color: 'grey'}}/>
                      <p>{playing ? 'Playing' : 'Paused'}</p>
                    {progress ? <p>{convertedProgress[0]}/{convertedProgress[1]}</p> : null}
                </div>
                <div className='volume flex'>
                    {volume == 0 ? <VolumeMute /> : <VolumeUp />}
                    <input type='range' min='0' max='100' className='slider' />
                </div>
            </div>
            <div className='progress-bar flex col-12 col-m-12 col-l-12'>
                <div className='progress' style={{transform: `translateX(${percentage}%)`}}></div>
            </div>
        </div>
    );
}

export default ProgressBar;
