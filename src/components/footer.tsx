import { links } from "@/lib/site";
import ConctactList from "./contact-list";

function Footer() {
  return (
    <footer className="mt-auto grid grid-cols-3 items-center border-t-2 border-primary/60 p-6 text-center text-sm text-muted-foreground">
      <a
        href={links.siteGithubRepo}
        className="flex justify-center gap-2 transition-colors hover:text-foreground"
      >
        Made with ❤️ by AuJezus
      </a>
      <ConctactList />
      <span className="transition-colors hover:text-foreground">
        &copy; Copyright 2024 - Augustas Vaivada{" "}
      </span>
    </footer>
  );
}

export default Footer;
