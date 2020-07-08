import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

import './Filter.css';
const Filter = (props) => {
    const [ dropdownIsOpen, setDropdownIsOpen ] = useState(false);
    const [ selectedRegion, setSelectedRegion] = useState();

    const toggleDropDown = () => {
        setDropdownIsOpen(!dropdownIsOpen);
    }

    const selectRegionHandler = (region) => {
        setSelectedRegion(region);
        setDropdownIsOpen(false);
        props.filterByRegion(region);
    }

    return (
        <div className="filter-component relative">
            <div className={`main-filter-box filter-${props.mode}`} onClick={toggleDropDown}>
                {selectedRegion ? selectedRegion : 'Filter by Region'}
                <FontAwesomeIcon icon={faChevronDown} />
            </div>
            {dropdownIsOpen && 
                <div className={`dropdown__container filter-${props.mode}`}>
                    <ul className={`dropdown-options dropdown-options-${props.mode}`}>
                        {selectedRegion && 
                        <li onClick={()=> selectRegionHandler(false)}>All</li>
                        }
                        {selectedRegion !== 'Africa' &&
                            <li onClick={()=> selectRegionHandler('Africa')}>Africa</li>
                        }
                        {selectedRegion !== 'America' &&
                            <li onClick={()=> selectRegionHandler('Americas')}>Americas</li>
                        }
                        {selectedRegion !== 'Asia' &&
                            <li onClick={()=> selectRegionHandler('Asia')}>Asia</li>
                        }
                        {selectedRegion !== 'Europe' &&
                            <li onClick={()=> selectRegionHandler('Europe')}>Europe</li>
                        }
                        {selectedRegion !== 'Oceania' &&
                            <li onClick={()=> selectRegionHandler('Oceania')}>Oceania</li>
                        }
                    </ul>
                </div>
            }
        </div>
    )
}

export default Filter;