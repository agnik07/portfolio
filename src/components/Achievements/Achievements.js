import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  FiAward,
  FiBookOpen,
  FiExternalLink,
  FiGithub,
  FiCode,
  FiStar,
  FiCheckCircle,
  FiZap
} from "react-icons/fi";

function Achievements() {
  const publicationData = [
    {
      id: "PUB-01",
      title: "AI-Driven Semantic Parsing & Automated Skill-Gap Analysis in Technical Workflows",
      venue: "International Conference / Peer-Reviewed Research Publication",
      year: "2024",
      status: "Published",
      abstract:
        "Engineered a novel NLP pipeline combining semantic vector embeddings and contextual skill discrepancy detection algorithms. The research evaluates resume taxonomy matching against real-time industry job specifications, optimizing recruitment matching accuracy by 34%.",
      tags: ["Artificial Intelligence", "NLP", "Semantic Vectors", "Machine Learning"],
      link: "https://github.com/agnik07/Skill-Booster-AI",
      paperPdf: null,
    },
  ];

  const hackathonsData = [
    {
      id: "HACK-01",
      title: "Smart India Hackathon (SIH)",
      event: "National Level Hackathon",
      achievement: "Top Finalist & Team Lead",
      date: "2024",
      projectName: "SnapClass / Smart Attendance Automation",
      description:
        "Built a dual-modal attendance tracking engine utilizing real-time face verification and localized audio capture to automate classroom logging with zero friction.",
      techStack: ["Streamlit", "Supabase", "FastAPI", "OpenCV", "Python"],
      demoLink: "https://snapclass-main-agnik.streamlit.app/",
      repoLink: "https://github.com/nilancy04/DigitalLocalShop",
    },
    {
      id: "HACK-02",
      title: "SRM HackInit & Tech Symphony",
      event: "Inter-College Flagship Hackathon",
      achievement: "1st Runner Up / Best AI Solution",
      date: "2024",
      projectName: "MusicMate - Contextual Audio Matchmaking",
      description:
        "Architected a real-time social platform matching users via Spotify listening telemetry, mood clustering, and WebSockets chat streaming.",
      techStack: ["React.js", "Node.js", "Supabase", "Socket.io", "Python ML"],
      demoLink: "https://musicmate-2okq.onrender.com/",
      repoLink: "https://github.com/agnik07/MusicMate",
    },
    {
      id: "HACK-03",
      title: "DevHack AI & Systems Sprint",
      event: "36-Hour Hackathon",
      achievement: "Top 5 Innovation Award",
      date: "2023",
      projectName: "HR Workflow Automation Engine",
      description:
        "Designed a visual canvas workflow engine for enterprise onboarding pipeline orchestration, automating candidate notifications and document verification.",
      techStack: ["React.js", "Tailwind CSS", "JavaScript", "Vercel"],
      demoLink: "https://hr-workflow-designer-beige.vercel.app/",
      repoLink: "https://github.com/agnik07/HR-Workflow-Designer",
    },
  ];

  const honorsData = [
    {
      title: "SRMIST Merit Scholar & Technical Lead",
      category: "Academic Distinction",
      issuer: "SRM Institute of Science and Technology",
      description: "Recognized for consistent academic excellence in Computer Science and active leadership in engineering student organizations.",
      icon: <FiStar />,
    },
    {
      title: "Open Source Contributor & Systems Specialist",
      category: "Community Impact",
      issuer: "GitHub / Developer Ecosystem",
      description: "Maintained multiple open-source repositories spanning AI chatbots, sentiment models, and backend developer utilities.",
      icon: <FiCode />,
    },
    {
      title: "Machine Learning & Cloud Architecture Certifications",
      category: "Professional Development",
      issuer: "Industry & Online Academies",
      description: "Completed specialized tracks in Supervised/Unsupervised ML, Relational Database Normalization, and Scalable Backend Systems.",
      icon: <FiCheckCircle />,
    },
  ];

  return (
    <main style={{ paddingTop: "140px", paddingBottom: "80px" }}>
      <Container>
        {/* Section Header */}
        <div className="section-num">01 // RECOGNITION & IMPACT</div>
        <h1 className="editorial-heading mb-3">
          Achievements, Research & Hackathons
        </h1>
        <p className="editorial-subheading mb-5">
          A showcase of peer-reviewed research, hackathon awards, open-source innovations, and academic milestones achieved throughout my engineering journey.
        </p>

        {/* ----------------- RESEARCH PUBLICATIONS ----------------- */}
        <div className="section-num mb-4">01.1 // RESEARCH & PUBLICATIONS</div>

        {publicationData.map((pub) => (
          <div key={pub.id} className="editorial-achievement-card mb-5">
            <div className="achievement-card-header">
              <div className="d-flex align-items-center gap-2">
                <span className="editorial-badge badge-accent">
                  <FiBookOpen style={{ marginRight: "4px" }} /> {pub.status}
                </span>
                <span className="achievement-meta-text">{pub.venue} · {pub.year}</span>
              </div>
              <span className="achievement-code">{pub.id}</span>
            </div>

            <h2 className="achievement-title mt-3 mb-3">{pub.title}</h2>
            <p className="achievement-abstract">{pub.abstract}</p>

            <div className="d-flex flex-wrap align-items-center justify-content-between gap-3 mt-4">
              <div className="project-tech-tags">
                {pub.tags.map((tag, idx) => (
                  <span key={idx} className="tech-tag">
                    {tag}
                  </span>
                ))}
              </div>

              {pub.link && (
                <a
                  href={pub.link}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-editorial-link"
                >
                  View Research Repository <FiExternalLink />
                </a>
              )}
            </div>
          </div>
        ))}

        <div className="editorial-divider"></div>

        {/* ----------------- HACKATHONS & COMPETITIONS ----------------- */}
        <div className="section-num mb-4">01.2 // HACKATHON INNOVATIONS</div>

        <Row className="g-4 mb-5">
          {hackathonsData.map((hack) => (
            <Col lg={4} md={6} key={hack.id}>
              <div className="editorial-hackathon-card">
                <div className="hackathon-card-top">
                  <div className="hackathon-badge">
                    <FiZap style={{ marginRight: "4px", color: "var(--accent-burgundy-light)" }} />
                    {hack.achievement}
                  </div>
                  <span className="hackathon-date">{hack.date}</span>
                </div>

                <h3 className="hackathon-event-name">{hack.title}</h3>
                <div className="hackathon-subname">{hack.event}</div>

                <div className="hackathon-project-box">
                  <div className="hackathon-project-title">
                    <FiAward style={{ marginRight: "6px", color: "var(--accent-burgundy-light)" }} />
                    {hack.projectName}
                  </div>
                  <p className="hackathon-project-desc">{hack.description}</p>
                </div>

                <div className="project-tech-tags mb-3">
                  {hack.techStack.map((tech, idx) => (
                    <span key={idx} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="d-flex align-items-center gap-3 mt-auto pt-2 border-top-subtle">
                  {hack.repoLink && (
                    <a
                      href={hack.repoLink}
                      target="_blank"
                      rel="noreferrer"
                      className="btn-editorial-link"
                      style={{ fontSize: "0.8rem" }}
                    >
                      <FiGithub /> Repo
                    </a>
                  )}
                  {hack.demoLink && (
                    <a
                      href={hack.demoLink}
                      target="_blank"
                      rel="noreferrer"
                      className="btn-editorial-link"
                      style={{ fontSize: "0.8rem", color: "var(--accent-burgundy-light)" }}
                    >
                      <FiExternalLink /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </Col>
          ))}
        </Row>

        <div className="editorial-divider"></div>

        {/* ----------------- HONORS & RECOGNITION ----------------- */}
        <div className="section-num mb-4">01.3 // HONORS & RECOGNITION</div>

        <Row className="g-4">
          {honorsData.map((honor, idx) => (
            <Col lg={4} md={6} key={idx}>
              <div className="editorial-honor-card">
                <div className="honor-icon-wrapper">{honor.icon}</div>
                <div className="honor-category">{honor.category}</div>
                <h4 className="honor-title">{honor.title}</h4>
                <div className="honor-issuer">{honor.issuer}</div>
                <p className="honor-desc">{honor.description}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </main>
  );
}

export default Achievements;
