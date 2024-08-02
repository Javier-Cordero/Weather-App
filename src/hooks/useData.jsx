import { useEffect, useState } from 'react'
import axios from 'axios'
export const useData = () => {
    const [city, setCity] = useState('')
    const [icon, setIcon] = useState(null)
    const [temperature, setTemperature] = useState(null)
    const [description, setDescription] = useState('')
    const [windSpeed, setWindSpeed] = useState([])
    const [windDegree, setWindDegree] = useState([])
    const [humidity, setHumidity] = useState([])
    const [visibility, setVisibility] = useState([])
    const [air, setAir] = useState([])
    const fetchWeatherData = async (url) => {
        const rs = await axios.get(url)
        setCity(rs.data.name)
        setIcon(rs.data.weather[0].icon)
        setTemperature(Math.round(rs.data.main.temp))
        setDescription(rs.data.weather[0].description)
        setWindSpeed(rs.data.wind.speed)
        setWindDegree(rs.data.wind.deg)
        setHumidity(rs.data.main.humidity)
        setVisibility(rs.data.visibility)
        setAir(rs.data.main.pressure)
    }
    function getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {

                const latitud = position.coords.latitude;
                const longitud = position.coords.longitude;
                const apiKey = 'bd9dc44134d81a9ff53c6b13a921e023';
                const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitud}&lon=${longitud}&appid=${apiKey}&units=metric&lang=en`;
                fetchWeatherData(url);
            },
                (error) => {
                    // Función de error
                    console.error("Error al obtener la ubicación: ", error);
                    alert("No se pudo obtener la ubicación.");
                },
                {
                    enableHighAccuracy: true, // Solicita una alta precisión si es posible
                    timeout: 5000, // Tiempo máximo en milisegundos para la obtención de la ubicación
                    maximumAge: 0 // No utiliza una ubicación en caché
                }
            );
        } else { alert("La geolocalización no está soportada por este navegador.") }
    }
    useEffect(() => { getLocation() }, [])
    return { city, icon, temperature, description, windSpeed, windDegree, humidity, visibility, air }
}
