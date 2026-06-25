import "./Membership.css";

const Membership = () => {

    return (
        <>

        <div className="container1">
        <div className="twinparent1">
            <h1>What suites you better</h1>
            <p className="memberP"><strong>Choose the membership that suites you better</strong></p>
            <p className="memberP2">By Basic Sport you can choose from a BASIC or a SILVER PREMIUM mebership.
                With a BASIC you visit one club, with a SILVER PREMIUM you can visit many locations. With SILVER PREMIUM you are allowed to bring someone 5 times a month !
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



        
        </>
    )
}
export default Membership;