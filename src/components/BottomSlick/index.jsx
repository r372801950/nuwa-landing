import React from "react";
import Slider from "react-slick";
import { Img } from "../Img";


// 自定义箭头组件
const CustomArrow = ({ onClick, direction }) => (
  <div
    className={`custom-arrow custom-arrow-${direction}`}
    onClick={onClick}
  >
    {direction === 'left' ? '' : ''}
  </div>
);

function BottomSlick() {

  const settings = {
    className: "slider variable-width",
    slidesToShow: 5,
    slidesToScroll: 1,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 1000,
    prevArrow: <CustomArrow direction="left" />,
    nextArrow: <CustomArrow direction="right" />,
  };

  return (
    <div className="slider-container2">
      {/*<div className="w-[178%] fixed left-0 bottom-0 flex min-w-full overflow-hidden whitespace-nowrap">*/}
      <div
        style={{
          width: 3000 + "px"
        }}>
        <Slider {...settings}>
          <div style={{ width: 184 }} className="relative h-[67px] border-r border-gray-400">
            <Img
              src="images/img_14_4x.png"
              alt="144x_one"
              className="w-[92px] object-cover absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            />
          </div>
          <div style={{ width: 316 }} className="relative h-[67px] border-r border-gray-400">
            <Img
              src="images/img_4_4x.png"
              alt="44x_one"
              className="w-[230px] object-cover absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            />
          </div>
          <div style={{ width: 244 }} className="relative h-[67px] border-r border-gray-400">
            <Img
              src="images/img_13_4x.png"
              alt="134x_one"
              className="w-[147px] object-cover absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            />
          </div>
          <div style={{ width: 206 }} className="relative h-[67px] border-r border-gray-400">
            <Img
              src="images/img_9_4x.png"
              alt="94x_one"
              className="w-[110px] object-cover absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            />
          </div>
          <div style={{ width: 277 }} className="relative h-[67px] border-r border-gray-400">
            <Img
              src="images/img_2_4x.png"
              alt="24x_one"
              className="w-[179px] object-cover absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            />
          </div>
          <div style={{ width: 184 }} className="relative h-[67px] border-r border-gray-400">
            <Img
              src="images/img_14_4x.png"
              alt="144x_one"
              className="w-[92px] object-cover absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            />
          </div>
          <div style={{ width: 316 }} className="relative h-[67px] border-r border-gray-400">
            <Img
              src="images/img_4_4x.png"
              alt="44x_one"
              className="w-[230px] object-cover absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            />
          </div>
          <div style={{ width: 244 }} className="relative h-[67px] border-r border-gray-400">
            <Img
              src="images/img_13_4x.png"
              alt="134x_one"
              className="w-[147px] object-cover absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            />
          </div>
          <div style={{ width: 206 }} className="relative h-[67px] border-r border-gray-400">
            <Img
              src="images/img_9_4x.png"
              alt="94x_one"
              className="w-[110px] object-cover absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            />
          </div>
          <div style={{ width: 277 }} className="relative h-[67px] border-r border-gray-400">
            <Img
              src="images/img_2_4x.png"
              alt="24x_one"
              className="w-[179px] object-cover absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            />
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default BottomSlick;
