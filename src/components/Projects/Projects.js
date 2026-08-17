import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FiArrowUpRight, FiGithub, FiExternalLink, FiCheckCircle } from "react-icons/fi";

import airlineManagementSystem from "../../Assets/Projects/Airline_Management_System.png";
import digitalLocalShop from "../../Assets/DigitalLocalShop.png";
import skillgapai from "../../Assets/skillgapai.jpeg";
import hrworkflow from "../../Assets/hrworkflow.png";
import moodify from "../../Assets/moodify.png";
import sepmagent from "../../Assets/sepmagent.png";

function Projects() {
  const projectsData = [
    {
      id: "01",
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
      id: "02",
      title: "SkillGapAI",
      headline: "AI-Powered Resume Analysis & Skill Discrepancy Platform",
      description:
        "An intelligent career intelligence platform that parses professional resumes, performs semantic skill-gap detection against real-time job specifications, and generates personalized roadmap recommendations for engineers.",
      techStack: ["Python", "NLP / Tokenization", "Scikit-Learn", "Streamlit", "Machine Learning"],
      role: "Machine Learning Pipeline & Semantic Parsing",
      img: skillgapai,
      ghLink: "https://github.com/agnik07/Skill-Booster-AI",
      demoLink: null,
      reverse: true,
    },
    {
      id: "03",
      title: "HR Workflow Designer",
      headline: "Enterprise Human Resource Automation & Lifecycle Platform",
      description:
        "A streamlined human resource operations management platform designed to automate employee recruitment pipelines, structured onboarding workflows, leave allocations, and centralized personnel record systems.",
      techStack: ["React.js", "Tailwind CSS", "JavaScript", "Vercel Cloud", "Workflow Automation"],
      role: "Frontend Architecture & Workflow State Management",
      img: hrworkflow,
      ghLink: "https://github.com/agnik07/HR-Workflow-Designer",
      demoLink: "https://hr-workflow-designer-beige.vercel.app/",
      reverse: false,
    },
    {
      id: "04",
      title: "Moodify",
      headline: "Emotion-Driven Multimedia Recommendation Engine",
      description:
        "An intelligent mood-aware recommendation system that detects user emotional state through interactive natural language processing and delivers contextualized suggestions across music, cinema, literature, and activities.",
      techStack: ["Python", "Emotion Classification", "NLP", "Machine Learning", "Streamlit"],
      role: "Sentiment Modeling & Recommendation Architecture",
      img: moodify,
      ghLink: "https://github.com/agnik07/moodify-an-emotion-based-recommendation-system",
      demoLink: null,
      reverse: true,
    },
    {
      id: "05",
      title: "Software Engineering AI Agent",
      headline: "Hybrid Domain-Classified Technical Intelligence System",
      description:
        "An autonomous engineering assistant featuring a two-stage hybrid AI pipeline: first filtering queries via domain classification models, then generating comprehensive architectural explanations, algorithms, code samples, and time-complexity breakdowns.",
      techStack: ["Python", "Hybrid ML Pipeline", "LLM Integration", "Streamlit Cloud", "NLP"],
      role: "System Pipeline Design & Interactive Interface",
      img: sepmagent,
      ghLink: "https://github.com/agnik07/Software_Engineering_ChatBot",
      demoLink: "https://softwareengineeringchatbot-ljmntbbpy6izdg2zurbtuw.streamlit.app/",
      reverse: false,
    },
    {
      id: "06",
      title: "Airline Management System",
      headline: "Enterprise Flight Dispatch, Booking & Logistics Architecture",
      description:
        "A desktop software system engineered for commercial airline operations, managing transactional passenger seat bookings, dynamic schedule dispatching, crew logistics, and relational database integrity.",
      techStack: ["Java (OOP)", "MySQL Relational DB", "Swing UI", "Database Normalization"],
      role: "Object-Oriented Design & Database Modeling",
      img: airlineManagementSystem,
      ghLink: "https://github.com/agnik07/Airline-Management-System",
      demoLink: null,
      reverse: true,
    },
  ];

  return (
    <main style={{ paddingTop: "140px", paddingBottom: "80px" }}>
      <Container>
        
        {/* Section Header */}
        <div className="section-num">02 // SELECTED WORK</div>
        <h1 className="editorial-heading mb-3">Engineered Systems & Products</h1>
        <p className="editorial-subheading mb-5">
          A curated collection of full-stack platforms, machine learning pipelines, and software systems built with algorithmic precision.
        </p>

        {/* ----------------- FEATURED PROJECT SPOTLIGHT ----------------- */}
        <div className="featured-project-card mb-5">
          <div className="eyebrow" style={{ marginBottom: "1.2rem" }}>
            FEATURED CASE STUDY · AI & CAREER INTELLIGENCE
          </div>
          
          <Row className="align-items-center">
            <Col lg={7} md={12}>
              <div className="featured-card-img-wrap">
                <img
                  src={skillgapai}
                  alt="SkillGapAI Case Study"
                  className="featured-card-img"
                />
              </div>
            </Col>

            <Col lg={5} md={12} className="mt-4 mt-lg-0 ps-lg-4">
              <div className="project-index">FEATURED // 01</div>
              <h2 className="editorial-heading" style={{ fontSize: "2.2rem", marginBottom: "0.8rem" }}>
                SkillGapAI
              </h2>
              <p style={{ color: "var(--text-primary)", fontWeight: 500, fontSize: "1rem", marginBottom: "1rem" }}>
                AI-Driven Resume Analysis & Intelligent Gap Detection
              </p>
              <p style={{ color: "var(--text-secondary)", fontSize: "0.94rem", lineHeight: "1.7", marginBottom: "1.5rem" }}>
                Engineered to solve mismatch in technical recruitment by extracting key competencies from unstructured resumes, benchmarking them against target job descriptions, and recommending concrete learning paths.
              </p>

              {/* Key Highlights */}
              <div style={{ marginBottom: "1.5rem", display: "flex", flexDirection: "column", gap: "6px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "0.88rem", color: "var(--text-secondary)" }}>
                  <FiCheckCircle style={{ color: "var(--accent-burgundy-light)" }} /> Natural language tokenization & entity extraction
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "0.88rem", color: "var(--text-secondary)" }}>
                  <FiCheckCircle style={{ color: "var(--accent-burgundy-light)" }} /> Automated discrepancy scoring & recommendation index
                </div>
              </div>

              {/* Tech stack */}
              <div className="project-tech-tags">
                <span className="tech-tag">Python</span>
                <span className="tech-tag">NLP</span>
                <span className="tech-tag">Scikit-Learn</span>
                <span className="tech-tag">Streamlit</span>
              </div>

              {/* Actions */}
              <div className="d-flex gap-3 align-items-center">
                <a
                  href="https://github.com/agnik07/Skill-Booster-AI"
                  target="_blank"
                  rel="noreferrer"
                  className="btn-editorial-primary"
                >
                  <FiGithub /> View Source Code
                </a>
              </div>
            </Col>
          </Row>
        </div>

        <div className="editorial-divider"></div>

        {/* ----------------- EDITORIAL CASE STUDY ARCHIVE ----------------- */}
        <div className="section-num mb-4">ARCHIVE // ALL PROJECTS</div>

        {projectsData.map((project) => (
          <article
            key={project.id}
            className={`project-editorial-row ${project.reverse ? "reverse" : ""}`}
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
              <div className="project-index">{`${project.id} // SYSTEM`}</div>
              <h2 className="project-title">{project.title}</h2>
              <div style={{ fontFamily: "var(--font-sans)", color: "var(--text-primary)", fontWeight: 500, fontSize: "0.95rem", marginBottom: "0.75rem" }}>
                {project.headline}
              </div>
              <p className="project-pitch">{project.description}</p>

              <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem", color: "var(--text-muted)", marginBottom: "1rem" }}>
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

      </Container>
    </main>
  );
}

export default Projects;
