import React, { useState } from 'react';
import '../Styles/Weather.css'

function WeatherContainer () {
    const [searchQuery, setSearchQuery] = useState();

    function updateSearchQuery(event){
        setSearchQuery(event.target.value);
    }

    return (
        <section className='weather-container'>
            <header className='weather-header'>
                <h3>Weather</h3>
                <div>
                    <input
                        placeholder='Zip Code'
                        className='search-input'
                        onChange={updateSearchQuery}
                    />
                    {/* <button></button> */}
                </div>
            </header>
        </section>
    )
}

export default WeatherContainer;
