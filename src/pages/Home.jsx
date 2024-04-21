import React, { useState } from "react";
import PageOne from "pages/PageOne";
import PageTwo from "pages/PageTwo";
import PageThree from "pages/PageThree2";
import PageFour from "pages/PageThree";
import PageFive from "pages/PageFive";
const Home = () => {

  const [currentPage, setCurrentPage] = useState(0);
  const pages = [
    <PageOne/>,
    <PageTwo/>,
    <PageThree/>,
    <PageFour/>,
    <PageFive/>,
  ];

  const handleWheel = (e) => {
    // todo
    // 加个防抖或节流
    if (e.deltaY > 0 && currentPage < pages.length - 1) {
      setCurrentPage(currentPage + 1);
    } else if (e.deltaY < 0 && currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div onWheel={handleWheel} className="fixed inset-0 overflow-hidden">
      <div className="transition-transform duration-500 ease-in-out" style={{ transform: `translateY(-${currentPage * 100}vh)` }}>
        {pages.map((page, index) => (
          <div key={index} className="w-full h-screen flex justify-center items-center text-4xl">
            {page}
          </div>
        ))}
      </div>
    </div>
  );

};
export default Home;
