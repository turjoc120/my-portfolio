import React from "react";
import { Col, Row } from "react-bootstrap";

import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,

} from "react-icons/di";


function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        ex
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <i className="fab fa-html5"></i>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <i className="fab fa-bootstrap"></i>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <i class="fab fa-css3-alt"></i>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        MUI
      </Col>

    </Row>
  );
}

export default Techstack;
