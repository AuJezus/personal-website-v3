import TerminalHeading from "../terminal-heading";
import ContactForm from "./contact-form";
import Section from "./section";

function ContactSection() {
  return (
    <Section id="contact" className="p-0">
      <TerminalHeading>contact</TerminalHeading>

      <h3 className="mb-8 bg-primary py-2 text-center text-3xl font-semibold text-primary-foreground sm:mb-12 sm:text-4xl">
        CONTACT A CODE WIZARD
      </h3>

      <ContactForm />
    </Section>
  );
}

export default ContactSection;
