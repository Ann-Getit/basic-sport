import "./Grouplessons.css";
import { useNavigate } from "react-router-dom";

const Grouplessons = () => {
    const navigate = useNavigate();


    return (
        <>

             <div className="container1">
        <div className="twinparent1">
            <h1>Live groupclasses and video-workouts</h1>
            <p className="memberP"><strong>Choose classes that suites you better</strong></p>
            <p className="memberP2">Train your way with live and virtual classes. Join sessions at the club or stream workouts through the app. From dancing to high-intensity, there is always a suitable choice for you. Always included in your membership.
            </p>

            <div className="buttonparent">
            <button>Join us !</button>
            </div>

        </div>

        <div className="parent1">
           <img src="./pics/lessons-pics-unsplash.jpg" className="image_member"></img>
  </div>
        </div>


        <div className="boxstroke22">
        <div className="secondstroke">
            <h2 className="positivetextt">
                Find your perfect class
            </h2>
            <p>Go all the way with an energizing session. Relax with yoga or choose something in between. Join live at the club or stream on demand. New workouts every week.</p>
        </div>
        </div>
{/*<div className="breedte">
  {window.innerWidth}px
</div>*/}
<div className="styletext">
<h2>Live groupclasses</h2>
<p>Experience the energy of training together with an instructor. From full-body workouts to targeted sessions: there is something for every level, every mood, and every style. Included with every membership.</p>
{/*<div className="buttonparent">
    <button className="imgbtn" onClick={() => navigate("/membership")}>check prizes</button>
</div>*/}
</div>

<div className="styletext">
<h2>For every sporters</h2>
<p>keep your energie and motivation high. Our groupclasses brings the music, the moves and the extra push you need. available in the selected clubs.</p>
<ul className="ulliststyle">
    <li>
        <h3>With instructor</h3>
        <p>Clear instructions and energy in every classes.</p>
    </li>
    <li>
        <h3>Groupsmotivation</h3>
        <p>Feel the energy and together get the best out of yourself</p>
    </li>
    <li>
        <h3>For every levels</h3>
        <p>Feel the energy and find the best out of eachother</p>
    </li>
</ul>
<div className="buttonparent" >
    <button className="imgbtn" id="stylebutton"onClick={() => navigate("/membership")}>find clubs</button>
</div>
</div>

<div className="exploretext">
<h2>Explore our workoutstyle</h2>
<p>A wide mix of styles, levels and duration. 
    Everything that can help you build strength</p>
    </div>

<div className="liveclas">
<div className="liveclasbox">
    <img src="./pics/bodyandmind-unsplash.jpg" />
    <h3>Body & mind</h3>
    <p>Train your body and give your mind time to rest and recharge</p>
    <div className="buttonparent buttonparentclas" >

    <button className="imgbtn" id="stylebutton2"onClick={() => navigate("/membership")}>more information</button>
    </div>
</div>


<div className="liveclasbox">
      <img src="./pics/strenghtandshape-unsplash.jpg" />
      <h3>Strenght & Shape</h3>
    <p>Strengthen, shape and build your body with focused, consistent training.</p>
    <div className="buttonparent buttonparentclas" >
    <button className="imgbtn" id="stylebutton2"onClick={() => navigate("/membership")}>more information</button>
</div>
</div>

<div className="liveclasbox"> 
      <img src="./pics/pilates-unsplash.jpg" />
         <h3>Pilates</h3>
    <p>Train your body and improve your technique with challenging and effective sessions.</p>
    <div className="buttonparent buttonparentclas">
    <button className="imgbtn" id="stylebutton2"onClick={() => navigate("/membership")}>more information</button>
</div>
</div>

<div className="liveclasbox">
      <img src="./pics/dance-unsplash.jpg" />
         <h3>Dance</h3>
    <p>Shake the stress away with feel-good moves and amazing music.</p>
    <div className="buttonparent buttonparentclas">
    <button className="imgbtn" id="stylebutton2"onClick={() => navigate("/membership")}>more information</button>
</div>
</div>

<div className="liveclasbox"> 
      <img src="./pics/cardio-unsplash (1).jpg" />
         <h3>Cycle</h3>
    <p>An indoor cycling workout with motivational music that helps you push your limits and finish feeling strong</p>
    <div className="buttonparent buttonparentclas">
    <button className="imgbtn" id="stylebutton2"onClick={() => navigate("/membership")}>more information</button>
</div>
</div>

<div className="liveclasbox">
      <img src="./pics/fietsen-unsplash.jpg" />
         <h3>Cardio</h3>
    <p>Stay on the move, strengthen your condition and feel fitter after every session.</p>
    <div className="buttonparent buttonparentclas">
    <button className="imgbtn" id="stylebutton2"onClick={() => navigate("/membership")}>more information</button>
</div>
</div>

</div>
        </>
    )
}
export default Grouplessons;