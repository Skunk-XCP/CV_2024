import React from "react";
import s from "./style.module.css";

function Navbar() {
   return (
      <nav className={s.navbar}>
         <ul>
            <li>
               <a href="#home">Accueil</a>
            </li>
            <li>
               <a href="#skillset">SkillSet</a>
            </li>
            <li>none 1</li>
            <li>none 2</li>
         </ul>
      </nav>
   );
}

export default Navbar;
