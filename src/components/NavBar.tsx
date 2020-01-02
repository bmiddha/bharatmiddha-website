import React, { FC, useState } from 'react';
import { NavLink as Link } from 'react-router-dom';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

export const NavBar: FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand tag={Link} exact to="/" activeClassName="active">
          <img src="/images/logo120.png" height="35px" alt="logo" />
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav navbar className="mr-auto">
            <NavItem>
              <NavLink tag={Link} exact to="/" activeClassName="active" className="wack">
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/projects" activeClassName="active" className="wack">
                Projects
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/resume" activeClassName="active" className="wack">
                Resume
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/about" activeClassName="active" className="wack">
                About
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/blog" activeClassName="active" className="wack">
                Blog
              </NavLink>
            </NavItem>
          </Nav>
          <Nav navbar className="ml-auto">
            <NavItem>
              <NavLink href="https://github.com/bmiddha" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} size="lg" /> GitHub
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default NavBar;
