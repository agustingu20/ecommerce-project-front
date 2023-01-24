import './navBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import {
  Button,
  Container,
  Form,
  Nav,
  Navbar,
  NavDropdown,
} from 'react-bootstrap';
import fontAwesomeIcons from '../../assets/fontAwesomeIcons';

const NavBar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="w-100">
            <Form className="d-flex w-100 px-5">
              <Form.Control
                type="search"
                placeholder="Search"
                className="inputSearch"
                aria-label="Search"
              />
              <NavDropdown
                id="nav-dropdown-dark-example"
                title="Dropdown"
                menuVariant="light"
                className='searchDropdown'
              >
                <NavDropdown.Item>Action</NavDropdown.Item>
              </NavDropdown>
              <Button className='searchButton'>Search</Button>
            </Form>
          </Nav>
          <Nav className="px-4">
            {fontAwesomeIcons.map((fontIcon) => (
              <button className="mx-2 awesomeIcon" key={fontAwesomeIcons.indexOf(fontIcon)}>
                <FontAwesomeIcon icon={fontIcon.icon} className="userIcon" />
                <p className="mb-0">{fontIcon.description}</p>
              </button>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
