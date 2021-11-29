import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/home2.jpg";
import Tilt from "react-parallax-tilt";


function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              When I discovered web development in college, I realized it would be the perfect fit for me .
              <br />
              <br />I am fluent in languages like
              <i>
                <b className="purple"> HTML,CSS, Javascript  </b>
              </i>
              <br />
              <br />
              My field of Interest's are Learninmg new&nbsp;
              <i>
                <b className="purple">Technologies </b> I’ve always been someone who has .{" "}
                <b className="purple">
                  both a creative and a logical side
                </b>
              </i>
              <br />
              <br />
              I'm a student right now contributing to various open-sourced projects and working on quite a few personal projects.I also apply my passion for developing products
              with <b className="purple">Node.js</b> and
              <i>
                <b className="purple">
                  {" "}
                  Modern Javascript Library and Frameworks
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="purple"> React.js</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" style={{ borderRadius: "50%" }} alt="avatar" />
            </Tilt>
          </Col>
        </Row>

      </Container>
    </Container>
  );
}
export default Home2;
