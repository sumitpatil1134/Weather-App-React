import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./SearchBox.css";
import { useState } from "react";

export default function SearchBox({ updatedInfo }) {
    const [city, setCity] = useState("");
    const [error, setError] = useState("");

    const API_URL = "https://api.openweathermap.org/data/2.5/weather";

    const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

    const getWeatherInfo = async () => {
        const response = await fetch(
            `${API_URL}?q=${encodeURIComponent(city.trim())}&appid=${API_KEY}&units=metric`
        );

        if (!response.ok) {
            throw new Error("City not found");
        }

        const jsonResponse = await response.json();

        return {
            city: jsonResponse.name,
            temp: jsonResponse.main.temp,
            tempMin: jsonResponse.main.temp_min,
            tempMax: jsonResponse.main.temp_max,
            humidity: jsonResponse.main.humidity,
            feelsLike: jsonResponse.main.feels_like,
            weather: jsonResponse.weather[0].description,
        };
    };

    const handleChange = (event) => {
        setCity(event.target.value);
        setError("");
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!city.trim()) {
            setError("Please enter a city name.");
            return;
        }

        try {
            const newInfo = await getWeatherInfo();

            setError("");

            if (updatedInfo) {
                updatedInfo(newInfo);
            }

            setCity("");
        } catch (err) {
            console.error(err);
            setError("City not found. Please enter a valid city.");
        }
    };

    return (
        <div className="searchBox">
            <form onSubmit={handleSubmit}>
                <TextField
                    id="city"
                    label="City"
                    variant="outlined"
                    value={city}
                    onChange={handleChange}
                />

                <br />
                <br />

                <Button variant="contained" type="submit">
                    Search
                </Button>

                {error && (
                    <p style={{ color: "red" }}>
                        {error}
                    </p>
                )}
            </form>
        </div>
    );
}
