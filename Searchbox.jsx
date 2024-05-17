

import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./Searchbox.css";

export default function Searchbox() {
    const [city, setCity] = useState("");
    const [error, setError] = useState("False");
    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "70a98db147415da806757819e97d29f2";

    const getWeatherInfo = async () => {
        try {
            const response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }
            const data = await response.json();
            console.log(data);
            let result = {
                city: city,
                temp: data.main.temp,
                tempMin: data.main.temp_min,
                tempMax: data.main.temp_max,
                humidity: data.main.humidity,
                feelsLike: data.main.feels_like, // Corrected property name
                weather: data.weather[0].description,
            };
            console.log(result);
            return result;
        } catch (error) {
            console.error("Error fetching weather data:", error);
            setError(True); // Set error message
            return null; // Return null or handle the error as appropriate
        }
    };

    const handleChange = (evt) => {
        setCity(evt.target.value);
        setError(""); // Clear error message when input changes
    };

    const handleSubmit = async (evt) => {
        evt.preventDefault();
        console.log(city);
        let newInfo = await getWeatherInfo();
        if (newInfo) {
            // Update UI with newInfo
        }
        setCity("");
    };

    return (
        <div className="Searchbox">
            <form onSubmit={handleSubmit}>
                <TextField id="city" label="City name" variant="outlined" required value={city} onChange={handleChange} />
                {error && <p className="error">{error}</p>} {/* Display error message */}
                <br />
                <Button variant="contained" type="submit">
                    Search
                </Button>
                {error && <p>No such place exists </p>}
            </form>
        </div>
    );
}
