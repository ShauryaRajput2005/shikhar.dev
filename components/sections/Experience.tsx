"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronRight, Briefcase } from "lucide-react";

type ExperienceData = {
  id: string;
  company: string;
  role: string;
  period: string;
  highlights: string[];
  drawerData: {
    title: string;
    items: string[];
  }[];
};

const experiences: ExperienceData[] = [
  {
    id: "skillcred",
    company: "Skillcred",
    role: "Data Analysis Intern",
    period: "2024",
    highlights: [
      "Analyzed 1000+ smartwatch records.",
      "Identified patterns improving efficiency by 15%.",
      "Improved data accuracy by 30%.",
      "Used Excel and Python (Pandas).",
      "Created stakeholder reports.",
    ],
    drawerData: [
      { title: "Workflow", items: ["Data Cleaning", "Exploratory Data Analysis", "Pattern Recognition", "Reporting"] },
      { title: "Tools", items: ["Python", "Pandas", "Excel", "Jupyter Notebook"] },
      { title: "Dataset", items: ["1000+ Smartwatch health and activity records"] },
      { title: "Learnings", items: ["Handling missing data effectively", "Translating raw data into business insights", "Communicating findings to non-technical stakeholders"] },
      { title: "Impact", items: ["15% efficiency improvement", "30% data accuracy improvement"] },
    ],
  },
  {
    id: "devslane",
    company: "Devslane",
    role: "Frontend Intern",
    period: "2024",
    highlights: [
      "React",
      "TypeScript",
      "Redux Toolkit",
      "REST APIs",
      "Git workflows",
      "Production development",
    ],
    drawerData: [
      { title: "Responsibilities", items: ["Building reusable UI components", "State management with Redux", "API integration", "Bug fixing"] },
      { title: "Architecture exposure", items: ["Component-driven design", "Client-side routing", "State normalization"] },
      { title: "Learnings", items: ["Advanced TypeScript patterns", "Performance optimization in React", "Writing clean, maintainable code"] },
      { title: "Team collaboration", items: ["Agile methodologies", "Code reviews", "Daily standups"] },
      { title: "Frontend practices", items: ["Responsive design", "Accessibility standards", "Version control best practices"] },
    ],
  },
];

export function Experience() {
  const [selectedExp, setSelectedExp] = useState<ExperienceData | null>(null);

  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-12 flex items-center gap-4">
            <Briefcase className="text-primary h-8 w-8" />
            Professional <span className="text-primary">Experience</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative bg-card border border-border rounded-xl p-8 hover:border-primary/50 transition-colors cursor-pointer overflow-hidden"
                onClick={() => setSelectedExp(exp)}
              >
                <div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-300">
                  <ChevronRight className="text-primary" />
                </div>
                
                <h3 className="text-2xl font-semibold mb-1">{exp.role}</h3>
                <p className="text-primary font-medium mb-6">{exp.company} • {exp.period}</p>
                
                <ul className="space-y-3 mb-4">
                  {exp.highlights.slice(0, 4).map((highlight, i) => (
                    <li key={i} className="flex items-start text-muted-foreground text-sm">
                      <span className="text-primary mr-2 mt-1">▹</span>
                      {highlight}
                    </li>
                  ))}
                  {exp.highlights.length > 4 && (
                    <li className="text-primary/70 text-sm mt-2 italic">
                      + Click to see full details
                    </li>
                  )}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedExp && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedExp(null)}
              className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-full max-w-md bg-card border-l border-border shadow-2xl z-50 overflow-y-auto"
            >
              <div className="p-8">
                <div className="flex justify-between items-center mb-8">
                  <div>
                    <h3 className="text-2xl font-bold">{selectedExp.role}</h3>
                    <p className="text-primary font-medium">{selectedExp.company}</p>
                  </div>
                  <button 
                    onClick={() => setSelectedExp(null)}
                    className="p-2 rounded-full hover:bg-secondary text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <X size={24} />
                  </button>
                </div>

                <div className="space-y-8">
                  {selectedExp.drawerData.map((section, idx) => (
                    <motion.div 
                      key={idx}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 * idx }}
                    >
                      <h4 className="text-lg font-semibold border-b border-border pb-2 mb-4 text-foreground/90">
                        {section.title}
                      </h4>
                      <ul className="space-y-2">
                        {section.items.map((item, i) => (
                          <li key={i} className="flex items-start text-muted-foreground text-sm">
                            <span className="text-primary/50 mr-2 mt-1">•</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
