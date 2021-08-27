import React, {useEffect} from 'react';
import './Reel.css';

function Reel({playing, logo}) {

    useEffect(() => {
        document
            .querySelector('.reel-container')
            .style
            .height = `${document.querySelector('.reel-container').scrollWidth}px`;
        window.addEventListener('resize', () => {
            document
                .querySelector('.reel-container')
                .style
                .height = `${document.querySelector('.reel-container').offsetWidth}px`;
        })
    }, [])
    return (
        <div className='playing-reel flex col-12 col-sm-5 col-m-6 col-l-6'>
            <div className='reel-container flex'>
                <div className='reel flex' style={playing ? {animation: 'roll 3s linear infinite forwards'} : {}}>
                    <div className='bump-container flex'>
                        <div className='reel-bump bump1' style={playing ? {animation: 'bump-roll 3s linear infinite alternate'} : {}}>
                            <div className='bump-inner'></div>
                        </div>
                    </div>
                    <div className='bump-container flex'>
                        <div className='reel-bump bump2' style={playing ? {animation: 'bump-roll 3s linear infinite alternate'} : {}}>
                            <div className='bump-inner'></div>
                        </div>
                    </div>
                    <div className='bump-container flex'>
                        <div className='reel-bump bump3' style={playing ? {animation: 'bump-reverse 3s linear infinite alternate'} : {}}>
                            <div className='bump-inner'></div>
                        </div>
                    </div>
                </div>
                <div className='reel-middle flex'>
                    <div className='middle-outer flex'>
                        <div className='middle-ridgesContainer' style={playing ? {animation: 'roll 3s linear infinite forwards'} : {}}>
                            <div className='middle-ridges ridges-outer flex'>
                                <div className='middle-ridge ridge-outer'></div>
                                <div className='middle-ridge ridge-outer'></div>
                                <div className='middle-ridge ridge-outer'></div>
                                <div className='middle-ridge ridge-outer'></div>
                            </div>
                            <div className='middle-ridges ridges-inner flex'>
                                <div className='middle-ridge ridge-inner'></div>
                                <div className='middle-ridge ridge-inner'></div>
                                <div className='middle-ridge ridge-inner'></div>
                                <div className='middle-ridge ridge-inner'></div>
                            </div>
                        </div>
                        <div className='middle-middle flex'>

                        </div>
                    </div>

                </div>
                <div className='reel-containerAfter flex'>
                    <img src={logo} />
                </div>
            </div>

        </div>
    );
}

export default Reel;
