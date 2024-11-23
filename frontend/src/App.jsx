import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar";
import Home from "./Pages/Home/Home";
import Cart from "./Pages/Cart/Cart";
import PlaceOrder from "./Pages/PlaceOrder/PlaceOrder";
import LoginPopUp from "./Components/LoginPopUp/LoginPopUp";
import Footer from "./Components/Footer/Footer";
import Error404 from "./Pages/Error404/Error404";

const App = () => {
  const [showLogin, setShowLogin] = useState(false);
  
  return (
    <>
      {showLogin ? <LoginPopUp setShowLogin={setShowLogin} /> : <> </>}
      <div className="app">
        <NavBar setShowLogin={setShowLogin} />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/place-order" element={<PlaceOrder />} />
          <Route path="*" element={<Error404/>}/>
        </Routes>
        
        <Footer />
      </div>
    </>
  );
};

export default App;
