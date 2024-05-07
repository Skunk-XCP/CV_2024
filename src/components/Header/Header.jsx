import React, { useState } from "react";
import backgroundImg from "../../assets/images/bordeaux-place-bourse.jpeg";
import s from "./style.module.css";

function Header() {
   const [hoveredTitleIndex, setHoveredTitleIndex] = useState(-1);
   const [hoveredSubtitleIndex, setHoveredSubtitleIndex] = useState(-1);

   // Fonction pour mettre à jour l'heure
   const updateTime = () => {
      const date = new Date();
      const hours = date.getHours();
      const minutes = date.getMinutes();
      return `${hours}:${minutes < 10 ? "0" + minutes : minutes}`;
   };

   const [time, setTime] = useState(updateTime());

   // Mettre à jour l'heure toutes les secondes
   setInterval(() => {
      setTime(updateTime());
   }, 1000);

   const headerStyle = {
      backgroundImage: `url(${backgroundImg})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      position: "relative",
   };

   const headerTitle = "Donatien Rouzeirol";
   const letters = headerTitle.split("");

   const headerSubitle = "Développeur Frontend";
   const subLetters = headerSubitle.split("");

   return (
      <header>
         <section id="home" style={headerStyle} className={s.header_section}>
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
