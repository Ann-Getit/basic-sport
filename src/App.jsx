import { Routes, Route } from "react-router-dom"; /* tussen paginas navigeren*/
import Home from "./pages/Home";
import Nav from "./pages/Nav";
import Footer from "./pages/Footer";

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
