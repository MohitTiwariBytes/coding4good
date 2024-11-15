import React from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import "./FirstSection.css";

gsap.registerPlugin(ScrollTrigger);

export default function FirstSection() {
  return (
    <div className="main-first-section-home">
      <div className="firstSectionHome"></div>
    </div>
  );
}
