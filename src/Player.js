import React from 'react';
import Sidebar from "./Sidebar";
import Playing from "./Playing";
import Footer from "./Footer";
import './Player.css';

export default function Player({spotify}) {

    return(
        <div className='player col-12 col-m-12 col-l-12'>
            <div className='player-body flex col-12 col-m-12 col-l-12'>
                {/*<Sidebar spotify={spotify}/>*/}
                {/*<Playing spotify={spotify}/>*/}
                {/*<Footer spotify={spotify}/>*/}
            </div>
        </div>
)
}
