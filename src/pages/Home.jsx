import React, { useRef, useState } from "react";
import PageOne from "pages/PageOne";
import PageTwo from "pages/PageTwo";
import PageFour from "pages/PageFour";
import PageThree from "pages/PageThree";
import PageFive from "pages/PageFive";

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

  const handleWheel = (e) => {
    // todo
    // 加个防抖或节流
    const isScrollingUp = e.deltaY < 0;
    const isScrollingDown = e.deltaY > 0;
    const isLastPage = currentPage === pages.length - 1;

    if (isLastPage && isScrollingUp) {
      const { scrollTop } = fifthPageContainerRef.current;
      console.log("第五页滚动位置：", scrollTop);
      if (scrollTop !== 0) {
        // 如果是最后一页且向上滚动到顶部，不执行任何操作
        return;
      }
    }

    if (isScrollingDown && currentPage < pages.length - 1) {
      // 向下滚动且不是最后一页，切换到下一页
      setCurrentPage((prevPage) => prevPage + 1);
    } else if (isScrollingUp && currentPage > 0) {
      // 向上滚动且不是第一页，切换到上一页
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  return (
    <div className="fixed inset-0 overflow-hidden" onWheel={handleWheel}>
      <div className="transition-transform duration-500 ease-in-out"
           style={{ transform: `translateY(-${currentPage * 100}vh)` }}>
        {pages.map((page, index) => (
          <div key={index} className="w-full h-screen flex justify-center items-center text-4xl">
            {index === 4 ? (
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
