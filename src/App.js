import React, { useEffect } from "react";
import "./App.css";
import Home from "./Pages/Home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./Pages/About/About";
import Pricing from "./Pages/Pricing/Pricing";
import Contact from "./Pages/Contact/Contact";
import BusinessStrategy from "./Pages/Business Strategy/BusinessStrategy";
import ConsultancyServices from "./Pages/Consultancy Services/ConsultancyServices";
import LicenseConfiguration from "./Pages/License Configuration/LicenseConfiguration";
import VirtualPrivateServer from "./Pages/Virtual Private Server/VirtualPrivateServer";
import Footer from "./Components/Footer/Footer";
import ScrollTop from "./Components/ScrollTop";
import Header from "./Components/Header/Header";
import { PaymentPage } from "./Components/PaymentPage/PaymentPage";
import Services from "./Pages/Services/Services";
import ScrollToTop from "./Components/ScrollToTop/ScrollToTop";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);

  return (
    <div className="App">
      <Router>
        <Header />
        <ScrollTop />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/services" element={<Services />}></Route>
          <Route path="/pricing" element={<Pricing />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route
            path="/services/BusinessStrategy"
            element={<BusinessStrategy />}
          ></Route>
          <Route
            path="/services/ConsultancyServices"
            element={<ConsultancyServices />}
          ></Route>
          <Route
            path="/services/LicenseConfiguration"
            element={<LicenseConfiguration />}
          ></Route>
          <Route
            path="/services/VirtualPrivateServer"
            element={<VirtualPrivateServer />}
          ></Route>
          <Route path="/pricing/payment" element={<PaymentPage />}></Route>
        </Routes>
        <ScrollToTop />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
