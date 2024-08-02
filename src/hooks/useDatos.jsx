import { useData } from '../hooks/useData'
import { useState, useEffect } from 'react'
import { useIcon } from '../hooks/useIcon'
import axios from 'axios'
export function useDatos() {
    const { city } = useData()
    const { iconMap } = useIcon()
    const [forecast, setForecast] = useState([]);
    const [error, setError] = useState(null);
    const apiKey = 'bd9dc44134d81a9ff53c6b13a921e023';
    async function weatherForecast() {
        try {
            const rs = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric&lang=es`);
            const data = rs.data;
            const dailyForecasts = processForecastData(data);
            setForecast(dailyForecasts);
        } catch (error) {
            console.error('Error fetching weather data:', error);
            setError('Error fetching weather data');
        }
    }
    function processForecastData(data) {
        const dailyData = {};
        const today = new Date().toISOString().split('T')[0];
        data.list.forEach(entry => {
            const date = new Date(entry.dt * 1000).toISOString().split('T')[0];
            if (date > today) {
                if (!dailyData[date]) {
                    dailyData[date] = {
                        dt_txt: entry.dt_txt,
                        temp_min: entry.main.temp_min,
                        temp_max: entry.main.temp_max,
                        icon:iconMap[entry.weather[0].icon]
                    };
                }
            }
        });
        return Object.values(dailyData).sort((a, b) => new Date(a.dt_txt) - new Date(b.dt_txt)).slice(0, 5);
    }
    function formatDate(date) {
        const today = new Date(date);
        const options = { weekday: 'short', month: 'short', day: 'numeric' };
        return today.toLocaleString('en-EN', options);
    }
    useEffect(() => { weatherForecast() }, [city]);
    return { forecast, error, formatDate };
}