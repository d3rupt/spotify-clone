import React from "react";
import './SidebarOption.css'
import {useDataLayerValue} from "./DataLayer";

export default function SidebarOption({spotify, index, title, Icon}) {
    const [{discover_weekly, playlists}, dispatch] = useDataLayerValue();
    return(
        <div className='sidebarOption' onClick={() => {
            if (index) {
                dispatch({
                    type: 'SET_DISCOVER_WEEKLY',
                    discover_weekly: playlists.items[index]
                })
            }
        }
        }>
            {Icon && <Icon className='sidebarOption-icon' />}
            {Icon ? <h4>{title}</h4> : <p>{title}</p>}
        </div>
    )
}
