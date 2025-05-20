// src/components/Resume.js
import React from "react";
import { Container } from "react-bootstrap";

const Resume = () => {
  return (
    <section id="resume" className="resume-section">
      <Container className="text-center py-5">
        <h2 className="mb-4">My Resume</h2>
        
       <iframe
        src={`${process.env.PUBLIC_URL}/Swaraj_Sambare_Resume.pdf`}
        width="100%"
        height="600px"
        title="Resume Preview"
        style={{ border: "1px solid #ccc", borderRadius: "8px" }}
        ></iframe>

<div className="mt-4">
  <a
    href={`${process.env.PUBLIC_URL}/Swaraj_Sambare_Resume.pdf`}
    download="Swaraj_Sambare_Resume.pdf"
    className="btn btn-primary"
  >
            Download Resume
          </a>
        </div>
      </Container>
    </section>
  );
};

export default Resume;
