import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import {
    AiFillGithub,
    AiOutlineTwitter,
    AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

const Connect = () => {
    return (
        <Container className="py-5" id="contact">
            <Row>
                <Col md={12} className="home-about-social">
                    <h1>FIND ME ON</h1>
                    <p>
                        Feel free to <span className="purple">connect </span>with me
                    </p>
                    <ul className="home-about-social-links">
                        <li className="social-icons">
                            <a
                                href="https://github.com/turjoc120"
                                target="_blank"
                                rel="noreferrer"
                                className="icon-colour  home-social-icons"
                            >
                                <AiFillGithub />
                            </a>
                        </li>
                        <li className="social-icons">
                            <a
                                href="https://www.linkedin.com/in/turjoc120/"
                                target="_blank"
                                rel="noreferrer"
                                className="icon-colour  home-social-icons"
                            >
                                <FaLinkedinIn />
                            </a>
                        </li>
                        <li className="social-icons">
                            <a
                                href="https://twitter.com/"
                                target="_blank"
                                rel="noreferrer"
                                className="icon-colour  home-social-icons"
                            >
                                <AiOutlineTwitter />
                            </a>
                        </li>

                        <li className="social-icons">
                            <a
                                href="https://www.instagram.com/"
                                target="_blank"
                                rel="noreferrer"
                                className="icon-colour home-social-icons"
                            >
                                <AiFillInstagram />
                            </a>
                        </li>
                    </ul>
                </Col>
            </Row>
        </Container>
    );
};

export default Connect;