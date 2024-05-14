import React, { useEffect, useState } from "react";
import Contact from "./components/Contact/Contact";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import SkillSet from "./components/SkillSet/SkillSet";
import Training from "./components/Training/Training";
import "./index.css";

function App() {
   const [scrollY, setScrollY] = useState(0);

   useEffect(() => {
      const handleScroll = () => {
         setScrollY(window.pageYOffset);
      };

      // Ajout de l'écouteur d'événement sur le défilement
      window.addEventListener("scroll", handleScroll);

      // Nettoyage de l'écouteur
      return () => {
         window.removeEventListener("scroll", handleScroll);
      };
   }, []);

   return (
      <>
         <Navbar />
         <Header scrollY={scrollY} />
         <SkillSet scrollY={scrollY} />
         <Training />
         <Contact />
      </>
   );
}

export default App;
