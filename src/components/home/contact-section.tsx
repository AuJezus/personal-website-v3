import ContactForm from "./contact-form";

function ContactSection() {
  return (
    <section id="contact" className="mx-auto mb-28 max-w-[1200px]">
      <div className="text-muted-foreground mb-10 flex items-baseline gap-4">
        <span>
          <span className="text-primary">~</span> W:\AuJezus{">"}
        </span>
        <h2 className="text-primary text-lg">
          contact<span className="animate-blink">_</span>
        </h2>
      </div>

      <h3 className="bg-primary text-primary-foreground mb-12 py-2 text-center text-4xl font-semibold">
        CONTACT A CODE WIZARD
      </h3>

      <ContactForm />
    </section>
  );
}

export default ContactSection;
