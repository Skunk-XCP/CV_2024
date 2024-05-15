import s from "./style.module.css";

const SkillCard = ({ skill }) => {
   const imagePath = `/assets/images/${skill.image}`;

   return (
      <div className={s.card} aria-label={skill.name}>
         <img className={s.logo} src={imagePath} alt={skill.name} />
      </div>
   );
};

export default SkillCard;
