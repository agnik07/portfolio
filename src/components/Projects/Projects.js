import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  FiArrowUpRight,
  FiGithub,
  FiExternalLink,
  FiArrowDown,
  FiFilter,
  FiCode,
  FiLayers
} from "react-icons/fi";

import airlineManagementSystem from "../../Assets/Projects/Airline_Management_System.png";
import digitalLocalShop from "../../Assets/DigitalLocalShop.png";
import skillgapai from "../../Assets/skillgapai.jpeg";
import hrworkflow from "../../Assets/hrworkflow.png";
import moodify from "../../Assets/moodify.png";
import sepmagent from "../../Assets/sepmagent.png";
import snapclass from "../../Assets/snapclass.png";
import musicmate from "../../Assets/musicmate.png";

function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");

  const categories = [
    "All",
    "Python / ML",
    "React / Frontend",
    "Node.js / APIs",
    "C++ / Algorithms",
  ];

  const projectsData = [
    {
      id: "01",
      title: "SnapClass",
      headline: "Real-Time Local Commerce & Distributed Inventory Platform",
      description:
        "A real time face and audio captured attendance tracker",
      techStack: ["streamlit", "supabase", "Fast APIs"],
      role: "Full-Stack Architecture & ALML Engineer",
      img: snapclass,
      ghLink: "https://github.com/nilancy04/DigitalLocalShop",
      demoLink: "https://snapclass-main-agnik.streamlit.app/",
      reverse: false,
    },
    {
      id: "02",
      title: "MusicMate",
      headline: "A social media platform for music lovers",
      description:
        "A social media platform for music lovers where people can find people based on their music taste.",
      techStack: ["react", "node", "supabase", "aiml", "socketio"],
      role: "Full-Stack Architecture & ALML Engineer",
      img: musicmate,
      ghLink: "https://github.com/agnik07/MusicMate",
      demoLink: "https://musicmate-2okq.onrender.com/",
      reverse: true,
    },
    {
      id: "03",
      title: "Digital Local Shop",
      headline: "Real-Time Local Commerce & Distributed Inventory Platform",
      description:
        "Bridges physical neighborhood retail with modern digital commerce by providing real-time store inventory feeds, dynamic price comparisons, and community-verified ratings to make local shopping transparent and efficient.",
      techStack: ["React.js", "MySQL", "Node.js", "REST APIs", "JavaScript"],
      role: "Full-Stack Architecture & Database Design",
      img: digitalLocalShop,
      ghLink: "https://github.com/nilancy04/DigitalLocalShop",
      demoLink: null,
      reverse: false,
    },
    {
      id: "04",
      title: "SkillGapAI",
      headline: "AI-Powered Resume Analysis & Skill Discrepancy Platform",
      description:
        "An intelligent career intelligence platform that parses professional resumes, performs semantic skill-gap detection against real-time job specifications, and generates personalized roadmap recommendations for engineers.",
      techStack: [
        "Python",
        "NLP / Tokenization",
        "Scikit-Learn",
        "Streamlit",
        "Machine Learning",
      ],
      role: "Machine Learning Pipeline & Semantic Parsing",
      img: skillgapai,
      ghLink: "https://github.com/agnik07/Skill-Booster-AI",
      demoLink: null,
      reverse: true,
    },
    {
      id: "05",
      title: "HR Workflow Designer",
      headline: "Enterprise Human Resource Automation & Lifecycle Platform",
      description:
        "A streamlined human resource operations management platform designed to automate employee recruitment pipelines, structured onboarding workflows, leave allocations, and centralized personnel record systems.",
      techStack: [
        "React.js",
        "Tailwind CSS",
        "JavaScript",
        "Vercel Cloud",
        "Workflow Automation",
      ],
      role: "Frontend Architecture & Workflow State Management",
      img: hrworkflow,
      ghLink: "https://github.com/agnik07/HR-Workflow-Designer",
      demoLink: "https://hr-workflow-designer-beige.vercel.app/",
      reverse: false,
    },
    {
      id: "06",
      title: "Moodify",
      headline: "Emotion-Driven Multimedia Recommendation Engine",
      description:
        "An intelligent mood-aware recommendation system that detects user emotional state through interactive natural language processing and delivers contextualized suggestions across music, cinema, literature, and activities.",
      techStack: [
        "Python",
        "Emotion Classification",
        "NLP",
        "Machine Learning",
        "Streamlit",
      ],
      role: "Sentiment Modeling & Recommendation Architecture",
      img: moodify,
      ghLink:
        "https://github.com/agnik07/moodify-an-emotion-based-recommendation-system",
      demoLink: null,
      reverse: true,
    },
    {
      id: "07",
      title: "Software Engineering AI Agent",
      headline: "Hybrid Domain-Classified Technical Intelligence System",
      description:
        "An autonomous engineering assistant featuring a two-stage hybrid AI pipeline: first filtering queries via domain classification models, then generating comprehensive architectural explanations, algorithms, code samples, and time-complexity breakdowns.",
      techStack: [
        "Python",
        "Hybrid ML Pipeline",
        "LLM Integration",
        "Streamlit Cloud",
        "NLP",
      ],
      role: "System Pipeline Design & Interactive Interface",
      img: sepmagent,
      ghLink: "https://github.com/agnik07/Software_Engineering_ChatBot",
      demoLink:
        "https://softwareengineeringchatbot-ljmntbbpy6izdg2zurbtuw.streamlit.app/",
      reverse: false,
    },
    {
      id: "08",
      title: "Airline Management System",
      headline: "Enterprise Flight Dispatch, Booking & Logistics Architecture",
      description:
        "A desktop software system engineered for commercial airline operations, managing transactional passenger seat bookings, dynamic schedule dispatching, crew logistics, and relational database integrity.",
      techStack: [
        "Java (OOP)",
        "MySQL Relational DB",
        "Swing UI",
        "Database Normalization",
      ],
      role: "Object-Oriented Design & Database Modeling",
      img: airlineManagementSystem,
      ghLink: "https://github.com/agnik07/Airline-Management-System",
      demoLink: null,
      reverse: true,
    },
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

  const filteredMiniProjects =
    activeFilter === "All"
      ? miniProjectsData
      : miniProjectsData.filter((p) => p.category === activeFilter);

  return (
    <main style={{ paddingTop: "140px", paddingBottom: "80px" }}>
      <Container>
        {/* Section Header with Top-Right Mini Projects Action */}
        <div className="d-flex justify-content-between align-items-md-center align-items-start flex-column flex-md-row gap-3 mb-4">
          <div>
            <div className="section-num">02 // SELECTED WORK</div>
            <h1 className="editorial-heading mb-0">
              Engineered Systems & Products
            </h1>
          </div>

          <a href="#mini-projects" className="btn-editorial-secondary" style={{ alignSelf: "flex-start" }}>
            <FiLayers style={{ marginRight: "6px" }} /> Explore Mini Projects <FiArrowDown style={{ marginLeft: "4px" }} />
          </a>
        </div>

        <div className="editorial-divider"></div>

        {/* ----------------- ALL FEATURED PROJECTS ----------------- */}
        <div className="section-num mb-4">ARCHIVE // FEATURED SYSTEMS</div>

        {projectsData.map((project) => (
          <article
            key={project.id}
            className={`project-editorial-row ${
              project.reverse ? "reverse" : ""
            }`}
          >
            {/* Visual Column */}
            <div className="project-img-container">
              <img
                src={project.img}
                alt={project.title}
                className="project-img-preview"
                loading="lazy"
              />
            </div>

            {/* Content Column */}
            <div className="project-info-container">
              <div className="project-index">
                {`${project.id} // SYSTEM`}
              </div>

              <h2 className="project-title">{project.title}</h2>

              <div
                style={{
                  fontFamily: "var(--font-sans)",
                  color: "var(--text-primary)",
                  fontWeight: 500,
                  fontSize: "0.95rem",
                  marginBottom: "0.75rem",
                }}
              >
                {project.headline}
              </div>

              <p className="project-pitch">{project.description}</p>

              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.75rem",
                  color: "var(--text-muted)",
                  marginBottom: "1rem",
                }}
              >
                ROLE: {project.role}
              </div>

              <div className="project-tech-tags">
                {project.techStack.map((tech, idx) => (
                  <span key={idx} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="project-actions">
                <a
                  href={project.ghLink}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-editorial-link"
                >
                  <FiGithub /> Repository <FiArrowUpRight />
                </a>

                {project.demoLink && (
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-editorial-link"
                    style={{ color: "var(--accent-burgundy-light)" }}
                  >
                    <FiExternalLink /> Live Deployment <FiArrowUpRight />
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}

        <div className="editorial-divider" id="mini-projects" style={{ marginTop: "80px", marginBottom: "60px" }}></div>

        {/* ----------------- MINI PROJECTS SECTION INSIDE WORK ----------------- */}
        <div className="d-flex justify-content-between align-items-md-center align-items-start flex-column flex-md-row gap-3 mb-4">
          <div>
            <div className="section-num">02.2 // UTILITY CODE & TOOLKITS</div>
            <h2 className="editorial-heading mb-0">
              Mini Projects & Technical Experiments
            </h2>
          </div>
          <span className="editorial-badge badge-accent">
            <FiCode style={{ marginRight: "4px" }} /> Tech Stack Showcase
          </span>
        </div>

        <p className="editorial-subheading mb-4">
          A collection of focused micro-apps, developer scripts, algorithmic implementations, and backend utilities built across my tech stack.
        </p>

        {/* Filter Bar */}
        <div className="mini-project-filter-wrap mb-4">
          <span className="filter-label">
            <FiFilter style={{ marginRight: "6px" }} /> Filter Stack:
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

        {/* Mini Projects Grid */}
        <Row className="g-4">
          {filteredMiniProjects.map((project) => (
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
                      <FiGithub /> Repository <FiArrowUpRight style={{ fontSize: "0.75rem" }} />
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

export default Projects;