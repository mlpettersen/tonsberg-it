import React from 'react';
import Navigation from './Navigation';
import './css/bootstrap.min.css';
import './css/App.css';
import AboutUs from './AboutUs';
import Services from './Services';
import Pricing from './Pricing';

function App() {
  return (
    <div className="App">
      <Navigation></Navigation>
      <div className='Marg-cent'>
        <div id = "home">
          <AboutUs></AboutUs>
        </div>
        <br></br>
        <div id = "services">
          <Services></Services>
        </div>
        <div id="pricing">
          <Pricing></Pricing>
        </div>
      </div>
      <footer>Copyright © Tonsberg 2019.</footer>
    </div>
  );
}

export default App;
