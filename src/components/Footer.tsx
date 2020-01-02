import React, { FC } from 'react';
import { NavLink as Link } from 'react-router-dom';
import { Container, Row, Col, Nav, NavItem, NavLink } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

export const Footer: FC = () => {
  return (
    <footer className="page-footer mt-4">
      <Container py={3}>
        <Row>
          <Col lg={6} md={6}>
            <h3>Site Map</h3>
            <Nav>
              <Col>
                <NavItem>
                  <NavLink tag={Link} exact to="/" activeClassName="active" className="wack">
                    Home
                  </NavLink>
                </NavItem>
              </Col>
              <Col>
                <NavItem>
                  <NavLink tag={Link} to="/projects" activeClassName="active" className="wack">
                    Projects
                  </NavLink>
                </NavItem>
              </Col>
              <Col>
                <NavItem>
                  <NavLink tag={Link} to="/resume" activeClassName="active" className="wack">
                    Resume
                  </NavLink>
                </NavItem>
              </Col>
              <Col>
                <NavItem>
                  <NavLink tag={Link} to="/about" activeClassName="active" className="wack">
                    About
                  </NavLink>
                </NavItem>
              </Col>
            </Nav>
          </Col>
          <Col lg={6} md={6}>
            <h3>External Links</h3>
            <Nav>
              <Col>
                <NavItem>
                  <NavLink
                    href="https://github.com/bmiddha"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon icon={faGithub} size="lg" /> GitHub
                  </NavLink>
                </NavItem>
              </Col>
            </Nav>
          </Col>
        </Row>
      </Container>
      <div className="copyright text-center bg-dark text-white py-2 mt-2">
        Copyright &copy; {new Date().getFullYear()} Bharat Middha
      </div>
    </footer>
  );
};

export default Footer;
