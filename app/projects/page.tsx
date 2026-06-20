import Link from "next/link";
import { getProjects } from "@/lib/mdx";

export const metadata = {
  title: "Projects | Shikhar Shaurya",
  description: "Featured engineering work and projects by Shikhar Shaurya.",
};

export default function ProjectsPage() {
  const projects = getProjects();

  return (
    <div className="container mx-auto px-6 md:px-12 py-32 min-h-screen">
      <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-12">
        Project <span className="text-primary">Archive</span>
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <Link 
            href={`/projects/${project.slug}`} 
            key={project.slug}
            className="group block"
          >
            <div className="bg-card border border-border rounded-xl p-6 h-full transition-all duration-300 hover:border-primary/50 hover:shadow-[0_0_30px_-10px_rgba(255,181,71,0.2)]">
              <h2 className="text-2xl font-semibold mb-3 group-hover:text-primary transition-colors">
                {project.frontmatter.title}
              </h2>
              <p className="text-muted-foreground mb-6 line-clamp-3">
                {project.frontmatter.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.frontmatter.technologies.map((tech) => (
                  <span 
                    key={tech} 
                    className="text-xs font-medium px-2.5 py-1 bg-secondary text-secondary-foreground rounded-md"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
