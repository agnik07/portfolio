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

import airlineManagementSystem from "../../Assets/Airline_Management_System.png";
import digitalLocalShop from "../../Assets/DigitalLocalShop.png";
import skillgapai from "../../Assets/skillgapai.jpeg";
import hrworkflow from "../../Assets/hrworkflow.png";
import moodify from "../../Assets/moodify.png";
import sepmagent from "../../Assets/sepmagent.png";
import snapclass from "../../Assets/snapclass.png";
import musicmate from "../../Assets/musicmate.png";
import gym_coach from "../../Assets/gym_coach.png";


function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");

  const categories = [
    "All",
    "Python / ML",
    "AI & Agents",
    "Deep Learning",
    "Node.js / APIs",
  ];

  const projectsData = [
    {
      id: "01",
      title: "SkillGap AI",
      headline: "Unified AI-Powered Recruitment & Career Intelligence Platform",
      description:
        "An enterprise-grade recruitment and career acceleration platform featuring a 100% deterministic ATS scoring engine, single-source resume parsing pipeline, skill gap analysis, and Groq LLM-powered feedback.",
      techStack: [
        "Python",
        "FastAPI",
        "Groq LLM",
        "PyTorch",
        "Supabase",
        "React.js",
      ],
      role: "Full-Stack Architecture & Lead AI Engineer",
      img: skillgapai,
      ghLink: "https://github.com/agnik07/ATS-Resume-Analyzer",
      demoLink: null,
      reverse: false,
    },
    {
      id: "02",
      title: "MusicMate",
      headline: "Real-Time Music Taste Matching & Social Discovery Platform",
      description:
        "A social media platform for music lovers where users discover matching peers based on their music taste, exchange real-time messages via Socket.io, and explore personalized audio recommendations.",
      techStack: ["React.js", "Node.js", "Express", "Supabase", "Socket.IO", "Web Audio API"],
      role: "Full-Stack Architecture & Real-Time Engineering",
      img: musicmate,
      ghLink: "https://github.com/agnik07/MusicMate",
      demoLink: "https://musicmate-2okq.onrender.com/",
      reverse: true,
    },
    {
      id: "03",
      title: "AI Real Time Gym Coach",
      headline: "Live Pose Tracking & Proactive AI Voice Workout Coach",
      description:
        "An interactive computer vision system tracking exercise form via live webcam using MediaPipe, analyzing biomechanical angles, and generating dynamic Llama-3 voice coaching cues in real time.",
      techStack: [
        "Python",
        "Streamlit",
        "MediaPipe",
        "OpenCV",
        "Groq Llama 3",
        "gTTS",
        "SQLite",
      ],
      role: "Computer Vision & AI Coaching Engine Design",
      img: gym_coach,
      ghLink: "https://github.com/agnik07/AI-Real-Time-Gym-Coach",
      demoLink: "https://ai-real-time-gym-coach-agnik.streamlit.app/",
      reverse: false,
    },
    {
      id: "04",
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
      id: "05",
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
      id: "06",
      title: "SnapClass",
      headline: "Real-Time Automated Attendance & Biometric Recognition Platform",
      description:
        "A real-time face and audio captured attendance tracking application automating classroom sign-ins and storing verification logs securely on cloud infrastructure.",
      techStack: ["Streamlit", "Supabase", "FastAPI", "OpenCV", "Python"],
      role: "Full-Stack Architecture & AI Engineer",
      img: snapclass,
      ghLink: "https://github.com/nilancy04/DigitalLocalShop",
      demoLink: "https://snapclass-main-agnik.streamlit.app/",
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
      reverse: true,
    },
    {
      id: "09",
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
      reverse: false,
    },
  ];

  const miniProjectsData = [
    {
      id: "MP-01",
      title: "Agentic AI Suite & Multi-Agent Platform",
      category: "AI & Agents",
      description:
        "An ecosystem of autonomous AI agents built with the Agno framework and integrated with LLM inference engines (Groq gpt-oss-120b, OpenAI). Features single-agent tools as well as collaborative multi-agent teams.",
      techStack: ["Python", "Agno Framework", "Groq API", "OpenAI", "Streamlit"],
      features: [
        "YouTube Video Content Analyzer (YouTubeTools)",
        "Financial Market Analyst (YFinance & DuckDuckGo)",
        "Autonomous Travel Assistant with live context",
        "Multi-Lingual Agent Team with Master Coordinator",
      ],
      ghLink: "https://github.com/agnik07",
      demoLink: null,
      badge: "Agentic AI",
    },
    {
      id: "MP-02",
      title: "Autonomous Flappy Bird Agent (Deep RL)",
      category: "AI & Agents",
      description:
        "An end-to-end Deep Reinforcement Learning (DRL) agent trained to play Flappy Bird autonomously using Deep Q-Networks (DQN), Experience Replay, and hardware-accelerated training.",
      techStack: ["Python", "PyTorch", "Gymnasium", "Pygame", "NumPy"],
      features: [
        "Custom PyTorch DQN with state transition processing",
        "Experience Replay buffer to stabilize off-policy Q-learning",
        "Apple Silicon MPS & CUDA hardware acceleration",
        "Comparative Q-Learning & SARSA benchmarks",
      ],
      ghLink: "https://github.com/agnik07",
      demoLink: null,
      badge: "Reinforcement Learning",
    },
    {
      id: "MP-03",
      title: "Enterprise Retrieval-Augmented Generation (RAG)",
      category: "AI & Agents",
      description:
        "A production-ready Document Question-Answering pipeline leveraging vector embeddings and semantic retrieval to eliminate LLM hallucinations on custom PDF research documents.",
      techStack: ["LangChain", "ChromaDB", "SentenceTransformers", "Groq API", "PyMuPDF"],
      features: [
        "Automated document parsing using PyMuPDF & PyPDFLoader",
        "RecursiveCharacterTextSplitter with optimized overlap",
        "ChromaDB vector store & HuggingFace embeddings",
        "ChatGroq LLM context-window retrieval matching",
      ],
      ghLink: "https://github.com/agnik07",
      demoLink: null,
      badge: "Enterprise RAG",
    },
    {
      id: "MP-04",
      title: "Deep Vanilla GAN for Synthetic Image Generation",
      category: "Deep Learning",
      description:
        "A computer vision generative model built from scratch in PyTorch to synthesize photorealistic human face images trained on the CelebA dataset.",
      techStack: ["PyTorch", "Torchvision", "PIL", "Matplotlib", "Python"],
      features: [
        "Custom dataset loader & image processing pipeline (64x64)",
        "Adversarial Generator & Discriminator network architecture",
        "Minimax loss optimization with BCELoss & Adam",
        "Real-time visual evaluation & loss logging",
      ],
      ghLink: "https://github.com/agnik07",
      demoLink: null,
      badge: "Generative AI",
    },
    {
      id: "MP-05",
      title: "CreditWise – Supervised ML Loan Approval System",
      category: "Python / ML",
      description:
        "A full-stack Machine Learning classification project designed to predict credit eligibility and loan approval outcomes based on historical financial and applicant metadata.",
      techStack: ["Scikit-Learn", "XGBoost", "Pandas", "NumPy", "Seaborn"],
      features: [
        "Extensive Exploratory Data Analysis (EDA)",
        "Categorical encoding & StandardScaler feature scaling",
        "Benchmarked KNN, Random Forest, AdaBoost & XGBoost",
        "Evaluated via Confusion Matrices, ROC-AUC & F1-Score",
      ],
      ghLink: "https://github.com/agnik07",
      demoLink: null,
      badge: "Supervised ML",
    },
    {
      id: "MP-06",
      title: "Computer Vision & NLP Deep Neural Networks",
      category: "Deep Learning",
      description:
        "A collection of deep neural network implementations targeting image classification, natural language sentiment analysis, and tabular prediction tasks.",
      techStack: ["PyTorch", "Torchvision", "NLTK", "Pandas", "Scikit-Learn"],
      features: [
        "CIFAR-10 CNN with 2D convolutions & MaxPooling",
        "IMDB Sentiment Analysis RNN/LSTM with NLTK tokenization",
        "Multi-layer Perceptrons for DateFruit & Powerplant data",
      ],
      ghLink: "https://github.com/agnik07",
      demoLink: null,
      badge: "Deep Learning",
    },
    {
      id: "MP-07",
      title: "Unsupervised Learning & Anomaly Detection",
      category: "Python / ML",
      description:
        "Practical implementations of unsupervised learning algorithms for clustering complex data distributions and identifying non-linear anomalies.",
      techStack: ["Scikit-Learn", "NumPy", "Pandas", "Seaborn", "Matplotlib"],
      features: [
        "Isolation Forest tree-based outlier detection",
        "DBSCAN density clustering & noise point extraction",
        "Dimensionality reduction via PCA variance retention",
        "K-Means & Agglomerative Silhouette evaluation",
      ],
      ghLink: "https://github.com/agnik07",
      demoLink: null,
      badge: "Unsupervised ML",
    },
    {
      id: "MP-08",
      title: "Automated Web Scraping & Data Pipeline",
      category: "Python / ML",
      description:
        "An automated data collection framework designed to parse multi-page web applications, handle pagination, and extract structured data into clean tabular datasets.",
      techStack: ["Python", "BeautifulSoup4", "Requests", "Pandas", "Jupyter"],
      features: [
        "Programmatic HTTP request management with session handling",
        "Robust HTML DOM parsing across dynamic pagination",
        "Automated data cleaning, sanitization & CSV export",
      ],
      ghLink: "https://github.com/agnik07",
      demoLink: null,
      badge: "Data Pipelines",
    },
    {
      id: "MP-09",
      title: "Node.js Microservice CI/CD & Testing Suite",
      category: "Node.js / APIs",
      description:
        "A lightweight microservice setup demonstrating continuous integration, unit testing, and server automation best practices.",
      techStack: ["Node.js", "Express", "Jest", "JavaScript", "npm"],
      features: [
        "Express.js HTTP backend server for API endpoints",
        "Automated unit testing pipeline using Jest",
        "CI/CD workflow for automated test execution on commit",
      ],
      ghLink: "https://github.com/agnik07",
      demoLink: null,
      badge: "CI/CD & Testing",
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
            className={`project-editorial-row ${project.reverse ? "reverse" : ""
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
                className={`filter-chip-btn ${activeFilter === cat ? "active" : ""
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