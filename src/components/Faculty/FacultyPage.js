import React, { Component } from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import "./faculty.css";

class FacultyPage extends Component {
  render() {
    const displayFaculty = [
      "Shashank Shahare",
      "Enola Holmes",
      "TidbitsJS",
      "Sherlock Holmes",
      "Bilbo Baggins",
      "Mr. Matrix",
    ].map((member, index) => (
      <Col xs={12} sm={6} md={4} lg={3} key={index + member}>
        <div className="our-team">
          <div className="picture">
            <Image src="https://picsum.photos/130/130?image=1027" fluid />
          </div>
          <div className="team-content">
            <h3 className="name">{member}</h3>
            <h4 className="title">Web Developer</h4>
          </div>
          <ul className="social">
            <li>
              <a className="facebook" href="#fb">
                <i className="fab fa-facebook-f"></i>
              </a>
            </li>
            <li>
              <a className="twitter" href="#twitter">
                <i className="fab fa-twitter"></i>
              </a>
            </li>
            <li>
              <a className="dribbble" href="#dribble">
                <i className="fab fa-dribbble"></i>
              </a>
            </li>
            <li>
              <a className="linkedin" href="#linkedin">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </li>
          </ul>
        </div>
      </Col>
    ));

    return (
      <section>
        <Container
          style={{ backgroundColor: "brown", color: "#fff" }}
          className="text-center py-5 aboutpage"
          fluid
        >
          <Row>
            <Col>
              <h1>Faculty</h1>
              <p>
                Home / <span style={{ color: "brown" }}>Faculty</span>
              </p>
            </Col>
          </Row>
        </Container>
        <Container className="mt-5 mb-5">
          <Row>{displayFaculty}</Row>
        </Container>
      </section>
    );
  }
}

export default FacultyPage;
