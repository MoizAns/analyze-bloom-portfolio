import { useEffect, useState } from "react";
import { Github, FileDown, Mail, ArrowDown } from "lucide-react";
import profile from "@/assets/profile.png";

const roles = [
  "Building Data Products",
  "Exploring Generative AI",
  "Creating ML Solutions",
];

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
        background: `
          radial-gradient(circle at 20% 20%, rgba(245,158,11,.20), transparent 35%),
          radial-gradient(circle at 80% 80%, rgba(251,191,36,.15), transparent 35%),
          #0a0a0a
        `,
      }}
    >
      {/* Floating Glow Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-72 h-72 bg-amber-500/20 blur-3xl rounded-full animate-float"></div>

        <div className="absolute bottom-20 right-20 w-96 h-96 bg-yellow-400/10 blur-3xl rounded-full animate-float animation-delay-400"></div>

        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-orange-400/10 blur-3xl rounded-full animate-float animation-delay-600"></div>
      </div>

      {/* Profile Image */}
      <div className="absolute top-24 right-6 md:right-12 z-20">
        <div
          className="
            w-20 h-20 md:w-28 md:h-28
            rounded-full
            overflow-hidden
            border-2 border-amber-400/50
            animate-float
            shadow-[0_0_30px_rgba(245,158,11,0.4)]
          "
        >
          <img
            src={profile}
            alt="Moiz Ansari"
            className="w-full h-full object-cover"
            width={512}
            height={512}
          />
        </div>
      </div>

      {/* Main Content */}
      <div
        className="
          relative z-10
          container mx-auto px-4
          flex flex-col lg:flex-row
          items-center
          justify-between
          gap-12
          pt-20
        "
      >
        {/* Left Content */}
        <div className="flex-1 text-center lg:text-left">
          <p className="text-primary font-medium tracking-wider uppercase mb-4">
            Available for Data Science & AI Roles
          </p>

          <h1
            className="
              text-4xl md:text-6xl lg:text-7xl
              font-extrabold
              text-hero-foreground
              mb-4
              animate-slide-up
              animation-delay-200
              drop-shadow-[0_0_20px_rgba(245,158,11,0.4)]
            "
          >
            Moiz Ansari
          </h1>

          {/* Typewriter Text */}
          <div
            className="
              text-xl md:text-2xl
              font-semibold
              mb-6
              h-8
              animate-slide-up
              animation-delay-400
              bg-gradient-to-r
              from-amber-400
              via-yellow-300
              to-orange-400
              bg-clip-text
              text-transparent
            "
          >
            <span>{text}</span>
            <span className="animate-cursor ml-0.5">|</span>
          </div>

          <p className="text-hero-muted max-w-xl text-base md:text-lg leading-relaxed mb-6 animate-slide-up animation-delay-600 mx-auto lg:mx-0">
            Entry-level Data Science professional skilled in transforming raw
            data into actionable insights using Python, Machine Learning, and
            visualization tools.
          </p>

          {/* Tech Stack Pills */}
          <div className="flex flex-wrap gap-2 mb-8 justify-center lg:justify-start">
            {[
              "Python",
              "FastAPI",
              "GenAI",
              "Machine Learning",
              "SQL",
            ].map((tech) => (
              <span
                key={tech}
                className="
                  px-3 py-1
                  rounded-full
                  bg-amber-500/10
                  border border-amber-500/20
                  text-amber-400
                  text-sm
                "
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap gap-3 justify-center lg:justify-start animate-slide-up animation-delay-600">
            <a
              href="#projects"
              className="
                px-6 py-3
                bg-primary
                text-primary-foreground
                rounded-lg
                font-medium
                transition-all
                duration-300
                hover:scale-105
                hover:shadow-[0_0_30px_rgba(245,158,11,0.5)]
              "
            >
              View Projects
            </a>

            <a
              href="https://github.com/MoizAns"
              target="_blank"
              rel="noopener noreferrer"
              className="
                px-6 py-3
                border border-hero-muted/30
                text-hero-foreground
                rounded-lg
                font-medium
                transition-all duration-300
                hover:border-primary
                hover:text-primary
                hover:scale-105
                flex items-center gap-2
              "
            >
              <Github size={18} />
              GitHub
            </a>

            <a
              href="https://drive.google.com/file/d/1BBztbEf0WUYwvKYmE5dpy90ePf8jsYdM/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="
                px-6 py-3
                border border-hero-muted/30
                text-hero-foreground
                rounded-lg
                font-medium
                transition-all duration-300
                hover:border-primary
                hover:text-primary
                hover:scale-105
                flex items-center gap-2
              "
            >
              <FileDown size={18} />
              Resume
            </a>

            <a
              href="#contact"
              className="
                px-6 py-3
                border border-hero-muted/30
                text-hero-foreground
                rounded-lg
                font-medium
                transition-all duration-300
                hover:border-primary
                hover:text-primary
                hover:scale-105
                flex items-center gap-2
              "
            >
              <Mail size={18} />
              Contact
            </a>
          </div>
        </div>

        {/* Right Side Code Card */}
        <div className="hidden lg:block">
          <div className="glass-card p-6 w-[450px] text-sm font-mono">
            <pre className="text-amber-300 whitespace-pre-wrap">
{`class Developer:

    def __init__(self):
        self.name = "Moiz Ansari"

    skills = [
        "Python",
        "FastAPI",
        "Machine Learning",
        "GenAI"
    ]

    open_to_work = True
`}
            </pre>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <a
        href="#about"
        className="
          absolute bottom-8 left-1/2
          -translate-x-1/2
          text-hero-muted
          hover:text-primary
          transition-colors
          animate-bounce
        "
      >
        <ArrowDown size={24} />
      </a>
    </section>
  );
};

export default Hero;