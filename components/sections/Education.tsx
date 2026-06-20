"use client";

import { motion } from "framer-motion";
import { GraduationCap, BookOpen } from "lucide-react";

const coursework = [
  "Data Structures",
  "Machine Learning",
  "Probability & Statistics",
  "DBMS",
  "Operating Systems",
  "Computer Networks",
];

export function Education() {
  return (
    <section id="education" className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-12 flex items-center gap-4">
            <GraduationCap className="text-primary h-8 w-8" />
            Education & <span className="text-primary">Background</span>
          </h2>

          <div className="max-w-4xl">
            <motion.div 
              className="group relative bg-card border border-border rounded-2xl p-8 md:p-10 hover:border-primary/40 transition-colors overflow-hidden"
              whileHover="hover"
            >
              {/* Animated trace border effect on hover */}
              <motion.div 
                className="absolute inset-0 border-2 border-primary/0 rounded-2xl pointer-events-none"
                variants={{
                  hover: { borderColor: "rgba(255,181,71,0.5)", transition: { duration: 0.3 } }
                }}
              />
              
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-8 relative z-10">
                <div>
                  <h3 className="text-3xl font-bold text-foreground mb-2">GLA University</h3>
                  <p className="text-xl text-muted-foreground">B.Tech Computer Science</p>
                </div>
                <div className="flex flex-col md:items-end gap-2">
                  <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary font-semibold rounded-full border border-primary/20">
                    2023 – 2027
                  </span>
                  <p className="text-muted-foreground font-medium">CGPA: <span className="text-foreground">8.27</span></p>
                </div>
              </div>

              <div className="relative z-10 pt-8 border-t border-border">
                <div className="flex items-center gap-2 mb-6 text-foreground font-semibold">
                  <BookOpen size={20} className="text-primary" />
                  <h4>Relevant Coursework</h4>
                </div>
                <div className="flex flex-wrap gap-3">
                  {coursework.map((course, i) => (
                    <motion.span
                      key={course}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + (i * 0.05) }}
                      className="px-4 py-2 bg-secondary text-secondary-foreground rounded-lg text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                    >
                      {course}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
