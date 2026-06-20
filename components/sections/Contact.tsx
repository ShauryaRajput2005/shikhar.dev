"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Send } from "lucide-react";
import { Github, Linkedin } from "@/components/shared/icons";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Mailto fallback
    const mailtoLink = `mailto:shikharshauryarajput@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`From: ${formData.name} (${formData.email})\n\n${formData.message}`)}`;
    window.location.href = mailtoLink;
  };

  return (
    <section id="contact" className="py-24 relative bg-card/50">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-4">
              Get In <span className="text-primary">Touch</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Left: Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-background border border-border rounded-2xl p-8 shadow-xl"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2 relative group">
                  <Label htmlFor="name" className="text-muted-foreground group-focus-within:text-primary transition-colors">Full Name</Label>
                  <Input 
                    id="name" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required 
                    className="bg-card border-border focus-visible:ring-primary h-12" 
                    placeholder="John Doe"
                  />
                </div>
                
                <div className="space-y-2 relative group">
                  <Label htmlFor="email" className="text-muted-foreground group-focus-within:text-primary transition-colors">Email</Label>
                  <Input 
                    id="email" 
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required 
                    className="bg-card border-border focus-visible:ring-primary h-12" 
                    placeholder="john@example.com"
                  />
                </div>

                <div className="space-y-2 relative group">
                  <Label htmlFor="subject" className="text-muted-foreground group-focus-within:text-primary transition-colors">Subject</Label>
                  <Input 
                    id="subject" 
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required 
                    className="bg-card border-border focus-visible:ring-primary h-12" 
                    placeholder="Project Inquiry"
                  />
                </div>

                <div className="space-y-2 relative group">
                  <Label htmlFor="message" className="text-muted-foreground group-focus-within:text-primary transition-colors">Message</Label>
                  <Textarea 
                    id="message" 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required 
                    className="bg-card border-border focus-visible:ring-primary min-h-[150px] resize-y" 
                    placeholder="Hello Shikhar, I'd like to talk about..."
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full h-12 text-base font-medium relative overflow-hidden group"
                >
                  <span className="relative z-10 flex items-center justify-center">
                    Send Message <Send className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </span>
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
                </Button>
              </form>
            </motion.div>

            {/* Right: Social & Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col justify-center gap-8 lg:pl-12"
            >
              <div>
                <h3 className="text-2xl font-bold mb-6 text-foreground">Connect with me</h3>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!
                </p>
              </div>

              <div className="space-y-6">
                <a 
                  href="mailto:shikharshauryarajput@gmail.com" 
                  className="flex items-center gap-4 p-4 rounded-xl hover:bg-secondary border border-transparent hover:border-border transition-all group"
                >
                  <div className="p-3 bg-card rounded-lg border border-border group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-colors">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Email</p>
                    <p className="text-sm text-muted-foreground">shikharshauryarajput@gmail.com</p>
                  </div>
                </a>

                <a 
                  href="https://www.linkedin.com/in/shikhar-shaurya25" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl hover:bg-secondary border border-transparent hover:border-border transition-all group"
                >
                  <div className="p-3 bg-card rounded-lg border border-border group-hover:bg-[#0A66C2] group-hover:text-white group-hover:border-[#0A66C2] transition-colors">
                    <Linkedin size={24} />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">LinkedIn</p>
                    <p className="text-sm text-muted-foreground">linkedin.com/in/shikhar-shaurya25</p>
                  </div>
                </a>

                <a 
                  href="https://github.com/ShauryaRajput2005" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl hover:bg-secondary border border-transparent hover:border-border transition-all group"
                >
                  <div className="p-3 bg-card rounded-lg border border-border group-hover:bg-foreground group-hover:text-background group-hover:border-foreground transition-colors">
                    <Github size={24} />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">GitHub</p>
                    <p className="text-sm text-muted-foreground">github.com/ShauryaRajput2005</p>
                  </div>
                </a>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
