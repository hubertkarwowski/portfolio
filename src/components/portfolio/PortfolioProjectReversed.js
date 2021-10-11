import React from "react";
import {
  Container,
  ProjectImage,
  ProjectInfo,
  ProjectInfoButton,
  ProjectInfoButtons,
  ProjectInfoDescription,
  ProjectInfoTitle,
} from "./PortfolioProjectElementsReverse";
import { FaGithub } from "react-icons/fa";
import { BsGlobe } from "react-icons/bs";

function PortfolioProjectReverse(props) {
  return (
    <Container>
      <ProjectImage>
        <img src={props.image} alt={props.alt}></img>
      </ProjectImage>
      <ProjectInfo>
        <ProjectInfoTitle>
          <h2>{props.title}</h2>
        </ProjectInfoTitle>
        <ProjectInfoDescription>
          <h4>{props.description}</h4>
        </ProjectInfoDescription>
        <ProjectInfoButtons>
          <ProjectInfoButton>
            <a href={props.github} target="_blank" rel="noopener noreferrer">
              <i>
                <FaGithub />
              </i>
              SOURCE CODE
            </a>
          </ProjectInfoButton>
          <ProjectInfoButton>
            <a href={props.link}>
              <i>
                <BsGlobe />
              </i>
              SEE IT ONLINE
            </a>
          </ProjectInfoButton>
        </ProjectInfoButtons>
      </ProjectInfo>
    </Container>
  );
}

export default PortfolioProjectReverse;
