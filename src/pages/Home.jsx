import "./Home.css";



const Home = () => {





    return (
        <>
        <div>
        <div className="firstStroke">
            <div className="track">
             <p className="paragrafstroke"><span>• hoodies 10% off ! •</span>• towels 5% off • <span>•proteine shakes 10% off! •</span> Till 25/7</p>
             </div>
        </div>



        <div className="imagewrapper">
        <img src="./pics/homepage.jpg" alt="gym" />
        <div className="buttonwrap">
        <button className="imgbtn">Join us ! </button>
        <button className="imgbtn">Login </button>
        </div>
        </div>
{/*<div className="breedte">
  {window.innerWidth}px
</div>*/}
<div className="boxstroke2">
        <div className="secondstroke">
            <p className="positivetext">Gym is more than just training — it’s an investment in yourself. Every time you pick up those weights or push through that extra set, you’re not only building a stronger body, but also a stronger mindset. It’ s not about being perfect, but about staying consistent, even on the days when you don’t feel like it.</p>
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
        </div>
        <div></div>
        {/*
        <div className="abonnee">
            <div className="abobox">
                <ul>
                  <li>
                <h3>
                   Basic 
                </h3>
                <hr />
                <li>✔️ Sport in 1 club</li>
                <li>✔️ all live grouplessons included</li>
                <li>✔️ go for a membership from 1 month, 3 month, 1 year or 2 year</li>
                <li>✔️ choose your startdate</li>
                <li>✔️ 14-day cooling-off period </li>
                <li className="doorgetrokken">sport together: take someone with you 5 times a month</li>

                <div className="containerabo">
                <li className="from">From</li>
                <li className="price"> €29,
                    <span className="span">99</span>
                    <span className="span2">per 4 weeks</span></li>
                 </div>

                <div className="wrapbut">
                <button className="aboButton">choose basic</button>
                </div>
                </li>
                </ul> 
            </div>

            <div className="abobox">
                <ul>
                    <li>
                <h3>
                    Silver premium
                </h3>
                <hr />
                <li>✔️ sport in all clubs</li>
                <li>✔️ all live grouplessons included</li>
                <li>✔️ go for a membership from 1 month, 3 month, 1 year or 2 year</li>
                <li>✔️ choose your startdate</li>
                <li>14-day cooling-off period </li>
                <li>✔️ sport together: take someone with you 5 times a month</li>

<div className="containerabo">
                <li className="from">From</li>
                <li className="price">
                     €30,<span className="span">99</span>
                     <span className="span2">per 4 weeks</span>
                </li>
                </div>
                <div className="wrapbut">
                <button className="aboButton">choose silver premium</button>
                </div>
                </li>
                </ul>
            </div>
        </div>*/}
</div>

        </>
    )
}
export default Home;