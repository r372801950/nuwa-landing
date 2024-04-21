import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { Img, Text, Heading } from "../../components";
import Header from "../../components/Header";
import ResizableSlick from "../../components/ResizableSlick";

const slideInfo=[
  {
    name:'NLP',
    title:'Natural Language Processing (NLP)',
    info:'Advancing computer interaction through natural language, focusing on state-of-the-art text understanding, generation, and intelligent dialogue technologies for innovative NLP applications.'
  },
  {
    name:'Game Engine',
    title:'Game Engine',
    info:'Advancing computer interaction through natural language, focusing on state-of-the-art text understanding, generation, and intelligent dialogue technologies for innovative NLP applications.'
  },
  {
    name:'Voice Technology',
    title:'Voice Technology',
    info:'Advancing computer interaction through natural language, focusing on state-of-the-art text understanding, generation, and intelligent dialogue technologies for innovative NLP applications.'
  },
  {
    name:'Computer Vision',
    title:'Computer Vision',
    info:'Enabling digital entities to better understand and create visual content, focusing on advanced analysis, detection, tracking, recognition, and generation of portraits and video content.'
  },
  {
    name:'Blockchain',
    title:'Blockchain',
    info:'Enabling digital entities to better understand and create visual content, focusing on advanced analysis, detection, tracking, recognition, and generation of portraits and video content.'
  },
  {
    name:'3D Modeling and Animation',
    title:'3D Modeling and Animation',
    info:'Enabling digital entities to better understand and create visual content, focusing on advanced analysis, detection, tracking, recognition, and generation of portraits and video content.'
  },

]
export default function PageTwo() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleSlideChange = (index) => {
    console.log("Current Slide is:", index); // 可以在这里做更多逻辑处理
    setCurrentSlide(index);
  };
  return (
    <>
      <Helmet>
        <title>Research Focus in NLP - Role.ai</title>
        <meta
          name="description"
          content="Dive into advanced NLP research at Role.ai. Explore our focus on text understanding, generation, and intelligent dialogue technologies."
        />
      </Helmet>
      <div className="flex w-full h-[100vh] flex-col items-center gap-[107px] bg-gray-100 pt-[45px] shadow-xs md:gap-20 md:pt-5 sm:gap-[53px]">
        {/* header section */}
        <Header className="mx-auto flex w-full max-w-[1301px] items-center justify-between gap-5 md:flex-col md:p-5" />
        <div className="flex flex-col overflow-hidden justify-center gap-[726px] self-stretch md:gap-[544px] md:pb-5 sm:gap-[363px]">
          {/* main content section */}
          <div className="flex flex-col items-center gap-[43px]">
            <div className="relative flex self-stretch justify-between overflow-auto md:flex-col  h-[304px]">
              <div className="flex w-[35%] items-center gap-4 rounded-r-[152px] bg-yellow-800_19 p-[54px] md:ml-0 md:w-full md:p-5">
                {/*<div className="flex w-[89%] h-[304px] items-center justify-end gap-[33px]  bg-yellow-800_19 p-[55px] md:w-full md:p-5">*/}
                  {/*左箭头*/}
                 {/* <Img
                    src="images/img_arrow_left_blue_gray_900.svg"
                    alt="arrowleft_one"
                    className="mb-[76px] h-[27px] w-[27px] self-end"
                  />*/}
                  {/*左侧第一个图片*/}
                  {/*<Img
                    src="images/img_4_1.png"
                    alt="image_one"
                    className="mb-4 mt-[17px] h-[161px] w-[152px] object-cover"
                  />*/}
                {/*</div>*/}



                {/*<Img
                  src="images/img_rectangle.png"
                  alt="image_two"
                  className="mb-[67px] h-[154px] w-[153px] self-end object-cover md:w-full"
                />*/}
              </div>
              <div  className="absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]">
                <ResizableSlick  onCurrentSlideChange={handleSlideChange} />

              </div>
              <div className="flex w-[35%] items-center gap-4 rounded-l-[152px] bg-yellow-800_19 p-[54px] md:ml-0 md:w-full md:p-5">
                {/*右侧第一个图片
                <Img
                  src="images/img_66_1.png"
                  alt="image_three"
                  className="mb-[46px] mt-[47px] h-[103px] w-[156px] object-cover"
                />*/}
                {/*<Img*/}
                {/*  src="images/img_arrow_right.svg"*/}
                {/*  alt="arrowright_one"*/}
                {/*  className="mb-[77px] h-[27px] w-[27px] self-end"*/}
                {/*/>*/}
              </div>
            </div>
            <div className="mx-auto flex w-full max-w-[1305px] flex-col items-center md:p-5">
              <div className="flex items-start gap-[30px] self-stretch md:flex-col">
                <Text size="4xl" as="p" className="w-[39%] !font-pangmenzhengdao md:w-full">
                  <span className="text-black-900_03">
                    <>
                      Research <br />
                    </>
                  </span>
                  <span className="text-[80px] text-gray_800">Focus</span>
                  <span className="text-[80px] text-black-900_03">&nbsp;</span>
                </Text>
                <div className="mb-1.5 flex flex-1 flex-col items-start gap-[134px] md:gap-[100px] md:self-stretch sm:gap-[67px]">
                  <div className="flex w-[37%] items-center opacity-0.5 md:w-full">
                    <Text as="p" className="!text-gray-900_05">
                      01
                    </Text>
                    <div className="ml-[9px] h-px w-[53%] bg-black-900_03" />
                    <Text as="p" className="ml-1.5">
                      02
                    </Text>
                    <Text as="p" className="ml-1.5">
                      03
                    </Text>
                    <Text as="p" className="ml-1.5">
                      04
                    </Text>
                    <Text as="p" className="ml-1.5">
                      05
                    </Text>
                    <Text as="p" className="ml-1.5">
                      06
                    </Text>
                  </div>
                  <Heading size="md" as="h1" className="self-end !text-black-900_03">
                    {/*Natural Language Processing (NLP)*/}
                    {slideInfo[currentSlide].title}
                  </Heading>
                </div>
              </div>
              <Heading as="h2" className="mr-[7px] w-[47%] self-end text-right !text-gray-600 md:mr-0 md:w-full">
                {/*Advancing computer interaction through natural language, focusing on state-of-the-art text
                understanding, generation, and intelligent dialogue technologies for innovative NLP applications.*/}
                {slideInfo[currentSlide].info}
              </Heading>
            </div>
          </div>

          {/* footer image section */}
        </div>
      </div>
    </>
  );
}
