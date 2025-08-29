import { Col, Container, Row } from "react-bootstrap"
import HeroImg from '../assets/profilepicture.jpeg'
import '../index.css';

const Hero = () => {
  return (
    <div className="hero-section">
      <Container className="d-flex justify-content-center align-items-center mt-5">
        <Row className="align-items-center">
        <Col md={6} className="text-center mt-5">
            <img src={HeroImg} alt="Profile" width="300" className="img-fluid rounded-circle" />
          </Col>
          <Col md={6} className="text-center text-md-start mt-5">
            <h2>Hi, I'm Syed Safwan!</h2>
            <h1>DEVELOPER | <span className="designation">ERP CONSULTANT</span></h1>
            <p>Results-driven React Java Developer with expertise in Spring Boot, Java 11, React 18, and
              Axios. Skilled in designing scalable full-stack applications, API integration, and modern web development.
              Proficient in Microservices architecture, RESTful APIs, and database management. Experience in implementing,
              customizing, and optimizing Microsoft Dynamics 365 Business Central solutions. Skilled in ERP integrations,
              Power BI reporting, SQL, and data visualization, ensuring seamless financial and operational workflows</p>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Hero
