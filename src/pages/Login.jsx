import "./Login.css";


const Login = () => {


return (
<>

  <div className="imagencontainer">

  <img src="./pics/gym-svgrepo-com.svg" className="svgitem"/>
  </div>
  <hr />

<div className="logincontainer">

<div className="inputcontainer">
    <p className="registertext">register by basic&sport</p>
  <div className="inputbox">
  <input type="text" placeholder="emailadress or username"/>
  </div>

  <div className="inputbox">
  <input type="password" placeholder="password"/>
  </div>

<div className="buttonboxx">
  <button className="buttonlogin">sign up</button>
  <button className="buttonlogin2">forgot password?</button>
  </div>
</div>
<div className="line">

</div>

<div className="afbeelding">

    <img src="./pics/sportpics-unsplash.jpg" className="loginimage"/>

    <img src="./pics/worksweat-unsplash.jpg" className="loginimage"/>

    <img src="./pics/sport-machine-unsplash.jpg" className="loginimage"/>

    <img src="./pics/neon-muscle-unsplash.jpg" className="loginimage"/>
    
</div>
</div>
{/*}
<div className="breedte">
  {window.innerWidth}px
</div>*/}
 </>
    )
}
export default Login;