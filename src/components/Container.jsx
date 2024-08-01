import Thunderstorm from '../assets/Thunderstorm.png'
import direction from '../assets/direction.svg'
export const Container = () => {
    return (
        <div className="bg-[#100E1D] md:w-[981px] md:h-screen sm:w-[375px] sm:h-[1718px]">
            <button className="absolute lg:w-[30px] lg:h-[30px] lg:top-[14px] lg:left-[1190px] border rounded-[50%] border-none bg-white text-[#585676] font-bold">°C</button>
            <button className="absolute lg:w-[30px] lg:h-[30px] lg:top-[14px] lg:left-[1233px] border rounded-[50%] border-none bg-[#585676] text-[#E7E7EB] font-bold">°F</button>
            <div className="absolute lg:w-[120px] lg:h-[140px] lg:top-[40px] lg:left-[490px] bg-[#1E213A] text-center">
                <div className='flex gap-[20px] relative'>
                    <span className='absolute lg:top-[5px] lg:left-[20px]'>Tomorrow</span>
                    <img className='absolute lg:w-[44px] lg:h-[49px] lg:top-[40px] lg:left-[30px]' src={Thunderstorm} alt='icono del clima' />
                    <span className='absolute lg:text-[12px] lg:top-[100px] lg:left-[35px] font-medium'>xx</span>
                    <span className='absolute lg:text-[12px] lg:top-[100px] lg:left-[75px] font-medium'>xx</span>
                </div>
            </div>
            <span className='absolute lg:w-[250px] lg:h-[22px] lg:top-[250px] lg:left-[490px] lg:text-[19px] text-bold'>Today’s Hightlights </span>
            <div className='absolute lg:w-[328px] lg:h-[163px] lg:top-[300px] lg:left-[490px] bg-[#1E213A]'>
                <div className='text-center relative'>
                    <span className='text-[12px] absolute lg:top-4 lg:left-[140px]'>Wind status</span>
                    <span className='absolute lg:top-[30px] lg:left-[130px] lg:text-[51px] font-bold'>7</span>
                    <span className='absolute lg:top-[55px] lg:left-[160px] lg:text-[28px] font-medium'>mph</span>
                    <img className='absolute lg:w-[23px] lg:h-[23px] lg:top-[110px] lg:left-[140px]' src={direction} alt="icono de direccion del viento" />
                    <span className='absolute lg:w-[38px] lg:h-[38px] lg:top-[110px] lg:left-[170px]'>WSW</span>
                </div>
            </div>
            <div className='absolute lg:w-[328px] lg:h-[163px] lg:top-[300px] lg:left-[870px] bg-[#1E213A]'>
                <div className='text-center relative'>
                    <span className='text-[12px] absolute lg:top-4 lg:left-[140px]'>Humidity</span>
                    <span className='absolute lg:top-[30px] lg:left-[110px] lg:text-[51px] font-bold'>84</span>
                    <span className='absolute lg:top-[55px] lg:left-[180px] lg:text-[28px] font-medium'>%</span>
                    <div className='absolute lg:w-[200px] lg:h-[6px] bg-[#E7E7EB] lg:top-[125px] lg:left-[60px] border rounded-[30px] border-none'></div>
                    <div className='absolute lg:w-[100px] lg:h-[6px] bg-[#FFEC65] lg:top-[125px] lg:left-[60px] border rounded-[30px] border-none'></div>
                    <span className='absolute lg:top-[114px] lg:left-[60px] text-[8px]'>0</span>
                    <span className='absolute lg:top-[114px] lg:left-[154px] text-[8px]'>50</span>
                    <span className='absolute lg:top-[114px] lg:left-[250px] text-[8px]'>100</span>
                    <span className='absolute lg:top-[131px] lg:left-[254px] text-[8px]'>%</span>
                </div>
            </div>
            <div className='absolute lg:w-[328px] lg:h-[128px] bg-[#1E213A] lg:top-[500px] lg:left-[490px]'>
                <div className='text-center relative'>
                    <span className='text-[12px] absolute lg:top-4 lg:left-[140px]'>Visibility</span>
                    <span className='absolute lg:top-[30px] lg:left-[90px] lg:text-[51px] font-bold'>6,4</span>
                    <span className='absolute lg:top-[55px] lg:left-[180px] lg:text-[28px] font-medium'>miles</span>
                </div>
            </div>
            <div className='absolute lg:w-[328px] lg:h-[128px] bg-[#1E213A] lg:top-[500px] lg:left-[870px]'>
                <div className='text-center relative'>
                    <span className='text-[12px] absolute lg:top-4 lg:left-[140px]'>Air Pressure</span>
                    <span className='absolute lg:top-[30px] lg:left-[80px] lg:text-[51px] font-bold'>998</span>
                    <span className='absolute lg:top-[55px] lg:left-[180px] lg:text-[28px] font-medium'>mb</span>
                </div>
            </div>
        </div>
    )
}
