import React from "react";
import {
  SiVisualstudiocode,
  SiMysql,
  SiRstudio,
  SiMacos,
  SiPostman,
  SiVercel,
} from "react-icons/si";

function Toolstack() {
  const tools = [
    { name: "macOS", icon: <SiMacos /> },
    { name: "VS Code", icon: <SiVisualstudiocode /> },
    { name: "MySQL Workbench", icon: <SiMysql /> },
    { name: "RStudio", icon: <SiRstudio /> },
    { name: "Postman", icon: <SiPostman /> },
    { name: "Vercel", icon: <SiVercel /> },
  ];

  return (
    <div className="toolkit-items-wrap mt-3">
      {tools.map((tool, idx) => (
        <span key={idx} className="toolkit-chip">
          {tool.icon}
          <span>{tool.name}</span>
        </span>
      ))}
    </div>
  );
}

export default Toolstack;
