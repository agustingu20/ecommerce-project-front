import './navBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHeart, faMessage, faShoppingCart, faUserAlt,
} from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import {
  Button, Container, Form, Nav, Navbar,
} from 'react-bootstrap';

const NavBar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className='w-100'>
            <Form className="d-flex w-100 px-5">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Nav>
          <Nav className='px-4'>
            <div className='mx-2'>
                <FontAwesomeIcon icon={faUserAlt} className="userIcon" />
                <p className='mb-0'>Perfil</p>
            </div>
            <div className='mx-2'>
                <FontAwesomeIcon icon={faMessage} className="userIcon" />
                <p className='mb-0'>Mensajes</p>
            </div>
            <div className='mx-2'>
                <FontAwesomeIcon icon={faHeart} className="userIcon" />
                <p className='mb-0'>Favoritos</p>
            </div>
            <div className='mx-2'>
                <FontAwesomeIcon icon={faShoppingCart} className="userIcon" />
                <p className='mb-0'>Carrito</p>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
