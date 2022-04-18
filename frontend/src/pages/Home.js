import React from 'react';
import '../styles/Home.css';
import Slider1 from '../components/Slider1';
import Slider2 from '../components/Slider2';
import Slider3 from '../components/Slider3';

function Home() {
  return (
    <div id='homePage'>

      <div className="featuredScroll">
          <Slider1 />
      </div>


      <div className="sectionTitle">
        <h2>Best Sellers</h2>
      </div>
      <div className="bestSellers">
        <Slider2 />
      </div>
      <div className="sectionTitle">
        <h2>New Arrivals</h2>
      </div>
      <div className="newArrivals">
      <Slider3 />
      </div>
    </div>
  );
}

export default Home;
