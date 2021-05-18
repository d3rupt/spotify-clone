import React, {useState, useEffect} from "react";
import './SidebarOption.css'
import {useDataLayerValue} from "./DataLayer";

export default function SidebarOptionWithIcon({spotify, index, title, Icon}) {
    const [{route}, dispatch] = useDataLayerValue();
    const [active, isActive] = useState(false);

    useEffect(() => {
    console.log(route)
    console.log(title)
        route === title ?
            isActive(true)
            : isActive(false)
    }, [route])

    return(
        <div
            onClick={() => {
                dispatch({
                    type: 'SET_ROUTE',
                    route: title
                    })
                }}
            className={active ? 'sidebarOption sidebar-active' : 'sidebarOption'}>
            {Icon && <Icon className='sidebarOption-icon' />}
            <h4>{title}</h4>
        </div>
    )
}
