import { useState, useEffect } from "react";
import "./Nav.css";

const Nav = () => {
const [open, setOpen] = useState(false);
const [showLocations, setShowLocations] = useState(false);
const [mobile, setMobile] = useState(window.innerWidth <= 627);
    

    useEffect(() => {
    const handleResize = () => {
        setMobile(window.innerWidth <= 627);
        
        if (window.innerWidth > 627) {
          setOpen(false);
        
        }
};

window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);


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




            {mobile && (
        <div
          className="hamburger"
          onClick={() => setOpen(!open)}
        >
          &#9783;
        </div>
      )}
            <div className={`navbar ${open ? "active" : ""}`}>
            <ul>
                <li className="navlist">
                    <p>Login </p>
                    <hr />
                    <p>Membership</p>
                    <hr />
                    <p>Grouplessons</p>
                    <hr />
                    <p>Daypas</p>
                    <hr />
                    <p >Locaties</p>

                    <p className="locationheader">noorderplein</p>
                    <p className="locationheader">westoomstraat</p>
                    <p className="locationheader">oosterdokplein</p>

                </li>
            </ul>
            </div>
        </nav>
       


        </>
    )



}
export default Nav