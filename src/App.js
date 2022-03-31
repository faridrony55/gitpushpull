 
import './Base.css';

import { Routes, Route } from "react-router-dom";

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home'; 
import Finance from './components/Finance/Finance';
import Faq from './components/Faq/Faq';
import AboutUs from './components/AboutUs/AboutUs';
import Contact from './components/Contact/Contact';
import NoPage from './components/NoPage/NoPage';


function App() {
  return (
    
    <>
       
    <Header></Header> 
      
        <Routes>  
          <Route  path="/" element={<Home/>} />
          <Route  path="/faq" element={<Faq/>} /> 
          <Route  path="/finance" element={<Finance/>} /> 
          <Route  path="/aboutus" element={<AboutUs/>} /> 
          <Route  path="/contact" element={<Contact/>} /> 
          <Route path="*" element={<NoPage/>} /> 
        </Routes>
        
    <Footer></Footer>
      
    </>
  );
}

export default App;
