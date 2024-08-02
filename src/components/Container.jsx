import direction from '../assets/direction.svg'
import { useStatus } from '../hooks/useStatus'
import { useDatos } from '../hooks/useDatos'

export const Container = () => {
    const { windSpeed, windDegree, getWindDirection, rotate, humidity, porcentaje, visibility, air } = useStatus()
    const { forecast, error, formatDate } = useDatos()

    return (
        <div className='bg-[#100E1D] w-full'>
            <div className='w-[90%] lg:flex justify-end gap-2 p-3 sm:hidden'>
                <button className='border rounded-full text-[#585676] w-10 h-10 bg-white font-bold'>°C</button>
                <button className='border rounded-full text-[#E7E7EB] w-10 h-10 bg-[#585676] font-bold'>°F</button>
            </div>

            <div className='w-[80%] flex flex-col lg:flex-row lg:justify-start gap-4 mx-auto left-0 right-0'>
                {forecast.map((day, index) => (
                    <div key={index} className='bg-[#1E213A] w-full sm:w-[45%] lg:w-[30%] h-auto flex flex-col items-center justify-center p-4'>
                        <span className='text-[#E7E7EB] text-sm lg:text-base font-medium'>{formatDate(day.dt_txt)}</span>
                        <img className='w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24' src={day.icon} alt='Weather icon' />
                        <div className='flex justify-between w-full mt-2'>
                            <span className='text-xs lg:text-sm font-medium text-[#E7E7EB]'>{day.temp_max}°C</span>
                            <span className='text-xs lg:text-sm font-medium text-[#E7E7EB]'>{day.temp_min}°C</span>
                        </div>
                    </div>
                ))}
            </div>

            <div className='w-[80%] mx-auto left-0'>
                <span className='font-bold text-lg lg:text-xl'>Today’s Highlights</span>
            </div>

            <div className='w-[80%] mx-auto left-0 right-0 flex flex-col lg:flex-row justify-start gap-10'>
                <div className='bg-[#1E213A] p-4 flex flex-col items-center text-center w-[48%]'>
                    <span className='text-lg lg:text-xl font-bold'>Wind status</span>
                    <div className='w-full max-w-xs h-16 mx-auto flex flex-row items-center justify-center'>
                        <span className='text-3xl lg:text-4xl font-bold'>{windSpeed}</span>
                        <span className='text-lg lg:text-xl font-medium'>mph</span>
                    </div>
                    <div className='w-full max-w-xs h-8 flex mx-auto items-center justify-center gap-4'>
                        <img style={{ transform: `rotate(${rotate}deg)` }} className='w-6 h-6 lg:w-8 lg:h-8' src={direction} alt="Wind direction icon" />
                        <span className='text-base lg:text-lg'>{getWindDirection(windDegree)}</span>
                    </div>
                </div>

                <div className='bg-[#1E213A] p-4 flex flex-col items-center text-center w-[48%]'>
                    <span className='text-lg lg:text-xl'>Humidity</span>
                    <div className='w-full max-w-xs h-16 mx-auto flex flex-row items-center justify-center'>
                        <span className='text-3xl lg:text-4xl font-bold'>{humidity}</span>
                        <span className='text-lg lg:text-xl font-medium'>%</span>
                    </div>
                    <div className='w-full max-w-xs flex mx-auto items-center'>
                        <span className='text-xs lg:text-sm'>0</span>
                        <span className='text-xs lg:text-sm mx-auto'>50</span>
                        <span className='text-xs lg:text-sm'>100</span>
                    </div>
                    <div className='w-full max-w-xs h-2 mx-auto flex items-center relative bg-red-700'>
                        <div className='absolute w-[320px] h-2 bg-[#E7E7EB] rounded-full'></div>
                        <div className={`absolute h-2 bg-[#FFEC65] rounded-full`} style={{ width: `${porcentaje}px`}}></div>
                    </div>

                    <div className='w-full max-w-xs flex justify-end mx-auto'>
                        <span className='text-xs lg:text-sm'>%</span>
                    </div>
                </div>
            </div>

            <div className='w-[80%] mx-auto left-0 right-0 mt-10 flex flex-col lg:flex-row justify-start gap-10'>
                <div className='bg-[#1E213A] p-4 text-center w-[47%]'>
                    <span className='text-lg lg:text-xl'>Visibility</span>
                    <div className='w-full max-w-xs h-16 mx-auto flex flex-row items-center justify-center'>
                        <span className='text-3xl lg:text-4xl font-bold'>{visibility}</span>
                        <span className='text-lg lg:text-xl font-medium'>miles</span>
                    </div>
                </div>
                <div className='bg-[#1E213A] p-4 text-center w-[47%]'>
                    <span className='text-lg lg:text-xl'>Air Pressure</span>
                    <div className='w-full max-w-xs h-16 mx-auto flex flex-row items-center justify-center'>
                        <span className='text-3xl lg:text-4xl font-bold'>{air}</span>
                        <span className='text-lg lg:text-xl font-medium'>mb</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
