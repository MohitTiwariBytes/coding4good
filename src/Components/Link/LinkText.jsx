import React, { useEffect, useRef } from "react";
import "./LinkText.css";
import gsap from "gsap";

export default function Link({ text, to, id }) {
  const elRef = useRef(null);
  const lineRef = useRef(null);

  // Predefined list of colors
  const colors = [
    "#FFBABA", // Light pink
    "#FFD37D", // Light yellow
    "#EC5212", // Orange
    "#77C6B3", // Teal
    "#70A2E1", // Light blue
    "#EC5212", // Same orange (you can remove if unnecessary)
  ];

  useEffect(() => {
    const handleMouseEnter = () => {
      // Select a random color from the list
      const randomColor = colors[Math.floor(Math.random() * colors.length)];

      // Set the random color as the background of the line
      if (lineRef.current) {
        lineRef.current.style.backgroundColor = randomColor;
      }

      // GSAP animation for sliding line effect
      gsap.fromTo(
        lineRef.current,
        {
          left: "-100%",
        },
        {
          left: "0px",
          duration: 0.6,
          ease: "power3.inOut",
        }
      );
    };

    const handleMouseLeave = () => {
      gsap.fromTo(
        lineRef.current,
        {
          left: "0px",
        },
        {
          left: "100%",
          duration: 0.6,
          ease: "power3.inOut",
        }
      );
    };

    // Add hover event listeners
    if (elRef.current) {
      elRef.current.addEventListener("mouseenter", handleMouseEnter);
      elRef.current.addEventListener("mouseleave", handleMouseLeave);
    }

    // Cleanup event listeners on component unmount
    return () => {
      if (elRef.current) {
        elRef.current.removeEventListener("mouseenter", handleMouseEnter);
        elRef.current.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, [colors]);

  return (
    <div className="main-link-text">
      <div className="linkText">
        <div ref={elRef} className="underlineText">
          <a href={to}>{text}</a>
          <div ref={lineRef} className="line"></div>
        </div>
      </div>
    </div>
  );
}
