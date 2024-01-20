import React from "react"
import derasovilLogo from '/assets/derasovil_logo.svg'
import { Link } from 'react-router-dom';

function NavBar() {

  return (
    <div>
    <div className="flex justify-start w-screen items-center sm:h-20 h-14 shadow-md z-10 relative bg-primary">
    <div className="dropdown sm:hidden">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 bg-black bg-opacity-90 rounded-box w-[100vw] flex-1 justify-center items-center gap-3">
        <li className=" rounded-full w-2/5 flex-1 items-center "><Link to ="/derasovil_site/Acasa" className="text-primary text-xl pb-2">Acasă</Link></li>
        <li className=" rounded-full w-2/5 flex-1 items-center "><Link to ="/derasovil_site/Despre-noi" className="text-primary text-xl pb-2">Despre Noi</Link></li>
        <li className=" rounded-full w-2/5 flex-1 items-center "><Link to ="/derasovil_site/Servicii" className="text-primary text-xl pb-2">Servicii</Link></li>
        <li className=" rounded-full w-2/5 flex-1 items-center border-brick border-2"><Link to ="/derasovil_site/Contact" className="text-primary text-xl pb-2 text-center">Contact</Link></li>
      </ul>
    </div>
      <a href="#" className="w-36 absolute left-2/4 -translate-x-1/2 sm:left-10 sm:translate-x-0 sm:basis-1 sm:w-44 lg:w-60 xl:left-16 xl:w-72">
      <img src={derasovilLogo}  alt="Derasovil logo" />
      </a>
    

      <div className="flex-row flex-auto justify-end gap-2 basis-full pr-4 hidden sm:flex items-center xl:gap-4 lg:pr-8">
        <Link to ="/derasovil_site/Acasa"  className="text-secondary text-xl px-3 pb-1 rounded-full xl:text-3xl md:text-2xl hover:bg-brick hover:text-primary hover:shadow-md"> Acasă</Link>
        <Link to="/derasovil_site/Despre-noi" className="text-secondary text-xl px-3 pb-1 rounded-full xl:text-3xl md:text-2xl hover:bg-brick hover:text-primary hover:shadow-md"> Despre Noi</Link>
        <Link to ="/derasovil_site/Servicii" className="text-secondary text-xl px-3 pb-1 rounded-full xl:text-3xl md:text-2xl hover:bg-brick hover:text-primary hover:shadow-md"> Servicii</Link>
        <Link to ="/derasovil_site/Contact" className="text-primary bg-brick rounded-full text-xl px-3 pb-1 text-center xl:text-3xl md:text-2xl hover:shadow-md hover:shadow-amber-800"> Contact</Link>
      </div>
    </div>
  
  </div>
  );
}

export default NavBar;
