import { links } from "@/lib/site";
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
      href={props.href}
      target="_blank"
      className={`flex items-center justify-center text-3xl text-foreground/80 transition-all hover:scale-110 hover:text-foreground`}
    >
      {props.children}
    </a>
  );
}

function ConctactList() {
  return (
    <div className="flex flex-wrap justify-center gap-x-10 gap-y-3">
      <Contact href={links.twitter}>
        <BiLogoTwitter />
      </Contact>

      <Contact href={links.linkedIn}>
        <BiLogoLinkedin />
      </Contact>

      <Contact href={links.instagram}>
        <BiLogoInstagram />
      </Contact>

      <Contact href={links.github}>
        <BiLogoGithub />
      </Contact>

      <Contact href={links.email}>
        <BiEnvelope />
      </Contact>
    </div>
  );
}

export default ConctactList;
