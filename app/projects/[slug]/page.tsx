import { notFound } from "next/navigation";
import { compileMDX } from "next-mdx-remote/rsc";
import { getProjectBySlug, getProjects } from "@/lib/mdx";
import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Github } from "@/components/shared/icons";
import Image from "next/image";
import type { ReactElement } from "react";

export const dynamic = "force-static";
export const revalidate = false;

// Module-level cache: MDX is compiled once per slug per process lifetime.
// In dev, the process stays alive between requests, so this avoids the
// ~5-30s recompile penalty on every page visit.
const compiledMDXCache = new Map<string, ReactElement>();

export async function generateStaticParams() {
  const projects = getProjects();
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) return { title: "Not Found" };

  return {
    title: `${project.frontmatter.title} | Shikhar Shaurya`,
    description: project.frontmatter.description,
  };
}

const ArchitectureDiagram = ({ src, alt }: { src: string; alt: string }) => (
  <div className="my-10 rounded-2xl overflow-hidden border border-border bg-card/50 shadow-xl">
    <div className="px-5 py-3 border-b border-border bg-card flex items-center gap-2">
      <div className="flex gap-1.5">
        <span className="w-3 h-3 rounded-full bg-red-500/70" />
        <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
        <span className="w-3 h-3 rounded-full bg-green-500/70" />
      </div>
      <span className="text-xs text-muted-foreground font-medium ml-2">{alt}</span>
    </div>
    <div className="relative w-full">
      <Image
        src={src}
        alt={alt}
        width={1200}
        height={800}
        className="w-full h-auto object-contain"
        quality={90}
      />
    </div>
  </div>
);

const components = {
  h1: (props: React.ComponentPropsWithoutRef<"h1">) => <h1 className="text-4xl font-bold tracking-tighter mb-6 text-foreground" {...props} />,
  h2: (props: React.ComponentPropsWithoutRef<"h2">) => <h2 className="text-2xl font-semibold mt-12 mb-4 text-foreground" {...props} />,
  h3: (props: React.ComponentPropsWithoutRef<"h3">) => <h3 className="text-xl font-medium mt-8 mb-4 text-foreground" {...props} />,
  p: (props: React.ComponentPropsWithoutRef<"p">) => <p className="text-muted-foreground leading-relaxed mb-6" {...props} />,
  ul: (props: React.ComponentPropsWithoutRef<"ul">) => <ul className="list-disc pl-6 mb-6 text-muted-foreground space-y-2" {...props} />,
  li: (props: React.ComponentPropsWithoutRef<"li">) => <li {...props} />,
  strong: (props: React.ComponentPropsWithoutRef<"strong">) => <strong className="font-semibold text-foreground" {...props} />,
  ArchitectureDiagram,
};

async function getCompiledMDX(slug: string, source: string): Promise<ReactElement> {
  if (compiledMDXCache.has(slug)) {
    return compiledMDXCache.get(slug)!;
  }

  const { content } = await compileMDX({
    source,
    components,
    options: { parseFrontmatter: false },
  });

  compiledMDXCache.set(slug, content);
  return content;
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const content = await getCompiledMDX(slug, project.content);

  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-6 md:px-12 max-w-4xl">
        <Link
          href="/#projects"
          className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary transition-colors mb-12"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Projects
        </Link>

        <header className="mb-16">
          <div className="flex flex-wrap gap-2 mb-6">
            {project.frontmatter.technologies.map((tech) => (
              <span
                key={tech}
                className="text-xs font-medium px-3 py-1 bg-secondary text-secondary-foreground rounded-full border border-border"
              >
                {tech}
              </span>
            ))}
          </div>

          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6">
            {project.frontmatter.title}
          </h1>

          <p className="text-xl text-muted-foreground leading-relaxed">
            {project.frontmatter.description}
          </p>

          {(project.frontmatter.github || project.frontmatter.demo) && (
            <div className="flex flex-wrap gap-4 mt-8">
              {project.frontmatter.github && (
                <a
                  href={project.frontmatter.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring bg-secondary text-secondary-foreground hover:bg-secondary/80 h-10 px-4 py-2"
                >
                  <Github className="mr-2 h-4 w-4" />
                  GitHub
                </a>
              )}
              {project.frontmatter.demo && (
                <a
                  href={project.frontmatter.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Live Demo
                </a>
              )}
            </div>
          )}
        </header>

        <div className="prose prose-invert max-w-none">
          {content}
        </div>
      </div>
    </div>
  );
}
