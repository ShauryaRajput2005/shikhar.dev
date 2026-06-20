"use client";

import { motion } from "framer-motion";
import { Terminal, BrainCircuit, Target, Code2, Database } from "lucide-react";

export function About() {
  const storyItems = [
    {
      title: "Strong Foundations",
      description: "Started my journey with deep computer science fundamentals, building a robust understanding of systems, data structures, and algorithms.",
      icon: <Terminal className="text-primary" size={24} />,
    },
    {
      title: "Data Analytics",
      description: "Explored the power of data, analyzing patterns and improving accuracy to deliver actionable business insights.",
      icon: <Database className="text-primary" size={24} />,
    },
    {
      title: "Frontend Engineering",
      description: "Transitioned to building user-facing applications, focusing on robust architectures and premium user experiences.",
      icon: <Code2 className="text-primary" size={24} />,
    },
    {
      title: "AI Systems",
      description: "Currently expanding toward AI systems engineering, exploring RAG, LLMs, and intelligent product development.",
      icon: <BrainCircuit className="text-primary" size={24} />,
    },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-background">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
              The Journey
            </h2>
            <div className="w-20 h-1 bg-primary rounded-full mb-8" />
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Narrative / Story */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-8"
          >
            <p className="text-lg text-muted-foreground leading-relaxed">
              I enjoy turning ideas into products that people can use and benefit from. My path hasn&apos;t been a straight line—it has been a deliberate evolution driven by curiosity and a desire to build impactful technology.
            </p>

            <div className="flex flex-col gap-6 relative before:absolute before:inset-y-0 before:left-3 before:w-px before:bg-border">
              {storyItems.map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative pl-10"
                >
                  <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-card border border-primary flex items-center justify-center z-10">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 flex items-center gap-3">
                    {item.title} {item.icon}
                  </h3>
                  <p className="text-muted-foreground">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Mission & Vision Cards */}
          <div className="flex flex-col gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="p-8 rounded-3xl bg-card border border-border hover:border-primary/50 transition-colors shadow-sm"
            >
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                <Target className="text-primary" size={28} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To continuously learn, adapt, and apply technology to transform ideas into practical solutions that deliver real value for people and organizations.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="p-8 rounded-3xl bg-card border border-border hover:border-primary/50 transition-colors shadow-sm"
            >
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                <BrainCircuit className="text-primary" size={28} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To become a trusted engineer who builds intelligent systems that solve meaningful problems, improve lives, and create lasting impact at scale.
              </p>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
