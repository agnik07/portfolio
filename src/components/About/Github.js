import React from "react";
import GitHubCalendar from "react-github-calendar";
import { FiGithub, FiArrowUpRight } from "react-icons/fi";

function Github() {
  return (
    <div className="github-calendar-wrap">
      <div className="d-flex justify-content-between align-items-center w-100 mb-4 flex-wrap gap-2">
        <div>
          <h3 className="pillar-title mb-1" style={{ fontSize: "1.25rem" }}>
            Code Contributions & Activity
          </h3>
          <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem", color: "var(--text-muted)" }}>
            GITHUB // @agnik07
          </div>
        </div>

        <a
          href="https://github.com/agnik07"
          target="_blank"
          rel="noreferrer"
          className="btn-editorial-link"
          style={{ fontSize: "0.78rem" }}
        >
          <FiGithub /> Open GitHub Profile <FiArrowUpRight />
        </a>
      </div>

      <div style={{ width: "100%", overflowX: "auto", display: "flex", justifyContent: "center" }}>
        <GitHubCalendar
          username="agnik07"
          blockSize={14}
          blockMargin={4}
          color="#a03c5a"
          fontSize={14}
        />
      </div>
    </div>
  );
}

export default Github;
