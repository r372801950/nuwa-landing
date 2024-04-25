import React, { useState, useEffect } from "react";

const TypewriterText = ({ lines, speed = 200, onFinishedTyping }) => {
  const [displayedText, setDisplayedText] = useState([]);
  const [currentLine, setCurrentLine] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);

  // 用于在 lines 变化时重置组件状态
  useEffect(() => {
    setDisplayedText([]);
    setCurrentLine(0);
    setCurrentIndex(0);
  }, [lines]);

  useEffect(() => {
    if (currentLine < lines.length) {
      const timer = setTimeout(() => {
        const line = lines[currentLine];
        const updatedText = displayedText.slice();
        if (currentIndex < line.length) {
          updatedText[currentLine] = (updatedText[currentLine] || '') + line[currentIndex];
          setCurrentIndex(currentIndex + 1);
        } else {
          if (currentLine === lines.length - 1) {
            // 如果是最后一行且所有字符都显示了
            if (currentIndex === line.length) {
              const timeout=setTimeout(()=>{
                onFinishedTyping && onFinishedTyping(); // 调用回调函数
                clearTimeout(timeout)
              },1500)
              return// 直接返回，阻止setDisplayedText(updatedText)执行，防止重复执行useEffect
            }
          } else {
            updatedText.push(''); // 为下一行做准备
            setCurrentLine(currentLine + 1);
            setCurrentIndex(0);
          }
        }
        setDisplayedText(updatedText);
      }, speed);

      return () => clearTimeout(timer);
    }
  }, [displayedText, currentIndex, currentLine, lines, speed]);

  return (
    <div className={`w-[1100px] text-5xl font-pangmenzhengdao text-[113px]`} style={{ color: "transparent", WebkitTextStroke: "2px white", textStroke: "2px white" }}>
      {displayedText.map((line, index) => (
        <p key={index} className="relative">
          {line}
          {index === displayedText.length - 1 && <span className="blinking-cursor" style={{ WebkitTextStroke: "0", color: "white" }}>|</span>}
        </p>
      ))}
    </div>
  );
};

export default TypewriterText;
