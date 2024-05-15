import { motion, useAnimation } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import logoX from "../../assets/logos/X_logo_2023.svg";
import logoGithub from "../../assets/logos/github-mark-white.svg";
import logoLinkedin from "../../assets/logos/linkedin.svg";
import s from "./style.module.css";

function Contact() {
   const controls = useAnimation();
   const rootRef = useRef();
   const [animationPlayed, setAnimationPlayed] = useState(false); // Nouvel état pour suivre si l'animation a été jouée

   const socialMedia = [
      { id: 1, name: "X", logo: logoX, url: "https://twitter.com/Donatien__R" },
      {
         id: 2,
         name: "Github",
         logo: logoGithub,
         url: "https://github.com/Skunk-XCP",
      },
      {
         id: 3,
         name: "Linkedin",
         logo: logoLinkedin,
         url: "https://www.linkedin.com/in/donatien-rouzeirol-0ab070207/",
      },
   ];

   useEffect(() => {
      const currentRef = rootRef.current;
      const observer = new IntersectionObserver(
         (entries) => {
            entries.forEach((entry) => {
               if (entry.isIntersecting && !animationPlayed) {
                  controls.start((i) => ({
                     scale: [0.3, 1],
                     opacity: 1,
                     transition: { duration: 0.5, delay: i * 0.2 },
                  }));
                  setAnimationPlayed(true);
               }
            });
         },
         { threshold: 0.5 }
      );

      if (rootRef.current) {
         observer.observe(rootRef.current);
      }

      return () => {
         if (currentRef) {
            observer.unobserve(currentRef);
         }
      };
   }, [controls, animationPlayed]);

   return (
      <section
         ref={rootRef}
         id="contact"
         className={s.section}
         aria-labelledby="contact-title"
      >
         <div className={s.title_container}>
            <h3 id="contact-title" className={s.title}>
               Let's Connect
            </h3>
         </div>

         <div className={s.mail_container}>
            <a className={s.email} href="mailto:donatien.rouzeirol@gmail.com">
               donatien.rouzeirol@gmail.com
            </a>
         </div>

         <div className={s.social_media_container}>
            {socialMedia.map((media, index) => (
               <motion.div
                  key={media.id}
                  className={s.social_media_card}
                  initial={{ scale: 0, opacity: 0 }}
                  custom={index}
                  animate={controls}
               >
                  <a
                     href={media.url}
                     target="_blank"
                     rel="noopener noreferrer"
                     aria-label={media.name}
                  >
                     <img
                        src={media.logo}
                        alt={media.name}
                        className={s.social_media_logo}
                     />
                  </a>
               </motion.div>
            ))}
         </div>
      </section>
   );
}

export default Contact;
