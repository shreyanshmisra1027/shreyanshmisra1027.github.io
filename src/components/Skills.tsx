import './Skills.css';
import { skillCategories } from '../data/skills';

export default function Skills() {
  return (
    <section id="skills" className="section skills">
      <div className="container">
        <div className="skills-header">
          <h2 className="skills-heading">Skills & Technologies</h2>
          <p className="skills-subtitle">
            A collection of tools, languages, and technologies I work with
          </p>
        </div>

        <div className="skills-grid">
          {skillCategories.map((category) => (
            <SkillCategory key={category.category} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
}

interface SkillCategoryProps {
  category: typeof skillCategories[0];
}

function SkillCategory({ category }: SkillCategoryProps) {
  return (
    <div className="skill-category">
      <h3 className="skill-category-title">{category.category}</h3>
      <div className="skill-list">
        {category.skills.map((skill) => (
          <SkillTag key={skill.name} skill={skill} />
        ))}
      </div>
    </div>
  );
}

interface SkillTagProps {
  skill: typeof skillCategories[0]['skills'][0];
}

function SkillTag({ skill }: SkillTagProps) {
  return (
    <div className="skill-tag">
      <span className="skill-name">{skill.name}</span>
      <span className={`skill-level skill-level-${skill.level}`}>
        {skill.level}
      </span>
    </div>
  );
}
