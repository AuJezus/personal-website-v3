import { links } from "@/lib/site";
import ConctactList from "./contact-list";

function Footer() {
  return (
    <footer className="mt-auto grid grid-cols-1 items-center gap-6 border-t-2 border-primary/60 p-3 text-center text-sm text-muted-foreground sm:grid-cols-2 sm:p-6 lg:grid-cols-3">
      <a
        href={links.siteGithubRepo}
        className="order-2 flex justify-center gap-2 transition-colors hover:text-foreground lg:order-1"
      >
        Made with ❤️ by AuJezus
      </a>

      <ConctactList className="order-1 col-span-1 sm:col-span-2 lg:order-2 lg:col-span-1" />

      <span className="order-3 transition-colors hover:text-foreground">
        &copy; Copyright 2024 - Augustas Vaivada{" "}
      </span>
    </footer>
  );
}

export default Footer;
