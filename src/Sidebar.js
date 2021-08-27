import React from 'react';
import SidebarOption from './SidebarOption';
import SidebarOptionWithIcon from './SidebarOptionWithIcon';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import './Sidebar.css';
import {useDataLayerValue} from "./DataLayer";

export default function Sidebar({spotify}) {
    const [{playlists ,route}, dispatch] = useDataLayerValue();
    return(
        <div className='sidebar col-m-4 col-l-4'>
            <img
                className='sidebar-logo'
                src='https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg'
            />
            <SidebarOptionWithIcon Icon={HomeIcon} title='Home'/>
            <SidebarOptionWithIcon Icon={SearchIcon} title='Search'/>
            <SidebarOptionWithIcon Icon={LibraryMusicIcon} title='Your Library'/>

            <br />

            <strong className='sidebar-title'>PLAYLISTS</strong>
            <hr />
            {playlists?.items?.map((playlist, index) => (
                <SidebarOption spotify={spotify} index={index} title={playlist.name} />

            ))}

        </div>
    )
}
