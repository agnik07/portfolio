import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FiDownload, FiExternalLink, FiFileText, FiCheckCircle } from "react-icons/fi";
import pdf from "../../Assets/Agnik_Dutta_SRM_.pdf";

function ResumeNew() {
  return (
    <main style={{ paddingTop: "140px", paddingBottom: "90px" }}>
      <Container>
        
        {/* Header Section */}
        <div className="section-num">03 // CURRICULUM VITAE</div>
        <h1 className="editorial-heading mb-3">Professional Resume</h1>
        <p className="editorial-subheading mb-4">
          Detailed overview of academic credentials, engineering proficiencies, project experience, and technical competencies.
        </p>

        {/* Action Buttons */}
        <div className="d-flex flex-wrap gap-3 align-items-center mb-5">
          <a
            href={pdf}
            download="Agnik_Dutta_Resume.pdf"
            className="btn-editorial-primary"
          >
            <FiDownload /> Download Resume (PDF)
          </a>
          <a
            href={pdf}
            target="_blank"
            rel="noreferrer"
            className="btn-editorial-secondary"
          >
            <FiExternalLink /> Open in New Tab
          </a>
        </div>

        {/* Executive CV Sheet (On-Page Scannable Resume) */}
        <div className="cv-executive-sheet">
          
          {/* Header */}
          <div className="cv-sheet-header">
            <div>
              <h2 className="cv-name">Agnik Dutta</h2>
              <div className="cv-tagline">
                Computer Science Engineer · AI & Data Systems
              </div>
            </div>
            <div className="cv-contacts">
              <div>SRMIST, Kattankulathur, Chennai, India</div>
              <div>agnik.dutta07@gmail.com</div>
              <div>github.com/agnik07 · linkedin.com/in/agnik-dutta</div>
            </div>
          </div>

          {/* Education */}
          <div className="cv-section-title">Education</div>
          <div className="cv-item">
            <div className="cv-item-head">
              <span className="cv-item-title">SRM Institute of Science and Technology (SRMIST)</span>
              <span className="cv-item-date">Chennai, India</span>
            </div>
            <div className="cv-item-sub">
              Bachelor of Technology (B.Tech) in Computer Science and Engineering
            </div>
            <ul className="cv-item-bullets">
              <li>Core Coursework: Data Structures & Algorithms, Database Management Systems (DBMS), Operating Systems, Machine Learning, Object-Oriented Programming (Java/C++), Computer Networks.</li>
            </ul>
          </div>

          {/* Technical Skills */}
          <div className="cv-section-title">Technical Competencies</div>
          <Row className="mb-3">
            <Col md={6} className="mb-2">
              <strong style={{ color: "var(--text-primary)", fontSize: "0.9rem" }}>Programming Languages:</strong>{" "}
              <span style={{ color: "var(--text-secondary)", fontSize: "0.9rem" }}>Python, JavaScript (ES6+), C++, Java, Go, SQL</span>
            </Col>
            <Col md={6} className="mb-2">
              <strong style={{ color: "var(--text-primary)", fontSize: "0.9rem" }}>Frameworks & Libraries:</strong>{" "}
              <span style={{ color: "var(--text-secondary)", fontSize: "0.9rem" }}>React.js, Next.js, Node.js, Express.js, Tailwind CSS, Bootstrap</span>
            </Col>
            <Col md={6} className="mb-2">
              <strong style={{ color: "var(--text-primary)", fontSize: "0.9rem" }}>AI & Data Science:</strong>{" "}
              <span style={{ color: "var(--text-secondary)", fontSize: "0.9rem" }}>NLP, Scikit-Learn, Pandas, NumPy, Machine Learning Modeling, Streamlit</span>
            </Col>
            <Col md={6} className="mb-2">
              <strong style={{ color: "var(--text-primary)", fontSize: "0.9rem" }}>Databases & Tools:</strong>{" "}
              <span style={{ color: "var(--text-secondary)", fontSize: "0.9rem" }}>MySQL, PostgreSQL, MongoDB, Redis, Firebase, Git, GitHub, Docker, VS Code</span>
            </Col>
          </Row>

          {/* Project Highlights */}
          <div className="cv-section-title">Selected Engineering Projects</div>

          <div className="cv-item">
            <div className="cv-item-head">
              <span className="cv-item-title">SkillGapAI — AI-Powered Resume & Skill Discrepancy Platform</span>
              <span className="cv-item-date">Python · NLP · Machine Learning</span>
            </div>
            <ul className="cv-item-bullets">
              <li>Designed and built an AI-driven resume parser that extracts key technical competencies from unstructured documents.</li>
              <li>Calculates semantic discrepancy against target job descriptions and provides automated actionable learning pathways.</li>
            </ul>
          </div>

          <div className="cv-item">
            <div className="cv-item-head">
              <span className="cv-item-title">Digital Local Shop — Real-Time Local Commerce Platform</span>
              <span className="cv-item-date">React.js · MySQL · Node.js</span>
            </div>
            <ul className="cv-item-bullets">
              <li>Engineered a centralized web platform enabling neighborhood retail stores to publish dynamic inventories and live pricing.</li>
              <li>Integrated relational MySQL database schemas for real-time inventory queries and verified buyer reviews.</li>
            </ul>
          </div>

          <div className="cv-item">
            <div className="cv-item-head">
              <span className="cv-item-title">HR Workflow Designer — Human Resource Operations Management</span>
              <span className="cv-item-date">React.js · Workflow Automation · Vercel</span>
            </div>
            <ul className="cv-item-bullets">
              <li>Built an interactive workflow automation system streamlining candidate recruitment, employee onboarding, and leave records.</li>
              <li>Deployed production-ready client interface on Vercel with responsive state management.</li>
            </ul>
          </div>

          <div className="cv-item">
            <div className="cv-item-head">
              <span className="cv-item-title">Software Engineering AI Agent — Hybrid Domain Chatbot</span>
              <span className="cv-item-date">Python · Hybrid ML/LLM · Streamlit</span>
            </div>
            <ul className="cv-item-bullets">
              <li>Developed a dual-stage machine learning system that first classifies whether queries belong to the software domain.</li>
              <li>Generates structured technical responses including code snippets, algorithmic logic, and time-space complexity proofs.</li>
            </ul>
          </div>

          {/* Core Areas */}
          <div className="cv-section-title">Interests & Pursuits</div>
          <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
            <span className="editorial-badge"><FiCheckCircle style={{ marginRight: "4px" }} /> Artificial Intelligence & ML</span>
            <span className="editorial-badge"><FiCheckCircle style={{ marginRight: "4px" }} /> Scalable Web Architectures</span>
            <span className="editorial-badge"><FiCheckCircle style={{ marginRight: "4px" }} /> Technology Startups</span>
            <span className="editorial-badge"><FiCheckCircle style={{ marginRight: "4px" }} /> Financial Markets & Quantitative Modeling</span>
          </div>

        </div>

        {/* Embedded Document Viewer Preview */}
        <div className="mt-5">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <div className="section-num mb-0">DOCUMENT VIEWER // PDF EMBED</div>
            <a
              href={pdf}
              target="_blank"
              rel="noreferrer"
              className="btn-editorial-link"
              style={{ fontSize: "0.78rem" }}
            >
              <FiFileText /> Fullscreen View <FiExternalLink />
            </a>
          </div>

          <div className="resume-iframe-container">
            <iframe
              src={`${pdf}#toolbar=0&navpanes=0&scrollbar=1`}
              title="Agnik Dutta Resume Preview"
              className="resume-embed-frame"
            />
          </div>
        </div>

      </Container>
    </main>
  );
}

export default ResumeNew;
