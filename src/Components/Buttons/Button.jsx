import React, { useEffect, useRef, useState } from "react";
import "./Button.css";
import gsap from "gsap";

const Button = ({
  text,
  onClick,
  buttonColor = "#000", // Default button color
  buttonHoverColor = "#555", // Default button hover color
  textColor = "#fff", // Default text color
  textHoverColor = "#fff", // Default text hover color
}) => {
  const buttonRef = useRef(null); // Reference to the button
  const squareRef = useRef(null); // Reference to the square (circle now)
  const [currentTextColor, setCurrentTextColor] = useState(textColor); // State for text color

  // Handle mouse enter: move the circle to the top
  const handleMouseEnter = () => {
    gsap.fromTo(
      squareRef.current,
      {
        top: "100%", // Move circle to the top of the button
      },
      {
        top: "-20px",
        duration: 0.3,
        ease: "power2.inOut",
      }
    );

    setCurrentTextColor(textHoverColor); // Change text color on hover
  };

  // Handle mouse leave: move the circle out of the button
  const handleMouseLeave = () => {
    gsap.fromTo(
      squareRef.current,
      {
        top: "-20px", // Move circle out of the button
      },
      {
        top: "-1000%", // Move circle out of the button
        duration: 0.9,
        ease: "power1.out",
      }
    );

    setCurrentTextColor(textColor); // Reset text color when mouse leaves
  };

  // Add event listeners for hover
  useEffect(() => {
    const buttonElement = buttonRef.current;

    buttonElement.addEventListener("mouseenter", handleMouseEnter);
    buttonElement.addEventListener("mouseleave", handleMouseLeave);

    // Cleanup event listeners when the component is unmounted
    return () => {
      buttonElement.removeEventListener("mouseenter", handleMouseEnter);
      buttonElement.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <button
      ref={buttonRef}
      className="button"
      onClick={onClick}
      style={{
        backgroundColor: buttonColor,
        color: currentTextColor, // Apply the dynamic text color here
        position: "relative", // Ensure button is positioned for the circle movement
      }}
    >
      <div
        ref={squareRef}
        className="squareSmallInner"
        style={{
          backgroundColor: buttonHoverColor, // Square's hover color
          position: "absolute", // Position circle absolutely within the button
          top: "100%", // Start off-screen
          width: "200px", // Width of the circle
          height: "200px", // Height of the circle
          borderRadius: "50%", // Make it a circle
        }}
      ></div>
      {text}
    </button>
  );
};

export default Button;
