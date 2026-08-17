import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FiArrowRight, FiDownload, FiTerminal, FiCpu, FiLayers } from "react-icons/fi";
import Home2 from "./Home2";
import pdf from "../../Assets/Agnik_Dutta_SRM_.pdf";

function Home() {
  return (
    <main>
      {/* ----------------- Hero Section ----------------- */}
      <section className="hero-editorial-section" id="hero">
        <Container>
          <Row className="align-items-center">
            
            {/* Left Column: Editorial Typography & Call to Action */}
            <Col lg={7} md={12} className="pe-lg-5">
              <div className="eyebrow">
                COMPUTER SCIENCE · AI & DATA · SOFTWARE SYSTEMS
              </div>

              <h1 className="hero-editorial-headline">
                Building <span className="serif-italic">intelligent</span> systems that turn complex ideas into practical products.
              </h1>

              <p className="hero-editorial-bio">
                I'm <strong>Agnik Dutta</strong> — a Computer Science student at SRMIST focused on artificial intelligence, data engineering, and backend systems development. I design and engineer scalable software that solves practical problems with elegance and algorithmic precision.
              </p>

              <div className="hero-actions-wrap">
                <Link to="/project" className="btn-editorial-primary">
                  Explore Selected Work <FiArrowRight />
                </Link>
                <a
                  href={pdf}
                  download="Agnik_Dutta_Resume.pdf"
                  className="btn-editorial-secondary"
                >
                  Download CV <FiDownload />
                </a>
              </div>

              <div className="hero-scroll-cue">
                <span className="scroll-line"></span>
                <span>Scroll to explore</span>
              </div>
            </Col>

            {/* Right Column: Editorial Computational Composition */}
            <Col lg={5} md={12} className="mt-5 mt-lg-0">
              <div className="hero-editorial-composition">
                <div className="editorial-comp-header">
                  <span>SYSTEM ARCHITECTURE // AD-2026</span>
                  <span className="editorial-comp-status">Active Pipeline</span>
                </div>

                <div className="editorial-comp-body">
                  <div className="editorial-comp-canvas">
                    {/* Abstract Matrix */}
                    <div className="comp-abstract-grid">
                      <div className="comp-grid-cell active-cell">ML.NODE</div>
                      <div className="comp-grid-cell">NLP.PARSER</div>
                      <div className="comp-grid-cell">SQL.RELAY</div>
                      <div className="comp-grid-cell active-cell">DATA.PIPE</div>
                    </div>

                    {/* Editorial Centerpiece */}
                    <div className="comp-centerpiece">
                      <div>
                        <div className="comp-title">Agnik Dutta</div>
                        <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.72rem", color: "var(--text-muted)", marginTop: "2px" }}>
                          SRMIST · CSE · AI & DATA
                        </div>
                      </div>
                      <div className="comp-metrics">
                        <div>06+ Projects</div>
                        <div>04+ Domains</div>
                      </div>
                    </div>

                    {/* Live Tech Pipeline Tags */}
                    <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
                      <span className="editorial-badge"><FiTerminal style={{ marginRight: "4px" }} /> Python</span>
                      <span className="editorial-badge"><FiLayers style={{ marginRight: "4px" }} /> Backend & APIs</span>
                      <span className="editorial-badge"><FiCpu style={{ marginRight: "4px" }} /> ML Models</span>
                    </div>
                  </div>
                </div>

                <div className="editorial-comp-footer">
                  <span>BASED IN INDIA</span>
                  <span>OPEN FOR 2026 ROLES</span>
                </div>
              </div>
            </Col>

          </Row>
        </Container>
      </section>

      {/* ----------------- Philosophy & Focus Areas ----------------- */}
      <Home2 />
    </main>
  );
}

export default Home;
