import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import homeLogo from "../../Assets/Ninja-bro.png";
import Skills from "../About/Skills";
import Connect from "../Contact/Connect";
import Particle from "../Particle";
import Projects from "../Projects/Projects";
import Home2 from "./Home2";
import Type from "./Type";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content" >
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There! <span className="wave" role="img" aria-labelledby="wave">🐱‍🚀</span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> TURJO CHOWDHURY</strong>
              </h1>

              <div style={{ paddingLeft: 50, textAlign: "left" }}>
                <Type />
              </div>
              <div style={{ paddingLeft: 50, textAlign: "left", }}>
                <Button href="https://drive.google.com/file/d/1u2uLXj2UvzHvIgMoKIBCOq89woa5_q3s/view?fbclid=IwAR2QNq75ul4BjBTLBdSHSN4bjhozIlEZ0VdfeUiYRy1Vww_Qo-4W_RdItWQ" target="_blank" variant="primary" className=" mt-5 px-5 py-3  rounded-pill">See My Resume <i className="fas fa-chevron-right"></i></Button>
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img src={homeLogo} alt="home pic" className="img-fluid wave" />
            </Col>
          </Row>

        </Container>
      </Container>
      <Home2 />
      <Skills></Skills>
      <Projects></Projects>
      <Connect></Connect>

    </section>
  );
}

export default Home;
