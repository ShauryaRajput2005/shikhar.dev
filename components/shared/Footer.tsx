import Link from "next/link";
import { Mail } from "lucide-react";
import { Github, Linkedin } from "@/components/shared/icons";

export function Footer() {
  return (
    <footer className="bg-background border-t border-border pt-16 pb-8">
      <div className="container mx-auto px-6 md:px-12 text-center">
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Building intelligent systems that create real impact.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center border-t border-border/50 pt-8">
          <div className="text-left">
            <Link href="/" className="text-2xl font-bold tracking-tighter">
              Shikhar<span className="text-primary">.dev</span>
            </Link>
            <p className="text-muted-foreground mt-2 font-medium">
              Continuously Learning. <br />
              Consistently Delivering.
            </p>
          </div>

          <div className="flex justify-center gap-6">
            <a
              href="https://github.com/ShauryaRajput2005"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/shikhar-shaurya25"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:shikharshauryarajput@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
          </div>

          <div className="text-right text-muted-foreground text-sm">
            &copy; {new Date().getFullYear()} Shikhar Shaurya. <br />
            All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
