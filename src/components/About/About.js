import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Techstack from "./Techstack";
import Github from "./Github";
import { FiAward, FiBookOpen, FiCompass, FiTrendingUp } from "react-icons/fi";
import myPhoto from "../../Assets/avatar.png";

function About() {
  return (
    <main style={{ paddingTop: "140px", paddingBottom: "80px" }}>
      <Container>
        
        {/* Section 01 — Executive Profile */}
        <div className="section-num">01 // PROFILE & BACKGROUND</div>
        <h1 className="editorial-heading mb-4">About Agnik Dutta</h1>

        <Row className="mb-5 align-items-start">
          {/* Left Column: Portrait Showcase */}
          <Col lg={4} md={5} className="mb-4 mb-md-0">
            <div className="editorial-portrait-card">
              <div className="portrait-image-wrapper">
                <img 
                  src={myPhoto} 
                  alt="Agnik Dutta" 
                  className="editorial-portrait-img" 
                />
                <div className="portrait-overlay-tag">
                  <span>PORTRAIT // AD</span>
                  <span className="portrait-status-dot"></span>
                </div>
              </div>
              
              <div className="portrait-card-footer">
                <div className="portrait-name">Agnik Dutta</div>
                <div className="portrait-role">Computer Science & AI · SRMIST</div>
                <div className="portrait-status">
                  <span className="status-indicator"></span> Open for Technical Roles
                </div>
              </div>
            </div>

            {/* Quick Metadata Box under Portrait */}
            <div className="editorial-metadata-grid mt-4">
              <div>
                <div className="metadata-label">Academic Program</div>
                <div className="metadata-value">B.Tech Computer Science</div>
              </div>
              <div>
                <div className="metadata-label">Institution</div>
                <div className="metadata-value">SRMIST, India</div>
              </div>
              <div>
                <div className="metadata-label">Primary Domains</div>
                <div className="metadata-value">AI, Data Systems, Backend</div>
              </div>
              <div>
                <div className="metadata-label">Availability</div>
                <div className="metadata-value">2026 Opportunities</div>
              </div>
            </div>
          </Col>

          {/* Right Column: Statement, Narrative & Intellectual Pursuits */}
          <Col lg={8} md={7} className="ps-lg-5">
            <h2 className="editorial-quote-statement" style={{ fontSize: "1.85rem", marginBottom: "1.75rem" }}>
              "Engineering value comes from transforming abstract computational ideas into reliable software products that people can depend on."
            </h2>

            <p className="editorial-narrative-p">
              I am a Computer Science and Engineering student at SRM Institute of Science and Technology (SRMIST) with a deep technical focus on Artificial Intelligence, machine learning pipelines, and backend systems architecture.
            </p>
            <p className="editorial-narrative-p">
              My work centers on designing real-time systems that bridge algorithm research and user-facing utility — from building local commerce inventory synchronization engines and resume skill-gap neural parsers to designing scalable enterprise human resource workflow systems.
            </p>
            <p className="editorial-narrative-p">
              Beyond engineering code, I have a keen intellectual curiosity in technology startups, financial market mechanics, algorithmic quantitative modeling, and user experience psychology.
            </p>

            {/* Intellectual Interests */}
            <div className="intellectual-pursuits-card">
              <div className="metadata-label" style={{ marginBottom: "0.75rem" }}>Core Intellectual Pursuits</div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
                <span className="editorial-badge"><FiCompass style={{ marginRight: "4px" }} /> Startup Ecosystems</span>
                <span className="editorial-badge"><FiTrendingUp style={{ marginRight: "4px" }} /> Financial Markets & Quantitative Modeling</span>
                <span className="editorial-badge"><FiBookOpen style={{ marginRight: "4px" }} /> AI & Cognitive Systems</span>
                <span className="editorial-badge"><FiAward style={{ marginRight: "4px" }} /> Product Craftsmanship</span>
              </div>
            </div>
          </Col>
        </Row>

        <div className="editorial-divider"></div>

        {/* Section 02 — Technical Toolkit */}
        <div className="section-num">02 // TECHNICAL TOOLKIT</div>
        <h2 className="editorial-heading mb-3">Languages, Frameworks & Infrastructure</h2>
        <p className="editorial-subheading mb-4">
          A structured index of technical competencies, development languages, database systems, and workflow toolchains utilized across engineering projects.
        </p>

        <Techstack />

        <div className="editorial-divider"></div>

        {/* Section 03 — Technical Depth & Philosophy */}
        <div className="section-num">03 // ENGINEERING VALUES</div>
        <h2 className="editorial-heading mb-4">How I Approach Software</h2>

        <div className="focus-pillars-grid mb-5">
          <div className="focus-pillar-card">
            <div className="pillar-num">01 / FIRST PRINCIPLES</div>
            <h3 className="pillar-title">Clarity Over Cleverness</h3>
            <p className="pillar-desc">
              Write maintainable, well-architected code with explicit data models and strict typing over cryptic one-liners that degrade readability.
            </p>
          </div>

          <div className="focus-pillar-card">
            <div className="pillar-num">02 / RESILIENCE</div>
            <h3 className="pillar-title">Reliable System Boundaries</h3>
            <p className="pillar-desc">
              Design backend pipelines and database schemas with strong validation, error boundaries, and fail-safe transactional logic.
            </p>
          </div>

          <div className="focus-pillar-card">
            <div className="pillar-num">03 / EMPATHY</div>
            <h3 className="pillar-title">Recruiter & User Empathy</h3>
            <p className="pillar-desc">
              Whether building an API contract or a polished web client, prioritize user speed, scannability, accessibility, and zero friction.
            </p>
          </div>
        </div>

        <div className="editorial-divider"></div>

        {/* Section 04 — GitHub Activity */}
        <div className="section-num">04 // REPOSITORY ACTIVITY</div>
        <Github />

      </Container>
    </main>
  );
}

export default About;
