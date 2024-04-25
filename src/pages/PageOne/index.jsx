import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { Img, Text, Button, Heading } from "../../components";
import TypewriterText from "../../components/TypewriterText";
import BottomSlick from "../../components/BottomSlick";
// import TextDisplay from "../../components/TextDisplay";
const arr=[['#work for us'],['{being a good accompany}'],['{being everywhere}'],['{unprecedented creativity}'],['{true freedom}'],['Reshape','{human civilization}'],['Reshape','{human lifestyle}'],['Reshape','EVERYTHING.']]
export default function PageOne() {
  const [currentLineIndex, setCurrentLineIndex] = useState(0);

  const handleAnimationComplete = () => {
    // 在动画完成后调用，准备显示下一行
    console.log('sxxx');
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
          className="absolute bottom-[-377.00px] right-[19.00px] m-auto h-[972px] w-[68%] rounded-[486px] bg-blue_gray-50_01" />
       {/* <img
          loading="lazy"
          src="images/page3/page3bg1.png"
          className="mt-8 w-full aspect-[1.72] max-md:max-w-full"
        />*/}
        <div className="absolute bottom-[-5.00px] right-[19.00px] m-auto h-[972px] w-[68%] bg-cover bg-no-repeat"
             style={{
               backgroundImage: "url('/public/images/img_group_903.png')",
               backgroundPosition: "top",
               backgroundSize: "228%"
             }} />

        <div
          className="absolute bottom-0 left-0 right-0 top-0 m-auto h-[100vh] w-full bg-cover bg-no-repeat pt-[45px] md:h-auto md:pt-5"
        >
          {/* hero section */}
          <div className="flex flex-col items-center">
            {/* navigation menu section */}
            <header className="mx-auto flex w-full max-w-[1300px] flex-col items-start md:p-5">
              {/* logo and menu section */}
              <div className="flex items-center justify-between gap-5 self-stretch md:flex-col">
                <Img src="images/img_group_35684.png" alt="image" className="h-[19px] w-[9%] object-cover md:w-full" />
                <div className="flex w-[38%] items-center justify-between gap-5 md:w-full sm:flex-col">
                  <ul className="flex flex-wrap gap-[49px]">
                    <li>
                      <a href="#" className="cursor-pointer">
                        <Heading as="h6" className="text-center hover:text-yellow-800">
                          Creation Platform
                        </Heading>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <Heading as="h6" className="text-center !text-yellow-800">
                          role.ai
                        </Heading>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="cursor-pointer">
                        <Heading as="h6" className="text-center hover:text-yellow-800">
                          BRC-1111{" "}
                        </Heading>
                      </a>
                    </li>
                  </ul>
                  <div
                    className="flex items-center gap-2 rounded-[12px] border border-solid border-blue_gray-100_01 pl-3">
                    <Text size="s" as="p" className="h-[17px] !font-sfpro tracking-[0.14px] !text-blue_gray-900_02">
                      EN
                    </Text>
                    <Button
                      variant="fill"
                      className="min-w-[39px] rounded-bl-[12px] rounded-tl-[12px] font-sfpro font-medium tracking-[0.14px]"
                    >
                      CN
                    </Button>
                  </div>
                </div>
              </div>
              <Text size="xs" as="p" className="relative mt-[-3px] text-center !text-blue_gray-700">
                Nuwa Digital Life Labs
              </Text>
            </header>

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
            <div className="bg-[#fff] fixed left-[-1px] bottom-0 flex h-[128px] items-center">
              <BottomSlick />
            </div>

            {/*<div className="marquee w-[178%] fixed left-0 bottom-0 flex min-w-full overflow-hidden whitespace-nowrap">
              {[...Array(2)].map((_, i) => (
                <div
                  key={i}
                  className="w-full flex items-center self-stretch bg-white-A700_e5 p-[27px] md:flex-col sm:p-5">
                  <Img
                    src="images/img_14_4x.png"
                    alt="144x_one"
                    className="ml-[13px] h-[65px] w-[9%] self-end object-cover md:ml-0 md:w-full"
                  />
                  <div
                    className="mb-[3px] ml-[52px] mt-1 h-[67px] w-px bg-gray-700_49 md:ml-0 md:h-px md:w-[67px] md:p-5" />
                  <Img
                    src="images/img_4_4x.png"
                    alt="44x_one"
                    className="mb-[13px] ml-[42px] h-[40px] w-[22%] self-end object-cover md:ml-0 md:w-full"
                  />
                  <div
                    className="mb-[3px] ml-[52px] mt-1 h-[67px] w-px bg-gray-700_49 md:ml-0 md:h-px md:w-[67px] md:p-5" />
                  <div className="ml-[43px] flex w-[24%] items-center justify-between gap-5 md:ml-0 md:w-full">
                    <div className="h-full w-px bg-gray-700_49" />
                    <Img
                      src="images/img_13_4x.png"
                      alt="134x_one"
                      className="mb-1 h-[51px] w-[60%] self-end object-cover"
                    />
                    <div className="h-full w-px bg-gray-700_49" />
                  </div>
                  <div
                    className="mb-[3px] ml-[52px] mt-1 h-[67px] w-px bg-gray-700_49 md:ml-0 md:h-px md:w-[67px] md:p-5" />
                  <Img
                    src="images/img_9_4x.png"
                    alt="94x_one"
                    className="mb-2 ml-[49px] h-[50px] w-[11%] self-end object-cover md:ml-0 md:w-full"
                  />
                  <div className="ml-[46px] h-[67px] w-px bg-gray-700_49 md:ml-0 md:h-px md:w-[67px] md:p-5" />
                  <Img
                    src="images/img_2_4x.png"
                    alt="24x_one"
                    className="mb-2 ml-12 h-[50px] w-[17%] self-end object-cover md:ml-0 md:w-full"
                  />
                  <div className="ml-[49px] h-[67px] w-px bg-gray-700_49 md:ml-0 md:h-px md:w-[67px] md:p-5" />
                </div>
              ))}
            </div>*/}

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
