import { Routes, Route } from "react-router-dom"; /* tussen paginas navigeren*/
import Home from "./pages/Home";
import Nav from "./Nav";
import Footer from "./Footer";
import Membership from "./pages/Membership";

function App() {

  return(
    <>

    <Nav />
    <Routes>

      <Route path="/" element={<Home />} />


    </Routes>

    <Footer />
    </>
  );

}

export default App
