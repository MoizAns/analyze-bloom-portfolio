import { FolderGit2, Brain, Code2, Lightbulb } from "lucide-react";

const stats = [
  { icon: FolderGit2, value: "3+", label: "Real-world Projects" },
  { icon: Brain, value: "ML & DL", label: "Models & Dashboards" },
  { icon: Code2, value: "Python", label: "& Data Tools" },
  { icon: Lightbulb, value: "Strong", label: "Problem-solving Mindset" },
];

const Highlights = () => (
  <section className="py-16 bg-primary">
    <div className="container mx-auto max-w-5xl px-4">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map(({ icon: Icon, value, label }) => (
          <div key={label} className="text-center">
            <Icon size={28} className="mx-auto mb-3 text-primary-foreground/80" />
            <div className="text-2xl md:text-3xl font-bold text-primary-foreground">{value}</div>
            <div className="text-sm text-primary-foreground/70 mt-1">{label}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Highlights;
