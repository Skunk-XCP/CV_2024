import React, { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import SkillsData from "../../data/skills.json";
import SkillCard from "../SkillCard/SkillCard";
import s from "./style.module.css";

const Skills = () => {
   const [activeIndex, setActiveIndex] = useState(0);
   const [currentText, setCurrentText] = useState("");

   // Mettre à jour l'index actif et le texte correspondant
   const handleSlideChange = (swiper) => {
      const newIndex = swiper.realIndex;
      setActiveIndex(newIndex);
      setCurrentText(SkillsData[newIndex].text);
   };

   useEffect(() => {
      // Mettre à jour le texte actuel lors du premier rendu
      if (SkillsData.length > 0) {
         setCurrentText(SkillsData[activeIndex].text);
      }
   }, [activeIndex]);

   return (
      <section className={s.section}>
         <h2>Skillset</h2>
         <div className={s.container}>
            <Swiper
               effect={"coverflow"}
               grabCursor={true}
               centeredSlides={true}
               slidesPerView={"auto"}
               loop={true}
               onSlideChange={handleSlideChange}
               coverflowEffect={{
                  rotate: 50,
                  stretch: 0,
                  depth: 400,
                  modifier: 1,
                  slideShadows: true,
               }}
               pagination={true}
               modules={[EffectCoverflow, Pagination]}
            >
               {SkillsData.map((skill) => (
                  <SwiperSlide key={skill.id}>
                     <SkillCard skill={skill} />
                  </SwiperSlide>
               ))}
            </Swiper>
         </div>

         {currentText && (
            <div className={s.description}>
               <p>{currentText}</p>
            </div>
         )}
      </section>
   );
};

export default Skills;
