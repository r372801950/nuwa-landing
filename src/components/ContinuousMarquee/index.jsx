import React from 'react';
import Marquee from 'react-fast-marquee';
import { Img } from "../Img";

function ContinuousMarquee() {
  return (
    <Marquee
      delay={1}
      pauseOnHover={true}
      gradient={false} // 关闭两端的渐变效果
      speed={600} // 控制滚动的速度
      play={true}
      style={{ width: 2400 }} // 两组图片2454，小于这个值就不会断层
    >
      <div style={{ width: '184px' }} className="flex items-center justify-center h-[67px] border-r border-gray-400">
        <Img
          src="images/img_14_4x.png"
          alt="144x_one"
          className="w-[92px] object-cover "
        />
      </div>
      <div style={{ width: '316px' }} className="flex items-center justify-center h-[67px] border-r border-gray-400">
        <Img
          src="images/img_4_4x.png"
          alt="44x_one"
          className="w-[230px] object-cover "
        />
      </div>
      <div style={{ width: '244px' }} className="flex items-center justify-center h-[67px] border-r border-gray-400">
        <Img
          src="images/img_13_4x.png"
          alt="134x_one"
          className="w-[147px] object-cover "
        />
      </div>
      <div style={{ width: '206px' }} className="flex items-center justify-center h-[67px] border-r border-gray-400">
        <Img
          src="images/img_9_4x.png"
          alt="94x_one"
          className="w-[110px] object-cover "
        />
      </div>
      <div style={{ width: '277px' }} className="flex items-center justify-center h-[67px] border-r border-gray-400">
        <Img
          src="images/img_2_4x.png"
          alt="24x_one"
          className="w-[179px] object-cover "
        />
      </div>
      <div style={{ width: '184px' }} className="flex items-center justify-center h-[67px] border-r border-gray-400">
        <Img
          src="images/img_14_4x.png"
          alt="144x_one"
          className="w-[92px] object-cover "
        />
      </div>
      <div style={{ width: '316px' }} className="flex items-center justify-center h-[67px] border-r border-gray-400">
        <Img
          src="images/img_4_4x.png"
          alt="44x_one"
          className="w-[230px] object-cover "
        />
      </div>
      <div style={{ width: '244px' }} className="flex items-center justify-center h-[67px] border-r border-gray-400">
        <Img
          src="images/img_13_4x.png"
          alt="134x_one"
          className="w-[147px] object-cover "
        />
      </div>
      <div style={{ width: '206px' }} className="flex items-center justify-center h-[67px] border-r border-gray-400">
        <Img
          src="images/img_9_4x.png"
          alt="94x_one"
          className="w-[110px] object-cover "
        />
      </div>
      <div style={{ width: '277px' }} className="flex items-center justify-center h-[67px] border-r border-gray-400">
        <Img
          src="images/img_2_4x.png"
          alt="24x_one"
          className="w-[179px] object-cover "
        />
      </div>
    </Marquee>
  );
}

export default ContinuousMarquee;
