import React from "react";
import commonImg from "../shared/constant/constantdata";
import { Carousel } from "react-bootstrap";

const MyCrousalComp =()=> {
    return <div> 
    <h2>THIS IS MyCrousalComp</h2>
    <Carousel fade>
      <Carousel.Item>
        {/* <ExampleCarouselImage text="First slide" /> */}
        <img src={commonImg.samosa} alt="" style={{width:"100%",height:"400px"}}/>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>SAMOSA KHALO GUYS</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        {/* <ExampleCarouselImage text="Second slide" /> */}
        <img src={commonImg.dosa} alt="" style={{width:"100%",height:"400px"}}/>
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>DOSA KHALO GUYS</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        {/* <ExampleCarouselImage text="Third slide" /> */}
        <img src={commonImg.vadapav} alt="" style={{width:"100%",height:"400px"}}/>
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>VADAPAV KHALO GUYS</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
}

export default MyCrousalComp;