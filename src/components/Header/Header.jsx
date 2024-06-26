import { formatInTimeZone } from "date-fns-tz";

import React, { useEffect, useState } from "react";
import s from "./style.module.css";

const updateTime = (timeZone) => {
   const date = new Date();
   const formattedDate = formatInTimeZone(date, timeZone, "HH:mm");
   return formattedDate;
};

function Header() {
   const [hoveredTitleIndex, setHoveredTitleIndex] = useState(-1);
   const [hoveredSubtitleIndex, setHoveredSubtitleIndex] = useState(-1);

   const [time, setTime] = useState(updateTime("Europe/Paris"));

   // Mettre à jour l'heure toutes les secondes
   useEffect(() => {
      const intervalId = setInterval(() => {
         setTime(updateTime("Europe/Paris"));
      }, 1000);

      return () => clearInterval(intervalId);
   }, []);

   const headerTitle = "Donatien Rouzeirol";
   const letters = headerTitle.split("");

   const headerSubitle = "Développeur Frontend";
   const subLetters = headerSubitle.split("");

   const [scale, setScale] = useState(1);
   useEffect(() => {
      const handleScroll = () => {
         // Calcule la mise à l'échelle en fonction de la position de défilement
         const newScale = Math.max(0.95, 1 - window.scrollY / 5000);
         setScale(newScale);
      };

      // Ajoute un gestionnaire pour l'événement de défilement
      window.addEventListener("scroll", handleScroll);

      // Fonction de nettoyage pour retirer le gestionnaire d'événements
      return () => {
         window.removeEventListener("scroll", handleScroll);
      };
   }, []);

   return (
      <header className={s.header} style={{ transform: `scale(${scale})` }}>
         <section className={s.header_section}>
            <h1 className={s.header_title}>
               {letters.map((letter, index) => (
                  <div
                     className={s.title_letter}
                     key={index}
                     onMouseEnter={() => setHoveredTitleIndex(index)}
                     onMouseLeave={() => setHoveredTitleIndex(-1)}
                     style={{
                        transform:
                           hoveredTitleIndex === index
                              ? "translateY(-15px)"
                              : "none",
                        marginRight: letter === " " ? "20px" : "0",
                     }}
                     role="presentation"
                  >
                     <span className={s.letter}>{letter}</span>
                     <span
                        className={`${s.title_reflection} ${
                           hoveredTitleIndex === index ? s.reflectedHover : ""
                        }`}
                     >
                        {letter}
                     </span>
                  </div>
               ))}
            </h1>
            <h2 className={s.header_subtitle}>
               {subLetters.map((letter, index) => (
                  <div
                     className={s.subtitle_letter}
                     key={index}
                     onMouseEnter={() => setHoveredSubtitleIndex(index)}
                     onMouseLeave={() => setHoveredSubtitleIndex(-1)}
                     style={{
                        transform:
                           hoveredSubtitleIndex === index
                              ? "translateY(-15px)"
                              : "none",
                        marginRight: letter === " " ? "20px" : "0",
                     }}
                     role="presentation"
                  >
                     <span className={s.letter}>{letter}</span>
                     <span
                        className={`${s.subtitle_reflection} ${
                           hoveredSubtitleIndex === index
                              ? s.reflectedHover
                              : ""
                        }`}
                     >
                        {letter}
                     </span>
                  </div>
               ))}
            </h2>

            <div className={s.header_infos}>
               <div className={s.work_container}>
                  <p className={s.header_work}>
                     <span className={s.header_green_light}></span> Open to work
                  </p>
               </div>
               <div className={s.container_time}>
                  <p className={s.header_place}>Bordeaux, France</p>
                  <p className={s.header_time}>{time}</p>
               </div>
            </div>
         </section>
      </header>
   );
}

export default Header;
