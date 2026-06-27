import { useState, useEffect } from "react";
import "./Nav.css";
import { Link } from "react-router-dom";

const Nav = () => {
const [open, setOpen] = useState(false);
const [showLocations, setShowLocations] = useState(false);
const [mobile, setMobile] = useState(window.innerWidth <= 627);
    
  const closeMenu = () => {
    setOpen(false);
  };

    useEffect(() => {
    const handleResize = () => {
        setMobile(window.innerWidth <= 627);
        
        if (window.innerWidth > 627) {
          setOpen(false);
        
        }
};

 if (open) {
    document.body.classList.add("menu-open");
  } else {
    document.body.classList.remove("menu-open");
  }

window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [open]);


    return (
        <>
        <nav>

            <div className="locations"
            onMouseEnter={() => setShowLocations(true)}
            onMouseLeave={() => setShowLocations(false)}
            >choose location ▼ 

            {showLocations && (
            <div className="locationli"> 
                <ul>
                    <li className="ams">Amsterdam :</li>
                  
                        <li>noorderplein</li>
                        <hr />
                        <li>westoomstraat</li>
                        <hr />
                        <li>oosterdokplein</li>
                  
                </ul>
            </div>
            )}
            </div>
            <div className="navHeader">Basic & Sport</div>
            <div className="nac">

            </div>


            
        <div
          className="hamburger"
          onClick={() => setOpen(!open)}
        >
          &#9783;
        </div>


            <div className={`navbardesk ${open ? "active" : ""}`}>
            <ul className="navlistdesk">
                 
                    <li>
                      <Link to="/home">Home</Link>
                      </li>
                    <hr />
                    <li>
                      <Link to="/login">Login </Link>
                      </li>
                    <hr />
                    <li>
                      <Link to="/membership">Membership</Link>
                      </li>
                    <hr />
                    <li>
                      <Link to="/grouplessons">Grouplessons</Link>
                      </li>
           
         
            </ul>
            </div>
      
            <div className={`navbarmobile ${open ? "active" : ""}`}>
            <ul className="navlist">

              <li>
                <Link to="/home" onClick={closeMenu}>Home</Link>
                </li>
              <hr />
                <li>
                  <Link to="/login" onClick={closeMenu}>Login</Link>
                  </li>
                    <hr />
                    <li>
                      <Link to="/membership" onClick={closeMenu}>Membership</Link>
                      </li>
                    <hr />
                    <li>
                      <Link to="/grouplessons" onClick={closeMenu}>Grouplessons</Link>
                      </li>
                    <hr />
                    <li className="locaties">choose locaties</li>

                    <li className="locationheader">
                      <Link to="noorderplein" onClick={closeMenu}>noorderplein</Link>
                      </li>
                    <hr />
                    <li className="locationheader">
                      <Link to=""onClick={closeMenu}>westoomstraat</Link>
                      </li>
                    <hr />
                    <li className="locationheader">
                      <Link to=""onClick={closeMenu}>oosterdokplein</Link>
                      </li>
                    <li>
                       <img src="./pics/gym-svgrepo-com.svg" className="svgbar"/>  
                    </li>
            </ul>
           

            </div>
        </nav>
       


        </>
    )



}
export default Nav