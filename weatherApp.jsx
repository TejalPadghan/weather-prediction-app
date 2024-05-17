import Searchbox
    from "./Searchbox";
import infoBox from "./infoBox";
export default function WeatherApp() {
    const [WeatherInfo, setWeatherInfo] = useState({
        city: "Delhi",
        temp: 25.05,
        tempMin: 25.05,
        tempMax: 25.05,
        humidity: 47,
        feelsLike: 24.84,
        weather: "haze",
    });
    let updateInfo = (result) => {
        setWeatherInfo(result);
    }
    return (
        <div style={{ textAlign: "center" }}>
            <h2>Weather app by delta</h2>
            <Searchbox updateInfo={updateInfo} />
            <infoBox info={WeatherInfo} />
        </div>
    );
}