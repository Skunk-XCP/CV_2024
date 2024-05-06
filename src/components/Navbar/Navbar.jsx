import React, { useState } from "react";
import s from "./style.module.css";

function Navbar() {
   const [isActive, setIsActive] = useState(false);

   const toggleMenu = () => {
      setIsActive(!isActive);
   };

   // Fonction pour fermer le menu quand un lien est cliqué
   const closeMenu = () => {
      setIsActive(false);
   };

   return (
      <nav className={s.navbar}>
         <ul className={isActive ? s.active : ""}>
            <li>
               <a href="#home" onClick={closeMenu}>
                  Accueil
               </a>
            </li>
            <li>
               <a href="#skillset" onClick={closeMenu}>
                  SkillSet
               </a>
            </li>
            <li>none 1</li>
            <li>none 2</li>
         </ul>
         <div
            className={`${s.menu_burger} ${isActive ? s.active : ""}`}
            onClick={toggleMenu}
         >
            <div></div>
            <div></div>
            <div></div>
         </div>
      </nav>
   );
}

export default Navbar;
