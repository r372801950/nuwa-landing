import React from "react";
import { Helmet } from "react-helmet";
import CommonHeader from "../../components/CommonHeader";
import './index.css'

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
      <div className="relative h-[100vh] w-full bg-gradient pr-[31px] pt-[31px] shadow-xs sm:pr-5 sm:pt-5 page4 overflow-hidden">
        {/*<CommonHeader />*/}
        <div></div>

        <div>
          <div className="absolute !font-pangmenzhengdao title4">
            Nuwa Digital
            Life Labs
          </div>
          <div className="absolute info4">
            <p>
              Dedicate into the global open source community.
              Progressive decentralization practitioner.
            </p>
            <p>
              /Open Source
            </p>
            <p>
              Committed to transparency, openness, modularity,
              and community ownership.
            </p>
          </div>

          <div className="content4 absolute top-0 right-[20px] h-full flex justify-center items-center">
            <div className="contentBg4 w-full bg-cover h-full absolute top-0 right-0"></div>
            <img src="images/page4/img8.png" alt="nuwa" />
          </div>

        </div>

      </div>
    </>
  );
}
