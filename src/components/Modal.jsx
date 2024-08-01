import search from '../assets/search.svg'
export const Modal = () => {
  return (
    <div className="relative lg:w-[368px] lg:h-screen bg-[#1E213A]">
        <span className="absolute lg:w-[32px] lg:h-[32px] lg:top-[9px] lg:left-[304px] lg:text-[32px] lg:text-center cursor-pointer">x</span>
        <input className="absolute lg:w-[220px] lg:h-[30px] lg:top-[70px] lg:left-[22px] lg:pl-7 items-center" type="text" placeholder="search location"/>
        <img className='absolute lg:w-[17px] lg:h-[17px] lg:top-[76px] lg:left-[25px]' src={search} alt="icono de buscador" />
        <button className="absolute lg:w-[80px] lg:h-[30px] bg-[#3C47E9] lg:top-[70px] lg:left-[250px]">Search</button>
    </div>
  )
}