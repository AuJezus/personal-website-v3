import ConctactList from "../contact-list";

function Footer() {
  return (
    <footer className="border-primary/60 text-muted-foreground grid grid-cols-3 items-center border-t-2 p-6 text-center text-sm">
      <a
        href="https://github.com/AuJezus/personal-website-v3"
        className="hover:text-foreground flex justify-center gap-2 transition-colors"
      >
        Made with ❤️ by AuJezus
      </a>
      <ConctactList />
      <span className="hover:text-foreground transition-colors">
        &copy; Copyright 2024 - Augustas Vaivada{" "}
      </span>
    </footer>
  );
}

export default Footer;
