import React from "react";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/bootstrap/dist/js/bootstrap';
import Carousel from 'react-bootstrap/Carousel';

import './intro.css';

function Intro() {
    return (
        < div id="intro">
         <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="NITC1.png"
      alt="First slide"
    />
    <Carousel.Caption>
   
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="intro\img6.JPG"
      alt="Second slide"
    />

    <Carousel.Caption>
     
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="holder.js/800x400?text=Third slide&bg=20232a"
      alt="Third slide"
    />

    <Carousel.Caption>
     
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </div>
    );
}

export default Intro;