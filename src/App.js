import React, { useEffect, useState } from "react";
import Contact from "./components/Contact/Contact";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Skills from "./components/Skills/Skills";
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
         <Header scrollY={scrollY} />
         <Skills scrollY={scrollY} />
         <Navbar />
         <Contact />
      </>
   );
}

export default App;
