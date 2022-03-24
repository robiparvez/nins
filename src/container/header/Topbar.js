import React from 'react';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import logo from '../../images/logo.png';
import './header.css';

export default function Topbar() {
    return (
        <Navbar expand='lg' className='px-4 text-capitalize' style={{ backgroundColor: '#fff' }}>
            <Navbar.Brand href='#home'>
                <img src={logo} alt='logo' />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls='basic-navbar-nav' />
            <Navbar.Collapse id='basic-navbar-nav'>
                <Nav className='mx-auto'>
                    <LinkContainer to="/">
                        <Nav.Link>Home</Nav.Link>
                    </LinkContainer>

                    <NavDropdown title='Administration' id='administration-dropdown'>
                        <LinkContainer to="/courses">
                            <NavDropdown.Item>Courses</NavDropdown.Item>
                        </LinkContainer>
                        <LinkContainer to="/gallery">
                            <NavDropdown.Item>Gallery</NavDropdown.Item>
                        </LinkContainer>
                        <LinkContainer to="/events">
                            <NavDropdown.Item>Events</NavDropdown.Item>
                        </LinkContainer>
                    </NavDropdown>

                    <LinkContainer to="/faculty">
                        <Nav.Link>Faculty</Nav.Link>
                    </LinkContainer>

                    <LinkContainer to="/about">
                        <Nav.Link>About</Nav.Link>
                    </LinkContainer>

                    <LinkContainer to="/contact">
                        <Nav.Link>Contact</Nav.Link>
                    </LinkContainer>
                </Nav>
                {/* <Form className='d-flex'>
                    <FormControl type='text' placeholder='Search' className='mr-sm-2' />
                    <Button variant='outline-success enroll-btn'>Enroll</Button>
                </Form> */}
            </Navbar.Collapse>
        </Navbar>
    );
}