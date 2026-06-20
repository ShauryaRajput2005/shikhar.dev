"use client";

import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";
import Image from "next/image";

const certifications = [
  {
    title: "Intro to Deep Learning",
    issuer: "Kaggle",
    image: "/assets/Intro to Machine Learning-Kaggle.png",
  },
  {
    title: "Deep Learning with Keras and TensorFlow",
    issuer: "ULSA",
    image: "/assets/DeepLearningwithKeras-Coursera.png",
  },
  {
    title: "Introduction to Large Language Models",
    issuer: "Google",
    image: "/assets/Intro to LLMS-Coursera(Google).png",
  },
];

export function Certifications() {
  return (
    <section id="certifications" className="py-24 relative bg-card/30">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-12 flex items-center gap-4">
            <Award className="text-primary h-8 w-8" />
            Professional <span className="text-primary">Certifications</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.15,
                  type: "spring",
                  bounce: 0.4
                }}
                whileHover={{ y: -10, rotateX: 5, rotateY: 5 }}
                className="group relative bg-card border border-border rounded-2xl overflow-hidden perspective-1000"
              >
                <div className="aspect-[4/3] relative overflow-hidden bg-secondary">
                  <Image 
                    src={cert.image} 
                    alt={cert.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-background/20 group-hover:bg-transparent transition-colors duration-300" />
                  
                  {/* Zoom Preview Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-background/60 backdrop-blur-sm transition-opacity duration-300">
                    <span className="p-3 bg-primary text-primary-foreground rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <ExternalLink size={20} />
                    </span>
                  </div>
                </div>
                
                <div className="p-6 relative z-10 bg-card">
                  <h3 className="font-bold text-lg mb-2 line-clamp-2">{cert.title}</h3>
                  <p className="text-primary font-medium text-sm">{cert.issuer}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
