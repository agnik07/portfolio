import React, { useState } from "react";
import { Container } from "react-bootstrap";
import {
  FiDownload,
  FiExternalLink,
  FiFileText,
  FiZoomIn,
  FiZoomOut,
  FiMaximize2
} from "react-icons/fi";
import pdf from "../../Assets/Agnik_Dutta_SRM_.pdf";

function ResumeNew() {
  const [zoomLevel, setZoomLevel] = useState(1);

  const handleZoomOut = () => {
    setZoomLevel((prev) => Math.max(0.55, parseFloat((prev - 0.15).toFixed(2))));
  };

  const handleZoomIn = () => {
    setZoomLevel((prev) => Math.min(1.4, parseFloat((prev + 0.15).toFixed(2))));
  };

  const handleResetZoom = () => {
    setZoomLevel(1);
  };

  return (
    <main style={{ paddingTop: "90px", paddingBottom: "60px" }}>
      <Container>
        {/* Header Section & Action Bar */}
        <div className="d-flex justify-content-between align-items-md-center align-items-start flex-column flex-md-row gap-3 mb-4">
          <div>
            <div className="section-num mb-1">03 // CURRICULUM VITAE</div>
            <h1 className="editorial-heading mb-0">Check out my Resume</h1>
          </div>

          <div className="d-flex flex-wrap gap-2 align-items-center">
            <a
              href={pdf}
              download="Agnik_Dutta_Resume.pdf"
              className="btn-editorial-primary"
              style={{ padding: "8px 18px", fontSize: "0.88rem" }}
            >
              <FiDownload style={{ marginRight: "6px" }} /> Download Resume (PDF)
            </a>
            <a
              href={pdf}
              target="_blank"
              rel="noreferrer"
              className="btn-editorial-secondary"
              style={{ padding: "8px 18px", fontSize: "0.88rem" }}
            >
              <FiExternalLink style={{ marginRight: "6px" }} /> Open in New Tab
            </a>
          </div>
        </div>

        {/* Featured Full-Width Portfolio PDF Document Viewer */}
        <div className="pdf-showcase-wrapper">
          <div className="pdf-showcase-header">
            <div className="d-flex align-items-center gap-2">
              <FiFileText style={{ color: "var(--accent-burgundy-light)" }} />
              <span className="pdf-showcase-title">AGNIK DUTTA — CURRICULUM VITAE</span>
            </div>

            {/* Interactive Zoom Controls */}
            <div className="d-flex align-items-center gap-2 flex-wrap">
              <button
                className="btn-editorial-zoom"
                onClick={handleZoomOut}
                title="Zoom Out PDF"
                disabled={zoomLevel <= 0.55}
              >
                <FiZoomOut style={{ marginRight: "4px" }} /> Zoom Out ({Math.round(zoomLevel * 100)}%)
              </button>

              <button
                className="btn-editorial-zoom"
                onClick={handleZoomIn}
                title="Zoom In PDF"
                disabled={zoomLevel >= 1.3}
              >
                <FiZoomIn style={{ marginRight: "4px" }} /> Zoom In
              </button>

              {zoomLevel !== 1 && (
                <button
                  className="btn-editorial-zoom"
                  onClick={handleResetZoom}
                  title="Reset Zoom to 100%"
                >
                  <FiMaximize2 style={{ marginRight: "4px" }} /> Fit Page (100%)
                </button>
              )}

              <a
                href={pdf}
                target="_blank"
                rel="noreferrer"
                className="btn-editorial-link ms-2"
                style={{ fontSize: "0.8rem", color: "var(--accent-burgundy-light)" }}
              >
                <FiExternalLink style={{ marginRight: "4px" }} /> Fullscreen
              </a>
            </div>
          </div>

          <div
            className="resume-iframe-container"
            style={{
              height: `${Math.round(1100 * zoomLevel)}px`,
              transition: "height 0.3s cubic-bezier(0.16, 1, 0.3, 1)"
            }}
          >
            <div
              style={{
                width: "100%",
                height: "1100px",
                transform: `scale(${zoomLevel})`,
                transformOrigin: "top center",
                transition: "transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)"
              }}
            >
              <iframe
                src={`${pdf}#toolbar=0&navpanes=0&scrollbar=0&view=Fit`}
                title="Agnik Dutta Official Resume"
                className="resume-embed-frame"
              />
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
}

export default ResumeNew;
