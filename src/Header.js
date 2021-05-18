import React, {useState, useEffect} from 'react';
import SearchIcon from "@material-ui/icons/Search";
import {Avatar} from '@material-ui/core';
import './Header.css';
import {useDataLayerValue} from "./DataLayer";

export default function Header({spotify}) {
    const [{ user, route, searchResults }, dispatch] = useDataLayerValue();
    const [search, isSearching] = useState(false);
    const [results, setResults] = useState([]);

    useEffect(() => {
        route === 'Search' ? isSearching(true) : isSearching(false);
    }, [route])

    const handleSearch = (e) => {
        console.log(e.target.value)
        if (e.target.value.length > 0) {
            dispatch({
                type: 'SET_SEARCH',
                searchResults: e.target.value,
            })
        }
    }

    return(
        <div className='header'>
            <div className={search ? 'header-left' : 'header-left search-inactive'}>
                <SearchIcon />
                <input
                    placeholder='Search for Artists, Songs or Albums'
                    type='text'
                    onChange={handleSearch}
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
