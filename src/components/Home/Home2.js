import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";

function Home2() {
  return (
    <section className="editorial-section" id="statement">
      <Container>
        
        {/* Section 01 — Philosophy */}
        <div className="section-num">01 // PHILOSOPHY & PERSPECTIVE</div>
        <Row className="mb-5">
          <Col lg={6} md={12}>
            <h2 className="editorial-quote-statement">
              "Technology is most compelling when engineered into reliable systems that people rely on every single day."
            </h2>
          </Col>
          <Col lg={6} md={12} className="mt-4 mt-lg-0">
            <p className="editorial-narrative-p">
              My engineering approach is grounded in simplicity and depth. Whether designing natural language parsers, architecting robust backend services, or optimizing relational databases, I focus on building systems that solve practical problems cleanly.
            </p>
            <p className="editorial-narrative-p">
              Currently pursuing my B.Tech in Computer Science and Engineering at SRMIST, I actively explore the intersection of machine learning algorithms, scalable backend architectures, and autonomous software workflows.
            </p>
            
            <div className="mt-4">
              <Link to="/about" className="btn-editorial-link">
                Read full profile & toolkit <FiArrowRight />
              </Link>
            </div>
          </Col>
        </Row>

        {/* Metadata Strip */}
        <div className="editorial-metadata-grid mb-5">
          <div>
            <div className="metadata-label">Education</div>
            <div className="metadata-value">SRMIST · B.Tech CSE</div>
          </div>
          <div>
            <div className="metadata-label">Location</div>
            <div className="metadata-value">India (Kolkata / Chennai)</div>
          </div>
          <div>
            <div className="metadata-label">Specialization</div>
            <div className="metadata-value">AI, Data Systems & Backend</div>
          </div>
          <div>
            <div className="metadata-label">Current Status</div>
            <div className="metadata-value">Available for Opportunities</div>
          </div>
        </div>

        <div className="editorial-divider"></div>

        {/* Section 02 — Focus Pillars */}
        <div className="section-num">02 // WHAT I LIKE BUILDING</div>
        <h2 className="editorial-heading mb-4">Core Engineering Pillars</h2>
        
        <div className="focus-pillars-grid">
          <div className="focus-pillar-card">
            <div className="pillar-num">01 / INTELLIGENCE</div>
            <h3 className="pillar-title">AI & Data Systems</h3>
            <p className="pillar-desc">
              Building predictive models, NLP parsers, and intelligent recommendation pipelines that extract actionable signal from complex datasets.
            </p>
          </div>

          <div className="focus-pillar-card">
            <div className="pillar-num">02 / BACKEND</div>
            <h3 className="pillar-title">Backend & Cloud Systems</h3>
            <p className="pillar-desc">
              Developing performant, modular server architectures with Node.js, Express, RESTful APIs, and structured relational databases like MySQL and PostgreSQL.
            </p>
          </div>

          <div className="focus-pillar-card">
            <div className="pillar-num">03 / AUTOMATION</div>
            <h3 className="pillar-title">Workflow Automation</h3>
            <p className="pillar-desc">
              Designing smart business logic and process orchestration engines that remove repetitive administrative bottlenecks.
            </p>
          </div>

          <div className="focus-pillar-card">
            <div className="pillar-num">04 / ALGORITHMS</div>
            <h3 className="pillar-title">Systems & Architecture</h3>
            <p className="pillar-desc">
              Applying clean object-oriented design and efficient algorithmic data structures in C++, Java, and Python for robust reliability.
            </p>
          </div>
        </div>

        {/* CTA Bar */}
        <div className="mt-5 pt-4 d-flex justify-content-between align-items-center flex-wrap gap-3">
          <div>
            <span className="eyebrow" style={{ marginBottom: "0" }}>CURATED CASE STUDIES</span>
            <div style={{ color: "var(--text-secondary)", fontSize: "0.95rem" }}>
              Explore end-to-end applications in AI, commerce, and human resources.
            </div>
          </div>
          <Link to="/project" className="btn-editorial-primary">
            View All Selected Work <FiArrowRight />
          </Link>
        </div>
      </Container>
    </section>
  );
}

export default Home2;
