import { useState } from "react";
import { Container, Col, Row, Nav, Tab, Button } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import ReactPaginate from 'react-paginate';
import { projectsListFront } from '../../helpers/projectsListFront';
import { projectsListBack } from '../../helpers/projectsListBack';
import { projectsListFullstack } from '../../helpers/projectsListBackFullstack';
import { ProjectCard } from '../ProjectCard/ProjectCard';
import './projects.css';

export const Projects = () => {
  const [t, i18n] = useTranslation('global');
  const [projectsFront, setProjectsFront] = useState(projectsListFront);
  const [projectsBack, setProjectsBack] = useState(projectsListBack);
  const [projectsFullstack, setProjectsFullstack] = useState(projectsListFullstack);
  const [pageNumberFront, setPageNumberFront] = useState(0);
  const [pageNumberBack, setPageNumberBack] = useState(0);
  const [pageNumberFullstack, setPageNumberFullstack] = useState(0);
  
  const projectsPerPage = 6;
  const pagesVisitedFront = pageNumberFront * projectsPerPage;
  const pagesVisitedBack = pageNumberBack * projectsPerPage;
  const pagesVisitedFullstack = pageNumberFullstack * projectsPerPage;
  
  const displayProjectsFront = projectsFront
    .slice(pagesVisitedFront, pagesVisitedFront + projectsPerPage)
    .map((project, index) => {
      return (
        <ProjectCard 
        key={ index }
        { ...project }
        />
      )
    });
  const displayProjectsBack = projectsBack
    .slice(pagesVisitedBack, pagesVisitedBack + projectsPerPage)
    .map((project, index) => {
      return (
        <ProjectCard 
        key={ index }
        { ...project }
        />
      )
    });
  const displayProjectsFullstack = projectsFullstack
    .slice(pagesVisitedFullstack, pagesVisitedFullstack + projectsPerPage)
    .map((project, index) => {
      return (
        <ProjectCard 
        key={ index }
        { ...project }
        />
      )
    });

  const pageCountFront = Math.ceil(projectsFront.length / projectsPerPage);
  const pageCountBack = Math.ceil(projectsBack.length / projectsPerPage);
  const pageCountFullstack = Math.ceil(projectsFullstack.length / projectsPerPage);

  const changePageFront = ({selected}) => { 
    setPageNumberFront(selected)
  }
  const changePageBack = ({selected}) => { 
    setPageNumberBack(selected)
  }
  const changePageFullstack = ({selected}) => { 
    setPageNumberFullstack(selected)
  }
  return (
    <section className='project' id='projects'>
      <Container>
        <Row>
          <Col>
            <h2>{t("projects.title")}</h2>
            <p>{t("projects.text")}</p>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Nav variant="pills" className='nav-pills mb-5 justify-content-center align-items-center' id='pills-tab'>
                <Nav.Item>
                  <Nav.Link eventKey="first" href="#main">Frontend</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second" href="#main-2">Backend</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third" href="#main-3">Full Stack</Nav.Link>
                </Nav.Item>
                {/* <Nav.Item>
                  <Nav.Link eventKey="fourth" href="#main">UX/UI</Nav.Link>
                </Nav.Item> */}
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <div className='cards-container' id="main">
                    {displayProjectsFront}
                    <ReactPaginate previousLabel={"<"} nextLabel={">"} pageCount={pageCountFront}
                    onPageChange={changePageFront} containerClassName={"paginationBtns"}
                    previousClassName={"previousBtn"} nextClassName={"nextBtn"} disabledClassName={"paginationDesabled"} activeClassName={"paginationActive"}/>
                  </div>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                <div className='cards-container' id="main-2">
                    {displayProjectsBack}
                    <ReactPaginate previousLabel={"<"} nextLabel={">"} pageCount={pageCountBack}
                    onPageChange={changePageBack} containerClassName={"paginationBtns"}
                    previousClassName={"previousBtn"} nextClassName={"nextBtn"} disabledClassName={"paginationDesabled"} activeClassName={"paginationActive"}/>
                  </div>
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                <div className='cards-container' id="main-3">
                    {displayProjectsFullstack}
                    <ReactPaginate previousLabel={"<"} nextLabel={">"} pageCount={pageCountFullstack}
                    onPageChange={changePageFullstack} containerClassName={"paginationBtns"}
                    previousClassName={"previousBtn"} nextClassName={"nextBtn"} disabledClassName={"paginationDesabled"} activeClassName={"paginationActive"}/>
                  </div>
                </Tab.Pane>
                {/* <Tab.Pane eventKey="fourth">Lorem Impsut</Tab.Pane> */}
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
