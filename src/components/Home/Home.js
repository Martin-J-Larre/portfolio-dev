import { Container, Row, Col } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import './home.css'

export const Home = () => {
  const [t, i18n] = useTranslation('global');
  

  return (
    <section className='home' id='home'>
      <Container>
        <Row className='aling-items-center neon'>
            <div className="neon-wrapper">
              <h1 className="neon-text">{t("home.title")}</h1>
              <h2 className="neon-text">{t("home.subtitle")}</h2>
            </div>
        </Row>
      </Container>
    </section>
  )
}
