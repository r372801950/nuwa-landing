import React from "react";
import { Helmet } from "react-helmet";
import { Img, Text, Heading } from "../../components";

export default function PageFour() {
  return (
    <>
      <Helmet>
        <title>Creation Platform - Innovating with Nuwa Digital Life Labs</title>
        <meta
          name="description"
          content="Join Nuwa Digital Life Labs in our journey towards progressive decentralization. Explore our open source community and dedication to transparency, openness, and modularity."
        />
      </Helmet>
      <div className="flex w-full flex-col items-center bg-gradient1 pt-[27px] shadow-xs sm:pt-5">
        {/* header section */}
        <header className="container-xs flex items-start justify-between gap-5 md:flex-col md:p-5">
          <Img
            src="images/img_group_35684_white_a700_01.png"
            alt="image"
            className="h-[19px] w-[9%] object-cover md:w-full"
          />
          <div className="mb-[11px] flex w-[38%] items-center justify-between gap-5 md:w-full sm:flex-col">
            <ul className="flex flex-wrap">
              <li>
                <a href="#">
                  <Heading as="h6" className="text-center !text-white-A700_01">
                    Creation Platform
                  </Heading>
                </a>
              </li>
              <li>
                <a href="#" className="ml-[45px]">
                  <Heading as="h6" className="text-center !text-white-A700_01">
                    Role.Ai
                  </Heading>
                </a>
              </li>
              <li>
                <a href="#" className="ml-[46px]">
                  <Heading as="h6" className="text-center !text-white-A700_01">
                    BRC-1111{" "}
                  </Heading>
                </a>
              </li>
            </ul>
            <div className="flex items-center gap-2 rounded-[12px] border border-solid border-white-A700_01 pl-3">
              <Text size="s" as="p" className="h-[17px] !font-sfpro tracking-[0.14px] !text-white-A700_01">
                EN
              </Text>
              <div className="flex rounded-bl-[12px] rounded-tl-[12px] bg-white-A700_01 p-1.5">
                <Text size="s" as="p" className="my-1 !font-sfpro tracking-[0.14px] !text-blue_gray-900_01">
                  CN
                </Text>
              </div>
            </div>
          </div>
        </header>

        {/* hero section */}
        <div className="relative mx-auto h-[900px] w-full max-w-[1373px] md:h-auto md:p-5">
          <div className="flex w-full items-start justify-center md:flex-col">
            <div className="relative mt-[91px] h-[182px] w-[35%] md:h-auto md:w-full">
              <Text size="3xl" as="p" className="!font-pangmenzhengdao !text-white-A700_01">
                <span className="text-white-A700_01">
                  <>
                    Nuwa Digital
                    <br />
                  </>
                </span>
                <span className="text-white-A700_01">Life Labs</span>
              </Text>
              <div className="absolute bottom-[15.00px] left-[3.00px] m-auto flex w-[75%] items-start gap-3.5 sm:relative sm:flex-col">
                <div className="h-[2px] flex-1 bg-white-A700_01 sm:self-stretch" />
                <div className="h-[12px] w-[12px] rounded-md bg-white-A700_01" />
              </div>
            </div>
            <div className="relative z-[1] ml-[-62px] flex h-[900px] flex-1 items-start justify-center bg-[url(/public/images/img_group_909.png)] bg-cover bg-no-repeat md:ml-0 md:h-auto md:self-stretch">
              <Img
                src="images/img_group_35513.png"
                alt="image_one"
                className="mb-[119px] h-[780px] w-[43%] object-cover"
              />
            </div>
          </div>
          <Text size="lg" as="p" className="absolute bottom-[30%] left-[6.00px] m-auto w-[33%] !text-white-A700_01">
            <>
              Dedicate into the global open source community.
              <br />
              Progressive decentralization practitioner.
            </>
          </Text>
          <Text size="lg" as="p" className="absolute bottom-[16%] left-[6.00px] m-auto w-[34%] !text-white-A700_01">
            <>
              Committed to transparency, openness, modularity,
              <br /> and community ownership.
            </>
          </Text>
          <Text size="lg" as="p" className="absolute bottom-1/4 left-[7.00px] m-auto !text-white-A700_01">
            /Open Source
          </Text>
          <div className="absolute bottom-[37%] left-[7.00px] m-auto h-px w-[19px] bg-white-A700_01" />
        </div>

        {/* footer image section */}
        <Img src="images/img_image_159.png" alt="image159_one" className="mt-[849px] h-px w-[95%] object-cover" />
      </div>
    </>
  );
}
