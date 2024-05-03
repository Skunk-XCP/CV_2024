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
            <div className={s.title_container}>
               <h1 className={s.header_title}>
                  {letters.map((letter, index) => (
                     <span
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
                        {letter}
                     </span>
                  ))}
               </h1>
               <p className={s.title_reflection}>
                  {letters.map((letter, index) => (
                     <span
                        key={index}
                        style={{
                           transform:
                              hoveredTitleIndex === index
                                 ? "translateY(15px) scaleY(-1)"
                                 : "scaleY(-1)",
                           opacity: 0.8,
                           marginRight: letter === " " ? "20px" : "0",
                        }}
                     >
                        {letter}
                     </span>
                  ))}
               </p>
            </div>
            <div className={s.subtitle_container}>
               <p className={s.header_subtitle}>
                  {subLetters.map((letter, index) => (
                     <span
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
                        {letter}
                     </span>
                  ))}
               </p>
               <div className={s.subtitle_reflection}>
                  {subLetters.map((letter, index) => (
                     <span
                        key={index}
                        style={{
                           transform:
                              hoveredSubtitleIndex === index
                                 ? "translateY(15px) scaleY(-1)"
                                 : "scaleY(-1)",
                           opacity: 0.8,
                           marginRight: letter === " " ? "20px" : "0",
                        }}
                     >
                        {letter}
                     </span>
                  ))}
               </div>
            </div>
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
