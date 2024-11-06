import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Toolstack from "./Toolstack";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <h1 style={{ fontSize: "2.1em", paddingBottom: "20px", textAlign: "center" }}>
            Professional <strong className="purple">Experience</strong>
          </h1>

          {/* Experience - Caterpillar Inc. */}
          <Col md={10} style={tileStyle}>
            <h2 style={headerStyle}>Data Research Analyst, Caterpillar Inc.</h2>
            <p style={durationStyle}><strong>June 2024 – Present | Chicago, US</strong></p>
            <ul style={listStyle}>
              <li><strong>Data Solutions & Accessibility: </strong>Designed and implemented scalable data solutions, transforming raw data into user-friendly formats and increasing data adoption by 30%, empowering business units to uncover operational efficiencies.</li>
              <li><strong>Strategic Analytics & Insights: </strong>Provided expert consultation on analytic projects, aligning data insights with business objectives to foster a data-driven culture and expand strategic opportunities across departments.</li>
              <li><strong>Data Quality & Documentation Standards: </strong>Led data quality initiatives and standardized documentation, enhancing data reliability by 40% and ensuring transparent, consistent data practices that streamlined cross-departmental collaboration.</li>
              <li><strong>Process Automation & Predictive Modeling: </strong>Integrated automation tools and machine learning to reduce manual tasks by 50%, using predictive insights to analyze user behavior trends and proactively support data-driven strategies.</li>
            </ul>
          </Col>

          {/* Experience - Keplaar Esports */}
          <Col md={10} style={tileStyle}>
            <h2 style={headerStyle}>Data Analyst, Keplaar Esports</h2>
            <p style={durationStyle}><strong>Mar 2023 – May 2023 | Pune, IND</strong></p>
            <ul style={listStyle}>
              <li><strong>Comprehensive Data Analysis:</strong> Analyzed over <strong>4.1 million data points</strong> across diverse esports data streams, extracting actionable insights that guided data-driven strategic planning and operational improvements.</li>
              <li><strong>Cross-Functional Collaboration:</strong> Collaborated with interdisciplinary teams to develop innovative data visualization strategies, creating compelling presentations that influenced key stakeholder decisions.</li>
              <li><strong>Predictive Modeling for Engagement and ROI:</strong> Built predictive models in Python using <strong>Scikit-learn</strong>, increasing audience engagement by <strong>36%</strong> and boosting marketing ROI by <strong>25%</strong>.</li>
              <li><strong>Data Quality Assurance:</strong> Conducted rigorous data quality checks to identify and correct inconsistencies, ensuring accuracy and reliability in data-driven insights.</li>
            </ul>
          </Col>

          {/* Experience - Innodatatics */}
          <Col md={10} style={tileStyle}>
            <h2 style={headerStyle}>Analyst, Innodatatics</h2>
            <p style={durationStyle}><strong>Jan 2023 – Mar 2023 | Hyderabad, IND</strong></p>
            <ul style={listStyle}>
              <li><strong>Advanced Data Analysis:</strong> Spearheaded the analysis of complex datasets using sophisticated analytical tools, delivering actionable insights that optimized business processes.</li>
              <li><strong>Data-Driven Solutions and Collaboration:</strong> Led the development and execution of data-driven solutions, significantly improving operational workflows and efficiencies.</li>
              <li><strong>Enhanced Decision-Making:</strong> Improved organizational decision-making capabilities and operational efficiency by providing accurate, timely insights; strengthened data security.</li>
              <li><strong>Data Quality Assurance:</strong> Established and maintained rigorous data quality checks, ensuring consistency and reliability across processes.</li>
            </ul>
          </Col>

          {/* Experience - Internshala */}
          <Col md={10} style={tileStyle}>
            <h2 style={headerStyle}>Web Developer, Internshala</h2>
            <p style={durationStyle}><strong>Apr 2022 – Jun 2022 | India</strong></p>
            <ul style={listStyle}>
              <li><strong>Front-End Development:</strong> Contributed to the development of responsive web applications, ensuring cross-browser compatibility, mobile responsiveness, and optimal user experience.</li>
              <li><strong>Requirements Gathering:</strong> Assisted in gathering and analyzing requirements, collaborating with design and product teams to create visually engaging and user-friendly web interfaces.</li>
              <li><strong>Code Optimization and Debugging:</strong> Assisted in debugging and optimizing code, resolving technical issues to improve functionality, and ensuring high performance.</li>
              <li><strong>Quality Assurance and Testing:</strong> Conducted unit and integration testing to identify and resolve potential issues, contributing to reliable application performance.</li>
            </ul>
          </Col>
        </Row>

        <h1 className="project-heading">
          Professional <strong className="purple">Skillset</strong>
        </h1>
        <Techstack />

        <h1 className="project-heading">
          <strong className="purple">Tools</strong> I use
        </h1>
        <Toolstack />

        <Github />
      </Container>
    </Container>
  );
}

// Styles
const tileStyle = {
  backgroundColor: "#2b2b3d",
  border: "1px solid #6C63FF", // Accent color
  borderRadius: "10px",
  padding: "25px",
  marginBottom: "30px",
  boxShadow: "0 10px 20px rgba(0, 0, 0, 0.3)", // 3D shadow effect
  color: "#E0E0E0", // Light text for readability
  textAlign: "center", // Center-aligns all text
};

const headerStyle = {
  color: "#6C63FF", // Accent purple for headers
  fontWeight: "bold",
  fontSize: "1.5em",
};

const durationStyle = {
  color: "#C0C0C0", // Softer color for dates and location
  marginBottom: "20px",
  fontSize: "1em",
};

const listStyle = {
  textAlign: "left", // Aligns list text to the left for readability within the centered container
  paddingLeft: "20px", // Adds padding for list items
};

export default About;
