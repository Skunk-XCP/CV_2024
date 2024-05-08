import React, { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Skills from "./components/Skills/Skills";
import "./index.css";

function App() {
   const [scrollY, setScrollY] = useState(0);

   useEffect(() => {
      const handleScroll = () => {
         setScrollY(window.scrollY);
      };

      window.addEventListener("scroll", handleScroll);

      return () => {
         window.removeEventListener("scroll", handleScroll);
      };
   }, []);

   const skillsStartOffset = window.innerHeight;
   const skillsMoveRate = 1.5;

   const headerStyle = {
      transform: `scale(${Math.max(1 - scrollY / 5000, 0.95)})`,
      position: "fixed",
      top: 0,
      width: "100%",
      zIndex: 1,
   };

   const skillsStyle = {
      transform: `translateY(${Math.max(
         skillsStartOffset - scrollY * skillsMoveRate,
         0
      )}px)`,
      position: "absolute",
      top: "100vh",
      width: "100%",
      zIndex: 2,
   };

   return (
      <>
         <div style={{ position: "relative", height: "200vh" }}>
            <Header style={headerStyle} />
            <Navbar />
            <Skills style={skillsStyle} />
         </div>
      </>
   );
}

export default App;
