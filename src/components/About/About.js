import { Container, Row, Col } from "react-bootstrap";
import { useTranslation } from 'react-i18next';
import { AboutIntervalText } from './AboutIntervalText'
import colorSharp from "../../assets/img/color-sharp.png";
import "./about.css";

export const About = () => {
  const [t, i18n] = useTranslation('global');
  
    return (
        <section className="about" id="about">
            <Container>
                <div className="about--box">
                    <h2>{t("about.title")}</h2>
                
                <Row>
                    <Col xs={ 12 } md={ 6 } xl={ 6 } className='aling-items-center display'>
                      <h3>{t("about.iam")}</h3>
                      <AboutIntervalText />
                    </Col>
                    <Col xs={ 12 } md={ 6 } xl={ 6 }>
                    <p> {t("about.text1")}</p>
                    <p> {t("about.text2")}</p>
                    <p> {t("about.text3")}</p>
                    </Col>
                    <Col> 
                      {
                        i18n.language === 'en' ? 
                        <a  href="resume-martin-j-larre-en.pdf"
                        download="resume-martin-j-larre-en.pdf">
                          <button className="download-btn">{t("about.resume")}</button>
                        </a> : 
                        <a  href="cv-martin-j-larre-es.pdf"
                        download="cv-martin-j-larre-es.pdf">
                          <button className="download-btn">{t("about.resume")}</button>
                        </a> 
                      }

                    </Col>
                </Row>
                </div>
            </Container>
            <img src={colorSharp} className="background-image-left" alt="background"/>
        </section>
    );
};
