import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import "./SearchBox.css";
import { useState } from 'react';

export default function SearchBox({ updateInfo }) {
    let [city, setCity] = useState("");
    let [error, setError] = useState(false);

    const API_URL = import.meta.env.VITE_API_URL;
    const API_KEY = import.meta.env.VITE_API_KEY;

    let getWeatherInfo = async () => {
        try {
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            let jsonResponse = await response.json();
            console.log(jsonResponse);
            let result = {
                city: city,
                temp: jsonResponse.main.temp,
                tempMin: jsonResponse.main.temp_min,
                tempMax: jsonResponse.main.temp_max,
                humidity: jsonResponse.main.humidity,
                feelsLike: jsonResponse.main.feels_like,
                weather: jsonResponse.weather[0].description,
                WindSpeed: jsonResponse.wind.speed,
            };
            console.log(result);
            return result;
        } catch (error) {
          throw error;
        }
    }


    let handleChange=(e)=>{
        setCity(e.target.value);
    }

    let handleSubmit=async(e)=>{
        try {
            e.preventDefault();
            setCity("");
            let info= await getWeatherInfo();
            updateInfo(info);
        } catch (error) {
            setError(error);
        }
 
    }

    return (
        <>
            <div className="SearchBox">
                <h3>Search</h3>
                <form action="">
                    <TextField value={city} id="city" label="City Name" variant="outlined" onChange={handleChange} required /><br /> <br />
                    <Button type='submit' variant="contained" endIcon={<SendIcon />} onClick={handleSubmit}>
                        Search
                    </Button>
                    {error && <p>No such place</p>}
                </form>
            </div>
        </>

    )
}

