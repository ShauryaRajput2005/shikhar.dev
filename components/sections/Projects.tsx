"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ExternalLink, Code2, FolderGit2 } from "lucide-react";

const projects = [
  {
    slug: "juris",
    title: "JURIS",
    description: "JURIS is an AI-powered legal intelligence platform that uses Retrieval-Augmented Generation (RAG) to help users understand legal information, analyze documents, and obtain context-aware responses grounded in a legal knowledge base.",
    technologies: ["React", "Next.js", "Python", "FastAPI", "Pinecone", "LangChain", "OpenAI"],
    heroTheme: "Making legal information easier to understand through AI-powered retrieval and explanation.",
  },
  {
    slug: "roomide",
    title: "RoomIDE",
    description: "RoomIDE enables users to create collaborative coding rooms where multiple developers can write, edit, and execute code together in real time.",
    technologies: ["React", "TypeScript", "Node.js", "Express", "Socket.io", "Monaco Editor"],
    heroTheme: "Browser-based collaborative coding platform for real-time teamwork.",
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tighter flex items-center gap-4">
              <FolderGit2 className="text-primary h-8 w-8" />
              Featured Engineering <span className="text-primary">Work</span>
            </h2>
            <Link 
              href="/projects" 
              className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 font-medium"
            >
              View Project Archive <ExternalLink size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                whileHover={{ y: -5 }}
                className="group relative bg-card rounded-2xl border border-border p-8 md:p-10 overflow-hidden transition-all duration-500 hover:shadow-[0_0_40px_-15px_rgba(255,181,71,0.3)] hover:border-primary/50 flex flex-col h-full"
              >
                {/* Glow Effect */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-32 bg-primary/20 blur-[100px] rounded-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <h3 className="text-3xl font-bold mb-3 relative z-10">{project.title}</h3>
                <p className="text-primary font-medium mb-6 relative z-10">{project.heroTheme}</p>
                
                <p className="text-muted-foreground mb-8 line-clamp-4 relative z-10 flex-grow">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-8 relative z-10">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span 
                      key={tech} 
                      className="text-xs font-medium px-3 py-1 bg-secondary text-secondary-foreground rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="text-xs font-medium px-3 py-1 bg-secondary text-muted-foreground rounded-full">
                      +{project.technologies.length - 4} more
                    </span>
                  )}
                </div>

                <div className="flex gap-4 relative z-10 mt-auto pt-6 border-t border-border/50">
                  <Link 
                    href={`/projects/${project.slug}`}
                    className="flex-1 inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors bg-primary text-primary-foreground hover:bg-primary/90 h-11 px-4"
                  >
                    View Project
                  </Link>
                  <a 
                    href="#"
                    className="flex-1 inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors border border-input bg-background hover:bg-accent hover:text-accent-foreground h-11 px-4"
                  >
                    <Code2 className="mr-2 h-4 w-4" />
                    GitHub
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
