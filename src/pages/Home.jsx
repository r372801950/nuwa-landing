import React, { useEffect, useRef, useState } from "react";
import PageOne from "pages/PageOne";
import PageTwo from "pages/PageTwo";
import PageFour from "pages/PageFour";
import PageThree from "pages/PageThree";
import PageFive from "pages/PageFive";
import CommonHeader from "../components/CommonHeader";
import { debounce, throttle } from "lodash"; // 导入 lodash 的 throttle 函数

const Home = () => {

  const [currentPage, setCurrentPage] = useState(0);
  const pages = [
    <PageOne />,
    <PageTwo />,
    <PageThree />,
    <PageFour />,
    <PageFive />
  ];

  const fifthPageContainerRef = useRef(null);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);

  // 结合节流和防抖，设置节流的时间间隔为100毫秒，防抖的延迟为300毫秒
  const handleWheelThrottled = throttle((e) => {
    const isScrollingUp = e.deltaY < 0;
    const isScrollingDown = e.deltaY > 0;
    const isLastPage = currentPage === pages.length - 1;


    if (isLastPage) {//监听滚动
      const { scrollTop } = fifthPageContainerRef.current;
      console.log("第五页滚动位置2222：", scrollTop);
      setIsHeaderVisible(scrollTop <= 24)
    }

    if (isLastPage && isScrollingUp) {
      const { scrollTop } = fifthPageContainerRef.current;
      console.log("第五页滚动位置：", scrollTop);
      if (scrollTop !== 0) {
        return;
      }
    }

    if (isScrollingDown && currentPage < pages.length - 1) {
      setCurrentPage((prevPage) => prevPage + 1);
    } else if (isScrollingUp && currentPage > 0) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  }, 100); // 设置节流的时间间隔为100毫秒

  // 使用防抖函数包装节流函数，设置防抖的延迟为300毫秒
  const handleWheelDebounced = debounce(handleWheelThrottled, 300);

  return (
    <div className="fixed inset-0 overflow-hidden" onWheel={handleWheelDebounced}>
      <div className="w-full fixed top-[45px] left-0 z-10 items-center">
        {isHeaderVisible?<CommonHeader />:null}
      </div>
      <div className="transition-transform duration-500 ease-in-out"
           style={{ transform: `translateY(-${currentPage * 100}vh)` }}>
        {pages.map((page, index) => (
          <div key={index} className="w-full h-screen flex justify-center items-center text-4xl">
            {index === pages.length-1 ? (//最后一页
              <div ref={fifthPageContainerRef} className="w-full h-full overflow-y-auto">
                {page}
              </div>
            ) : (
              page
            )}
          </div>
        ))}
      </div>
    </div>
  );

};
export default Home;
