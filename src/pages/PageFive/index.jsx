import React from "react";
import { Helmet } from "react-helmet";
import { Img, Text, Button, Heading } from "../../components";
import Header from "../../components/Header";

export default function PageFive() {
  return (
    <>
      <Helmet>
        <title>Join the Community - Collaborate with Nuwa Labs</title>
        <meta
          name="description"
          content="Become a part of the vibrant digital life creator community with Nuwa Labs. Learn about the BRC-1111 protocol, contribute to our research, and help forge the era of digital symbiosis."
        />
      </Helmet>
      <div className="flex w-full flex-col items-center gap-[676px] bg-gradient pt-[45px] shadow-xs md:gap-[507px] md:pt-5 sm:gap-[338px]">
        <div className="mx-auto flex w-full max-w-[1303px] flex-col gap-9 md:p-5">
          {/* header section */}
          <Header className="flex items-center justify-between gap-5 md:flex-col" />
          <div className="flex flex-col gap-[55px] sm:gap-[27px]">
            {/* hero section */}
            <div className="flex gap-[22px] md:flex-col">
              <div className="flex w-[45%] flex-col items-center gap-12 rounded-[22px] bg-white-A700_01 py-[54px] md:w-full md:py-5">
                <div className="flex flex-col items-center self-stretch">
                  <div className="relative z-[1] flex w-[57%] flex-col items-end justify-end rounded-[160px] bg-yellow-900_7f py-[62px] pl-14 pr-[62px] blur-[200.00px] backdrop-opacity-[0.5] md:w-full md:p-5">
                    <div className="mr-[26px] mt-[82px] flex w-[65%] flex-col items-center rounded-[57px] border-2 border-solid border-white-A700_6d bg-black-900_03 p-[29px] shadow-sm md:mr-0 md:w-full sm:p-5">
                      <Img src="images/img_group_35513.png" alt="image_one" className="h-[55px] w-[51%] object-cover" />
                    </div>
                  </div>
                  <Text
                    size="xl"
                    as="p"
                    className="relative mt-[-33px] text-center !font-pangmenzhengdao leading-[60px] !text-black-900_01"
                  >
                    <span className="text-black-900_01">
                      <>
                        Learn, Contact
                        <br />
                      </>
                    </span>
                    <span className="text-gray_800_01">and Collaborate</span>
                  </Text>
                </div>
                <Text
                  size="lg"
                  as="p"
                  className="mb-[179px] w-[62%] text-center leading-[30px] !text-gray-600_01 md:w-full md:p-5"
                >
                  <>
                    Join the vibrant community of digital life creators to
                    <br /> collectively forge the era of digital symbiosis.
                  </>
                </Text>
              </div>

              {/* features section */}
              <div className="flex flex-1 flex-col gap-[18px] md:self-stretch">
                <div className="flex flex-col items-center rounded-[22px] bg-white-A700_01">
                  <div className="mt-[29px] flex w-[91%] flex-col items-start md:w-full md:p-5">
                    <Heading size="lg" as="h1" className="!text-gray-900">
                      Learn
                    </Heading>
                    <Text as="p" className="mt-8 w-[92%] !text-gray-900 md:w-full">
                      Discover more about the BRC-1111 protocol and other projects at Nüwa Laboratory.
                    </Text>
                    <div className="mt-[125px] flex items-center justify-between gap-5 self-stretch">
                      <Button
                        shape="round"
                        color="undefined_undefined"
                        className="mb-[29px] min-w-[194px] self-end sm:px-5"
                      >
                        Documentations
                      </Button>
                      <Img src="images/img_.svg" alt="image_two" className="h-[112px] w-[26%]" />
                    </div>
                  </div>
                </div>
                <div className="rounded-[22px] bg-white-A700_01 p-3.5">
                  <div className="mt-[17px] flex flex-col gap-[76px] md:gap-[57px] sm:gap-[38px]">
                    <div className="flex flex-col gap-7">
                      <Heading size="lg" as="h2" className="!text-gray-900">
                        Support Nüwa
                      </Heading>
                      <Text as="p" className="!text-gray-900">
                        Share the same vision? Any amount of donation will be appreciated! ❤️
                      </Text>
                    </div>
                    <div className="flex items-center gap-[23px]">
                      <Button
                        shape="round"
                        color="undefined_undefined"
                        className="mb-[15px] min-w-[194px] self-end !text-black-900_01 sm:px-5"
                      >
                        Donate
                      </Button>
                      <Img src="images/img__gray_900.svg" alt="image_three" className="h-[112px] w-[29%]" />
                    </div>
                  </div>
                </div>
              </div>

              {/* community section */}
              <div className="flex flex-1 flex-col gap-[18px] md:self-stretch">
                <div className="flex flex-col items-center rounded-[22px] bg-white-A700_01">
                  <div className="mt-7 flex w-[87%] flex-col items-start md:w-full md:p-5">
                    <Heading size="lg" as="h3" className="!text-gray-900">
                      Join us
                    </Heading>
                    <Text as="p" className="mt-8 w-[94%] !text-gray-900 md:w-full">
                      Join the world-class team and co-create the “Digital Symbiosis Era”!
                    </Text>
                    <div className="mt-[87px] flex items-center gap-[17px] self-stretch">
                      <Button shape="round" color="undefined_undefined" className="min-w-[194px] sm:px-5">
                        info@nuwalabs.org
                      </Button>
                      <Img src="images/img__gray_900_112x80.svg" alt="image_four" className="h-[112px] w-[29%]" />
                    </div>
                  </div>
                </div>
                <div className="rounded-[22px] bg-white-A700_01">
                  <div className="mt-[30px] flex flex-col">
                    <div className="flex w-[89%] flex-col items-start gap-6 md:w-full">
                      <Heading size="lg" as="h4" className="ml-[3px] !text-gray-900 md:ml-0">
                        Community
                      </Heading>
                      <Text as="p" className="!text-gray-900">
                        Join our community and follow us on social medias!
                      </Text>
                    </div>
                    <div className="mt-[86px] flex w-[64%] flex-col items-start md:w-full">
                      <Heading size="s" as="h5" className="ml-[18px] !text-white-A700_01 md:ml-0">
                        Discord
                      </Heading>
                      <Button
                        variant="fill"
                        shape="round"
                        className="relative mt-[-34px] w-full border border-solid border-gray-900_01 sm:px-5"
                      >
                        Discord
                      </Button>
                    </div>
                    <div className="mt-3.5 flex items-start gap-[23px]">
                      <div className="flex flex-1 flex-col gap-3.5">
                        <Button shape="round" color="undefined_undefined" className="w-full sm:px-5">
                          X
                        </Button>
                        <Button shape="round" color="undefined_undefined" className="w-full sm:px-5">
                          Telegram
                        </Button>
                      </div>
                      <Img src="images/img__gray_900_112x85.svg" alt="image_five" className="h-[112px] w-[30%]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* footer section */}
            <div className="flex w-[96%] flex-col items-start gap-[19px] md:w-full">
              {/* about section */}
              <div className="flex items-start justify-between gap-5 self-stretch md:flex-col">
                <div className="flex w-[57%] items-start justify-between gap-5 md:w-full md:flex-col">
                  <div className="flex w-[16%] flex-col items-center gap-2.5 md:w-full">
                    <Img src="images/img_group_35511.png" alt="image_six" className="h-[50px] w-[23%] object-cover" />
                    <Img
                      src="images/img_group_35512.png"
                      alt="image_seven"
                      className="h-[20px] w-full object-cover md:h-auto"
                    />
                  </div>
                  <div className="flex w-[79%] flex-col items-start md:w-full">
                    <Heading size="md" as="h6" className="text-center !text-gray-900_02">
                      Nüwa Digital Life Laboratory
                    </Heading>
                    <Text as="p" className="!text-gray-800_99">
                      A non-profit organization dedicated to research on digital life. Through interdisciplinary
                      research and social collaboration, we aim to advance digital life in creating value for humanity
                      and benefiting society.
                    </Text>
                  </div>
                </div>
                <div className="mt-8 flex gap-[18px]">
                  <Button size="sm" color="undefined_undefined" className="w-[39px] rounded-[7px]">
                    <Img src="images/img_airplane.svg" />
                  </Button>
                  <Button size="sm" color="undefined_undefined" className="w-[38px] rounded-[7px]">
                    <Img src="images/img_save.svg" />
                  </Button>
                  <Button size="sm" color="undefined_undefined" className="w-[39px] rounded-[7px]">
                    <Img src="images/img_user.svg" />
                  </Button>
                  <Button size="sm" color="undefined_undefined" className="w-[38px] rounded-[7px]">
                    <Img src="images/img_1_black_900_03.svg" />
                  </Button>
                </div>
              </div>
              <div className="h-px self-stretch bg-black-900_99" />
              <div className="flex items-start">
                <Img src="images/img_copyleft_2.svg" alt="copylefttwo_one" className="mt-0.5 h-[15px] w-[15px]" />
                <Text as="p" className="!font-pingfangtc !text-gray-900_05">
                  <span className="text-gray-900_05">Copyleft 2024&nbsp;</span>
                  <span className="font-semibold text-gray-900_05">Nüwa Digital Life Laboratory</span>
                </Text>
              </div>
            </div>
          </div>
        </div>
        <Img src="images/img_image_159_1x1375.png" alt="image159_one" className="h-px w-[95%] object-cover" />
      </div>
    </>
  );
}
