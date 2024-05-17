
import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import CardMedia from '@mui/material/CardMedia';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import Typography from '@mui/material/Typography';
export default function infoBox(info) {
    const INIT_URL = "https://images.unsplash.com/photo-1572687413625-cb2c4d9c4d32?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGR1c3R5JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
    const HOT_URL = "https://images.unsplash.com/photo-1493936734716-77ba6da66365?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8SE9UJTIwV0VBVEhFUnxlbnwwfHwwfHx8MA%3D%3D"
    const COLD_URL = "https://plus.unsplash.com/premium_photo-1670604649107-a0171e5f1bd0?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Q09MRCUyMFdFQVRIRVJ8ZW58MHx8MHx8fDA%3D"

    const RAIN_URL = "https://images.unsplash.com/photo-1641048350661-c126137677d1?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cmFpbiUyMFdFQVRIRVJ8ZW58MHx8MHx8fDA%3D"
    return (
        <div classname='infoBox'>

            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    sx={{ height: 140 }}
                    image={info.humidity > 80 ? RAIN_URL : info.temp > 15 ? HOT_URL : COLD_URL}
                    title="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {info.city}
                        {info.humidity > 80 ? <ThunderstormIcon /> : info.temp > 15 ? WbSunnyIcon : AcUnitIcon}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" component={"span"}>
                        <p>Temperature={info.temp}&deg;C</p>
                        <p>humidity={info.humidity}</p>
                        <p>Min Temp={info.tempMin}&deg;C</p>
                        <p>MAx Temp={info.tempMax}&deg;C</p>
                        <p>the weather  can be described as &{info.weather} and feels like={info.feelsLike}&deg;C</p>
                    </Typography>
                </CardContent>


            </Card>
        </div>
    );
}