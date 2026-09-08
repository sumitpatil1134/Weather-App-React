import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./SearchBox.css";
import { useState } from "react";

export default function SearchBox({ upadtedInfo }) {
    const [city, setCity] = useState("");
    const [error, setError] = useState(false);

    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "YOUR_API_KEY";

    const getWeatherInfo = async () => {
        try {
            const response = await fetch(
                `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
            );

            if (!response.ok) {
                throw new Error("City not found");
            }

            const jsonResponse = await response.json();

            console.log(jsonResponse);

            const result = {
                city: city,
                temp: jsonResponse.main.temp,
                tempMin: jsonResponse.main.temp_min,
                tempMax: jsonResponse.main.temp_max,
                humidity: jsonResponse.main.humidity,
                feelsLike: jsonResponse.main.feels_like,
                weather: jsonResponse.weather[0].description,
            };

            console.log(result);

            return result;
        } catch (err) {
            console.error(err);
            throw err;
        }
    };

    const handleChange = (event) => {
        setCity(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!city.trim()) {
            setError(true);
            return;
        }

        try {
            const newInfo = await getWeatherInfo();

            setError(false);

            if (upadtedInfo) {
                upadtedInfo(newInfo);
            }

            setCity("");
        } catch (err) {
            setError(true);
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
                        City not found. Please enter a valid city.
                    </p>
                )}
            </form>
        </div>
    );
}
