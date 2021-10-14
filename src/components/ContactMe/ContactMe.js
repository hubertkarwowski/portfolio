import React from "react";
import ContactDescription from "./ContactDescription";
import ContactForm from "./ContactForm";
import { Container } from "./ContactMeElements";

function ContactMe() {
  return (
    <Container id="contactme">
      <ContactDescription />
      <ContactForm />
    </Container>
  );
}

export default ContactMe;
