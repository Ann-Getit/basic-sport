import "./Locations.css";
import { useEffect, useState }from "react";
import L from 'leaflet';
import "leaflet/dist/leaflet.css";
const Locations = () => {

    const [open, setOpen]=useState(false);

    useEffect(() => {

     
    const map = L.map('map').setView([52.36217134124971, 4.892728796614025], 13);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: "© OpenStreetMap"
}).addTo(map);


       const gyms = [
        {
            name:"Basic & Sport North",

            coords:
            [52.39459255314372, 4.93039598114707],
          
       },

       {
            name:"Basic & Sport West",

            coords:
            [52.384562711709584, 4.860161008304435],

       },

       {
            name: "Basic & Sport Centre",

            coords: [52.364312060460485, 4.899836372318433]
         }   
        ];


    gyms.forEach((gym)=>{
    L.circle(gym.coords,
        {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 150
})

  .addTo(map)
  .bindPopup(

gym.name

);
    });

return ()=>{

map.remove();

};



    },[]);

    return(
        <>
        <div className="body-locations">
        <div id="map"></div>

        <div className={
open
?
"parent-locations open"
:
"parent-locations"
}>
            <p className="totalclubs"> 3 gymclubs in Amsterdam !</p>
        <div className="container-locations">
            <img src="pics/North-unsplash.jpg" />
            <h4>Basic & Sport North</h4>
            <p>24/7 open</p>
        </div>
        <div className="container-locations">
            <img src="pics/West-unsplash.jpg" />
            <h4>Basic & Sport West</h4>
            <p>24/7 open</p>
        </div>
        <div className="container-locations">
            <img src="pics/centre-unsplash.jpg" />
            <h4>Basic & Sport Centre</h4>
            <p>24/7 open</p>
           {/*<div className="breedte">
  {window.innerWidth}px
</div>*/}
        </div>
        </div>

 <div className={
       open
       ?
    "laststroke open"
     :
    "laststroke"
    }

    onClick={()=>
    setOpen(!open)
    }>
            <p className="emoticon">
                {open ? "⌄" : "⎯"}
                </p>
            <p className="textinstroke">find all clubs !</p>
        </div>
        </div>

        </>
    );
};
export default Locations;