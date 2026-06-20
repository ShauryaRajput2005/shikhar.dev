"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Download, ExternalLink } from "lucide-react";
import Link from "next/link";

const titles = [
  "Frontend Developer",
  "Data Analytics Engineer",
  "AI Enthusiast",
];

export function Hero() {
  const [titleIndex, setTitleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTitleIndex((prev) => (prev + 1) % titles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 overflow-hidden">
      {/* Neural Network Background placeholder */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <motion.div
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{
            duration: 20,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-amber-500/10 via-transparent to-transparent bg-[length:100%_100%]"
        />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-8">
        
        {/* Left Content */}
        <div className="w-full lg:w-1/2 flex flex-col gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <span className="text-primary font-semibold tracking-wider uppercase text-sm mb-2 block">
              Shikhar.dev
            </span>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-2">
              Shikhar Shaurya
            </h1>
            <h2 className="text-2xl md:text-3xl text-muted-foreground font-medium mb-1">
              Software Engineer
            </h2>
            <h3 className="text-xl md:text-2xl text-muted-foreground/80 font-medium">
              AI Engineer <span className="text-sm uppercase tracking-wider text-primary">(Aspiring)</span>
            </h3>
          </motion.div>

          {/* Rotating Titles */}
          <div className="h-8 md:h-10 relative overflow-hidden flex items-center">
            <span className="text-lg md:text-xl font-medium mr-2">I am a</span>
            <AnimatePresence mode="popLayout">
              <motion.span
                key={titleIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="text-lg md:text-xl font-semibold text-primary"
              >
                {titles[titleIndex]}
              </motion.span>
            </AnimatePresence>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="border-l-2 border-primary pl-4 my-2"
          >
            <p className="text-lg font-medium text-foreground mb-1">
              Continuously Learning. Consistently Delivering.
            </p>
            <p className="text-muted-foreground">
              Building Frontend Applications, AI Systems & Data-Driven Products.
            </p>
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-wrap items-center gap-4 mt-4"
          >
            <Link
              href="#contact"
              className="px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-full hover:bg-primary/90 transition-colors flex items-center gap-2"
            >
              Contact Me <ArrowRight size={18} />
            </Link>
            <a
              href="/assets/resume/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-secondary text-secondary-foreground font-semibold rounded-full hover:bg-secondary/80 transition-colors flex items-center gap-2 border border-border"
            >
              View Resume <ExternalLink size={18} />
            </a>
            <a
              href="/assets/resume/resume.pdf"
              download="Shikhar_Shaurya_Resume.pdf"
              className="px-6 py-3 text-muted-foreground font-medium hover:text-foreground transition-colors flex items-center gap-2 group"
            >
              Download <Download size={18} className="group-hover:-translate-y-1 transition-transform" />
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="flex items-center gap-8 mt-8 pt-8 border-t border-border/50"
          >
            <div>
              <div className="text-3xl font-bold text-foreground flex items-baseline">
                2<span className="text-primary text-xl ml-1">+</span>
              </div>
              <div className="text-sm font-medium text-muted-foreground">Internships Completed</div>
            </div>
            <div className="w-px h-12 bg-border/50" />
            <div>
              <div className="text-3xl font-bold text-foreground flex items-baseline">
                2<span className="text-primary text-xl ml-1">+</span>
              </div>
              <div className="text-sm font-medium text-muted-foreground">Featured Projects</div>
            </div>
          </motion.div>
        </div>

        {/* Right Illustration */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end relative">
          <motion.div
            animate={{ y: [-10, 10, -10] }}
            transition={{ duration: 6, ease: "easeInOut", repeat: Infinity }}
            className="relative w-full max-w-md aspect-square rounded-3xl overflow-hidden border border-border bg-card/50 shadow-2xl backdrop-blur-sm"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent mix-blend-overlay z-10" />
            <Image
              src="/assets/hero/illustration.png"
              alt="Shikhar Shaurya Developer Illustration"
              fill
              className="object-cover object-center scale-105"
              priority
            />
          </motion.div>
          {/* Decorative floating elements */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, ease: "linear", repeat: Infinity }}
            className="absolute -top-10 -right-10 w-32 h-32 rounded-full border border-primary/20 border-dashed pointer-events-none"
          />
        </div>

      </div>
    </section>
  );
}
