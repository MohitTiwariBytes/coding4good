import React from "react";
import "./Home.css";
import FirstSection from "./FirstSection/FirstSection";
import { ReactLenis } from "lenis/react";
import Navbar from "../../Components/Navbar/Navbar";

export default function Home() {
  return (
    <ReactLenis options={{ autoRaf: false }}>
      <div className="main-home-page">
        <Navbar></Navbar>
        <FirstSection></FirstSection>
      </div>
    </ReactLenis>
  );
}
