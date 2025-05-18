import meter1 from "../assests/images/meter1.svg";
import meter2 from "../assests/images/meter2.svg";
import meter3 from "../assests/images/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assests/images/color-sharp.png";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>I am proficient in building robust web applications, designing intuitive user interfaces, and performing data analysis to derive insights.<br />Here are some of the key skills I bring to the table:</p>
              <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                <div className="item">
                  <img src={meter1} alt="Web Development" />
                  <h5>Full-Stack Development</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="Front-End Development" />
                  <h5>Front-End Development</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="Back-End Development" />
                  <h5>Back-End Development</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="UI/UX Design" />
                  <h5>UI/UX Design</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="Database Management" />
                  <h5>Database Management</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="Data Analysis" />
                  <h5>Data Analysis</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="API Integration" />
                  <h5>API Integration</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="Git & Version Control" />
                  <h5>Git & Version Control</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Background" />
    </section>
  )
}
