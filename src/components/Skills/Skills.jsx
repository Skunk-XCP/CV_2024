import React, { useState } from "react";
import "swiper/css"; // assure-toi que cette ligne est dans ton fichier principal ou spécifique de composant
import { Swiper, SwiperSlide } from "swiper/react";
import SkillsData from "../../data/skills.json";
import SkillCard from "../SkillCard/SkillCard";
import s from "./style.module.css";

const Skills = () => {
   const [activeIndex, setActiveIndex] = useState(0);

   return (
      <section className={s.section}>
         <h2>Skillset</h2>
         <div className={s.container}>
            <Swiper
               spaceBetween={50}
               slidesPerView={3}
               centeredSlides={true}
               loop={true}
               grabCursor={true}
               onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
               breakpoints={{
                  768: {
                     slidesPerView: 1,
                  },
                  1024: {
                     slidesPerView: 3,
                  },
               }}
            >
               {SkillsData.map((skill) => (
                  <SwiperSlide key={skill.id}>
                     <SkillCard skill={skill} />
                  </SwiperSlide>
               ))}
            </Swiper>
         </div>

         {SkillsData.length > 0 && (
            <div className={s.description}>
               <p>{SkillsData[activeIndex].text}</p>
            </div>
         )}
      </section>
   );
};

export default Skills;
