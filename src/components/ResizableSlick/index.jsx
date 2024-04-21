import React, { useState } from "react";
import Slider from "react-slick";
import { Img } from "../Img";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./sliderStyles.css";

function ResizableSlick({ onCurrentSlideChange }) {
  const [display, setDisplay] = useState(true);
  const [width, setWidth] = useState(600);
/*
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };*/
  const settings = {
    dots: true,
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "10px",
    slidesToShow: 3,
    speed: 500,
    beforeChange: (oldIndex, newIndex) => {
      onCurrentSlideChange(newIndex); // 在滑块动画开始前更新状态
    },
    // afterChange: (current) => onCurrentSlideChange(current)
    customPaging: function(i) {
      return (
        <button style={{ width: "20px", height: "20px" }}>
          {i + 1} {/* 加1因为索引是从0开始 */}
        </button>
      );
    },
  };
  return (
    <div className="slider-container">
      <div
        style={{
          width: 1100 + "px",
          display: display ? "block" : "none",
        }}
      >
        <Slider {...settings}>
          <div>
            <div className="h-[200px] flex justify-center items-center">
              <Img
                src="images/img_rectangle.png"
                alt="image_two"
                className="h-[154px] w-[153px]"
              />
            </div>
          </div>
          <div>
            <div className="h-[200px] flex justify-center items-center">
              <Img
                src="images/img_66_1.png"
                alt="image_three"
                className="h-[103px] w-[156px]"
              />
            </div>

          </div>
          <div>
            <div className="h-[200px] flex justify-center items-center">
              <Img
                src="images/page2/slick3.png"
                alt="image_two"
                className="h-[200px] w-[56px]"
              />
            </div>
          </div>
          <div>
            <div className="h-[200px] flex justify-center items-center">
              <Img
                src="images/page2/slick4.png"
                alt="image_two"
                className="h-[194px] w-[197px]"
              />
            </div>
          </div>
          <div>
            <div className="h-[200px] flex justify-center items-center">
              <Img
                src="images/page2/slick5.png"
                alt="image_two"
                className="h-[173px] w-[173px]"
              />
            </div>
          </div>

          <div>
            <div className="h-[200px] flex justify-center items-center">
              <Img
                src="images/img_4_1.png"
                alt="image_one"
                className="h-[161px] w-[152px]"
              />
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default ResizableSlick;
