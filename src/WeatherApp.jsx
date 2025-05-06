
import SearchBox from './SearchBox';
import InfoBox from './InfoBox';
import { useState } from 'react';



export default function WeatherApp() {
    const [weatherInfo, setWeatherInfo] = useState({
        city: "Delhi",
        temp: 24.84,
        tempMin: 25.85,
        tempMax: 25.85,
        humidity: 47,
        feelsLike: 24.84,
        weather: "Haze",
        windSpeed:20,
    });

    let updateInfo=(info)=>{
        setWeatherInfo(info);
    }

    return (
        <>
            <div className="container">
                <SearchBox updateInfo={updateInfo}/>
                <InfoBox info={weatherInfo}/>
            </div>
        </>
    )
} 