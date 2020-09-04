import React from "react";
import { Topbar } from "./homeStyles";
import Slider from "react-slick";
import slider1 from "../../assets/img/slider1.jpg";

export default function Home() {
  const settings = {
    border: 0,
  };

  return (
    <div>
      <Topbar />
      <Slider {...settings}>
        <img src={slider1} width="100%" />
      </Slider>
    </div>
  );
}
