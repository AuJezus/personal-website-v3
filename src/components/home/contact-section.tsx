import TerminalHeading from "../terminal-heading";
import ContactForm from "./contact-form";

function ContactSection() {
  return (
    <section id="contact" className="mx-auto mb-28 max-w-[1200px]">
      <TerminalHeading>contact</TerminalHeading>

      <h3 className="mb-12 bg-primary py-2 text-center text-4xl font-semibold text-primary-foreground">
        CONTACT A CODE WIZARD
      </h3>

      <ContactForm />
    </section>
  );
}

export default ContactSection;
