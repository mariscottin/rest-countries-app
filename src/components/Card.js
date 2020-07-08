import React from 'react';

import './Card.css';

const Card = (props) => {
    return(
        <div className={`card card-${props.mode}`}>
            <div className="card-image">
                <img src={props.flag} alt={`${props.name} Flag`}/>
            </div>
            <div className="card-body">
                <h5>{props.name}</h5>
                <p><span className="bolder">Population: </span>{props.population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}</p>
                <p><span className="bolder">Region: </span>{props.region}</p>
                <p><span className="bolder">Capital: </span>{props.capital}</p>
            </div>
        </div>
    )
}

export default Card;