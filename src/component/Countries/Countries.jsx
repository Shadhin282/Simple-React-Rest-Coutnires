import React, { use, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css'


const Countries = ({ countriesPromise }) => {
    const [visitedCountries, setVisitedCountries] = useState([])
    const [visitedFlag, setVisitedFlag] = useState([])
    
    const handleVisitedFlag = (flag) => {
        console.log('visited flag', flag) 
        const newVisitedFlag = [...visitedFlag, flag]
        setVisitedFlag(newVisitedFlag)
        
    }

    const handleVisitedCountries = (country) => {
        // console.log("Handle Visited Countries.", country)
        // console.log(visitedCountries)
        const newVisitedCountries = [...visitedCountries,country]
        setVisitedCountries(newVisitedCountries)
    }

    const countriesData = use(countriesPromise)
    const countries = countriesData.countries
    // console.log(countries)

    return (
        <div>
            <h1>in the Countries: {countries.length}</h1>
            <h3>Total Visited Countries: {visitedCountries.length}</h3>
            <h3> Toal Visited Flags: {visitedFlag.length}</h3>
            <ol>
                {
                    visitedCountries.map(country => <li key={country.cca3.cca3}>{country.name.common}</li>)
                }
            </ol>
            <div>
                {
                    visitedFlag.map((flag,index) => <img key={index}  className='country' src={ flag}></img>)
                }
            </div>
            <div className='countries'>
            {
                countries.map(country=> <Country key={country.cca3.cca3} country={country} handleVisitedCountries={handleVisitedCountries} handleVisitedFlag={handleVisitedFlag}></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;