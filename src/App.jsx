import React from "react"
import { BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./Pages/Home"
import Contact from "./Pages/Contact";
import About from "./Pages/About";
import Services from "./Pages/Services";


function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/Acasă" element={<Home/>} />
          <Route path="/Despre noi" element={<About/>} />
          <Route path="/Servicii" element={<Services/>} />
          <Route path="/Contact" element={<Contact/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
