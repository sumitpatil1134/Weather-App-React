import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

import "./InfoBox.css";

import AcUnitIcon from "@mui/icons-material/AcUnit";
import SunnyIcon from "@mui/icons-material/Sunny";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";

export default function InfoBox({ info }) {
    const COLD_URL =
        "https://images.unsplash.com/photo-1600699606850-b98817542653?w=600&auto=format&fit=crop&q=60";

    const HOT_URL =
        "https://media.istockphoto.com/id/1296441088/photo/death-valley.webp?a=1&b=1&s=612x612&w=0&k=20&c=Adi2flWXyutkjMNeNh5LZd1Z4hG01sjX6QAe7JLhbLo=";

    const RAIN_URL =
        "https://media.istockphoto.com/id/1322717990/photo/thick-dark-black-heavy-storm-clouds-covered-summer-sunset-sky-horizon-gale-speed-wind-blowing.webp?a=1&b=1&s=612x612&w=0&k=20&c=W2-dXNrzqf1Lgo-xL5UYWsvM3q9EzqqpOCWhgC_cklk=";

    const imageUrl =
        info.humidity > 80
            ? RAIN_URL
            : info.temp > 15
            ? HOT_URL
            : COLD_URL;

    const weatherIcon =
        info.humidity > 80 ? (
            <ThunderstormIcon />
        ) : info.temp > 15 ? (
            <SunnyIcon />
        ) : (
            <AcUnitIcon />
        );

    return (
        <div className="InfoBox">
            <div className="cardContainer">
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image={imageUrl}
                        title={`${info.city} weather`}
                    />

                    <CardContent>
                        <Typography
                            gutterBottom
                            variant="h5"
                            component="div"
                        >
                            {info.city} {weatherIcon}
                        </Typography>

                        <Typography
                            variant="body2"
                            sx={{ color: "text.secondary" }}
                            component="div"
                        >
                            <p>
                                Temperature = {info.temp}&deg;C
                            </p>

                            <p>
                                Humidity = {info.humidity}%
                            </p>

                            <p>
                                Min Temp = {info.tempMin}&deg;C
                            </p>

                            <p>
                                Max Temp = {info.tempMax}&deg;C
                            </p>

                            <p>
                                The weather can be described as{" "}
                                <i>{info.weather}</i>
                                <br />
                                Feels like = {info.feelsLike}&deg;C
                            </p>
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
