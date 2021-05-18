import React from 'react';
import Sidebar from "./Sidebar";
import Body from "./Body";
import Footer from "./Footer";
import './Player.css';

export default function Player({spotify}) {
    return(
        <div className='player'>
            <div className='player-body'>
                <Sidebar spotify={spotify}/>
                <Body spotify={spotify}/>
                <Footer spotify={spotify}/>
            </div>
        </div>
)
}
