import React from "react";
import {
  Card,
  CardBody,
  CardContainer,
  CardHeader,
  Container,
  LastItems,
  Title,
} from "./AboutMeElements";
import { FaBook, FaHeart, FaBootstrap } from "react-icons/fa";
import { VscCode } from "react-icons/vsc";
import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3, DiReact, DiSass } from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io";
import { SiMaterialui, SiStyledcomponents } from "react-icons/si";
import { BsCheck } from "react-icons/bs";
function AboutMe() {
  return (
    <Container>
      <Title>
        <h2>ABOUT ME</h2>
      </Title>
      <CardContainer>
        <Card>
          <CardHeader>
            <i>
              <FaBook />
            </i>
            <h4>Education</h4>
          </CardHeader>
          <CardBody>
            <h5>
              I’m self-taught Front-end developer. I finished IT technical
              college with EE.08 and EE.09 certificates.
            </h5>
          </CardBody>
        </Card>
        <Card>
          <CardHeader>
            <i>
              <FaHeart />
            </i>
            <h4>Hobby</h4>
          </CardHeader>
          <CardBody>
            <ul>
              <li>
                <BsCheck /> video games
              </li>
              <li>
                {" "}
                <BsCheck />
                tea
              </li>
              <li>
                {" "}
                <BsCheck />
                beer
              </li>
              <li>
                {" "}
                <BsCheck />
                anime
              </li>
              <li>
                {" "}
                <BsCheck />
                coding
              </li>
            </ul>
          </CardBody>
        </Card>
        <Card>
          <CardHeader>
            <i>
              <VscCode />
            </i>
            <h4>Technologies</h4>
          </CardHeader>
          <CardBody>
            <i>
              <AiFillHtml5 />
            </i>
            <i>
              <DiCss3 />
            </i>
            <i>
              <IoLogoJavascript />
            </i>
            <i>
              <DiReact />
            </i>
            <i>
              <DiSass />
            </i>
            <i>
              <FaBootstrap />
            </i>
            <LastItems>
              <i>
                <SiMaterialui />
              </i>
              <i>
                <SiStyledcomponents />
              </i>
            </LastItems>
          </CardBody>
        </Card>
      </CardContainer>
    </Container>
  );
}

export default AboutMe;
