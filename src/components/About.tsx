import { MapPin, Phone, Mail, Linkedin, Github } from "lucide-react";

const About = () => (
  <section id="about" className="section-padding bg-background">
    <div className="container mx-auto max-w-4xl">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        About <span className="text-primary">Me</span>
      </h2>
      <div className="glass-card p-8 md:p-10">
        <p className="text-muted-foreground leading-relaxed text-base md:text-lg mb-8">
          Final-year IT Engineering student with hands-on experience in Data
          Science, Machine Learning, and dashboard development. Strong in data
          cleaning, visualization, and predictive modeling with a track record of
          building real-world projects using Streamlit and ML algorithms.
          Passionate about solving business problems using data and turning
          complex datasets into clear, actionable insights.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
          {[
            { icon: MapPin, label: "Bhiwandi, Maharashtra, India" },
            { icon: Phone, label: "+91 7887779992" },
            { icon: Mail, label: "moiz.ans11@gmail.com", href: "mailto:moiz.ans11@gmail.com" },
            { icon: Linkedin, label: "LinkedIn Profile", href: "http://www.linkedin.com/in/moiz-ansari-013683241" },
            { icon: Github, label: "GitHub Profile", href: "https://github.com/MoizAns" },
          ].map(({ icon: Icon, label, href }) => (
            <div key={label} className="flex items-center gap-3 text-muted-foreground">
              <Icon size={18} className="text-primary flex-shrink-0" />
              {href ? (
                <a href={href} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  {label}
                </a>
              ) : (
                <span>{label}</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default About;
