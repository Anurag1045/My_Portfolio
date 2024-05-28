import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Uber from "../../Assets/Projects/Uber.jpeg";
import Water from "../../Assets/Projects/Waterjpg.jpg";
import Boston from "../../Assets/Projects/Boston.jpg";
import Spotify from "../../Assets/Projects/Spotify_rtr_img.jpg";
import Car from "../../Assets/Projects/Car.jpg";
import supermarket from "../../Assets/Projects/super_market.jpg";
import Netflix from "../../Assets/Projects/Netflix.jpg";
import ECommerce from "../../Assets/Projects/Ecommerce.png";

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
              imgPath={Spotify}
              isBlog={false}
              title="Spotify"
              description="The purpose of this notebook is to analyze the dataset in place for top 50 Songs in Spotify. Per the initial data analysis, we may think of using appropriate machine learning algorithms to see patterns in the data if any Overall looking at the description of the data, it seems to be both a supervised as well as unsupervised learning problem, but we'll starting finding useful information first out of our data, post which we will focus on model building and its improvement.
              The idea is to overall explore the data and find as much information as possible."
              ghLink="https://github.com/Anurag1045/Spotify_Top_50_Data_Analysis"
            />
          </Col>
          

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Netflix}
              isBlog={false}
              title="Netflix Dashboard"
              description="Developed an interactive Netflix Dashboard in Tableau to visualize key performance metrics, user engagement, and content analysis. The dashboard provides deep insights into viewer preferences, content popularity, and subscription trends. Leveraged advanced Tableau features such as calculated fields, parameter controls, and custom visualizations to enhance data exploration. This project demonstrates proficiency in data visualization and the ability to transform complex data into actionable insights."
              ghLink="https://github.com/Anurag1045/Netflix-Dashboard"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={supermarket}
              isBlog={false}
              title="Super Market Sales"
              description="I spearheaded a dynamic sales analysis initiative for a prominent supermarket chain, utilizing advanced data analytics to dissect sales patterns and consumer behaviors. Through a meticulous examination of market dynamics, product placement optimization, and customer preferences, I delivered actionable insights that empowered strategic decision-making for the sales and marketing teams. Implementing data-driven strategies resulted in a substantial increase in both sales and customer satisfaction, showcasing my proficiency in translating complex datasets into impactful business solutions within the competitive retail landscape."
              ghLink="https://github.com/Anurag1045/Super_Market_Sales"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ECommerce}
              isBlog={false}
              title="ECommerce Dashboard"
              description="A passionate Data Scientist specializing in healthcare analytics with strong expertise in machine learning, deep learning, and data visualization. Proficient in Python, Power BI, and web scraping. Successfully developed a comprehensive E-Commerce Dashboard and cricket team selection tool using advanced data analysis techniques. Seeking opportunities to leverage analytical skills in innovative projects."
              ghLink="https://github.com/Anurag1045/ECommerce-PowerBI"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Boston}
              isBlog={false}
              title="Boston House Price Prediction"
              description="I played a pivotal role in the Boston house prediction project, where I leveraged advanced machine learning algorithms to analyze real estate data. By applying sophisticated statistical techniques, I identified key factors influencing housing prices in the Boston area. The project culminated in the successful development and deployment of a predictive model, providing valuable insights for homeowners, real estate professionals, and investors. My expertise in translating complex housing market dynamics into actionable predictions underscores my contribution to the project's success in navigating the intricacies of the real estate landscape."
              ghLink="https://github.com/Anurag1045/Boston_Housing_Pricing"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Uber}
              isBlog={false}
              title="Uber Data Analysis"
              description="I led a comprehensive data analysis project centered around Uber's operational data, employing advanced analytics to extract meaningful insights. Through a meticulous examination of ride patterns, driver behaviors, and geographic trends, I uncovered valuable information that contributed to strategic decision-making for the company. My role involved implementing data-driven strategies, resulting in optimized routes, improved service efficiency, and enhanced customer experiences. This project showcased my ability to navigate and analyze large-scale datasets within the dynamic context of the ride-sharing industry, ultimately contributing to the improvement of Uber's operational effectiveness."
              ghLink="https://github.com/Anurag1045/Uber_Data_Analysis"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Car}
              isBlog={false}
              title="Car Price Prediction"
              description="In the domain of car price prediction, I took charge of a data analysis initiative where I harnessed machine learning algorithms to decipher the intricate factors influencing car prices. By delving into diverse datasets encompassing vehicle specifications, market trends, and consumer preferences, I developed a robust predictive model. This model not only accurately forecasted car prices but also provided valuable insights for stakeholders in the automotive industry. My adeptness in leveraging data-driven methodologies showcased a keen understanding of market dynamics, contributing to the project's success in offering actionable predictions for optimal pricing strategies and informed decision-making within the competitive landscape of the automotive market."
              ghLink="https://github.com/Anurag1045/Car-Price-Prediction"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Water}
              isBlog={false}
              title="Water Quality Prediction"
              description="I spearheaded a water quality analysis project, utilizing advanced analytical techniques to assess and interpret extensive datasets related to water parameters. By focusing on factors such as chemical composition, pollutant levels, and environmental variables, I successfully identified trends and anomalies affecting water quality. The project culminated in the development of a comprehensive analysis report, offering valuable insights for environmental policymakers and stakeholders. My proficiency in leveraging data-driven methodologies showcased a commitment to ensuring water safety and sustainability, underscoring the project's contribution to informed decision-making for environmental conservation and public health."
              ghLink="https://github.com/Anurag1045/Water_Quality_Analysis"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
