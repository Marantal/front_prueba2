import "./App.css";
import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/landing/Home";
import { UserForm } from "./pages/UserForm";
import About from "./components/landing/About";
import Contact from "./components/landing/Contact";
import Footer from "./components/landing/Footer";
import Testimonial from "./components/landing/Testimonial";
import Work from "./components/landing/Work";



import  RegistrationForm  from "./components/RegistrationForm";
import RegisterVolun from "./components/RegisterVolun";
import RegisterDon from "./components/RegisterDon";


function App() {
  const [user, setUser] = useState({Id: 0, Alias: "Inicio Sesion", Tipo: "Usuario"});
  return (
    
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Home />
                <About />
                <Work />
                <Testimonial />
                <Contact />
                <Footer />
              </>
            }
          />
          <Route path="/userform" element={<UserForm user={[user, setUser]} />} />
          <Route path="/formOrg" element={<RegistrationForm />} />
          <Route path="/regVol" element={<RegisterVolun />} />
          <Route path="/regdon" element={<RegisterDon />} />
          

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

