import React from 'react';
import {loginUrl} from "./spotify";
import './Login.css'

export default function Login() {
    return(
        <div className='login col-12 col-m-12 col-l-12'>
            <img
                src='https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg'
            />
            <h3>Have a Spotify Premium account?</h3>
            <h4>(This is a remote. Please have Spotify open to play elsewhere.)</h4>
            <a href={loginUrl}>LOG IN WITH SPOTIFY</a>
            <h3>Otherwise</h3>
            <a href='https://youtu.be/IM6IgBMmRSI'>WATCH THE DEMO</a>
        </div>
    )
}
