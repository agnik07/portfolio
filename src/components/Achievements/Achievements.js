import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  FiAward,
  FiBookOpen,
  FiExternalLink,
  FiGithub,
  FiCheckCircle,
  FiZap,
  FiChevronLeft,
  FiChevronRight,
  FiImage,
  FiUsers,
  FiFileText,
  FiFilter,
  FiShield
} from "react-icons/fi";

import ieeeClick from "../../Assets/ieee_click.jpg";
import ieeeClickCertificate from "../../Assets/ieee_click_certificate.jpeg";

// Certificates Imports
import aicteAwsPdf from "../../Assets/certificates/AICTE AWS.pdf";
import aicteDsMlPdf from "../../Assets/certificates/AICTE DS and ML.pdf";
import awsCloudFoundationsPdf from "../../Assets/certificates/AWS_Cloud_Foundations_Badge20250309-28-pn7qa9.pdf";
import awsDataEngPdf from "../../Assets/certificates/AWS_Data_Engineering_Badge20250309-27-68oc27.pdf";
import awsMlFoundationsPdf from "../../Assets/certificates/AWS_Machine_Learning_Foundations_Badge20250623-27-p61qen.pdf";
import apnaCollegePdf from "../../Assets/certificates/Apna College.pdf";
import aspireCertPdf from "../../Assets/certificates/Aspire-Certificate.pdf";
import ciscoDbSecurityPdf from "../../Assets/certificates/Cisco Database security .pdf";
import ciscoNetworkingPdf from "../../Assets/certificates/Cisco Networking_1896.pdf";
import dsaNptelPdf from "../../Assets/certificates/DSA-NPTEL.pdf";
import ibmMysqlPdf from "../../Assets/certificates/IBM MySQL and Data Science .pdf";
import ieiCertPdf from "../../Assets/certificates/Iei certificate .pdf";
import mlNptelPdf from "../../Assets/certificates/ML_NPTEL.pdf";
import nptelDsaMlPdf from "../../Assets/certificates/NPTEL DSA & ML.pdf";
import scalerDbmsPng from "../../Assets/certificates/SCALER  DBMS_1896.png";
import level1CertPng from "../../Assets/certificates/level1_certificate.png";
import oracleCertPdf from "../../Assets/certificates/oracle ecertificate.pdf";
import hackOfDutyPdf from "../../Assets/certificates/Hack of Duty.pdf";
import iitBhuPdf from "../../Assets/certificates/IIT BHU Hackathon Participation.pdf";
import sih2025Pdf from "../../Assets/certificates/SIH 2025 Internal296.pdf";

