import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";

export default function WeatherApp() {
    const [weatherInfo, setWeatherInfo] = useState(null);

    const updatedInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    };

    return (
        <div style={{ textAlign: "center" }}>
            <h2>Weather App by Delta</h2>

            <SearchBox updatedInfo={updatedInfo} />

            {weatherInfo && <InfoBox info={weatherInfo} />}
        </div>
    );
}
