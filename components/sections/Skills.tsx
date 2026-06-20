"use client";

import { motion } from "framer-motion";
import { Code, Terminal, BrainCircuit, Wrench, Database, Sparkles } from "lucide-react";

const skillCategories = [
  {
    title: "Frontend Engineering",
    icon: Code,
    skills: [
      { name: "React", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "Redux Toolkit", level: 80 },
      { name: "JavaScript", level: 95 },
      { name: "HTML/CSS", level: 95 },
      { name: "Tailwind CSS", level: 90 },
    ]
  },
  {
    title: "Backend & APIs",
    icon: Terminal,
    skills: [
      { name: "Node.js", level: 75 },
      { name: "Express.js", level: 80 },
      { name: "FastAPI", level: 70 },
      { name: "REST APIs", level: 85 },
    ]
  },
  {
    title: "AI & Intelligent Systems",
    icon: BrainCircuit,
    skills: [
      { name: "Python", level: 85 },
      { name: "Pandas/NumPy", level: 80 },
      { name: "TensorFlow", level: 65 },
      { name: "Scikit-learn", level: 70 },
      { name: "Machine Learning", level: 70 },
    ]
  },
  {
    title: "Tools & Platforms",
    icon: Wrench,
    skills: [
      { name: "Git & GitHub", level: 90 },
      { name: "Postman", level: 85 },
      { name: "VS Code", level: 95 },
      { name: "Jupyter", level: 80 },
      { name: "Excel", level: 85 },
    ]
  },
  {
    title: "CS Foundations",
    icon: Database,
    skills: [
      { name: "Data Structures", level: 85 },
      { name: "DBMS", level: 80 },
      { name: "Operating Systems", level: 75 },
      { name: "Computer Networks", level: 75 },
    ]
  }
];

const currentlyExploring = [
  {
    topic: "Retrieval-Augmented Generation (RAG)",
    description: "Building systems that ground LLM responses in verifiable knowledge bases."
  },
  {
    topic: "Large Language Models",
    description: "Understanding prompt engineering, fine-tuning, and deployment."
  },
  {
    topic: "Backend Engineering",
    description: "Deepening knowledge of scalable architecture and microservices."
  },
  {
    topic: "System Design",
    description: "Learning to design large-scale, highly available distributed systems."
  }
];

export function Skills() {
  return (
    <section id="skills" className="py-24 relative bg-card/30">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-16 flex items-center gap-4">
            <Sparkles className="text-primary h-8 w-8" />
            Technical <span className="text-primary">Skills</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {skillCategories.map((category, idx) => {
              const Icon = category.icon;
              return (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                  className="bg-card border border-border rounded-xl p-6 hover:border-primary/30 transition-colors"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-primary/10 rounded-lg text-primary">
                      <Icon size={24} />
                    </div>
                    <h3 className="text-xl font-semibold">{category.title}</h3>
                  </div>

                  <div className="space-y-4">
                    {category.skills.map((skill, sIdx) => (
                      <div key={skill.name}>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm font-medium text-muted-foreground">{skill.name}</span>
                          <span className="text-sm text-primary/80">{skill.level}%</span>
                        </div>
                        <div className="h-2 w-full bg-secondary rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.5 + (sIdx * 0.1), ease: "easeOut" }}
                            className="h-full bg-primary rounded-full relative"
                          >
                            <div className="absolute inset-0 bg-white/20 w-full animate-[shimmer_2s_infinite]" />
                          </motion.div>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>

          <div className="bg-secondary/50 rounded-2xl p-8 md:p-12 border border-border">
            <h3 className="text-2xl font-bold mb-8 text-center md:text-left">Currently Exploring</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {currentlyExploring.map((item, i) => (
                <motion.div
                  key={item.topic}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group relative bg-card p-5 rounded-xl border border-border hover:border-primary/50 transition-all cursor-default"
                >
                  <h4 className="font-semibold text-foreground mb-2">{item.topic}</h4>
                  
                  {/* Hover explanation */}
                  <div className="absolute inset-0 bg-card/95 backdrop-blur-sm rounded-xl p-4 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 border border-primary/50 z-10 text-center">
                    <p className="text-xs text-muted-foreground font-medium">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
