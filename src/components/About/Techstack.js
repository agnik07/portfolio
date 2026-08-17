import React from "react";
import {
  DiJavascript1,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
} from "react-icons/di";
import {
  SiRedis,
  SiFirebase,
  SiMysql,
  SiPostgresql,
  SiPandas,
  SiNumpy,
  SiScikitlearn,
  SiDocker,
} from "react-icons/si";
import { CgCPlusPlus } from "react-icons/cg";
import { TbBrandGolang } from "react-icons/tb";

function Techstack() {
  const skillCategories = [
    {
      title: "Core Languages",
      skills: [
        { name: "Python", icon: <DiPython /> },
        { name: "JavaScript (ES6+)", icon: <DiJavascript1 /> },
        { name: "C++", icon: <CgCPlusPlus /> },
        { name: "Java", icon: <DiJava /> },
        { name: "Go (Golang)", icon: <TbBrandGolang /> },
        { name: "SQL", icon: <SiMysql /> },
      ],
    },
    {
      title: "AI & Data Science",
      skills: [
        { name: "Machine Learning", icon: <DiPython /> },
        { name: "Natural Language Processing", icon: <DiPython /> },
        { name: "Scikit-Learn", icon: <SiScikitlearn /> },
        { name: "Pandas", icon: <SiPandas /> },
        { name: "NumPy", icon: <SiNumpy /> },
      ],
    },
    {
      title: "Backend & Cloud Systems",
      skills: [
        { name: "Node.js", icon: <DiNodejs /> },
        { name: "Express.js", icon: <DiNodejs /> },
        { name: "RESTful APIs", icon: <DiJavascript1 /> },
        { name: "Firebase", icon: <SiFirebase /> },
        { name: "Redis", icon: <SiRedis /> },
      ],
    },
    {
      title: "Databases & Infrastructure",
      skills: [
        { name: "MySQL", icon: <SiMysql /> },
        { name: "PostgreSQL", icon: <SiPostgresql /> },
        { name: "MongoDB", icon: <DiMongodb /> },
        { name: "Docker", icon: <SiDocker /> },
        { name: "Git & GitHub", icon: <DiGit /> },
      ],
    },
  ];

  return (
    <div className="toolkit-category-grid">
      {skillCategories.map((cat, idx) => (
        <div key={idx} className="toolkit-group">
          <div className="toolkit-group-header">{cat.title}</div>
          <div className="toolkit-items-wrap">
            {cat.skills.map((skill, sIdx) => (
              <span key={sIdx} className="toolkit-chip">
                {skill.icon}
                <span>{skill.name}</span>
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Techstack;
