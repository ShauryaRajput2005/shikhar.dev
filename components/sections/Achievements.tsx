"use client";

import { motion } from "framer-motion";
import { Trophy, Medal } from "lucide-react";

const achievements = [
  {
    title: "IBM Aptitude & Coding Challenge",
    place: "3rd Place",
  },
  {
    title: "IBM Poster-Making Competition",
    place: "3rd Place",
  },
];

export function Achievements() {
  return (
    <section id="achievements" className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-12 flex items-center gap-4">
            <Trophy className="text-primary h-8 w-8" />
            Awards & <span className="text-primary">Achievements</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="group relative bg-card rounded-2xl p-8 border border-border overflow-hidden"
              >
                {/* Border tracing glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/50 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 -translate-x-full group-hover:translate-x-full" />
                
                <div className="relative z-10 flex items-start gap-6">
                  <div className="p-4 bg-secondary rounded-2xl text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                    <Medal size={32} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{achievement.title}</h3>
                    <div className="inline-block px-4 py-1.5 bg-primary/10 text-primary font-semibold rounded-full border border-primary/20">
                      {achievement.place}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
