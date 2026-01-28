import React from 'react'
import "./sidebaricon.css"
import { Link, useLocation as uselocation } from 'react-router-dom';

export default function SideBarIcons(props) {
  const location = uselocation();
  const isActive = location.pathname === props.to;  
  const btnbody = isActive ? "sidebaricon active" : "sidebaricon";
  return (
    <div>
       <Link to={props.to} className={btnbody}>
            <div className='icon'>{props.icons}</div>
            <div className='title'>{props.title}</div>
        </Link>
    </div>
  )
}
