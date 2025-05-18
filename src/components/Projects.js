import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assests/images/project_image1.png";
import projImg2 from "../assests/images/project_image2.jpg";
import projImg3 from "../assests/images/project_image3.jpg";
import colorSharp2 from "../assests/images/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Job Management System",
      description: "A web application to manage and track job applications, built using modern web technologies.",
      imgUrl: projImg1,
      link: "https://github.com/SwarajSam98/Job_Management"
    },
    {
      title: "TripBin - Your Travel Companion",
      description: "An interactive travel companion app to plan and organize trips effectively.",
      imgUrl: projImg2,
      link: "https://github.com/SwarajSam98/TripBin---Your-Travel-Companion-"
    },
    {
      title: "Decoding YouTube's Pulse",
      description: "A data-driven project analyzing trends and patterns in YouTube videos.",
      imgUrl: projImg3,
      link: "https://github.com/SwarajSam98/Decoding_Youtubes_Pulse"
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Projects</h2>
                  <p>Explore some of the projects I have worked on, ranging from web applications to data analysis tools. Each project reflects my skills in development and problem-solving.</p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first">Featured Projects</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Web Applications</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Data Analysis</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => {
                            return (
                              <Col md={4} key={index}>
                                <a href={project.link} target="_blank" rel="noopener noreferrer">
                                  <ProjectCard
                                    {...project}
                                  />
                                </a>
                              </Col>
                            )
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <p>Web applications are essential tools for modern businesses. Here are some applications I've built, focusing on usability and efficient data management.</p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>Data analysis projects help extract insights from data. Below are projects where I applied data science techniques to uncover trends and patterns.</p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              }
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="Background Design"></img>
    </section>
  )
}
