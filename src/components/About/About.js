import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Know Who <strong className="purple">I'M</strong>
            </h1>
            <Card className="quote-card-view">
              <Card.Body>
                <blockquote className="blockquote mb-0">
                  <p style={{ textAlign: "justify" }}>
                    Hi Everyone, I am <span className="purple">Anurag Reddy Karnati</span>
                    from <span className="purple">Chicago, Illinois.</span>
                    <br />
                    I am pursuing my Master's in Computer Science at UIC.
                    <br />
                    I have completed my Bachelor's in Computer Science and Engineering from Amity University.
                    <br />
                    <br />
                    Apart from coding, some other activities that I love to do!
                  </p>
                  <ul>
                    <li className="about-activity">
                      <ImPointRight /> Playing Games
                    </li>
                    <li className="about-activity">
                      <ImPointRight /> Cooking
                    </li>
                    <li className="about-activity">
                      <ImPointRight /> Music
                    </li>
                  </ul>
                  <p style={{ color: "rgb(155 126 172)" }}>
                    "Strive to build things that make a difference!"{" "}
                  </p>
                  <footer className="blockquote-footer">Anurag</footer>
                </blockquote>
              </Card.Body>
            </Card>
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>

        <h1 className="project-heading">
          Professional <strong className="purple">Experience</strong>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
          <Col md={12} className="about-card">
            <div style={{ textAlign: "justify", marginBottom: "20px" }}>
              <h2 className="purple">Data Analyst, Keplaar Esports</h2>
              <p><strong>Mar 2023 – May 2023 | Pune, IND</strong></p>
              <ul>
                <li>Analyzed over 4.1 million data points across various data streams in the esports sector, extracting critical insights that directed data-driven strategic planning and operational enhancements.</li>
                <li>Partnered with interdisciplinary teams to innovate data visualization strategies, resulting in engaging presentations that influenced key stakeholder decisions.</li>
                <li>Resulted in improved player strategies, increased audience engagement by 36%, and enhanced marketing ROI around 25%.</li>
              </ul>
            </div>

            <div style={{ textAlign: "justify", marginBottom: "20px" }}>
              <h2 className="purple">Analyst, Innodatatics</h2>
              <p><strong>Jan 2023 – Mar 2023 | Hyderabad, IND</strong></p>
              <ul>
                <li>Spearheaded the analysis of complex datasets with sophisticated analytical tools, delivering actionable insights that optimized business processes.</li>
                <li>Drove the development and execution of data-driven solutions with a cross-functional team, markedly improving operational workflows and efficiencies.</li>
                <li>Resulted in enhanced decision-making capabilities, improved operational efficiency, and strengthened data security measures.</li>
              </ul>
            </div>

            <div style={{ textAlign: "justify", marginBottom: "20px" }}>
              <h2 className="purple">Web Developer, Internshala</h2>
              <p><strong>Apr 2022 – Jun 2022 | India</strong></p>
              <ul>
                <li>Contributed to the development of responsive websites and web applications, ensuring cross-browser compatibility and user engagement.</li>
                <li>Gathered client requirements and contributed to the development of visually appealing and user-friendly web solutions.</li>
                <li>Assisted in troubleshooting and resolving technical issues, optimizing website functionality and delivering high-quality projects.</li>
              </ul>
            </div>
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

export default About;
