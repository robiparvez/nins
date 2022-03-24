import React, { useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import Gallery from 'react-grid-gallery';
import { Link } from 'react-router-dom';
import { IMAGES } from './Data';

export default function PhotoGallery() {
    // const [imageData, setImageData] = useState(IMAGES.slice(0, 10));
    const [imageData] = useState(IMAGES.slice(0, 10));
    return (
        <section id='gallary' style={{ backgroundColor: '#fff' }}>
            <Container fluid className='message-container'>
                <Row>
                    <Col className='mx-auto my-3 text-center text-capitalize'>
                        <h1>
                            University <strong style={{ color: 'brown' }}>Gallery</strong>
                        </h1>
                    </Col>
                </Row>
                <Gallery backdropClosesModal={true} images={imageData} />
                <div className='text-center'>
                    <Button variant='danger' data-aos='zoom-in' style={{ margin: '20px 0', color: '#fff' }} className=' btn-gallery'>
                        <Link to='/gallery'>View More</Link>
                    </Button>
                </div>
            </Container>
        </section>
    );
}
