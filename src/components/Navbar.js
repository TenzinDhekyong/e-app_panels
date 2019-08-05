import React from 'react';

const Navbar =() =>{
    return(
        <nav className="nav-wrapper red darken-3">
            <div className="Container">
                <div className="brand-logo">e-Yantra</div>
                <ul className="right">
                    <li><a href="/notification">Notification</a></li>
                    <li><a href="/announcement">Announcement</a></li>
                    <li><a href="/talk">Talks</a></li>
                    <li><a href="/lab">Labs</a></li>
                    <li><a href="/event">Events</a></li>
                </ul>
                
            </div>
        </nav>
    )
}

export default Navbar;