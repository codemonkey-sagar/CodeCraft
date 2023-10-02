import Skill from "./Skill";
import skillsData from "../data";

export default function SkillList() {
  return (
    <div className="skill-list">
      {
        skillsData.map(skill => <Skill skill={skill.skill} level={skill.level} color={skill.color} key={skill.skill} />)
      }
    </div>
  )
}