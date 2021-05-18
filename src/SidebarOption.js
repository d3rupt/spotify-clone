import React, {useState} from "react";
import './SidebarOption.css'
import {useDataLayerValue} from "./DataLayer";

export default function SidebarOption({spotify, index, title, Icon}) {
    const [{discover_weekly, playlists}, dispatch] = useDataLayerValue();
    const [active, isActive] = useState(false);
    return(
        <div className={active ? 'sidebarOption sidebar-active' : 'sidebarOption'} onClick={() => {
                //isActive(!active);
                dispatch({
                    type: 'SET_DISCOVER_WEEKLY',
                    discover_weekly: playlists.items[index]
                })
        }
        }>
            {Icon && <Icon className='sidebarOption-icon' />}
            {Icon ? <h4>{title}</h4> : <p>{title}</p>}
        </div>
    )
}
