import { useState } from 'react';
import { Container, Nav, Navbar as BSNavbar, NavbarBrand } from 'react-bootstrap';
import '../index.css';

const Navbar = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <BSNavbar expanded={expanded} expand="md" variant="dark" className="custom-navbar" collapseOnSelect>
      <Container>
        <NavbarBrand>Syed Safwan</NavbarBrand>
        <BSNavbar.Toggle
          aria-controls="basic-navbar-nav"
          className="ms-auto border-0"
          onClick={() => setExpanded(!expanded)}
        />
        <BSNavbar.Collapse
          id="basic-navbar-nav"
          className={`custom-collapse ${expanded ? 'show' : ''}`}
        >
          <Nav className="nav-links">
            <Nav.Link href="#home" onClick={() => setExpanded(false)}>Home</Nav.Link>
            <Nav.Link href="#projects" onClick={() => setExpanded(false)}>Projects</Nav.Link>
            <Nav.Link href="#expertise" onClick={() => setExpanded(false)}>Expertise</Nav.Link>
            <Nav.Link href="#contact" onClick={() => setExpanded(false)}>Hire Me</Nav.Link>
          </Nav>
        </BSNavbar.Collapse>
      </Container>
    </BSNavbar>
  );
};

export default Navbar;
