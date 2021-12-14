import axios from 'axios';


const URL = 'https://api.openweathermap.org/data/2.5/weather';
const API_KEY = 'ca1594d4c4aa174afb1913f40900c92c';

export const fetchWeather = async (query) => {
    const { data } = await axios.get(URL, {
        params: {
            q: query,
            units: 'metric',
            APPID: API_KEY
        }
    } );

    return data;
}