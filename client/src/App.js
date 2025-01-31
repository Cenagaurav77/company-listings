import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import CompanyDetails from "./pages/company-details";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <div id="root">
      <Navbar />
      <div className="main-content">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route
            path="/company-details/:company_id"
            element={<CompanyDetails />}
          />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