function Achievements() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [activeCertFilter, setActiveCertFilter] = useState("All");

  const researchPhotos = [
    {
      id: "photo-main",
      src: ieeeClick,
      title: "IEEE CLICK Conference Presentation",
      caption:
        "International conference paper presentation at IEEE CLICK alongside research partner Kangkana Barman.",
      badge: "Main Presentation Photo",
    },
    {
      id: "photo-cert",
      src: ieeeClickCertificate,
      title: "Official IEEE Presentation Certificate",
      caption:
        "Official Certificate of Presentation awarded for paper 'Continuous Context-Aware Skill Gap Detection and Trend-Driven Personalised Learning Path Generator Using Large Language Models'.",
      badge: "Official Certificate",
    },
  ];

  const handleNextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % researchPhotos.length);
  };

  const handlePrevSlide = () => {
    setActiveSlide(
      (prev) => (prev - 1 + researchPhotos.length) % researchPhotos.length
    );
  };

  const publicationData = [
    {
      id: "PUB-01",
      title:
        "Continuous Context-Aware Skill Gap Detection and Trend-Driven Personalised Learning Path Generator Using Large Language Models",
      venue: "IEEE CLICK International Conference",
      year: "2026",
      authors: "Kangkana Barman, Agnik Dutta, Dr. Gokulnath C",
      affiliation: "Computing Technologies, SRM Institute of Science and Technology",
      status: "IEEE International Conference Publication",
      abstract:
        "Authored and presented peer-reviewed research on SkillGap AI — a hybrid intelligent career guidance platform combining NLP resume parsing, Sentence Transformers (all-MiniLM-L6-v2) for semantic skill gap detection, a 4-layer fallback cascade (Static DB → Job APIs → Embedding ML model → Ollama LLM) for job requirement retrieval, and LLMs for personalized learning roadmaps. Achieved 92% semantic matching accuracy and 0.91 ROC-AUC score over keyword-based baselines.",
      metrics: [
        { label: "Accuracy", val: "92%" },
        { label: "ROC-AUC Score", val: "0.91" },
        { label: "Precision / Recall", val: "0.91 / 0.92" },
        { label: "Training Pairs", val: "16,000" },
      ],
      tags: [
        "IEEE Conference",
        "Natural Language Processing",
        "Sentence Transformers",
        "Large Language Models",
        "Skill Gap Detection",
        "Cosine Similarity",
      ],
      link: "https://github.com/agnik07/SkillGap-AI-New",
    },
  ];

  const hackathonsData = [
    {
      id: "HACK-01",
      title: "SIH 2025",
      event: "Smart India Hackathon 2025",
      achievement: "College Finalists",
      date: "2025",
      projectName: "Crop Health Monitor",
      description:
        "Participated in the Smart India Hackathon College round organised by SRM Institute of Science and Technology, Kattankulathur.",
      techStack: ["React.js", "Node.js", "MySQL", "REST APIs", "JavaScript"],
      demoLink: null,
      repoLink: "https://github.com/agnik07/AI-Crop-Health-Monitor-",
      certLink: sih2025Pdf,
    },
    {
      id: "HACK-02",
      title: "Serve-Smart Hackathon (IIT BHU Jagriti 2025)",
      event: "Indian Institute of Technology (BHU) Varanasi",
      achievement: "IIT BHU Hackathon Finalist",
      date: "2025",
      projectName: "Digital Local Shop & Inventory Sync",
      description:
        "Participated in the flagship Serve-Smart Hackathon of Jagriti 2025 organized by IIT Banaras Hindu University, architecting distributed local commerce and store inventory telemetry.",
      techStack: ["React.js", "Node.js", "MySQL", "REST APIs", "JavaScript"],
      demoLink: null,
      repoLink: "https://github.com/nilancy04/DigitalLocalShop",
      certLink: iitBhuPdf,
    },
    {
      id: "HACK-03",
      title: "Hack of Duty Hackathon",
      event: "Major Competitive Engineering Sprint",
      achievement: "Hackathon Finalist & Top Contributor",
      date: "2024",
      projectName: "AI Real-Time Gym Coach Engine",
      description:
        "Engineered real-time computer vision pose estimation models and proactive LLM voice feedback mechanisms for automated fitness form tracking during hackathon sprint.",
      techStack: ["Python", "MediaPipe", "Groq Llama 3", "Streamlit", "OpenCV"],
      demoLink: "https://ai-real-time-gym-coach-agnik.streamlit.app/",
      repoLink: "https://github.com/agnik07/AI-Real-Time-Gym-Coach",
      certLink: hackOfDutyPdf,
    },
  ];

  const certCategories = [
    "All",
    "Hackathons & Competitions",
    "Cloud & AWS",
    "Machine Learning & AI",
    "Data Structures & DB",
    "Networking & Security",
    "Internships & Industry",
  ];

  const certificatesData = [
    {
      id: "CERT-01",
      title: "AWS Academy Graduate - Cloud Foundations",
      issuer: "AWS Academy / Amazon Web Services",
      category: "Cloud & AWS",
      type: "PDF Document",
      date: "2025",
      description:
        "Official AWS Academy certification covering core AWS cloud services, architecture, security, networking, and cloud economics.",
      file: awsCloudFoundationsPdf,
      badge: "AWS Certified",
    },

    {
      id: "CERT-02",
      title: "AWS Academy Graduate - Data Engineering",
      issuer: "AWS Academy / Amazon Web Services",
      category: "Cloud & AWS",
      type: "PDF Document",
      date: "2025",
      description:
        "Specialized AWS Academy credential in scalable data pipelines, ETL processes, S3 storage, Redshift analytics, and Glue data cataloging.",
      file: awsDataEngPdf,
      badge: "AWS Data Eng",
    },

    {
      id: "CERT-03",
      title: "AWS Academy Graduate - Machine Learning Foundations",
      issuer: "AWS Academy / Amazon Web Services",
      category: "Cloud & AWS",
      type: "PDF Document",
      date: "2025",
      description:
        "AWS Academy machine learning certification covering SageMaker modeling, supervised learning, hyperparameter tuning, and AI pipelines.",
      file: awsMlFoundationsPdf,
      badge: "AWS AI & ML",
    },

    {
      id: "CERT-04",
      title: "AICTE AWS Cloud Virtual Internship",
      issuer: "AICTE & AWS Academy",
      category: "Cloud & AWS",
      type: "PDF Document",
      date: "2024",
      description:
        "National-level virtual internship certificate awarded by AICTE in collaboration with AWS Academy for cloud infrastructure project execution.",
      file: aicteAwsPdf,
      badge: "AICTE National",
    },

    {
      id: "CERT-05",
      title: "NPTEL Machine Learning (IIT / IISc)",
      issuer: "NPTEL & Ministry of Education, Govt. of India",
      category: "Machine Learning & AI",
      type: "PDF Document",
      date: "2024",
      description:
        "Elite certification in Machine Learning algorithms, regression, decision trees, neural networks, and statistical learning theory.",
      file: mlNptelPdf,
      badge: "IIT NPTEL Elite",
    },

    {
      id: "CERT-06",
      title: "AICTE Data Science & Machine Learning Virtual Internship",
      issuer: "AICTE & Industry Partners",
      category: "Machine Learning & AI",
      type: "PDF Document",
      date: "2024",
      description:
        "Comprehensive hands-on AICTE virtual internship certificate focusing on data analysis, pandas telemetry, predictive ML models, and evaluation.",
      file: aicteDsMlPdf,
      badge: "AICTE Certified",
    },

    {
      id: "CERT-07",
      title: "NPTEL Data Structures & ML Specialization",
      issuer: "NPTEL & Ministry of Education",
      category: "Machine Learning & AI",
      type: "PDF Document",
      date: "2024",
      description:
        "Rigorous academic credential covering advanced data structures, algorithmic complexity analysis, and machine learning pipelines.",
      file: nptelDsaMlPdf,
      badge: "NPTEL Specialization",
    },

    {
      id: "CERT-08",
      title: "IBM MySQL & Data Science Professional Certification",
      issuer: "IBM & Coursera",
      category: "Machine Learning & AI",
      type: "PDF Document",
      date: "2024",
      description:
        "Professional certification from IBM detailing relational database design, complex SQL query optimization, data cleaning, and Python analytics.",
      file: ibmMysqlPdf,
      badge: "IBM Professional",
    },

    {
      id: "CERT-09",
      title: "NPTEL Data Structures & Algorithms in Java / C++",
      issuer: "NPTEL & IIT Kharagpur/Madras",
      category: "Data Structures & DB",
      type: "PDF Document",
      date: "2024",
      description:
        "Academic certification in core data structures, trees, graphs, sorting algorithms, dynamic programming, and asymptotic time complexity.",
      file: dsaNptelPdf,
      badge: "NPTEL DSA",
    },

    {
      id: "CERT-10",
      title: "Scaler Database Management Systems (DBMS)",
      issuer: "Scaler Academy",
      category: "Data Structures & DB",
      type: "Image Certificate",
      date: "2024",
      description:
        "Industry certification covering relational algebra, ACID transactions, normalization, indexing performance, and SQL database design.",
      file: scalerDbmsPng,
      badge: "Scaler Certified",
    },

    {
      id: "CERT-11",
      title: "Oracle Cloud Infrastructure & Database Certification",
      issuer: "Oracle Corporation",
      category: "Data Structures & DB",
      type: "PDF Document",
      date: "2024",
      description:
        "Enterprise database and cloud infrastructure certificate awarded by Oracle for cloud database management and SQL architecture.",
      file: oracleCertPdf,
      badge: "Oracle Certified",
    },

    {
      id: "CERT-12",
      title: "Cisco Database Security & Protection",
      issuer: "Cisco Networking Academy",
      category: "Data Structures & DB",
      type: "PDF Document",
      date: "2024",
      description:
        "Cisco certification in database threat mitigation, SQL injection prevention, data encryption protocols, and access control policies.",
      file: ciscoDbSecurityPdf,
      badge: "Cisco Security",
    },

    {
      id: "CERT-13",
      title: "Cisco Networking Essentials & Architecture",
      issuer: "Cisco Networking Academy",
      category: "Networking & Security",
      type: "PDF Document",
      date: "2024",
      description:
        "Foundational networking certification covering OSI layers, TCP/IP protocols, routing algorithms, subnets, and network topology security.",
      file: ciscoNetworkingPdf,
      badge: "Cisco Networking",
    },

    {
      id: "CERT-14",
      title: "Institution of Engineers (India) Technical Certification",
      issuer: "The Institution of Engineers (India) - IEI",
      category: "Networking & Security",
      type: "PDF Document",
      date: "2024",
      description:
        "National engineering professional body certificate recognizing technical paper contribution and engineering excellence.",
      file: ieiCertPdf,
      badge: "IEI Certified",
    },

    {
      id: "CERT-15",
      title: "Level 1 Problem Solving & Systems Certificate",
      issuer: "Technical Assessment Authority",
      category: "Networking & Security",
      type: "Image Certificate",
      date: "2024",
      description:
        "Competitive programming and algorithmic problem-solving speed assessment certification.",
      file: level1CertPng,
      badge: "Level 1 Certified",
    },

    {
      id: "CERT-16",
      title: "Apna College Full Stack & DSA Mastery",
      issuer: "Apna College",
      category: "Internships & Industry",
      type: "PDF Document",
      date: "2024",
      description:
        "Comprehensive course completion certificate in Full Stack Web Development, React, Node.js, and Data Structures & Algorithms.",
      file: apnaCollegePdf,
      badge: "Full Stack & DSA",
    },

    {
      id: "CERT-17",
      title: "Aspire Leadership & Engineering Excellence",
      issuer: "Aspire Technical Foundation",
      category: "Internships & Industry",
      type: "PDF Document",
      date: "2024",
      description:
        "Leadership, team collaboration, and technical innovation certificate awarded by Aspire Program.",
      file: aspireCertPdf,
    },
  ];

  const filteredCertificates =
    activeCertFilter === "All"
      ? certificatesData
      : certificatesData.filter((c) => c.category === activeCertFilter);

  return (
    <main style={{ paddingTop: "140px", paddingBottom: "80px" }}>
      <Container>
        {/* Section Header */}
        <div className="section-num">01 // RECOGNITION & IMPACT</div>
        <h1 className="editorial-heading mb-3">
          Achievements, Research & Hackathons
        </h1>
        <p className="editorial-subheading mb-5">
          A showcase of peer-reviewed research, hackathon awards, open-source innovations, verified certifications, and academic milestones.
        </p>

        {/* ----------------- RESEARCH PUBLICATIONS ----------------- */}
        <div className="section-num mb-4">01.1 // RESEARCH & PUBLICATIONS</div>

        {publicationData.map((pub) => (
          <div key={pub.id} className="editorial-achievement-card mb-5">
            <div className="achievement-card-header">
              <div className="d-flex align-items-center flex-wrap gap-2">
                <span className="editorial-badge badge-accent">
                  <FiBookOpen style={{ marginRight: "4px" }} /> {pub.status}
                </span>
                <span className="achievement-meta-text">
                  {pub.venue} · {pub.year}
                </span>
              </div>
              <span className="achievement-code">{pub.id}</span>
            </div>

            <h2 className="achievement-title mt-3 mb-2">{pub.title}</h2>

            <div
              className="authors-text mb-3"
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.85rem",
                color: "var(--text-secondary)",
              }}
            >
              <FiUsers
                style={{
                  marginRight: "6px",
                  color: "var(--accent-burgundy-light)",
                }}
              />
              <strong>Authors:</strong> {pub.authors}{" "}
              <span style={{ color: "var(--text-muted)", marginLeft: "6px" }}>
                ({pub.affiliation})
              </span>
            </div>

            <p className="achievement-abstract">{pub.abstract}</p>

            {/* Performance Metrics Bar */}
            <div
              className="editorial-metadata-grid my-4"
              style={{ gridTemplateColumns: "repeat(auto-fit, minmax(130px, 1fr))" }}
            >
              {pub.metrics.map((m, mIdx) => (
                <div key={mIdx}>
                  <div className="metadata-label">{m.label}</div>
                  <div
                    className="metadata-value"
                    style={{ color: "var(--accent-burgundy-light)", fontWeight: 600 }}
                  >
                    {m.val}
                  </div>
                </div>
              ))}
            </div>

            {/* ---------------- INTERACTIVE IEEE PHOTO SHOWCASE ---------------- */}
            <div className="research-photo-showcase">
              <div className="photo-showcase-header">
                <div className="d-flex align-items-center gap-2">
                  <FiImage style={{ color: "var(--accent-burgundy-light)" }} />
                  <span>IEEE PRESENTATION & CERTIFICATE SHOWCASE</span>
                </div>
                <span className="editorial-badge badge-accent">
                  {researchPhotos[activeSlide].badge} ({activeSlide + 1} /{" "}
                  {researchPhotos.length})
                </span>
              </div>

              <div className="photo-frame-wrapper">
                <img
                  src={researchPhotos[activeSlide].src}
                  alt={researchPhotos[activeSlide].title}
                  className="photo-slide-img"
                  loading="lazy"
                />

                {/* Navigation Overlays */}
                <div className="photo-nav-overlay">
                  <button
                    onClick={handlePrevSlide}
                    className="photo-nav-btn"
                    aria-label="Previous Slide"
                    title="Previous Slide"
                  >
                    <FiChevronLeft /> Prev
                  </button>

                  <button
                    onClick={handleNextSlide}
                    className="photo-nav-btn"
                    aria-label="Next Slide"
                    title="Next Slide"
                  >
                    Next <FiChevronRight />
                  </button>
                </div>
              </div>

              <div className="photo-showcase-footer">
                <div className="photo-caption-text">
                  <strong>{researchPhotos[activeSlide].title}:</strong>{" "}
                  {researchPhotos[activeSlide].caption}
                </div>

                <div className="photo-dots-indicator">
                  {researchPhotos.map((_, dotIdx) => (
                    <span
                      key={dotIdx}
                      className={`dot-indicator ${activeSlide === dotIdx ? "active" : ""
                        }`}
                      onClick={() => setActiveSlide(dotIdx)}
                      title={`Go to photo ${dotIdx + 1}`}
                    ></span>
                  ))}
                </div>
              </div>
            </div>

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
                    <FiZap
                      style={{
                        marginRight: "4px",
                        color: "var(--accent-burgundy-light)",
                      }}
                    />
                    {hack.achievement}
                  </div>
                  <span className="hackathon-date">{hack.date}</span>
                </div>

                <h3 className="hackathon-event-name">{hack.title}</h3>
                <div className="hackathon-subname">{hack.event}</div>

                <div className="hackathon-project-box">
                  <div className="hackathon-project-title">
                    <FiAward
                      style={{
                        marginRight: "6px",
                        color: "var(--accent-burgundy-light)",
                      }}
                    />
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

                <div className="d-flex align-items-center flex-wrap gap-3 mt-auto pt-2 border-top-subtle">
                  {hack.certLink && (
                    <a
                      href={hack.certLink}
                      target="_blank"
                      rel="noreferrer"
                      className="btn-editorial-link"
                      style={{
                        fontSize: "0.8rem",
                        color: "var(--accent-burgundy-light)",
                      }}
                    >
                      <FiFileText style={{ marginRight: "3px" }} /> Certificate
                    </a>
                  )}
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
                      style={{
                        fontSize: "0.8rem",
                        color: "var(--accent-burgundy-light)",
                      }}
                    >
                      <FiExternalLink /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </Col>
          ))}
        </Row>

        {/* ----------------- CERTIFICATIONS & PROOFS SECTION ----------------- */}
        <div className="d-flex justify-content-between align-items-md-center align-items-start flex-column flex-md-row gap-3 mb-4">
          <div>
            <div className="section-num">01.3 // VERIFIED CREDENTIALS</div>
            <h2 className="editorial-heading mb-0">
              Certifications & Technical Proofs
            </h2>
          </div>
          <span className="editorial-badge badge-accent">
            <FiShield style={{ marginRight: "4px" }} /> 20 Verified Documents
          </span>
        </div>

        <p className="editorial-subheading mb-4">
          Official certificates, industry badges, cloud specializations, and academic diplomas verifying technical competencies across AWS, Machine Learning, Data Structures, and Database Systems.
        </p>

        {/* Filter Bar */}
        <div className="cert-filter-wrap mb-4">
          <span className="filter-label">
            <FiFilter style={{ marginRight: "6px" }} /> Filter Domain:
          </span>
          <div className="filter-chips-list">
            {certCategories.map((cat, idx) => (
              <button
                key={idx}
                className={`filter-chip-btn ${activeCertFilter === cat ? "active" : ""
                  }`}
                onClick={() => setActiveCertFilter(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Certifications Grid */}
        <Row className="g-4">
          {filteredCertificates.map((cert) => (
            <Col lg={4} md={6} key={cert.id}>
              <div className="editorial-cert-card">
                <div className="cert-card-top">
                  <span className="editorial-badge badge-accent">{cert.badge}</span>
                  <span className="mini-project-id">{cert.id}</span>
                </div>

                <h3 className="cert-title mt-2">{cert.title}</h3>
                <div className="cert-issuer">
                  <FiCheckCircle style={{ color: "var(--accent-burgundy-light)" }} />
                  {cert.issuer}
                </div>

                <p className="cert-desc">{cert.description}</p>

                <div className="d-flex align-items-center justify-content-between mt-auto pt-3 border-top-subtle">
                  <span className="achievement-meta-text">{cert.type} · {cert.date}</span>
                  <a
                    href={cert.file}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-editorial-link"
                    style={{ fontSize: "0.85rem", color: "var(--accent-burgundy-light)" }}
                  >
                    <FiFileText style={{ marginRight: "4px" }} /> View Proof <FiExternalLink style={{ fontSize: "0.75rem", marginLeft: "2px" }} />
                  </a>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </main>
  );
}

export default Achievements;
