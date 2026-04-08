import { GraduationCap, Award, Globe } from "lucide-react";

const Education = () => (
  <section id="education" className="section-padding bg-background">
    <div className="container mx-auto max-w-4xl">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        Education & <span className="text-primary">Certifications</span>
      </h2>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        {[
          {
            degree: "B.E. Information Technology",
            school: "SKN Sinhgad Institute",
            period: "2020 – 2025",
            grade: "CGPA: 7.08",
          },
          {
            degree: "HSC",
            school: "NES Junior College",
            period: "2018 – 2020",
            grade: "55%",
          },
          {
            degree: "SSC",
            school: "Dr. Omprakash Agarwal High School",
            period: "2006 – 2018",
            grade: "68%",
          },
        ].map((edu, i) => (
          <div key={i} className="glass-card p-6 hover-lift">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <GraduationCap size={20} className="text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">{edu.degree}</h3>
                <p className="text-sm text-muted-foreground">{edu.school}</p>
                <p className="text-xs text-primary font-mono mt-1">
                  {edu.period} · {edu.grade}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-12">
        <div className="glass-card p-6">
          <div className="flex items-center gap-3 mb-4">
            <Award size={20} className="text-primary" />
            <h3 className="font-semibold text-foreground">Certifications</h3>
          </div>
          <ul className="space-y-3">
            <li className="text-sm text-muted-foreground">
              <span className="font-medium text-foreground">Python Programming</span> – CDAC (SunBeam Institute)
            </li>
            <li className="text-sm text-muted-foreground">
              <span className="font-medium text-foreground">SQL Bootcamp</span> – Udemy
            </li>
          </ul>
        </div>
        <div className="glass-card p-6">
          <div className="flex items-center gap-3 mb-4">
            <Globe size={20} className="text-primary" />
            <h3 className="font-semibold text-foreground">Languages</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {["English", "Hindi", "Urdu", "Marathi"].map((lang) => (
              <span key={lang} className="px-3 py-1.5 bg-muted text-muted-foreground text-sm rounded-lg">
                {lang}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Education;
