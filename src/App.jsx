import { Routes, Route, Navigate } from "react-router-dom"; /* tussen paginas navigeren*/
import Home from "./pages/Home";
import Nav from "./Nav";
import Footer from "./Footer";
import Membership from "./pages/Membership";
import Grouplessons from "./pages/Grouplessons";
import Login from "./pages/Login";
import Locations from "./pages/Locations";

function App() {

  return(
    <>
    <Nav />
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/membership" element={<Membership />} />
      <Route path="/grouplessons" element={<Grouplessons />} />
      <Route path="/login" element={<Login />} />
      <Route path="/locations" element={<Locations />} />
    </Routes>

    <Footer />
    </>
  );

}

export default App
