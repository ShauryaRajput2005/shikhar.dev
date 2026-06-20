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
};

export type Project = {
  slug: string;
  frontmatter: ProjectFrontmatter;
  content: string;
};

export function getProjects(): Project[] {
  if (!fs.existsSync(contentDir)) {
    return [];
  }

  const files = fs.readdirSync(contentDir);
  const projects = files
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

  return projects;
}

export function getProjectBySlug(slug: string): Project | null {
  const filePath = path.join(contentDir, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) {
    return null;
  }

  const fileContent = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContent);

  return {
    slug,
    frontmatter: data as ProjectFrontmatter,
    content,
  };
}
