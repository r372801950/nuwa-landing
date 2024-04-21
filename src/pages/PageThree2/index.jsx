import React from "react";
import { Helmet } from "react-helmet";
import { Img, Text, Heading, Button } from "../../components";
import Header from "../../components/Header";

export default function PageThree() {
  return (
    <>
      <Helmet>
        <title>Gaming Projects - Digital Life Integration</title>
        <meta
          name="description"
          content="Discover Digital Life Game Builder for seamless integration of digital life into your games. Simplify your game development with our APIs."
        />
      </Helmet>

      {/* main layout section */}
      <div className="relative h-[900px] w-full bg-gradient pr-[31px] pt-[31px] shadow-xs sm:pr-5 sm:pt-5">
        {/* logo section */}
        <Img
          src="images/img_55_5556.png"
          alt="image"
          className="absolute bottom-[-195.00px] right-[16%] m-auto h-[817px] w-[63%] object-cover"
        />
        <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max w-full flex-col gap-[995px] md:gap-[746px] sm:gap-[497px]">
          <div className="w-full max-w-[1359px] md:p-5">
            {/* navigation section */}
            <Header className="flex items-center justify-between gap-5 md:flex-col" />

            {/* intro section */}
            <div className="mt-16 flex flex-col items-end">
              <div className="flex flex-wrap gap-[23px]">
                <Text size="xl" as="p" className="self-start !font-pangmenzhengdao !text-gray-900_03">
                  Laboratory{" "}
                </Text>
                <Text size="xl" as="p" className="!font-pangmenzhengdao !text-blue_gray-400">
                  Projects
                </Text>
              </div>
            </div>

            {/* features section */}
            <div className="mt-[26px] flex items-center justify-between gap-5 md:flex-col">
              <div className="flex w-[55%] flex-col items-start gap-[81px] md:w-full md:gap-[60px] sm:gap-10">
                <Img src="images/img_group_35696.svg" alt="image_two" className="h-[121px] w-[8%]" />
                <div className="ml-[13px] flex flex-col items-start md:ml-0">
                  <div className="flex flex-col items-start">
                    <Heading size="xl" as="h1" className="ml-2 !text-gray-900_03 md:ml-0">
                      Digital Life +{" "}
                    </Heading>
                    <Heading size="2xl" as="h2" className="relative mt-[-7px] !text-gray-900_03">
                      Gaming
                    </Heading>
                  </div>
                  <Button
                    size="md"
                    color="undefined_undefined"
                    rightIcon={<Img src="images/img_group_35697.svg" alt="Group 35697" className="h-[10px] w-[35px]" />}
                    className="relative ml-2 mt-[-18px] min-w-[231px] gap-[35px] rounded-[26px] font-semibold md:ml-0 sm:px-5"
                  >
                    Read
                  </Button>
                </div>
              </div>
              <div className="mb-[115px] flex w-[31%] flex-col gap-6 self-end md:w-full">
                <div className="rounded-[12px] bg-blue_gray-50 py-[11px] pl-[11px]">
                  <Heading size="lg" as="h3" className="my-[9px] !text-gray-900_04">
                    <span className="text-gray-900_04">Digital Life&nbsp;</span>
                    <span className="text-gray-900_04">Game Builder</span>
                  </Heading>
                </div>
                <div className="flex rounded-[12px] bg-blue_gray-50 p-[19px]">
                  <Text as="p" className="w-[95%] !text-gray-900">
                    Extremely easy to integrate any digital life to your games with simple APIs.
                  </Text>
                </div>
              </div>
            </div>
          </div>

          {/* footer image section */}
          <Img src="images/img_image_159.png" alt="image159_one" className="h-px w-[98%] object-cover" />
        </div>
      </div>
    </>
  );
}
