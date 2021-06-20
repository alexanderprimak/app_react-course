import React from 'react';
import  styles  from "./site.module.scss";
import {NavLink} from "react-router-dom";

function Site_bar() {

    return (
        
        <div className = {styles.site_bar}>
        <nav>
          <NavLink to = "/Main_content/Profile" activeClassName={styles.active} >Profile</NavLink>
          <NavLink to = "/Main_content/Dialogs" activeClassName={styles.active}>Messages</NavLink>
          <NavLink to = "/Main_content/News"  activeClassName={styles.active}>News</NavLink>
          <NavLink to = "/Main_content/Music"  activeClassName={styles.active}>Music</NavLink>
          <NavLink to = "/Main_content/Setting"  activeClassName={styles.active}>Setting</NavLink>
        </nav>
      </div>
    )
}

export default Site_bar



