import "./Membership.css";

const Membership = () => {

    return (
        <>

        <div className="container1">
        <div className="twinparent1">
            <h1>What suites you better</h1>
            <p className="memberP"><strong>Choose the membership that suites you better</strong></p>
            <p className="memberP2">By Basic Sport you can choose from a basic or a silver premium mebership.
                With a basic you visit one club, with a silver premium you can visit many locations. With silver premium you are allowed to bring someone 5 times a month !
            </p>

            <div className="buttonparent">
            <button>Join us !</button>
            </div>

        </div>
{/*<div className="breedte">
  {window.innerWidth}px
</div>*/} 


        <div className="parent1">
           <img src="./pics/loopbaan_unsplash.jpg" className="image_member"></img>
  </div>
        </div>

       


        <div className="membcontainer">


        <div className="divmember">
             <h3>basic</h3>

         <ul className="ulmember">
            <li>✔️ Sport in 1 club</li>
            <li>✔️ all live grouplessons included</li>
            <li>✔️ go for a membership from 1 month, 3 month, 1 year or 2 year</li>
            <li>✔️ choose your startdate</li>
            <li>✔️ 14-day cooling-off period</li>

            <li className="doorgetrokken">✖️ sport together: take someone with you 5 times a month  
            </li>

            <li className="doorgetrokken">✖️ a free towel
            </li>

            <li className="doorgetrokken">✖️ sportdrink with different flavours
            </li>
            </ul>
            <div className="prices">€ 29,
                <span className="centjes">99</span>
                <span className="week">per maand</span>
            </div>
             <button className="choosebutton">choose plan</button>
        </div>


        <div className="divmember">
        <h3>silver premium</h3>

         <ul className="ulmember">
            <li>✔️ sport in all clubs</li>
            <li>✔️ all live grouplessons included</li>
            <li>✔️ go for a membership from 1 month, 3 month, 1 year or 2 year</li>
            <li>✔️ choose your startdate</li>
            <li>14-day cooling-off period </li>
            <li>✔️ sport together: take someone with you 5 times a month</li>
            
            <li className="doorgetrokken">✖️ a free towel
            </li>

            <li className="doorgetrokken">✖️ sportdrink with different flavours
            </li>
            </ul>
       <div className="prices">€ 39,
        <span className="centjes">99</span>
        <span className="week">per maand</span>
            </div>
            <button className="choosebutton">choose plan</button>   
        </div>


        <div className="divmember">
        <h3>gold premium</h3>

        <ul className="ulmember">
           <li>✔️ sport in all clubs</li>
           <li>✔️ all live grouplessons included</li>
           <li>✔️ go for a membership from 1 month, 3 month, 1 year or 2 year</li>
           <li>✔️ choose your startdate</li>
           <li>14-day cooling-off period </li>
           <li>✔️ sport together: take someone with you 5 times a month</li>
           <li>✔️ a free towel</li>
           <li>✔️ sportdrink with different flavours 
           </li>
           </ul>
       <div className="prices">€ 59,
        <span className="centjes">99</span>
        <span className="week">per maand</span>
             </div>
              <button className="choosebutton">choose plan</button>
        </div>
        </div>


        
        </>
    )
}
export default Membership;