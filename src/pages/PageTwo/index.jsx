import React from "react";
import { Helmet } from "react-helmet";
import { Img, Text, Heading } from "../../components";
import Header from "../../components/Header";

export default function PageTwo() {
  return (
    <>
      <Helmet>
        <title>Research Focus in NLP - Role.ai</title>
        <meta
          name="description"
          content="Dive into advanced NLP research at Role.ai. Explore our focus on text understanding, generation, and intelligent dialogue technologies."
        />
      </Helmet>
      <div className="flex w-full flex-col items-center gap-[107px] bg-gray-100 pt-[45px] shadow-xs md:gap-20 md:pt-5 sm:gap-[53px]">
        {/* header section */}
        <Header className="mx-auto flex w-full max-w-[1301px] items-center justify-between gap-5 md:flex-col md:p-5" />
        <div className="flex flex-col justify-center gap-[726px] self-stretch pb-[200px] md:gap-[544px] md:pb-5 sm:gap-[363px]">
          {/* main content section */}
          <div className="flex flex-col items-center gap-[43px]">
            <div className="flex self-stretch overflow-auto md:flex-col">
              <div className="relative z-[1] flex w-[68%] items-center justify-between gap-5 pr-[232px] md:w-full md:flex-col md:p-5 md:pr-5">
                <div className="flex w-[89%] items-center justify-end gap-[33px] rounded-[152px] bg-yellow-800_19 p-[55px] md:w-full md:p-5">
                  <Img
                    src="images/img_arrow_left_blue_gray_900.svg"
                    alt="arrowleft_one"
                    className="mb-[76px] h-[27px] w-[27px] self-end"
                  />
                  <Img
                    src="images/img_4_1.png"
                    alt="image_one"
                    className="mb-4 mt-[17px] h-[161px] w-[26%] object-cover"
                  />
                </div>
                <Img
                  src="images/img_rectangle.png"
                  alt="image_two"
                  className="mb-[67px] h-[154px] w-[153px] self-end object-cover md:w-full"
                />
              </div>
              <div className="relative ml-[-87px] flex w-[47%] items-center gap-4 rounded-[152px] bg-yellow-800_19 p-[54px] md:ml-0 md:w-full md:p-5">
                <Img
                  src="images/img_66_1.png"
                  alt="image_three"
                  className="mb-[46px] mt-[47px] h-[103px] w-[26%] object-cover"
                />
                <Img
                  src="images/img_arrow_right.svg"
                  alt="arrowright_one"
                  className="mb-[77px] h-[27px] w-[27px] self-end"
                />
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
                    Natural Language Processing (NLP)
                  </Heading>
                </div>
              </div>
              <Heading as="h2" className="mr-[7px] w-[47%] self-end text-right !text-gray-600 md:mr-0 md:w-full">
                Advancing computer interaction through natural language, focusing on state-of-the-art text
                understanding, generation, and intelligent dialogue technologies for innovative NLP applications.
              </Heading>
              <div className="mt-[201px] flex flex-wrap gap-[11px]">
                <Text size="2xl" as="p" className="!font-koho !text-blue_gray-900_03">
                  Research{" "}
                </Text>
                <Text size="2xl" as="p" className="!font-koho !text-blue_gray-900_03">
                  Focus{" "}
                </Text>
              </div>
            </div>
          </div>

          {/* footer image section */}
          <Img src="images/img_image_159.png" alt="image159_one" className="h-px w-[95%] object-cover" />
        </div>
      </div>
    </>
  );
}
