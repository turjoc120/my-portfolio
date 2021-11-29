import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import tiny from "../../Assets/Projects/tiny.jpg";
import urban from "../../Assets/Projects/urban.jpg";
import dental from "../../Assets/Projects/dental.jpg";


function Projects() {
  return (
    <Container fluid className="project-section" id="projects">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Projects </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've done recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tiny}
              isBlog={false}
              title="Tiny Homes (MERN) "
              description="Tiny House Selling Site With Admin Dashboard. Build with React.js, Node.js,MongoDB,Express.JS.Have features which allows admins to operate the complete website through admin dashboard , users can access different functionalities also  "
              link="https://github.com/turjoc120/tiny-houses-client"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={urban}
              isBlog={false}
              title="Urban Tours (MERN)"
              description="Users can Buy book Tours Online. Admins can control bookings and user activites build with React.js, Node.js,MongoDB,Express.JS,firebase. Have features which allows admins and users to access different functionalities"
              link="https://github.com/turjoc120/urban-travels-client"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dental}
              isBlog={false}
              title="Comfort Dental"
              description="Simple semi dynamic dentist website
              , Users can appointment .
              ,Simple Firebase authorization system,
              ,There are some protected routes for authorized users only
              . Build With React.js,React-Bootstrap, JavaScript, Firebase,React-Router"
              link="https://github.com/turjoc120/comfort-dental"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
