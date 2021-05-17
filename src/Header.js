import React from 'react';
import SearchIcon from "@material-ui/icons/Search";
import {Avatar} from '@material-ui/core';
import './Header.css';
import {useDataLayerValue} from "./DataLayer";

export default function Header() {
    const [{ user }, dispatch] = useDataLayerValue();
    return(
        <div className='header'>
            <div className='header-left'>
                <SearchIcon />
                <input
                    placeholder='Search for Artists, Songs or Albums'
                    type='text'
                />
            </div>
            <div className='header-right'>
                <Avatar
                    src={user?.images[0]?.url}
                    alt={user}
                />
                <h4>{user?.display_name}</h4>
            </div>
        </div>
    )
}
