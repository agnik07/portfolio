import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FiGithub, FiLinkedin, FiInstagram, FiMail, FiArrowUpRight } from "react-icons/fi";
import { Link } from "react-router-dom";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      {/* ----------------- Minimal Contact CTA ----------------- */}
      <section className="editorial-cta-section" id="contact">
        <Container>
          <div className="section-num">04 // INITIATE DIALOGUE</div>
          
          <h2 className="cta-editorial-headline">
            Let's build something <span style={{ fontStyle: "italic", color: "var(--accent-burgundy-light)" }}>meaningful</span>.
          </h2>

          <p className="editorial-subheading" style={{ fontSize: "1.1rem" }}>
            Whether you have an ambitious software project, an AI/data engineering challenge, or a full-time role opportunity, I am always open to discussing new technical horizons.
          </p>

          <div className="cta-social-links">
            <a
              href="mailto:agnik.dutta07@gmail.com"
              className="btn-editorial-primary"
            >
              <FiMail /> agnik.dutta07@gmail.com
            </a>

            <a
              href="https://www.linkedin.com/in/agnik-dutta/"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-social-pill"
            >
              <FiLinkedin /> LinkedIn <FiArrowUpRight />
            </a>

            <a
              href="https://github.com/agnik07"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-social-pill"
            >
              <FiGithub /> GitHub <FiArrowUpRight />
            </a>

            <a
              href="https://www.instagram.com/myself_agnik/"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-social-pill"
            >
              <FiInstagram /> Instagram <FiArrowUpRight />
            </a>
          </div>
        </Container>
      </section>

      {/* ----------------- Editorial Bottom Footer ----------------- */}
      <div className="footer-editorial">
        <Container>
          <Row className="align-items-center gy-3">
            <Col md={5} xs={12}>
              <div className="footer-brand">Agnik Dutta</div>
              <div style={{ color: "var(--text-muted)", fontSize: "0.72rem", marginTop: "2px" }}>
                Computer Science · AI & Data Systems · Software Engineering
              </div>
            </Col>

            <Col md={4} xs={12}>
              <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap" }}>
                <Link to="/" style={{ color: "var(--text-secondary)" }}>Index</Link>
                <Link to="/project" style={{ color: "var(--text-secondary)" }}>Work</Link>
                <Link to="/about" style={{ color: "var(--text-secondary)" }}>About</Link>
                <Link to="/resume" style={{ color: "var(--text-secondary)" }}>Resume</Link>
              </div>
            </Col>

            <Col md={3} xs={12} className="text-md-end">
              <div style={{ color: "var(--text-muted)", fontSize: "0.72rem" }}>
                © {currentYear} AGNIK DUTTA.
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </footer>
  );
}

export default Footer;
