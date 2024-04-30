import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { Img, Text, Button, Heading } from "../../components";
import TypewriterText from "../../components/TypewriterText";
import ContinuousMarquee from "../../components/ContinuousMarquee";
import TypingEffect from "../../components/TypingEffect";
// import TextDisplay from "../../components/TextDisplay";
import './index.css'
const arr=[['#work for us'],['{being a good accompany}'],['{being everywhere}'],['{unprecedented creativity}'],['{true freedom}'],['Reshape','{human civilization}'],['Reshape','{human lifestyle}'],['Reshape','EVERYTHING.']]
export default function PageOne() {
  return (
    <>
      <Helmet>
        <title>Creation Platform - Nuwa Digital Life Labs</title>
        <meta
          name="description"
          content="Explore the Nuwa Digital Life Labs Creation Platform. A hub for innovation in digital life and technology integration."
        />
      </Helmet>

      {/* main layout section */}
      <div className="relative h-[100vh] w-full bg-indigo-50 overflow-hidden">
        {/* empty view section */}
        <div
          className="absolute bottom-0 right-[20.00px] h-[66%] w-[67.5%] bg-cover" style={{backgroundImage:"url('images/page1/half.png')"}}>
           <img
             src="images/page1/Mask.png"
             alt="nuwa"
             className="absolute object-cover w-full transform shake"
           />
        </div>

        {/*<div
          className="absolute bottom-0 right-[20.00px] h-[66%] w-[67.5%] bg-cover"
          style={{
            backgroundImage: "url('images/page1/half.png')",
          }}
        >
          <img
            src="images/page1/Mask.png"
            alt="nuwa"
            className="absolute object-cover w-full transform -translate-y-[23%]"
            style={{
              animation: "shake 2.5s ease infinite", // 使用名为 shake 的动画，持续时间为0.5秒，无限循环
            }}
          />
        </div>*/}

        <div
          className="absolute bottom-0 left-0 right-0 top-0 m-auto h-[100vh] w-full bg-cover bg-no-repeat pt-[95px] md:h-auto md:pt-5"
        >
          {/* hero section */}
          <div className="flex flex-col items-center">

            {/* headline section */}
            <div className="mx-auto mt-[60px] w-full max-w-[1308px] md:p-5">
              <Text size="5xl" as="p" className="!font-pangmenzhengdao text-[#333333]">
                <>
                  DIGITAL <br />
                  LIFE...
                </>
              </Text>
            </div>

            <div className="mx-auto w-full max-w-[1308px] md:p-5">

              {/* 只渲染当前活跃的行 */}
              {/*<TypewriterText*/}
              {/*  lines={arr[currentLineIndex]}*/}
              {/*  onFinishedTyping={handleAnimationComplete}*/}
              {/*/>*/}
              <TypingEffect />

            </div>

            {/* image gallery section */}
            {/*<div className="bg-[#fff] absolute left-[-1px] bottom-0 flex h-[128px] items-center">*/}
            {/*</div>*/}
            <div className="bg-[#fff] absolute left-0 bottom-0 h-[128px] flex items-center">
              <ContinuousMarquee></ContinuousMarquee>
            </div>

          </div>
        </div>
      </div>
      <style>
        {`
          .marquee {
            animation: scroll 20s linear infinite;
          }
          
          @keyframes scroll {
            from {
              transform: translateX(0);
            }
            to {
              transform: translateX(-50%);
            }
          }

        `}
      </style>
    </>
  );
}
