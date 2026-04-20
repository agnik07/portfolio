import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import airlineManagementSystem from "../../Assets/Projects/Airline_Management_System.png";
import digitalLocalShop from "../../Assets/DigitalLocalShop.png";
import skillgapai from "../../Assets/skillgapai.jpeg";
import hrworkflow from "../../Assets/hrworkflow.png";
import moodify from "../../Assets/moodify.png";
import sepmagent from "../../Assets/sepmagent.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={digitalLocalShop}
              isBlog={false}
              title="Digital Local Shop"
              description="This project aims to revolutionize local shopping by providing real-time inventory updates, price comparisons, and community-driven reviews. Our platform bridges the gap between traditional shopping and modern e-commerce by making local commerce more transparent, accessible, and efficient."
              ghLink="https://github.com/nilancy04/DigitalLocalShop"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={skillgapai}
              isBlog={false}
              title="SkillGapAI"
              description="SkillGapAI is an AI-powered resume analysis platform that helps users identify missing skills, improve resumes, and align their profiles with job requirements. It uses intelligent parsing and skill-gap detection to provide personalized recommendations for career growth and better job opportunities."
              ghLink="https://github.com/agnik07/Skill-Booster-AI"            
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={hrworkflow}
              isBlog={false}
              title="HR Workflow"
              description="HRWorkflow is a smart human resource management platform designed to streamline recruitment, employee onboarding, leave management, and workforce operations. It helps organizations automate HR processes, improve employee experience, and manage records efficiently through a centralized system."              
              ghLink="https://github.com/agnik07/HR-Workflow-Designer"
              demoLink="https://hr-workflow-designer-beige.vercel.app/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={moodify}
              isBlog={false}
              title="Moodify"
              description="Moodify is an AI-powered mood-based recommendation platform that detects user emotions and suggests personalized movies, songs, books, and activities. It combines emotion analysis with an interactive chatbot experience to help users discover content that matches their current mood."              
              ghLink="https://github.com/agnik07/moodify-an-emotion-based-recommendation-system"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sepmagent}
              isBlog={false}
              title="AI Agent"
              description="Software Engineering AI Agent is an intelligent chatbot that answers software engineering queries using a hybrid AI pipeline. It first classifies whether a query belongs to the software domain using a machine learning model, then uses a Large Language Model to generate structured technical responses including explanations, algorithms, code, examples, and complexity analysis through an interactive Streamlit web interface."            
              ghLink="https://github.com/agnik07/Software_Engineering_ChatBot"
              demoLink="https://softwareengineeringchatbot-ljmntbbpy6izdg2zurbtuw.streamlit.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={airlineManagementSystem}
              isBlog={false}
              title="Airline Management System"
              description="An airline management system that allows users to book flights, view flight schedules, and manage airline staff."
              ghLink="https://github.com/agnik07/Airline-Management-System"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
