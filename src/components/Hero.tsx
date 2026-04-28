import { useEffect, useState } from "react";
import { Github, FileDown, Mail, ArrowDown } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import profile from "@/assets/profile.png";

const roles = ["Data Analyst", "ML Enthusiast", "Python Developer"];

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          setText(current.slice(0, text.length + 1));
          if (text.length + 1 === current.length) {
            setTimeout(() => setIsDeleting(true), 1500);
          }
        } else {
          setText(current.slice(0, text.length - 1));
          if (text.length === 0) {
            setIsDeleting(false);
            setRoleIndex((prev) => (prev + 1) % roles.length);
          }
        }
      },
      isDeleting ? 50 : 100
    );
    return () => clearTimeout(timeout);
  }, [text, isDeleting, roleIndex]);

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background: `linear-gradient(to bottom, hsl(var(--hero-bg)), hsl(var(--hero-bg) / 0.9))`,
      }}
    >
      <img
        src={heroBg}
        alt=""
        className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-lighten"
        width={1920}
        height={1024}
      />
      <div className="absolute top-24 right-6 md:right-12 z-20">
        <div className="w-20 h-20 md:w-28 md:h-28 rounded-full overflow-hidden border-2 border-muted/40">
          <img
            src={profile}
            alt="Moiz Ansari"
            className="w-full h-full object-cover"
            width={512}
            height={512}
          />
        </div>
      </div>
      <div className="relative z-10 container mx-auto px-4 flex flex-col items-center lg:items-start gap-12 pt-20">
        <div className="flex-1 text-center lg:text-left">
          <p className="text-primary font-mono text-sm mb-4 animate-slide-up">
            Hello, I'm
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-hero-foreground mb-4 animate-slide-up animation-delay-200">
            Moiz Ansari
          </h1>
          <div className="text-xl md:text-2xl text-primary font-semibold mb-6 h-8 animate-slide-up animation-delay-400">
            <span>{text}</span>
            <span className="animate-cursor ml-0.5">|</span>
          </div>
          <p className="text-hero-muted max-w-xl text-base md:text-lg leading-relaxed mb-8 animate-slide-up animation-delay-600 mx-auto lg:mx-0">
            Entry-level Data Science professional skilled in transforming raw
            data into actionable insights using Python, Machine Learning, and
            visualization tools.
          </p>
          <div className="flex flex-wrap gap-3 justify-center lg:justify-start animate-slide-up animation-delay-600">
            <a
              href="#projects"
              className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity"
            >
              View Projects
            </a>
            <a
              href="https://github.com/MoizAns"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border border-hero-muted/30 text-hero-foreground rounded-lg font-medium hover:border-primary hover:text-primary transition-colors flex items-center gap-2"
            >
              <Github size={18} /> GitHub
            </a>
            <a
              href="https://drive.google.com/file/d/1BBztbEf0WUYwvKYmE5dpy90ePf8jsYdM/view?usp=sharing"
              download
              className="px-6 py-3 border border-hero-muted/30 text-hero-foreground rounded-lg font-medium hover:border-primary hover:text-primary transition-colors flex items-center gap-2"
            >
              <FileDown size={18} /> Resume
            </a>
            <a
              href="#contact"
              className="px-6 py-3 border border-hero-muted/30 text-hero-foreground rounded-lg font-medium hover:border-primary hover:text-primary transition-colors flex items-center gap-2"
            >
              <Mail size={18} /> Contact
            </a>
          </div>
        </div>
      </div>
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-hero-muted hover:text-primary transition-colors animate-bounce"
      >
        <ArrowDown size={24} />
      </a>
    </section>
  );
};

export default Hero;
