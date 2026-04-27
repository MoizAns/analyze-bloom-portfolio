import { useState } from "react";
import { ExternalLink, Star } from "lucide-react";

const projects = [
  {
    title: "AI Career Twin (Your Digital Clone for Decisions)",
    description:
      "Your AI-powered digital clone for analyzing skills, predicting career paths, and guiding decisions in real-time",
    tech: ["FastAPI", "NLP", "Machine Learning", "ChatBot", "Resume Parsing", ],
    github: "https://github.com/MoizAns/AI-Career-Twin-Your-Digital-Clone-for-Decisions-",
    live: "https://ai-career-twin-your-digital-clone-f.vercel.app/dashboard",
    category: "Web Development + Machine Learning",
    featured: true,
  },
  {
    title: "Sales Data Analysis & Visualization Dashboard",
    description:
      "Built an interactive Streamlit dashboard for sales analysis with filters, KPIs, and visualizations. Developed a RandomForestRegressor model to predict sales using key features like Quantity, Discount, and Profit.",
    tech: ["Python", "Pandas", "Matplotlib", "Streamlit", "ML"],
    github: "https://github.com/MoizAns/Sales-Data-Analysis---Visualization-Dashboard--Streamlit-App",
    live: "https://sales-data-analysis-visualization-dashboard-kquwkzbfgifwbjuga9.streamlit.app/",
    category: "Data Analysis",
    featured: true,
  },
  {
    title: "Credit Card Fraud Detection",
    description:
      "Built ML models using Logistic Regression, Random Forest, and Neural Networks. Identified fraudulent transactions using pattern recognition focused on real-world financial anomaly detection.",
    tech: ["Python", "ML", "Scikit-learn"],
    github: "https://github.com/MoizAns/Credit-Card-Fraud-Detection-Using-ML",
    category: "ML",
    featured: false,
  },
  {
    title: "Age & Gender Detection System",
    description:
      "Developed using CNN and OpenCV with a GUI for real-time face-based prediction. Applied Computer Vision techniques for accurate age and gender classification.",
    tech: ["TensorFlow", "OpenCV", "Python", "ML"],
    github: "#",
    category: "Computer Vision",
    featured: false,
  },
];

const filters = ["All", "Web Development + Machine Learning", "Data Analysis", "ML", "Computer Vision"];

const Projects = () => {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="projects" className="section-padding bg-background">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Featured <span className="text-primary">Projects</span>
        </h2>
        <p className="text-center text-muted-foreground mb-10 max-w-xl mx-auto">
          Real-world projects showcasing data analysis, machine learning, and visualization skills.
        </p>
        <div className="flex justify-center gap-2 mb-10 flex-wrap">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${active === f
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground hover:text-foreground"
                }`}
            >
              {f}
            </button>
          ))}
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project, i) => (
            <div
              key={i}
              className={`glass-card p-6 hover-lift flex flex-col ${project.featured ? "md:col-span-2 lg:col-span-1 ring-1 ring-primary/20" : ""
                }`}
            >
              {project.featured && (
                <div className="flex items-center gap-1 text-primary text-xs font-semibold mb-3">
                  <Star size={14} fill="currentColor" /> Featured Project
                </div>
              )}
              <h3 className="text-lg font-semibold text-foreground mb-3">
                {project.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-4 flex-1">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-1 bg-primary/10 text-primary text-xs font-medium rounded-md"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-primary hover:underline font-medium"
              >
                View on GitHub <ExternalLink size={14} />
              </a>

              {project.live && (
  <a
    href={project.live}
    target="_blank"
    rel="noopener noreferrer"
    className="group flex items-center gap-2 px-4 py-0 rounded-xl 
               bg-gradient-to-r from-blue-300 to-blue-500 
               text-white font-medium shadow-md 
               hover:shadow-lg hover:scale-105 
               transition-all duration-200 ease-in-out"
  >
    <ExternalLink
      size={18}
      className="transition-transform duration-200 group-hover:translate-x-1"
    />
    <span>Go Live</span>
  </a>
)}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
