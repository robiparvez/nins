import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import college from '../../images/College Logo.png';
import './about.css';

export default function About() {
    const navigate = useNavigate();

    return (
        <section className='about py-5' id='about' style={{ backgroundColor: '#fff' }}>
            <Container>
                <Row>
                    <Col xs={10} lg={8} md={6} className='mx-auto my-5'>
                        <h1 className='text-capitalize'>
                            about the <br />
                            <strong className='banner-title'>University</strong>
                        </h1>
                        <p className='my-4 text-muted w-75 about-text' data-aos='fade-right'>
                            Sheikh-Ul-Alam Memorial Degree College, Budgam is the first institution of its kind in the district Budgam. The college while upholding the guiding mantra of famous Rishi Sheikh-Ul-Alam (RA) endeavours to bring about social, moral and spiritual transformation of the social set up by bringing it closer to the currents of prevalent knowledge.
                        </p>
                        {/* <a href='/about' className='btn btn-outline-primary text-uppercase learn-more' data-aos='fade-right'>
                            <Link to='/about'>learn more</Link>
                            <span>
                                <i style={{ marginLeft: 10 }} className='fas fa-arrow-right'></i>
                            </span>
                        </a> */}

                        <Link to='/about' className='btn btn-outline-primary text-uppercase learn-more' data-aos='fade-right'>
                            <button
                                style={{ textDecoration: 'none' }}
                                className='btn btn-link px-0'
                                onClick={e => {
                                    e.preventDefault();
                                    e.stopPropagation();
                                    navigate('/about');
                                }}>
                                Learn More
                            </button>
                            <span>
                                <i style={{ marginLeft: 10 }} className='fas fa-arrow-right'></i>
                            </span>
                        </Link>
                    </Col>
                    <Col xs={10} lg={4} md={6} className='mx-auto my-5 align-self-center' data-aos='fade-in'>
                        <div className='about-img_container'>
                            <Image src={college} fluid />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}
