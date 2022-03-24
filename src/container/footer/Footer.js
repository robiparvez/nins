import React, { Component } from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import college from '../../images/clogo.png';
import './footer.css';
import MapContainer from './MapContainer';

export class Footer extends Component {
    render() {
        return (
            <footer className='site-footer' id='contact' style={{ backgroundColor: '#fff' }}>
                <Container fluid>
                    <Row>
                        <MapContainer />
                    </Row>
                    <Row className='mt-5'>
                        <Col sm={6} md={4} data-aos='fade-right' className='mx-auto  d-flex justify-content-start align-items-center flex-column flex-wrap'>
                            <Image src={college} fluid />
                            <h4 className='mt-3 text-center'>
                                University of <br /> York
                            </h4>
                        </Col>
                        <Col sm={6} md={4} data-aos='fade-left' className='d-flex mt-3 justify-content-start  flex-column flex-wrap'>
                            <h3 className='mb-2 text-capitalize text-start'>contact us</h3>
                            <div className='justify-content-start align-items-center flex-column' style={{ borderTop: '2px solid green', paddingTop: '0.5rem' }}>
                                <p className='d-flex flex-wrap'>
                                    <span className='mr-4 footer-icon'>
                                        <i className='fas fa-map'></i>
                                    </span>
                                    <span>221 baker street, London</span>
                                </p>
                                <p className='d-flex flex-wrap'>
                                    <span className='mr-4 footer-icon'>
                                        <i className='fas fa-phone'></i>
                                    </span>
                                    <span>+91 9834905510 </span>
                                </p>
                                <p className='d-flex flex-wrap'>
                                    <span className='mr-4 footer-icon'>
                                        <i className='fas fa-envelope'></i>
                                    </span>
                                    <span>enolaholmes@email.com</span>
                                </p>
                            </div>
                        </Col>
                        <Col sm={6} md={4} data-aos='fade-left' className='mx-auto mt-3 d-flex justify-content-start  flex-column flex-wrap'>
                            <h3 className='mb-2'>NewsLetter</h3>

                            <div style={{ borderTop: '2px solid green', paddingTop: '0.5rem' }}>
                                Enter your email address to get the latest University news, special events and student activities delivered right to your inbox.
                                <div className='input-group mb-3 mt-3 is-warning'>
                                    <input type='email' className='form-control' placeholder='Email' aria-label='Email' aria-describedby='basic-addon2' />
                                    <div className='input-group-append'>
                                        <span className='input-group-text' style={{ backgroundColor: 'darkorange', color: 'white' }} id='basic-addon2'>
                                            subscribe
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <hr />
                </Container>
                <Container>
                    <Row>
                        <Col md={8} sm={6} xs={12}>
                            <p className='copyright-text'>
                                Copyright &copy; 2017 All Rights Reserved by
                                <a href='#copyright'> Company</a>.
                            </p>
                        </Col>
                        <Col md={4} sm={6} xs={12}>
                            <ul className='social-icons'>
                                <li>
                                    <a className='facebook' href='#fb'>
                                        <i className='fab fa-facebook-f'></i>
                                    </a>
                                </li>
                                <li>
                                    <a className='twitter' href='#twitter'>
                                        <i className='fab fa-twitter'></i>
                                    </a>
                                </li>
                                <li>
                                    <a className='dribbble' href='#dribble'>
                                        <i className='fab fa-dribbble'></i>
                                    </a>
                                </li>
                                <li>
                                    <a className='linkedin' href='#linkedin'>
                                        <i className='fab fa-linkedin-in'></i>
                                    </a>
                                </li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </footer>
        );
    }
}

export default Footer;
