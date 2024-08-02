import { useData } from './useData';
import Clear from '../assets/Clear.png';
import LightCloud from '../assets/LightCloud.png';
import HeavyCloud from '../assets/HeavyCloud.png';
import HeavyRain from '../assets/HeavyRain.png';
import LightRain from '../assets/LightRain.png';
import Shower from '../assets/Shower.png';
import Thunderstorm from '../assets/Thunderstorm.png';
import Snow from '../assets/Snow.png';
import Hail from '../assets/Hail.png';
export function useIcon() {
    const { icon } = useData()
    const today = new Date();
    const options = { weekday: 'short', month: 'short', day: 'numeric' };
    const formatDate = today.toLocaleString('en-EN', options);
    const iconMap = {
        '01d': Clear,
        '01n': Clear,
        '02d': LightCloud,
        '02n': LightCloud,
        '03d': HeavyCloud,
        '03n': HeavyCloud,
        '04d': HeavyRain,
        '04n': HeavyRain,
        '09d': LightRain,
        '09n': LightRain,
        '10d': Shower,
        '10n': Shower,
        '11d': Thunderstorm,
        '11n': Thunderstorm,
        '13d': Snow,
        '13n': Snow,
        '50d': Hail,
        '50n': Hail,
    };
    const iconUrl = iconMap[icon] || Clear;
    return { iconUrl, formatDate, iconMap };
}