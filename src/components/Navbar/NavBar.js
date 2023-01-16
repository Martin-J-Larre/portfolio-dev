import { useEffect, useState } from "react";
import { Navbar, Container, Nav} from "react-bootstrap";
import { useTranslation } from 'react-i18next';
import "./navbar.css";
import navIcon1 from "../../assets/img/nav-icon1.svg";
import navIcon3 from "../../assets/img/nav-icon3.svg";
import { BsList } from "react-icons/bs";

export const NavBar = () => {
    const [t, i18n] = useTranslation('global');
    const [activeLink, setActiveLink] = useState("home");
    const [scrolled, setScrolled] = useState(false);

    let WidthScreen = window.innerWidth;

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const closeNav = () => { 
        if (WidthScreen < 768) {
            const navElemt1 = document.querySelector('.navbar-toggler');
            const navElemt2 = document.querySelector('.navbar-collapse');
            navElemt1.classList.add('collapsed');
            navElemt2.classList.remove('show');
        }
    }

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
        closeNav()
    };
    

    const onChange = (event) => {
      i18n.changeLanguage(event.target.value);
    //   localStorage.setItem("lng", event.target.value);
    };

    return (
        <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
            <Container className="container-nav">
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <BsList className="hamburger-nav"/>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav" className="nav-collapsed">
                    <span className="navbar-lang">
                        <div className="language">
                            <select name="language" onChange={onChange}>
                                <option value="en">English</option>
                                <option value="es">Español</option>
                            </select>
                        </div>
                    </span>
                    <Nav className="ms-auto">
                        <Nav.Link
                            href="#home"
                            className={
                                activeLink === "home"
                                    ? "active navbar-link"
                                    : "navbar-link"
                            }
                            onClick={() => onUpdateActiveLink("home")}
                        >
                            {t("nav.home")}
                        </Nav.Link>
                        <Nav.Link
                            href="#about"
                            className={
                                activeLink === "about"
                                    ? "active navbar-link"
                                    : "navbar-link"
                            }
                            onClick={() => onUpdateActiveLink("about")}
                        >
                            {t("nav.about")}
                        </Nav.Link>
                        <Nav.Link
                            href="#skills"
                            className={
                                activeLink === "skills"
                                    ? "active navbar-link"
                                    : "navbar-link"
                            }
                            onClick={() => onUpdateActiveLink("skills")}
                        >
                            {t("nav.skills")}
                        </Nav.Link>
                        <Nav.Link
                            href="#projects"
                            className={
                                activeLink === "projects"
                                    ? "active navbar-link"
                                    : "navbar-link"
                            }
                            onClick={() => onUpdateActiveLink("projects")}
                        >
                            {t("nav.projects")}
                        </Nav.Link>
                        <Nav.Link
                            href="#contact"
                            className={
                                activeLink === "contact"
                                    ? "active navbar-link"
                                    : "navbar-link"
                            }
                            onClick={() => onUpdateActiveLink("contact")}
                        >
                            {t("nav.contact")}
                        </Nav.Link>
                    </Nav>
                    <span className="navbar-text">
                        <div className="social-icon">
                            <a
                                href="https://www.linkedin.com/in/-martinjavierlarre-/"
                                target="_blank"
                            >
                                <img src={navIcon1} alt="" />
                            </a>
                            <a
                                href="https://github.com/Martin-J-Larre"
                                target="_blank"
                            >
                                <img src={navIcon3} alt="" />
                            </a>
                        </div>
                    </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};
