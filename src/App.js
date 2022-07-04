import React, { useEffect, useState, useRef } from "react";
import { ThemeProvider } from "styled-components";
import { useOnClickOutside } from "./hooks";
import { GlobalStyles } from "./global";
import { theme } from "./theme";
import { Home,Home2, Home3, Home4 , Home5 , Home6 , Home7 ,AboutUs, HeteroMetaUnity, News, Contact, Team, Partners, BreathingDots } from "./components";
import FocusLock from "react-focus-lock";
import ReactPlayer from "react-player";
import { VideoScroll } from "react-video-scroll";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion/dist/framer-motion";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Timeline from "./components/Timeline";

const Animated = () => {
  const location = useLocation();
  return (
    <AnimatePresence exitBeforeEnter>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home/> }></Route>
        <Route path="/2" element={<Home2/> }></Route>
        <Route path="/3" element={<Home3/> }></Route>
        <Route path="/4" element={<Home4/> }></Route>
        <Route path="/5" element={<Home5/> }></Route>
        <Route path="/6" element={<Home6/> }></Route>
        <Route path="/7" element={<Home7/> }></Route>
        {/* <Route path="/about" element={<AboutUs/>}></Route>
        <Route path="/heterometa" element={<HeteroMetaUnity/>}></Route>
        <Route path="/news" element={<News/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path="/team" element={<Team/>}></Route>
        <Route path="/time" element={<Timeline/>}></Route>
        <Route path="/partners" element={<Partners/>}></Route>
        <Route path="/heterometa" element={<HeteroMetaUnity/>}></Route>
        <Route path="/dots" element={<BreathingDots/>}></Route> */}
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  return (
    <>
      <Router>
        <Animated />
      </Router>
    </>
  );
}

export default App;
