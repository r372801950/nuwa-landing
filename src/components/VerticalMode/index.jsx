import React from "react";
import Slider from "react-slick";
import './index.css'
import LaboratorySlick from "../../pages/PageThree/LaboratorySlick";

const contentStyle = [
  {
    style:{
      backgroundImage: "url('images/page3/page3bg1.png')",
      backgroundSize: "980px",
    },
    info:{
      title: 'Digital Life +',
      subTitle: 'Infra',
      field1:'BRC-1111',
      field2: "Digital Life Protocol",
      detail:'Abstraction Layer of Digital Life Technologies. Build, deploy & monetize digital life assets',
      btn:'Read',
    },
  },
  {
    style:{
      backgroundImage: "url('images/page3/page3bg2.png')",
      backgroundSize: "1084px",
    },
    info:{
      title: 'Digital Life +',
      subTitle: 'Infra',
      field1:'Digital Life Creation',
      field2: "Platform",
      detail:'Create and own your digital lives.',
      btn:'Create',
    },
  },
  {
    style:{
      backgroundImage: "url('images/page3/page3bg3.png')",
      backgroundSize: "980px",

    },
    info:{
      title: 'Digital Life +',
      subTitle: 'DeFi',
      field1:'Digital Life Exchange',
      field2: "",
      detail:'A secure, transparent, and decentralized marketplace for digital life.',
      btn:'Documentation',
    },
  },
  {
    style:{
      backgroundImage: "url('images/page3/page3bg4.png')",
      backgroundSize: "887px",
    },
    info:{
      title: 'Digital Life +',
      subTitle: 'Soulmat',
      field1:'role.ai',
      field2: "",
      detail:'Interact with all sorts of digital lives.',
      btn:'Read',
    },
  },
  {
    style:{
      backgroundImage: "url('images/page3/page3bg5.png')",
      backgroundSize: "888px",
      backgroundPosition:'center 256px'
    },
    info:{
      title: 'Digital Life +',
      subTitle: 'Gaming',
      field1:'Digital Life Game',
      field2: "Builder",
      detail:'Extremely easy to integrate any digital life to your games with simple APIs.',
      btn:'Read',
    },
  }
];

// 自定义箭头组件
const CustomArrow = ({ onClick, direction }) => (
  <div
    className={`custom-arrow custom-arrow-${direction}`}
    onClick={onClick}
  >
    {direction === 'left' ? '' : ''}
  </div>
);

const VerticalMode = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    swipeToSlide: true,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 3000,
    cssEase: "linear",
    prevArrow: <CustomArrow direction="left" />,
    nextArrow: <CustomArrow direction="right" />,
    beforeChange: function(currentSlide, nextSlide) {
      console.log("before change", currentSlide, nextSlide);
    },
    afterChange: function(currentSlide) {
      console.log("after change", currentSlide);
    }
  };
  return (
    <>
      <div className="slider-container verticalMode">
        <Slider {...settings}>
          {contentStyle.map((item,index)=>{
            return <div key={index}>
              <div className={`h-[100vh] w-full bg-bottom bg-no-repeat pt-[45px] md:h-auto md:pt-5`}
                style={item.style}>
                   {/*style={contentStyle[0].style}>*/}
                <LaboratorySlick info={item.info} />
              </div>
            </div>
          })}
        </Slider>
      </div>
    </>
  );
};

export default VerticalMode;
