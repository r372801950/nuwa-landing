import React, { useState } from "react";
import Slider from "react-slick";
import { Img } from "../Img";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./sliderStyles.css";

function ResizableSlick({ onCurrentSlideChange }) {

  const [current, setCurrent] = useState(0);
  const [display, setDisplay] = useState(true);
  const settings = {
    dots: true,
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "10px",
    slidesToShow: 3,
    speed: 500,
    appendDots: dots => (
      <div
        style={{
          borderRadius: "10px",
          padding: "10px",
        }}
      >
        <ul style={{ marginBottom: "-20px" }}> {dots} </ul>
      </div>
    ),
    customPaging: i => (
      <div
        style={{
          width: "30px",
          color:  i === current ? "#1C1C1C" : "#000000",
          opacity: i === current ? 1 : 0.5,
          fontSize: "16px",
          textAlign: "center",
          cursor: "pointer" // 添加指针样式
        }}
      >
        0{i + 1}
      </div>
    ),
    beforeChange: (oldIndex, newIndex) => {
      onCurrentSlideChange(newIndex); // 在滑块动画开始前更新状态
      setCurrent(newIndex)
    },
    // customPaging: function(i) {
    //   return (
    //     <button style={{ width: "20px", height: "20px" }}>
    //       {i + 1} {/* 加1因为索引是从0开始 */}
    //     </button>
    //   );
    // },
  };
  return (
    <div className="slider-container">
      <div className="custom-container" style={{ display: display ? "block" : "none" }}>
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
