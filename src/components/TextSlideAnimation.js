import React, { useState, useEffect } from "react";
import "./TextSlideAnimation.css";

const texts = ["First Text", "Second Text", "Third Text"];

const TextSlideAnimation = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }, 2000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="text-slide-container">
      {texts.map((text, index) => (
        <div
          key={text}
          className={`text-slide-item ${
            currentIndex === index ? "show" : "hide"
          }`}
        >
          {text}
        </div>
      ))}
    </div>
  );
};

export default TextSlideAnimation;
