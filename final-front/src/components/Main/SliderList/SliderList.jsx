import React from "react";
import Slider from "react-slick";
import SingleSlider from '../Slider/Slider'
import { useState, useEffect } from "react";
const SliderList = (props) => {
  const sliders = props.sliders;
  return (
    <div>
      <Slider className="slider-wrapper">
      {
        sliders.map((slider)=>{
          return(
            <SingleSlider key={slider.id} slider={slider}/>
          )
        })
      }
      </Slider>
    </div>
  );
};

export default SliderList;
