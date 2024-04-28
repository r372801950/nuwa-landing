import React from "react";
import { Helmet } from "react-helmet";
import { Img, Text, Button, Heading } from "../../components";
import VerticalMode from "../../components/VerticalMode";
import CommonHeader from "../../components/CommonHeader";
export default function PageFour() {
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
          className="absolute bottom-0 left-0 right-0 top-0 m-auto h-[100vh] w-full bg-cover bg-no-repeat pt-[95px] md:h-auto md:pt-5"
        >
          {/* hero section */}
          <div className="flex flex-col items-center">
            {/* navigation menu section */}
            {/*<CommonHeader />*/}

            {/* image gallery section */}
            <div className="marquee w-[178%] fixed left-0 bottom-0 flex min-w-full overflow-hidden whitespace-nowrap">

            </div>

          </div>
        </div>

        <VerticalMode />
      </div>
    </>
  );
}
