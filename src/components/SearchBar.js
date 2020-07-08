import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

import './SearchBar.css';
const SearchBar = (props) => {
    const inputHandler = (e) =>{
        props.filterByInput(e.target.value);
    }
    return(
        <div className= {`relative searchbar-component searchbar-${props.mode}`} >
            <input type="search" placeholder={props.placeholder} className={`searchbar ${props.className}`} onChange={inputHandler}/>
            <FontAwesomeIcon icon={faSearch} />
        </div>
    )
}

export default SearchBar;