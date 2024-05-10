import { motion } from "framer-motion";
import React from "react";
import logoX from "../../assets/logos/X_logo_2023.svg";
import logoGithub from "../../assets/logos/github-mark-white.svg";
import logoLinkedin from "../../assets/logos/linkedin.svg";
import s from "./style.module.css";

function Contact() {
   const socialMedia = [
      { id: 1, name: "X", logo: logoX, url: "" },
      { id: 2, name: "Github", logo: logoGithub, url: "" },
      { id: 3, name: "Linkedin", logo: logoLinkedin, url: "" },
   ];

   return (
      <section id="contact" className={s.section}>
         <h3 className={s.title}>Let's Connect</h3>

         <a className={s.email} href="donatienr@hotmail.fr">
            donatienr@hotmail.fr
         </a>

         <div className={s.social_media_container}>
            {socialMedia.map((media) => (
               <motion.div
                  key={media.id}
                  className={s.social_media_card}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: [0.3, 1.1, 1], opacity: 1 }}
                  transition={{ duration: 0.5, times: [0, 0.75, 1] }}
               >
                  <a href={media.url} target="_blank" rel="noopener noreferrer">
                     <img src={media.logo} alt={media.name} />
                  </a>
               </motion.div>
            ))}
         </div>
      </section>
   );
}

export default Contact;
