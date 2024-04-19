import React, { useState } from "react";
import TypewriterText from "../../components/TypewriterText";


const TextDisplay = ({ lines }) => {
  const [currentLineIndex, setCurrentLineIndex] = useState(0);

  const handleAnimationComplete = () => {
    // 在动画完成后调用，准备显示下一行
    if (currentLineIndex < lines.length - 1) {
      setCurrentLineIndex(currentLineIndex + 1);
    }
  };

  return (
    <div>
      {lines.map((line, index) => (
        <div key={index} style={{ display: index === currentLineIndex ? 'block' : 'none' }}>
          <TypewriterText text={line} onFinishedTyping={handleAnimationComplete} />
        </div>
      ))}
    </div>
  );
};

export default TextDisplay;
