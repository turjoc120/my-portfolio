import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";

import { Link } from "react-router-dom";
import { CgArrowBottomLeft, CgArrowBottomLeftO, CgChevronLeft, CgChevronRight, CgFormatSlash, CgGitFork } from "react-icons/cg";
import { ImBlog } from "react-icons/im";
import {

  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";
import { HashLink } from "react-router-hash-link";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        <Navbar.Brand as={Link} to="/">
          <CgChevronLeft style={{ marginBottom: "2px" }} /> T&nbsp;U&nbsp;R&nbsp;J&nbsp;O<CgFormatSlash style={{ marginBottom: "2px" }} /><CgChevronRight style={{ marginBottom: "2px" }} />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto" defaultActiveKey="#home">

            <Nav.Item>
              <Nav.Link
                as={HashLink}
                to="/#about"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineUser style={{ marginBottom: "2px" }} /> About
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={HashLink}
                to="/#projects"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineFundProjectionScreen
                  style={{ marginBottom: "2px" }}
                />{" "}
                Projects
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={HashLink}
                to="/#contact"
                onClick={() => updateExpanded(false)}
              >
                <i style={{ marginBottom: "2px" }} className="far fa-address-book"></i> &nbsp;Contact
              </Nav.Link>
            </Nav.Item>





          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
