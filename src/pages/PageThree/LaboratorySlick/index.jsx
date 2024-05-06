import React from "react";
import { Helmet } from "react-helmet";
import { Img, Text, Heading, Button } from "../../../components";

export default function LaboratorySlick({info}) {
  return (
    <>
      {/* main layout section */}
      <div className="relative h-[100vh] w-full">
        {/* intro section */}
        <div className="absolute top-[100px] right-[5%]">
          <div className="flex flex-wrap gap-[23px]">
            <Text size="xl" as="p" className="self-start !font-pangmenzhengdao !text-gray-900_03">
              Laboratory{" "}
            </Text>
            <Text size="xl" as="p" className="!font-pangmenzhengdao !text-blue_gray-400">
              Projects
            </Text>
          </div>
        </div>

        <div className="absolute bottom-[140px] w-full">
          {/* features section */}
          <div className="flex items-center justify-between pl-[70px] pr-[30px]">
            <div className="flex w-[55%] flex-col items-start gap-[81px] md:w-full md:gap-[60px] sm:gap-10">
              <div className="flex flex-col items-start md:ml-0">
                <div className="flex flex-col items-start">
                  <Heading size="xl" as="h1" className="ml-2 !text-gray-900_03 md:ml-0">
                    Digital Life +{" "}
                  </Heading>
                  <Heading size="2xl" as="h2" className="relative translate-y-[-25px] mt-[-7px] !text-gray-900_03">
                    {info.subTitle}
                  </Heading>
                </div>
                <Button
                  size="md"
                  color="gray_900_01"
                  rightIcon={<Img src="images/img_group_35697.svg" alt="Group 35697" className="h-[10px] w-[35px]" />}
                  className="relative ml-2 mt-[-18px] min-w-[231px] gap-[35px] rounded-[26px] font-semibold hover:bg-yellow-800 hover:text-white-A700_01 hover:border-yellow-800"
                  onClick={() => window.open(info.link, '_blank')}
                >
                  {info.btn}
                </Button>
              </div>
            </div>
            <div className="mb-[94px] flex w-[31%] flex-col gap-6 self-end md:w-full">
              <div className="rounded-[12px] bg-blue_gray-50 py-[11px] pl-[11px]">
                <Heading size="lg" as="h3" className="my-[9px] !text-gray-900_04">
                  <span className="text-gray-900_04">{info.field1}&nbsp;</span>
                  <span className="text-gray-900_04">{info.field2}</span>
                </Heading>
              </div>
              <div className="flex rounded-[12px] bg-blue_gray-50 p-[19px]">
                <Text as="p" className="w-[95%] !text-gray-900">
                  {info.detail}
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
