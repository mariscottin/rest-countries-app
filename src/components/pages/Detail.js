import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowAltLeft } from '@fortawesome/free-solid-svg-icons';

import './Details.css';
const Detail = (props) => {
    const { code } = useParams()
    const [countryDetails, setCountryDetails] = useState();
    const [isLoading, setIsLoading] = useState(false);

    const fetchOneCountry = async (code) => {
        try {
            setIsLoading(true);
            const response = await fetch(`https://restcountries.eu/rest/v2/alpha/${code.toLowerCase()}`);
            const responseData = await response.json();
            setCountryDetails(responseData);
            setIsLoading(false);
        } catch (err) {
            window.alert('Something went wrong! Please refresh the page');
            console.log(err);
            setIsLoading(false);
        }
    }


    useEffect(() => {
        fetchOneCountry(code)
    }, [code])

    return (
        <div className="details">
            {isLoading &&
                <h1>Loading...</h1>
            }
            {(countryDetails && !isLoading) &&
                <div>
                    <div className="back-link__container">
                        <div className={`back-btn back-btn-${props.mode}`}>
                            <Link to="/" style={{ width: '100%' }}><FontAwesomeIcon icon={faLongArrowAltLeft} /> Back</Link>
                        </div>
                    </div>
                    <div className="country-details__container">
                        <div className="country-details__img-container">
                            <img src={countryDetails.flag} alt={countryDetails.name} />
                        </div>
                        <div className="details__container">
                            <h2>{countryDetails.name}</h2>
                            <div className="subdetails-container">
                                <div className="subdetails-col-1">
                                    <p><span className="bolder">Native Name: </span>{countryDetails.nativeName}</p>
                                    <p><span className="bolder">Population: </span>{countryDetails.population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}</p>
                                    <p><span className="bolder">Region: </span>{countryDetails.region}</p>
                                    <p><span className="bolder">Sub Region: </span>{countryDetails.subregion}</p>
                                    <p><span className="bolder">Capital: </span>{countryDetails.capital}</p>
                                </div>
                                <div className="subdetails-col-2">
                                    <p><span className="bolder">Top Level Domain: </span>{countryDetails.topLevelDomain}</p>
                                    <p><span className="bolder">Currencies: </span>{countryDetails.currencies.length > 1 ? countryDetails.currencies.map(c => c.code + '; ') : countryDetails.currencies[0].code}</p>
                                    <p><span className="bolder">Languages: </span>
                                        {countryDetails.languages.length > 1
                                            ?
                                            countryDetails.languages.map(lang => {
                                                return lang.name + '; '
                                            })
                                            :
                                            countryDetails.languages[0].name
                                        }
                                    </p>
                                </div>
                            </div>
                            <div className="border-countries__container">
                                <p className="bolder">Border Countries: </p>
                                <div className="border-countries__list">
                                    {countryDetails.borders.map(country => {
                                        return (
                                            <div className={`border-country border-country-${props.mode}`} key={country}>
                                                <Link to={`/detail/${country}`}>{country}</Link>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default Detail;