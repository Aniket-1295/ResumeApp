
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./scenes/Home";
import MyResume from "./scenes/MyResume";
import AboutUs from "./scenes/AboutUs";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <div >

      <BrowserRouter>
      <Navbar />
      <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/myResume" element={<MyResume />} />
            <Route path="/aboutUs" element={<AboutUs />} />
          </Routes>
          <Footer />
      </BrowserRouter>
      


         

      

      
      
    </div>
  );
}

export default App;
