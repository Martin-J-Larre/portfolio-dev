import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useTranslation } from 'react-i18next';

import { techSkills2 } from '../../helpers/techSkills2';
import './skills.css';
import colorSharp2 from '../../assets/img/color-sharp2.png';

export const Skills = () => {
  const [t, i18n] = useTranslation('global');

  const responsive = {
    largeDesktop: {
      breakpoint: { max: 1645, min: 1200 },
      items: 6
    },
    desktop: {
      breakpoint: { max: 1200, min: 800},
      items: 5
    },
    tablet: {
      breakpoint: { max: 800, min: 464 },
      items: 3
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  return (
    <section className="skills" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill--box">
              <h2>
                Skills
              </h2>
              <p>{t("skills.text")}</p>
              <Carousel 
                responsive={ responsive } 
                infinite={ true } 
                className="skill-slider"
                autoPlay={ true } 
                autoPlaySpeed={4000}
                >
                
                  {
                    techSkills2.map((tech, index) => {
                      return (
                        <div key={index}>
                          <div className="item">
                            <img src={tech.iconImg} className="techIcons"/>
                          </div>
                          <h5 className="tech-name">{tech.name}</h5>
                        </div>
                        )
                    })
                  }
                
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
      <img src={ colorSharp2 } className="background-image-right"/>
    </section>
  )
}
