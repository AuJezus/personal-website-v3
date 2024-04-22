"use client";

import { IconContext } from "react-icons";
import {
  BiLogoTwitter,
  BiLogoLinkedin,
  BiLogoInstagram,
  BiLogoGithub,
  BiEnvelope,
} from "react-icons/bi";

function Contact(props: { children: React.ReactNode; href: string }) {
  return (
    <a
      className={`text-primary-foreground/80 hover:text-primary-foreground flex items-center justify-center transition-all hover:scale-110`}
      href={props.href}
    >
      {props.children}
    </a>
  );
}

function ConctactList(props: { className?: string }) {
  return (
    <div
      className={`${props.className} flex flex-wrap justify-center gap-x-10 gap-y-3`}
    >
      <IconContext.Provider
        value={{ className: "text-3xl lg:text-3xl md:text-4xl" }}
      >
        <Contact href="https://twitter.com/AuJezus">
          <BiLogoTwitter />
        </Contact>

        <Contact href="https://www.linkedin.com/in/augustas-vaivada-2a9ba326a/">
          <BiLogoLinkedin />
        </Contact>

        <Contact href="https://www.instagram.com/augustas_wa/">
          <BiLogoInstagram />
        </Contact>

        <Contact href="https://github.com/AuJezus">
          <BiLogoGithub />
        </Contact>

        <Contact href="mailto:augustasv16@gmail.com">
          <BiEnvelope />
        </Contact>
      </IconContext.Provider>
    </div>
  );
}

export default ConctactList;
