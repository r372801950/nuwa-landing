import React from "react";
import { Typewriter, Cursor } from "react-simple-typewriter";

const TypingEffect = () => {
  const style = {
    whiteSpace: "pre-wrap",/* 使用 pre-wrap 保持格式 */
    fontFamily: 'PangMenZhengDao, sans-serif',
    fontSize: "110px",
    fontWeight: 400,
    color: "#FFFFFF",
    WebkitTextStroke: "4px #666666",
    textStroke: "4px #666666"
  };
  return (
    <div style={style}>
      <Typewriter
        words={[
          "#work for us",
          "#being a good \n accompany",
          "#being everywhere",
          "#unprecedented \n creativity",
          "#true freedom",
          "Reshape\n" + "human civilization",
          "Reshape\n" + "human lifestyle",
          "Reshape\n" + "EVERYTHING"
        ]}
        loop={0}
        cursor
        cursorStyle="|"
        typeSpeed={70}
        deleteSpeed={50}
        delaySpeed={1000}
      />
    </div>
  );
};

export default TypingEffect;
