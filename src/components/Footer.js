import { Container, Row, Col } from "react-bootstrap";
import logo from "../assests/images/logo.jpg";
import navIcon1 from "../assests/images/nav-icon1.svg";
import navIcon4 from '../assests/images/navIcon4.png';

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
<a href="https://www.linkedin.com/in/swaraj-sambare-48b996157/" target="_blank" rel="noreferrer">
  <img src={navIcon1} alt="LinkedIn" />
</a>
<a href="https://github.com/SwarajSam98" target="_blank" rel="noreferrer">
  <img src={navIcon4} alt="GitHub" />
</a>
            </div>
            <p>Copyright 2025. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}