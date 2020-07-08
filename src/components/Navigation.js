import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon } from '@fortawesome/free-regular-svg-icons'

import './Navigation.css';

const Navigation = (props) => {
    return(
        <nav className={`navbar nav-${props.mode}`}>
            <div className="nav-content">
                <div className="nav-brand">
                    <h3>Where in the world?</h3>
                </div>
                <div className="style-mode">
                    <FontAwesomeIcon icon={faMoon} />
                    <p onClick={props.toggleMode}>Dark Mode</p>
                </div>
            </div>
        </nav>
    )
}

export default Navigation;