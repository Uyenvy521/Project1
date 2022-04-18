import React from 'react';
import './Styles.css';
import img1 from '../assets/map.png'

function Locations() {
    return(
        <div className='mainSpace'>
            <center>
                <h1>Locations</h1>
                Prefer the smell and environment of a real bookstore? We have several locations across the states! Check in with Google Maps to see them all.
                <br/><br/>
                <img src={img1}/>
            </center>
        </div>
    )
}

export default Locations;