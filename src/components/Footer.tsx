import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => (
  <footer className="py-8 bg-card border-t border-border">
    <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
      <p className="text-sm text-muted-foreground">
        © {new Date().getFullYear()} Moiz Ansari. All rights reserved.
      </p>
      <div className="flex items-center gap-4">
        {[
          { icon: Github, href: "https://github.com/MoizAns" },
          { icon: Linkedin, href: "http://www.linkedin.com/in/moiz-ansari-013683241" },
          { icon: Mail, href: "mailto:moiz.ans11@gmail.com" },
        ].map(({ icon: Icon, href }) => (
          <a
            key={href}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Icon size={18} />
          </a>
        ))}
      </div>
    </div>
  </footer>
);

export default Footer;
