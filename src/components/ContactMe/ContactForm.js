import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import {
  Container,
  FormButton,
  FormEmail,
  FormName,
  FormText,
  Info,
} from "./ContactFormElements";
function ContactForm() {
  const [state, handleSubmit] = useForm("mbjqbnad");

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <FormName>
          <input
            id="name"
            type="text"
            name="name"
            placeholder="Enter your name"
          />
          <ValidationError prefix="name" field="name" errors={state.errors} />
        </FormName>
        <FormEmail>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="Enter your email"
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </FormEmail>
        <FormText>
          <textarea
            rows="4"
            type="text"
            id="message"
            name="message"
            placeholder="Enter your message"
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
        </FormText>
        <FormButton>
          <button type="submit" disabled={state.submitting}>
            Submit
          </button>
          {state.succeeded ? (
            <Info>
              <h4>Message sent!</h4>
            </Info>
          ) : null}
        </FormButton>
      </form>
    </Container>
  );
}
function App() {
  return <ContactForm />;
}
export default App;
