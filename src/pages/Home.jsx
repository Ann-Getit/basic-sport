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
            <p className="positivetext">Gym is more than just training — it’s an investment in yourself. Every time you pick up those weights or push through that extra set, you’re not only building a stronger body, but also a stronger mindset. It’s not about being perfect, but about staying consistent, even on the days when you don’t feel like it.</p>
        </div>
        </div>

        <div className="abonnee">
            <div className="abobox">
                <ul>
                  <li>
                <h3>
                   Basic 
                </h3>
                <hr />
                <p>✔️Sport in 1 club</p>
                <p>✔️all live grouplessons included</p>
                <p>✔️go for a membership from 1 month, 3 month, 1 year or 2 year</p>
                <p>✔️choose your startdate</p>
                <p>✔️14-day cooling-off period </p>
                <p className="doorgetrokken">sport together: take someone with you 5 times a month</p>

                <div className="containerabo">
                <p className="from">From</p>
                <p className="price"> €29,
                    <span className="span">99</span>
                    <span className="span2">per 4 weeks</span></p>
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
                <p>✔️sport in all clubs</p>
                <p>✔️all live grouplessons included</p>
                <p>✔️go for a membership from 1 month, 3 month, 1 year or 2 year</p>
                <p>✔️choose your startdate</p>
                <p>14-day cooling-off period </p>
                <p>✔️sport together: take someone with you 5 times a month</p>

<div className="containerabo">
                <p className="from">From</p>
                <p className="price">
                     €30,<span className="span">99</span>
                     <span className="span2">per 4 weeks</span>
                </p>
                </div>
                <div className="wrapbut">
                <button className="aboButton">choose silver premium</button>
                </div>
                </li>
                </ul>
            </div>
        </div>
</div>

        </>
    )
}
export default Home;