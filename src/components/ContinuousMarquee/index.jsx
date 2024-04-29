import React from 'react';
import Marquee from 'react-fast-marquee';
import { Img } from "../Img";

function ContinuousMarquee() {
  return (
    <Marquee
      pauseOnHover={true}
      gradient={false} // 关闭两端的渐变效果
      speed={60} // 控制滚动的速度
      autoFill={true}
    >
      <div style={{ width: '184px' }} className="relative h-[67px] border-r border-gray-400">
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
    </Marquee>
  );
}

export default ContinuousMarquee;
