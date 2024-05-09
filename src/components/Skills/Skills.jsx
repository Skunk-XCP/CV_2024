import React, { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";
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
      <section id="skillset" className={s.container}>
         <h2 className={s.title}>Skillset</h2>
         <Swiper
            className="swiper_container"
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            loop={true}
            onSlideChange={handleSlideChange}
            coverflowEffect={{
               rotate: 0,
               stretch: 0,
               depth: 100,
               modifier: 2.5,
            }}
            pagination={{ el: ".swiper-pagination", clickable: true }}
            navigation={{
               nextEl: ".swiper-button-next",
               prevEl: ".swiper-button-prev",
               clickable: true,
            }}
            modules={[EffectCoverflow, Pagination, Navigation]}
         >
            {SkillsData.map((skill) => (
               <SwiperSlide key={skill.id}>
                  <SkillCard skill={skill} />
               </SwiperSlide>
            ))}
            <div className="slider-controler">
               <div className="swiper-button-prev slider-arrow">
                  <ion-icon name="arrow-back-outline"></ion-icon>
               </div>
               <div className="swiper-button-next slider-arrow">
                  <ion-icon name="arrow-forward-outline"></ion-icon>
               </div>
               <div className="swiper-pagination"></div>
            </div>
         </Swiper>

         {currentText && (
            <div className={s.description}>
               <p>{currentText}</p>
            </div>
         )}
      </section>
   );
};

export default Skills;
