import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assests/images/header-img.svg";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = ["Full-Stack Developer", "Web Designer", "UI/UX Enthusiast"];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  };

  const handleConnect = (platform) => {
    const urls = {
      github: "https://github.com/SwarajSam98",
      linkedin: "https://www.linkedin.com/in/swaraj-sambare-48b996157/",
    };
    window.open(urls[platform], "_blank");
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <span className="tagline">Welcome to My Portfolio</span>
                  <h1>{`Hi! I'm Swaraj`} <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Full-Stack Developer", "Web Designer", "UI/UX Enthusiast" ]'><span className="wrap">{text}</span></span></h1>
                  <p>I am a passionate developer with a keen interest in creating intuitive and efficient web applications. My projects span across full-stack development, interactive design, and data analysis. Let's connect to collaborate and create something amazing!</p>
                  <div className="button-group">
                    <button onClick={() => handleConnect('github')}>GitHub <ArrowRightCircle size={25} /></button>
                    <button onClick={() => handleConnect('linkedin')} style={{ marginLeft: '10px' }}>LinkedIn <ArrowRightCircle size={25} /></button>
                  </div>
                </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={headerImg} alt="Profile Header" />
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
