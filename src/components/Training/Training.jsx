import { useState } from "react";
import s from "./style.module.css";

function Training() {
   const training = [
      {
         title: "Développeur Frontend JavaScript React - OpenClassrooms",
         date: "Février 2023 - Février 2024",
         description:
            "Grâce à la formation en ligne, j'ai appris à développer des applications web de manière autonome. J'ai réalisé une dizaine de projets au cours de cette formation, sous la supervision d'un mentor que je voyais 1 fois par semaine pour une durée de 45 minutes. J'ai acquis des compétences en HTML, CSS, JavaScript, React, Redux, Node.js, MongoDB, Git, GitHub, Webpack, Babel, ESLint, Jest. Chaque projet a été validé par un examen de soutenance.",
         certificate:
            "Titre RNCP de niveau 6 (Bac+3/4) Développeur Frontend JavaScript React",
      },
      {
         title: "Développeur web et web mobile - La Piscine",
         date: "2022 (3,5 mois)",
         description:
            "Formation courte et intensive en présentiel, j'ai appris les bases du backend avec Symfony avec la création d'un CRUD et d'une base de données afin de pouvoir réaliser un projet de fin de formation que j'ai présenté à un jury composé de 2 développeurs. J'ai acquis des compétences en PHP, Symfony, MySQL, Git, GitHub",
         certificate:
            "Titre RNCP de niveau 5 (Bac+2) Développeur web et web mobile",
      },
   ];

   const [visibleIndices, setVisibleIndices] = useState(
      Array(training.length).fill(false)
   );

   const handleClick = (index) => {
      setVisibleIndices((prevVisibleIndices) => {
         const newVisibleIndices = [...prevVisibleIndices];
         newVisibleIndices[index] = !newVisibleIndices[index];
         return newVisibleIndices;
      });
   };

   return (
      <section id="training" className={s.container}>
         <h3 className={s.title}>Formations</h3>

         {training.map((item, index) => (
            <div
               key={index}
               className={`${s.card} ${
                  visibleIndices[index] ? s.swipeLeft : s.swipeRight
               }`}
            >
               <button
                  className={s.cardButton}
                  onClick={() => handleClick(index)}
                  aria-labelledby={`title-${index}`}
               >
                  <h4 id={`title-${index}`} className={s.cardTitle}>
                     {item.title}
                  </h4>
               </button>
               <div
                  className={`${s.cardBody} ${
                     visibleIndices[index] ? s.visible : ""
                  }`}
               >
                  <p className={s.trainingDate}>{item.date}</p>
                  <p className={s.trainingDescription}>{item.description}</p>
                  <p className={s.trainingCertificate}>{item.certificate}</p>
               </div>
            </div>
         ))}
      </section>
   );
}

export default Training;
