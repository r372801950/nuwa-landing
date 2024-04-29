import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { Img, Text, Button, Heading } from "../../components";
import TypewriterText from "../../components/TypewriterText";
// import BottomSlick from "../../components/BottomSlick";
// import CommonHeader from "../../components/CommonHeader";
import ContinuousMarquee from "../../components/ContinuousMarquee";
// import TextDisplay from "../../components/TextDisplay";
const arr=[['#work for us'],['{being a good accompany}'],['{being everywhere}'],['{unprecedented creativity}'],['{true freedom}'],['Reshape','{human civilization}'],['Reshape','{human lifestyle}'],['Reshape','EVERYTHING.']]
export default function PageOne() {
  const [currentLineIndex, setCurrentLineIndex] = useState(0);

  const handleAnimationComplete = () => {
    // 在动画完成后调用，准备显示下一行
    if (currentLineIndex < arr.length - 1) {
      setCurrentLineIndex(currentLineIndex + 1);
    }
  };
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
          className="absolute bottom-[-377.00px] right-[19.00px] m-auto h-[972px] w-[972px] rounded-[50%] bg-blue_gray-50_01">
           <img
             src="images/img_group_903.png"
             alt="nuwa"
             className="absolute object-cover max-w-[249%] transform scale-200 -translate-x-[21%]  -translate-y-[19%]"
           />
         </div>

        <div
          className="absolute bottom-0 left-0 right-0 top-0 m-auto h-[100vh] w-full bg-cover bg-no-repeat pt-[95px] md:h-auto md:pt-5"
        >
          {/* hero section */}
          <div className="flex flex-col items-center">

            {/*<CommonHeader />*/}

            {/* headline section */}
            <div className="mx-auto mt-[60px] w-full max-w-[1308px] md:p-5">
              <Text size="5xl" as="p" className="!font-pangmenzhengdao !text-white-A700">
                <>
                  DIGITAL <br />
                  LIFE...
                </>
              </Text>
            </div>

            <div className="mx-auto w-full max-w-[1308px] md:p-5">

              {/* 只渲染当前活跃的行 */}
              <TypewriterText
                lines={arr[currentLineIndex]}
                onFinishedTyping={handleAnimationComplete}
              />

              {/*<TypewriterText lines={['Reshape2','human civilization2']} />*/}
              {/*<TextDisplay lines={[['Reshape','human civilization'],'Reshape2','human civilization2']} speed={200} />*/}

            </div>

            {/* image gallery section */}
            {/*<div className="bg-[#fff] absolute left-[-1px] bottom-0 flex h-[128px] items-center">*/}
            {/*  /!*<BottomSlick />*!/*/}
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
