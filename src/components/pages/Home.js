import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SearchFilter from '../SearchFilter';
import Card from '../Card';

import './Home.css'

const Home = (props) => {
    const [isLoading, setIsLoading] = useState(false);
    const [countries, setCountries] = useState();
    const [filteredCountries, setFilteredCountries] = useState();

    const filterByRegion = (region) => {
        console.log('selected ' + region)
        if (region) {
            fetchCountriesByRegion(region);
        } else {
            fetchCountries();
        }
    }

    const fetchCountries = async () => {
        setIsLoading(true);
        try {
            const response = await fetch('https://restcountries.eu/rest/v2/all');
            const responseData = await response.json();
            setCountries(responseData);
            setFilteredCountries(responseData);
            setIsLoading(false);
        } catch (err) {
            window.alert('Something went wrong! Please refresh the page');
            setIsLoading(false);
        }
    }

    const fetchCountriesByRegion = (region) => {
        if(region){
            const filteredArr = countries.filter(country => {
                return country.region.toUpperCase() === region.toUpperCase();
            })
            setFilteredCountries(filteredArr);
        }else{
            setFilteredCountries(countries);
        }
    }

    const filterByInput = (input) => {
        const filteredArr = countries.filter(country => {
            return country.name.toUpperCase().indexOf(input.toUpperCase()) !== -1;
        });
        setFilteredCountries(filteredArr);
    }

    useEffect(() => {
        fetchCountries();
    }, [])

    return (
        <div className="main-body">
            <SearchFilter filterByRegion={filterByRegion} filterByInput={filterByInput} mode={props.mode}/>
            {isLoading &&
                <h2>Loading...</h2>
            }
            <div className="countries__container">
                {(filteredCountries && !isLoading) &&
                    filteredCountries.map(country => {
                        return (
                            <Link to={`detail/${country.alpha3Code}`} className="card__container" key={country.numericCode} >
                                <Card name={country.name} flag={country.flag} population={country.population} region={country.region} capital={country.capital} mode={props.mode}/>
                            </Link>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Home;