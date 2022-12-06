import { useState } from "react";
import { Container, Col, Row, Nav, Tab, Button } from 'react-bootstrap';
import ReactPaginate from 'react-paginate';
import { frontEndprojectsList } from '../../helpers/frontEndprojectsList';
import { ProjectCard } from '../ProjectCard/ProjectCard';
import './projects.css';

export const Projects = () => {
  const [frondEnd, setFrondEnd] = useState(frontEndprojectsList);
  const [pageNumber, setPageNumber] = useState(0);
  
  const projectsPerPage = 6;
  const pagesVisited = pageNumber * projectsPerPage;
  

  const displayProjects = frondEnd
    .slice(pagesVisited, pagesVisited + projectsPerPage)
    .map((project, index) => {
      return (
        <ProjectCard 
        key={ index }
        { ...project }
        />
      )
    });

  const pageCount = Math.ceil(frondEnd.length / projectsPerPage);

  const changePage = ({selected}) => { 
    setPageNumber(selected)
  }
  return (
    <section className='project' id='projects'>
      <Container>
        <Row>
          <Col>
            <h2>Projects</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, obcaecati. Corrupti cupiditate maiores repudiandae officiis nesciunt laudantium dolorem quae vero.</p>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Nav variant="pills" className='nav-pills mb-5 justify-content-center align-items-center' id='pills-tab'>
                <Nav.Item>
                  <Nav.Link eventKey="first">Frontend</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Backend</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Full Stack</Nav.Link>
                </Nav.Item>
                {/* <Nav.Item>
                  <Nav.Link eventKey="fourth">UX/UI</Nav.Link>
                </Nav.Item> */}
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <div className='cards-container'>
                    {displayProjects}
                    <ReactPaginate previousLabel={"<"} nextLabel={">"} pageCount={pageCount}
                    onPageChange={changePage} containerClassName={"paginationBtns"}
                    previousClassName={"previousBtn"} nextClassName={"nextBtn"} disabledClassName={"paginationDesabled"} activeClassName={"paginationActive"}/>
                  </div>
                </Tab.Pane>
                <Tab.Pane eventKey="second">Lorem Impsut</Tab.Pane>
                <Tab.Pane eventKey="third">Lorem Impsut</Tab.Pane>
                {/* <Tab.Pane eventKey="fourth">Lorem Impsut</Tab.Pane> */}
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
