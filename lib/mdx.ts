import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const contentDir = path.join(process.cwd(), 'content', 'projects');

export type ProjectFrontmatter = {
  title: string;
  description: string;
  technologies: string[];
  github?: string;
  demo?: string;
  featured: boolean;
  thumbnail?: string;
  architecture?: string;
};

export type Project = {
  slug: string;
  frontmatter: ProjectFrontmatter;
  content: string;
};

// Module-level cache — lives for the lifetime of the server process
let projectsCache: Project[] | null = null;
const projectBySlugCache = new Map<string, Project | null>();

export function getProjects(): Project[] {
  if (projectsCache) return projectsCache;

  if (!fs.existsSync(contentDir)) {
    projectsCache = [];
    return projectsCache;
  }

  const files = fs.readdirSync(contentDir);
  projectsCache = files
    .filter((filename) => filename.endsWith('.mdx'))
    .map((filename) => {
      const slug = filename.replace('.mdx', '');
      const filePath = path.join(contentDir, filename);
      const fileContent = fs.readFileSync(filePath, 'utf8');
      const { data, content } = matter(fileContent);

      return {
        slug,
        frontmatter: data as ProjectFrontmatter,
        content,
      };
    });

  return projectsCache;
}

export function getProjectBySlug(slug: string): Project | null {
  if (projectBySlugCache.has(slug)) {
    return projectBySlugCache.get(slug)!;
  }

  const filePath = path.join(contentDir, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) {
    projectBySlugCache.set(slug, null);
    return null;
  }

  const fileContent = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContent);

  const project: Project = {
    slug,
    frontmatter: data as ProjectFrontmatter,
    content,
  };

  projectBySlugCache.set(slug, project);
  return project;
}
