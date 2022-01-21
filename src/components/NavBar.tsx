import React, { FC, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

export const NavBar: FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="lg">
        <Link href="/" passHref>
          <NavbarBrand>
            <Image layout="fixed" src="/images/logo120.png" height={35} width={35} alt="logo" />
          </NavbarBrand>
        </Link>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav navbar className="mr-auto">
            <NavItem>
              <Link href="/" passHref>
                <NavLink className="wack">Home</NavLink>
              </Link>
            </NavItem>
            <NavItem>
              <Link href="/projects" passHref>
                <NavLink className="wack">Projects</NavLink>
              </Link>
            </NavItem>
            <NavItem>
              <Link href="/resume" passHref>
                <NavLink className="wack">Resume</NavLink>
              </Link>
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
