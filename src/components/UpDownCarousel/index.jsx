import React from "react";
import { Carousel } from "antd";
// todo antd可以卸载了
const contentStyle = [
  {
    style:{
      backgroundImage: "url('images/page3/page3bg1.png')"
    }
  },
  {
    style:{
      backgroundImage: "url('images/page3/page3bg2.png')"
    }
  },
  {
    style:{
      backgroundImage: "url('images/page3/page3bg3.png')"
    }
  },
  {
    style:{
      backgroundImage: "url('images/page3/page3bg4.png')"
    }
  },
  {
    style:{
      backgroundImage: "url('images/page3/page3bg5.png')"
    }
  }
];

const UpDownCarousel = () => {
  return (
    <>
      {/*autoplay*/}
      <Carousel dotPosition="left" autoplaySpeed={2000}>

        {contentStyle.map(item=>{
          return <div>
            <div className="h-[100vh] w-full bg-[length:980px_787px] bg-bottom bg-no-repeat pt-[45px] md:h-auto md:pt-5"
                 style={item.style}>

            </div>
          </div>
        })}

        {/*<div>

        </div>

        <div>
          <div className="h-[100vh] w-full bg-[length:980px_787px] bg-bottom bg-no-repeat pt-[45px] md:h-auto md:pt-5"
               style={{ backgroundImage: "url('/images/page3/page3bg1.png')" }}>

          </div>
        </div>

        <div>
          <div className="h-[100vh] w-full bg-[length:980px_787px] bg-bottom bg-no-repeat pt-[45px] md:h-auto md:pt-5"
               style={{ backgroundImage: "url('/images/page3/page3bg1.png')" }}>

          </div>
        </div>

        <div>
          <div className="h-[100vh] w-full bg-[length:980px_787px] bg-bottom bg-no-repeat pt-[45px] md:h-auto md:pt-5"
               style={{ backgroundImage: "url('/images/page3/page3bg1.png')" }}>

          </div>
        </div>

        <div>
          <div className="h-[100vh] w-full bg-[length:980px_787px] bg-bottom bg-no-repeat pt-[45px] md:h-auto md:pt-5"
               style={{ backgroundImage: "url('/images/page3/page3bg1.png')" }}>

          </div>
        </div>*/}
       {/* <div style={contentStyle} className="h-[100vh] bg-[length:980px_787px] bg-bottom bg-no-repeat">
          <h3>5</h3>
        </div>*/}
      </Carousel>
    </>
  );
};

export default UpDownCarousel;
