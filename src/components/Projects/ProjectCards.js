import React from "react";
import { FiGithub, FiExternalLink, FiArrowUpRight } from "react-icons/fi";

function ProjectCards(props) {
  return (
    <div className="focus-pillar-card" style={{ height: "100%", display: "flex", flexDirection: "column" }}>
      <div style={{ width: "100%", height: "200px", overflow: "hidden", marginBottom: "1.2rem", borderRadius: "2px", border: "1px solid var(--border-subtle)" }}>
        <img
          src={props.imgPath}
          alt={props.title}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </div>
      
      <div className="pillar-num">{props.category || "PROJECT"}</div>
      <h3 className="pillar-title" style={{ fontSize: "1.2rem" }}>{props.title}</h3>
      <p className="pillar-desc" style={{ flexGrow: 1, fontSize: "0.88rem" }}>
        {props.description}
      </p>

      <div style={{ display: "flex", gap: "1rem", marginTop: "1.2rem", paddingTop: "1rem", borderTop: "1px solid var(--border-subtle)" }}>
        <a
          href={props.ghLink}
          target="_blank"
          rel="noreferrer"
          className="btn-editorial-link"
          style={{ fontSize: "0.78rem" }}
        >
          <FiGithub /> Code <FiArrowUpRight />
        </a>
        {props.demoLink && (
          <a
            href={props.demoLink}
            target="_blank"
            rel="noreferrer"
            className="btn-editorial-link"
            style={{ fontSize: "0.78rem", color: "var(--accent-burgundy-light)" }}
          >
            <FiExternalLink /> Demo <FiArrowUpRight />
          </a>
        )}
      </div>
    </div>
  );
}

export default ProjectCards;
