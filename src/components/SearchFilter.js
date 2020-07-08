import React from 'react';
import SearchBar from './SearchBar';
import Filter from './Filter';

import './SearchFilter.css';

const SearchFilter = (props) => {
    return(
        <div className="search-filter__container">
            <div className="searchbar__container">
                <SearchBar placeholder="Search for a country..." filterByInput={props.filterByInput} mode={props.mode}/>
            </div>
            <div className="filter__container">
                <Filter filterByRegion={props.filterByRegion} mode={props.mode}/>
            </div>
        </div>
    )
}

export default SearchFilter;