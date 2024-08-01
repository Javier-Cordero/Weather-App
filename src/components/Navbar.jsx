import { useData } from '../hooks/useData'
import { useIcon } from '../hooks/useIcon'
import GPS from '../assets/gps.svg'
import location from '../assets/location.svg'
import CloudBackground from '../assets/Cloud-background.png';
export const Navbar = () => {
    const { city, temperature, description } = useData()
    const { iconUrl, formatDate } = useIcon()
    return (
        <header className="bg-[#1E213A] lg:w-[368px] lg:h-screen sm:w-[375px] sm:h-[810px]">
            <button className="bg-[#6E707A] lg:w-[161px] lg:h-[40px] absolute lg:top-[14px] lg:left-[27px] lg:text-[13px] font-medium leading-[18.78px]">Search for places</button>
            <img className='absolute lg:top-[14px] lg:left-[289px] lg:w-[40px] lg:h-[40px]' src={GPS} alt="icono de gps" />
            <img className='absolute lg:w-[500px] lg:h-[270px] lg:top-[53px] lg:left-[-89px] opacity-5 object-cover' src={CloudBackground} alt="imagen de fondo" />
            <img className='absolute lg:w-[150px] lg:h-[170px] lg:top-[130px] lg:left-[100px]' src={iconUrl} alt="icono del clima" />
            <div className='absolute lg:w-[140px] lg:h-[120px] lg:top-[300px] lg:left-[100px]'>
                <span className='lg:text-[110px] font-medium'>{temperature}</span>
                <span className='lg:text-[39px] font-medium'>°C</span>
            </div>
            <span className='absolute lg:w-[200px] lg:h-[30px] lg:top-[480px] lg:mx-[80px] lg:px-[10px] lg:text-[25px] font-semibold text-[#88869D]'>{description}</span>
            <span className='absolute lg:w-[200px] lg:h-[17px] lg:top-[550px] lg:left-[110px] text-[#88869D]'>Today • {formatDate}</span>
            <div className='absolute lg:top-[600px] lg:mx-[70px] lg:px-[10px] flex items-center lg:gap-[10px]'>
                <img className='lg:w-[12px] lg:h-[16px]' src={location} alt="icono de localizacion" />
                <span className='lg:text-[15px]'>{city}</span>
            </div>
        </header>
    )
}
