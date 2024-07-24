import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Company_Details from "./pages/company-details";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="company-details" element={<Company_Details />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
