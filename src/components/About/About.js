import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useTranslation } from 'react-i18next';
import colorSharp from "../../assets/img/color-sharp.png";
import "./about.css";

export const About = () => {
  const [t, i18n] = useTranslation('global');
  const [loopNum, setLoopNum] = useState(0); //
  const [isDeleting, setIsDeleting] = useState(false); //
  const [text, setText] = useState('');//
  const [delta, setDelta] = useState(300 - Math.random() * 100); //
  const periodTime = 2000; //
  const toRotate = ["Frontend Developer", "Backend Developer", "MERN Fullstack developer"];

  useEffect(() => {
    let ticker = setInterval(() => {
      tick()
    }, delta);

    return () => { clearInterval(ticker)}
  }, [text]);
  
  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta( prevDelta => prevDelta /2)
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(periodTime);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  }

  
    return (
        <section className="about" id="about">
            <Container>
                <div className="about--box">
                    <h2>{t("about.title")}</h2>
                
                <Row>
                    <Col xs={ 12 } md={ 6 } xl={ 6 } className='aling-items-center'>
                      <h3>{t("about.iam")}</h3>
                      <h3><span className='wrap'>{text}</span></h3>
                    </Col>
                    <Col xs={ 12 } md={ 6 } xl={ 6 }>
                    <p> {t("about.text1")}</p>
                    <p> {t("about.text2")}</p>
                    <p> {t("about.text3")}</p>
                    </Col>
                    <Col>
                      <a  href="tecnicatura-programacion-tramite.pdf"
                          download="tecnicatura-programacion-tramite.pdf">
                        <button className="download-btn">
                        {t("about.resume")}
                        </button>
                      </a>
                    </Col>
                </Row>
                </div>
            </Container>
            <img src={colorSharp} className="background-image-left" />
        </section>
    );
};
