import React from "react";
import { Description, Icons, Title } from "./ContactDescriptionElements";
import { Container } from "./ContactDescriptionElements";
import { BsPhone } from "react-icons/bs";
import { BiEnvelope } from "react-icons/bi";
function ContactDescription() {
  return (
    <Container>
      <Title>
        <h2>CONTACT ME</h2>
      </Title>
      <Description>
        <h4>
          Feel free to contact me. I am open to new job opportunities, new
          projects as well as any discussions about my work.
        </h4>
      </Description>
      <Icons>
        <h4>
          <i>
            <BsPhone />
          </i>
          +48 572 938 418
        </h4>

        <h4>
          <i>
            <BiEnvelope />
          </i>
          hubert.karwowski01@gmail.com
        </h4>
      </Icons>
    </Container>
  );
}

export default ContactDescription;
