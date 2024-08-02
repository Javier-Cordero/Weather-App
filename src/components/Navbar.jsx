import { useData } from '../hooks/useData'
import { useIcon } from '../hooks/useIcon'
import GPS from '../assets/gps.svg'
import location from '../assets/location.svg'
import CloudBackground from '../assets/Cloud-background.png';

export const Navbar = () => {
    const { city, temperature, description } = useData()
    const { iconUrl, formatDate } = useIcon()

    return (
        <header className="bg-[#1E213A] w-full lg:w-[30%] lg:h-screen sm:w-screen sm:h-[810px] relative">
            <div className='w-full h-[10%] flex justify-between px-4 lg:px-10 pt-5 lg:pt-5 pb-0'>
                <button className="bg-[#6E707A] w-[60%] lg:w-[65%] h-[90%] lg:h-[90%] text-white text-sm lg:text-base">Search for places</button>
                <img className='h-[70%] lg:h-[90%] w-[25%] lg:w-[30%]' src={GPS} alt="GPS icon" />
            </div>
            <div className='w-full h-[30%] lg:h-[34%] flex items-center justify-center relative'>
                <img className='w-full h-full opacity-5 object-cover' src={CloudBackground} alt="Cloud background" />
                <img className='w-[40%] lg:w-[50%] h-[45%] lg:h-[55%] absolute' src={iconUrl} alt="Weather icon" />
            </div>
            <div className='w-full h-[20%] flex justify-center items-center'>
                <span className='text-[30px] lg:text-[400%] font-medium'>{temperature}</span>
                <span className='text-[16px] lg:text-[200%] font-medium'>°C</span>
            </div>
            <div className='w-full h-[15%] flex justify-center items-center'>
                <span className='text-[14px] lg:text-[150%] font-semibold text-[#88869D]'>{description}</span>
            </div>
            <div className='w-full h-[13%] flex justify-center items-center'>
                <span className='text-[#88869D] text-[12px] lg:text-[100%]'>Today • {formatDate}</span>
            </div>
            <div className='w-full h-[8%] flex justify-center items-center'>
                <img className='h-[20%] lg:h-[25%]' src={location} alt="Location icon" />
                <span className='text-[12px] lg:text-[80%]'>{city}</span>
            </div>
        </header>
    )
}
