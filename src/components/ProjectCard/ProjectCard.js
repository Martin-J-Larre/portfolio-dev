import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import "./projectCard.css";

export const ProjectCard = ({
  imgUrl,
  title,
  description,
  gitHubUrl,
  demoUrl,
}) => {
  const widthScreen = window.innerWidth;

  return (
    <div className="proj-imgbx">
      <img src={imgUrl} />
      <div className="proj-txtx">
        <h4>{title}</h4>
        <span>{description}</span>
        <div className="proj-icons">
          <a href={gitHubUrl} target="_blank">
            <FaGithub />
          </a>
          <a href={demoUrl} target="_blank">
            <FaExternalLinkAlt />
          </a>
        </div>
      </div>
    </div>
  );
};
