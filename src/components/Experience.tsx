import { Briefcase } from "lucide-react";

const experiences = [
  {
    title: "Data Science Intern",
    company: "NullClass Edtech",
    period: "Oct 2024 – Dec 2024",
    location: "Remote",
    points: [
      "Cleaned and analyzed datasets to extract meaningful insights",
      "Built machine learning models for prediction tasks",
      "Developed GUI-based ML tools for usability",
      "Created visual dashboards using Matplotlib & Seaborn",
      "Applied prompt engineering techniques to automate insights",
    ],
  },
  {
    title: "Python Developer Intern",
    company: "Technohacks Edutech",
    period: "Feb 2023 – Apr 2023",
    location: "Remote",
    points: [
      "Developed ATM simulation system using Python",
      "Implemented OOP concepts and structured programming",
    ],
  },
  {
    title: "Office Assistant",
    company: "Dzine Consultant",
    period: "Jan 2024 – May 2024",
    location: "Bhiwandi",
    points: [
      "Managed operations for 70+ clients",
      "Generated and handled 60+ invoices with high accuracy",
      "Demonstrated attention to detail and organizational skills",
    ],
  },
];

const Experience = () => (
  <section id="experience" className="section-padding bg-section-alt">
    <div className="container mx-auto max-w-4xl">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        Work <span className="text-primary">Experience</span>
      </h2>
      <div className="relative">
        <div className="absolute left-4 md:left-6 top-0 bottom-0 w-0.5 bg-border" />
        <div className="space-y-10">
          {experiences.map((exp, i) => (
            <div key={i} className="relative pl-12 md:pl-16">
              <div className="absolute left-2 md:left-4 top-1 w-5 h-5 rounded-full bg-primary flex items-center justify-center">
                <Briefcase size={12} className="text-primary-foreground" />
              </div>
              <div className="glass-card p-6 hover-lift">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                  <h3 className="text-lg font-semibold text-foreground">
                    {exp.title}
                  </h3>
                  <span className="text-xs font-mono text-primary bg-primary/10 px-3 py-1 rounded-full mt-1 sm:mt-0 w-fit">
                    {exp.period}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground mb-3">
                  {exp.company} · {exp.location}
                </p>
                <ul className="space-y-2">
                  {exp.points.map((point, j) => (
                    <li key={j} className="text-sm text-muted-foreground flex gap-2">
                      <span className="text-primary mt-1.5 flex-shrink-0">•</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Experience;
