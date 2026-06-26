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
                 
                    <li>Login </li>
                    <hr />
                    <li>Membership</li>
                    <hr />
                    <li>Grouplessons</li>
                    <hr />
                    <li>Daypas</li>
           
         
            </ul>
            </div>
      
            <div className={`navbarmobile ${open ? "active" : ""}`}>
            <ul className="navlist">
                <li>Login</li>
                    <hr />
                    <li>Membership</li>
                    <hr />
                    <li>Grouplessons</li>
                    <hr />
                    <li>Daypas</li>
                    <hr />
                    <li className="locaties">choose locaties</li>

                    <li className="locationheader">noorderplein</li>
                    <hr />
                    <li className="locationheader">westoomstraat</li>
                    <hr />
                    <li className="locationheader">oosterdokplein</li>
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