import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import "./InfoBox.css"
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import WhatshotIcon from '@mui/icons-material/Whatshot';

export default function InfoBox({info}) {
    const IntialImg="https://images.unsplash.com/photo-1504370805625-d32c54b16100?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const HOT_URL="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const COLD_URL="https://images.unsplash.com/photo-1477468572316-36979010099d?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const RAIN_URL="https://images.unsplash.com/photo-1503435824048-a799a3a84bf7?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const SNOW_URL="https://images.unsplash.com/photo-1548777123-e216912df7d8?q=80&w=435&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
     
    return (
        <>
            <div className="info-box">
        <center>
            <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image = {
               info.humidity > 90 ? HOT_URL :
               info.humidity > 70 ? COLD_URL :
               info.humidity ? RAIN_URL : SNOW_URL
        }
        
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city } {info.humidity>80
            ? <ThunderstormIcon/>
            : info.temp>20
            ? <WhatshotIcon/>
            : <AcUnitIcon/>}   <br />
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
        <div><p>Temprature = <b>{info.temp}&deg;C</b></p></div> 
         <div><p>Humidity = <b>{info.humidity}</b></p></div>
         <div><p>Temp Max = <b>{info.tempMax}&deg;C</b></p></div>
         <div><p>Temp Min = <b> {info.tempMin}&deg;C</b></p></div>
         <div><p>Wind speed = <b> {info.WindSpeed}km/h</b></p></div>
         <div><p>The Weather can be described as <b>{info.weather}</b> and feels like <b>{info.feelsLike}&deg;C</b></p></div>
        </Typography>
      </CardContent>
    </Card>
            </center>
            </div>
        </>

    )
}