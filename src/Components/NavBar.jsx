import React from "react"
import derasovilLogo from '/assets/derasovil_logo.svg'
import { Link } from 'react-router-dom';

function NavBar() {

  return (
    <div>
    <div className="flex justify-start w-screen items-center sm:h-20 h-14 shadow-sm z-10 relative bg-primary">
    <div className="dropdown sm:hidden">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
      </div>
      <ul tabIndex={1} className="menu menu-sm dropdown-content z-[1] p-2 bg-primary w-[400%] rounded-b-2xl  flex-1 justify-start  items-start gap-0">
        <li className=" w-full flex items-start justify-center border-b-[1px] border-t-[1px] border-slate-300 "><Link to ="/derasovil_site/Acasa" className="text-secondary text-xl font-normal py-3">Acasă</Link></li>
        <li className=" w-full flex items-start justify-center border-b-[1px] border-slate-300 "><Link to ="/derasovil_site/Despre-noi" className="text-secondary text-xl  font-normal py-3">Despre Noi</Link></li>
        <li className=" w-full flex items-start justify-center border-b-[1px] border-slate-300 "><Link to ="/derasovil_site/Servicii" className="text-secondary text-xl  font-normal py-3">Servicii</Link></li>
        
        <li className=" w-full flex items-start justify-center border-b-[1px] border-slate-300 mb-4"><Link to ="/derasovil_site/Contact" className="text-brick text-xl font-semibold py-3">Contact</Link></li>
      </ul>
    </div>
      <Link to ="/derasovil_site/Acasa" className="w-36 absolute left-2/4 -translate-x-1/2 sm:left-10 sm:translate-x-0 sm:basis-1 sm:w-44 lg:w-60 xl:left-16 xl:w-72">
      <img src={derasovilLogo}  alt="Derasovil logo" />
      </Link>
      <div className="flex-row flex-auto justify-end gap-2 basis-full pr-4 hidden sm:flex xl:gap-4 lg:pr-8">
        <Link to ="/derasovil_site/Acasa"  className="text-secondary text-xl px-3 pb-1 rounded-full xl:text-3xl md:text-2xl hover:bg-brick hover:text-primary hover:shadow-md hover:shadow-slate-500"> Acasă</Link>
        <Link to="/derasovil_site/Despre-noi" className="text-secondary text-xl px-3 pb-1 rounded-full xl:text-3xl md:text-2xl hover:bg-brick hover:text-primary hover:shadow-md hover:shadow-slate-500"> Despre Noi</Link>
        <div className="dropdown dropdown-hover shadow-none">
          <Link to="/derasovil_site/Servicii" tabIndex={0} className="text-secondary text-xl px-3 pb-1 rounded-full xl:text-3xl md:text-2xl hover:bg-brick hover:text-primary hover:shadow-md hover:shadow-slate-500">Servicii</Link>
          <ul tabIndex={0} className="dropdown-content shadow-none z-0 menu lg:w-[10rem] w-[9rem] flex flex-col items-start justify-start -translate-x-2">
            <li className="h-0 bg-transparent"></li>
            <li className=" w-full bg-primary flex flex-row items-start justify-start"><Link to="/derasovil_site/Deratizare" className="text-secondary text-xl rounded-sm w-full xl:text-2xl md:text-xl hover:text-brick">Deratizare</Link></li>
            <li className=" w-full bg-primary flex flex-row items-start justify-start"><Link to="/derasovil_site/Dezinsectie" className="text-secondary text-xl rounded-sm w-full xl:text-2xl md:text-xl hover:text-brick border-y-[1px] border-slate-400">Dezinfecție</Link></li>
            <li className=" w-full bg-primary flex flex-row rounded-b-md overflow-hidden items-start justify-start"><Link to="/derasovil_site/Dezinfectie" className="text-secondary text-2xl rounded-sm w-full xl:text-2xl md:text-xl  hover:text-brick">Dezinsectie</Link></li>
          </ul>
        </div>
        <Link to ="/derasovil_site/Contact" className="text-primary bg-brick rounded-full text-xl px-3 pb-1 text-center xl:text-3xl md:text-2xl hover:shadow-md hover:shadow-slate-500"> Contact</Link>
      </div>
    </div>
  
  </div>  
  );
}

export default NavBar;
