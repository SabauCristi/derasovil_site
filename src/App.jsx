import React from "react"
import { BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./Pages/Home"
import Contact from "./Pages/Contact";
import About from "./Pages/About";
import Services from "./Pages/Services";
import Deratizare from "./Pages/Deratizare";
import Dezinsectie from "./Pages/Dezinsectie";
import Dezinfectie from "./Pages/Dezinfectie";
import { Link } from "react-router-dom";


function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/derasovil_site" element={<Home/>} />
          <Route path="/derasovil_site/Acasa" element={<Home/>} />
          <Route path="/derasovil_site/Despre-noi" element={<About/>} />
          <Route path="/derasovil_site/Servicii" element={<Services/>} />
          <Route path="/derasovil_site/Contact" element={<Contact/>} />
          <Route path="/derasovil_site/Deratizare" element={<Deratizare/>} />
          <Route path="/derasovil_site/Dezinsectie" element={<Dezinsectie/>} />
          <Route path="/derasovil_site/Dezinfectie" element={<Dezinfectie/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
