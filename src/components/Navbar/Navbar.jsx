import React, { useState } from "react";
import s from "./style.module.css";

function Navbar() {
   const [isActive, setIsActive] = useState(false);

   const toggleMenu = () => {
      setIsActive(!isActive);
   };

   const closeMenu = () => {
      setIsActive(false);
   };

   return (
      <nav className={s.navbar}>
         <ul className={isActive ? s.active : ""}>
            <li>
               <a href="#skillset" onClick={closeMenu}>
                  SkillSet
               </a>
            </li>
            <li>
               <a href="#training" onClick={closeMenu}>
                  Formation
               </a>
            </li>
            <li>
               <a href="#contact" onClick={closeMenu}>
                  Contact
               </a>
            </li>
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
