import React, { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";

export class VideoGallery extends Component {
  render() {
    return (
      <Container fluid>
        <Row>
          <Col className="mx-auto text-center mt-5 mb-5">
            <h1 style={{ color: "brown" }}>Videography</h1>
          </Col>
        </Row>
        <Row>
          <Col lg={4} sm={6} className="mx-auto">
            <iframe
              src="https://www.youtube.com/embed/E7wJTI-1dvQ"
              frameBorder="1"
              allow="autoplay; encrypted-media"
              allowFullScreen
              title="video"
              className="video-frame"
            />
          </Col>
          <Col lg={4} sm={6} className="mx-auto">
            <iframe
              src="https://www.youtube.com/embed/E7wJTI-1dvQ"
              frameBorder="1"
              allow="autoplay; encrypted-media"
              allowFullScreen
              title="video"
              className="video-frame"
            />
          </Col>
          <Col lg={4} sm={6} className="mx-auto">
            <iframe
              src="https://www.youtube.com/embed/E7wJTI-1dvQ"
              frameBorder="1"
              allow="autoplay; encrypted-media"
              allowFullScreen
              title="video"
              className="video-frame"
            />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default VideoGallery;
