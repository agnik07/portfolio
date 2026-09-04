import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FiGithub, FiExternalLink, FiFilter } from "react-icons/fi";

function MiniProjects() {
  const [activeFilter, setActiveFilter] = useState("All");

  const categories = [
    "All",
    "Python / ML",
    "React / Frontend",
    "Node.js / APIs",
    "C++ / Algorithms",
  ];

  const miniProjectsData = [
    {
      id: "MP-01",
      title: "CLI Resume Skill Parser",
      category: "Python / ML",
      description:
        "A lightweight Python command-line utility that extracts key technical entities, skills, and experience metrics from PDF resumes using Regex and NLTK semantic tokenization.",
      techStack: ["Python", "NLTK", "PyPDF2", "CLI"],
      features: [
        "PDF text extraction & cleanup",
        "Entity recognition for 50+ tech stacks",
        "Exportable JSON breakdown",
      ],
      ghLink: "https://github.com/agnik07/Skill-Booster-AI",
      demoLink: null,
      badge: "Python Utility",
    },
    {
      id: "MP-02",
      title: "Real-Time Weather & Air Quality Micro-App",
      category: "React / Frontend",
      description:
        "A responsive micro-frontend app displaying real-time weather metrics, UV index, and air pollution forecasts with dynamic background visual cues.",
      techStack: ["React.js", "OpenWeather API", "CSS Modules"],
      features: [
        "Geolocation auto-detection",
        "5-day forecast visualization",
        "AQI indicator dashboard",
      ],
      ghLink: "https://github.com/agnik07",
      demoLink: null,
      badge: "React App",
    },
    {
      id: "MP-03",
      title: "FastAPI Sentiment Analysis Microservice",
      category: "Python / ML",
      description:
        "A lightweight RESTful microservice built with FastAPI and HuggingFace transformers to classify customer review sentiment with high accuracy.",
      techStack: ["Python", "FastAPI", "Transformers", "Uvicorn"],
      features: [
        "Sub-50ms inference latency",
        "Swagger OpenAPI documentation",
        "Dockerized deployment setup",
      ],
      ghLink: "https://github.com/agnik07/moodify-an-emotion-based-recommendation-system",
      demoLink: null,
      badge: "AI Microservice",
    },
    {
      id: "MP-04",
      title: "Express Rate-Limiting & Auth Middleware",
      category: "Node.js / APIs",
      description:
        "A decoupled Express.js authentication and sliding-window rate-limiting middleware package using Redis token bucket algorithms.",
      techStack: ["Node.js", "Express", "Redis", "JWT"],
      features: [
        "Token bucket rate limiting",
        "JWT signature verification",
        "Configurable route protection",
      ],
      ghLink: "https://github.com/agnik07",
      demoLink: null,
      badge: "Backend Package",
    },
    {
      id: "MP-05",
      title: "Pathfinding & Graph Algorithm Visualizer",
      category: "C++ / Algorithms",
      description:
        "An algorithmic suite implementing Dijkstra's, A* Search, and BFS/DFS graph traversals with interactive step-by-step execution metrics.",
      techStack: ["C++", "STL", "Graph Theory", "Algorithms"],
      features: [
        "Dijkstra & A* pathfinding",
        "Grid obstacle generator",
        "Time & space complexity analysis",
      ],
      ghLink: "https://github.com/agnik07",
      demoLink: null,
      badge: "C++ Engine",
    },
    {
      id: "MP-06",
      title: "Markdown Portfolio & Resume Generator",
      category: "Python / ML",
      description:
        "A Python script that takes structured YAML configuration files and automatically generates static Markdown portfolios and formatted HTML resumes.",
      techStack: ["Python", "Jinja2", "YAML", "HTML/CSS"],
      features: [
        "YAML schema validation",
        "Jinja2 template rendering",
        "Export to HTML & PDF",
      ],
      ghLink: "https://github.com/agnik07",
      demoLink: null,
      badge: "Automation Tool",
    },
    {
      id: "MP-07",
      title: "Interactive Emotion Soundboard",
      category: "React / Frontend",
      description:
        "A mini web app providing ambient focus soundscapes tailored to user mood states with custom Web Audio API synthesizer synthesis.",
      techStack: ["React.js", "Web Audio API", "JavaScript"],
      features: [
        "Binaural beats & ambient loops",
        "Custom volume equalizer",
        "Zero external audio dependencies",
      ],
      ghLink: "https://github.com/agnik07/MusicMate",
      demoLink: null,
      badge: "Audio Web App",
    },
    {
      id: "MP-08",
      title: "SQL Query Performance Analyzer",
      category: "Node.js / APIs",
      description:
        "A developer utility tool that analyzes MySQL and PostgreSQL EXPLAIN queries to identify missing indexes and expensive table scans.",
      techStack: ["Node.js", "MySQL", "PostgreSQL", "SQL Parser"],
      features: [
        "Query execution plan parser",
        "Index optimization recommendations",
        "Colorized terminal CLI output",
      ],
      ghLink: "https://github.com/agnik07",
      demoLink: null,
      badge: "Database Utility",
    },
  ];

  const filteredProjects =
    activeFilter === "All"
      ? miniProjectsData
      : miniProjectsData.filter((p) => p.category === activeFilter);

  return (
    <main style={{ paddingTop: "140px", paddingBottom: "80px" }}>
      <Container>
        {/* Section Header */}
        <div className="section-num">02 // EXPERIMENTAL & UTILITY CODE</div>
        <h1 className="editorial-heading mb-3">
          Mini Projects & Technical Toolkits
        </h1>
        <p className="editorial-subheading mb-4">
          A collection of focused micro-apps, developer scripts, algorithmic implementations, and backend utilities built across diverse technical stacks.
        </p>

        {/* ----------------- FILTER BAR ----------------- */}
        <div className="mini-project-filter-wrap mb-5">
          <span className="filter-label">
            <FiFilter style={{ marginRight: "6px" }} /> Filter by Tech Stack:
          </span>
          <div className="filter-chips-list">
            {categories.map((cat, idx) => (
              <button
                key={idx}
                className={`filter-chip-btn ${
                  activeFilter === cat ? "active" : ""
                }`}
                onClick={() => setActiveFilter(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* ----------------- PROJECTS GRID ----------------- */}
        <Row className="g-4 mb-5">
          {filteredProjects.map((project) => (
            <Col lg={4} md={6} key={project.id}>
              <div className="editorial-mini-card">
                <div className="mini-card-header">
                  <span className="editorial-badge">{project.badge}</span>
                  <span className="mini-project-id">{project.id}</span>
                </div>

                <h3 className="mini-card-title mt-3">{project.title}</h3>
                <p className="mini-card-desc">{project.description}</p>

                <div className="mini-features-list mb-3">
                  {project.features.map((feat, fIdx) => (
                    <div key={fIdx} className="mini-feature-item">
                      <span className="feature-dot"></span>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                <div className="project-tech-tags mb-3">
                  {project.techStack.map((tech, tIdx) => (
                    <span key={tIdx} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="d-flex align-items-center gap-3 mt-auto pt-3 border-top-subtle">
                  {project.ghLink && (
                    <a
                      href={project.ghLink}
                      target="_blank"
                      rel="noreferrer"
                      className="btn-editorial-link"
                      style={{ fontSize: "0.85rem" }}
                    >
                      <FiGithub /> Repository <FiExternalLink style={{ fontSize: "0.75rem" }} />
                    </a>
                  )}
                  {project.demoLink && (
                    <a
                      href={project.demoLink}
                      target="_blank"
                      rel="noreferrer"
                      className="btn-editorial-link"
                      style={{ fontSize: "0.85rem", color: "var(--accent-burgundy-light)" }}
                    >
                      Live Demo <FiExternalLink style={{ fontSize: "0.75rem" }} />
                    </a>
                  )}
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </main>
  );
}

export default MiniProjects;
