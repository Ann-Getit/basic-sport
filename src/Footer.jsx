import "./Footer.css";


const Footer = () => {

    return (
<>
{/*<div className="breedte">
  {window.innerWidth}px
</div>*/}

<footer id="contact">
    <div className="whole">
       <h2>Contact</h2> 
    <div className="info">

    <div className="contact-row">
        <span>Email:</span>
        <span>basicsport@example.com</span>
    </div>
    <div className="contact-row">
        <span>Tel:</span>
        <span>0203948587</span>
    </div>
    <div className="contact-row">
        <span>Faxnummer:</span>
        <span>824574293</span>
    </div>
    <div className="contact-row">
        <span>instagram:</span>
        <span>Basic&SportNL</span>
    </div>
        </div>
     


     
      <div className="list">
            <h2>More</h2>
           
                <ul>
            <li>Blog</li>
            <li>Privacy</li>
            <li>Terms</li>
            <li>Job vacancy</li>
            </ul>
            </div>
            </div>
    

    
        <div className="tijdenbox">
            <h2 className="tijd">Openingstijden:</h2>
            <div className="opening-hours">
                <div className="row">
                    <span>maandag</span>
                    <span>11:00  -  22:00</span>
                   
                </div>
                <div className="row">
                    <span>dinsdag</span>
                    <span>11:00  -  22:00</span>
        
                </div>
                <div className="row">
                    <span>woensdag</span>
                    <span>11:00  -  22:00</span>

                </div>
                 <div className="row">
                    <span>donderdag</span>
                    <span>11:00  -  22:00</span>
        
                </div>
                 <div className="row">
                    <span>vrijdag</span>
                    <span>11:00  -  23:00</span>
       
                </div>
                 <div className="row">
                    <span>zaterdag</span>
                    <span>12:00  -  00:00</span>
       
                </div>
                 <div className="row">
                    <span>zondag</span>
                    <span>12:00  -  00:00</span>
                </div>
        
            </div>
        </div>


        <div id="copyright">
              <hr />  
      <p id="bottom">© 2026 Basic & Sport</p>
      </div>
</footer>
     


    
 




</>
    )
}
export default Footer;