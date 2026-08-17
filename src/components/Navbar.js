import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Container } from "react-bootstrap";
import { FiArrowUpRight } from "react-icons/fi";

function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  return (
    <header className={`navbar-editorial ${scrolled ? "scrolled" : ""}`}>
      <Container>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%" }}>

          {/* Brand Monogram */}
          <Link to="/" className="nav-brand-title">
            <span>Agnik Dutta</span>
            <span className="nav-brand-badge">CS / AI</span>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="nav-links-wrap">
            <Link
              to="/project"
              className={`nav-item-link ${location.pathname === "/project" ? "active" : ""}`}
            >
              Work
            </Link>
            <Link
              to="/about"
              className={`nav-item-link ${location.pathname === "/about" ? "active" : ""}`}
            >
              About
            </Link>
            <Link
              to="/resume"
              className={`nav-item-link ${location.pathname === "/resume" ? "active" : ""}`}
            >
              Resume
            </Link>
            <a
              href="mailto:agnik.dutta07@gmail.com"
              className="nav-cta-btn"
            >
              Get in Touch <FiArrowUpRight style={{ marginLeft: "3px", verticalAlign: "middle" }} />
            </a>
          </nav>

          {/* Mobile Hamburger Button */}
          <button
            className={`mobile-toggle-btn ${mobileOpen ? "open" : ""}`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle navigation menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </Container>

      {/* Mobile Drawer */}
      <div className={`mobile-drawer ${mobileOpen ? "open" : ""}`}>
        <Link
          to="/"
          className={`nav-item-link ${location.pathname === "/" ? "active" : ""}`}
          onClick={() => setMobileOpen(false)}
        >
          Index
        </Link>
        <Link
          to="/project"
          className={`nav-item-link ${location.pathname === "/project" ? "active" : ""}`}
          onClick={() => setMobileOpen(false)}
        >
          Selected Work
        </Link>
        <Link
          to="/about"
          className={`nav-item-link ${location.pathname === "/about" ? "active" : ""}`}
          onClick={() => setMobileOpen(false)}
        >
          About & Toolkit
        </Link>
        <Link
          to="/resume"
          className={`nav-item-link ${location.pathname === "/resume" ? "active" : ""}`}
          onClick={() => setMobileOpen(false)}
        >
          Curriculum Vitae
        </Link>
        <a
          href="mailto:agnikdutta465@gmail.com"
          className="btn-editorial-primary"
          style={{ width: "100%", marginTop: "1rem" }}
        >
          Get In Touch →
        </a>
      </div>
    </header>
  );
}

export default NavBar;
