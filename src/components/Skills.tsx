import { Code2, Database, BarChart3, Cpu, Wrench, MessageSquare } from "lucide-react";

const skillCategories = [
  {
    title: "Programming",
    icon: Code2,
    skills: ["Python (DSA, OOP)", "Java", "SQL"],
  },
  {
    title: "Data Science & Analytics",
    icon: BarChart3,
    skills: ["Data Cleaning", "Data Analysis", "Data Visualization", "Machine Learning Models", "Model Evaluation"],
  },
  {
    title: "Tools & Libraries",
    icon: Wrench,
    skills: ["Pandas", "Matplotlib", "Seaborn", "TensorFlow", "OpenCV", "Streamlit", "Excel"],
  },
  {
    title: "Prompt Engineering",
    icon: MessageSquare,
    skills: ["Zero-shot prompting", "Few-shot prompting", "Task-based prompt design"],
  },
];

const Skills = () => (
  <section id="skills" className="section-padding bg-section-alt">
    <div className="container mx-auto max-w-5xl">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        Technical <span className="text-primary">Skills</span>
      </h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {skillCategories.map(({ title, icon: Icon, skills }) => (
          <div key={title} className="glass-card p-6 hover-lift text-center">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <Icon size={24} className="text-primary" />
            </div>
            <h3 className="font-semibold text-foreground mb-4">{title}</h3>
            <div className="space-y-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="block text-sm text-muted-foreground"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
