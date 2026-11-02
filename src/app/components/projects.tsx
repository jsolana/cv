import { Section } from "@/components/ui/section";
import type { RESUME_DATA } from "@/data/resume-data";

type Project = (typeof RESUME_DATA)["projects"][number];

interface ProjectLinkProps {
  title: string;
  link?: string;
}

/**
 * Renders project title with optional link and status indicator
 */
function ProjectLink({ title, link }: ProjectLinkProps) {
  if (!link) {
    return <span>{title}</span>;
  }

  const displayUrl = link.replace("https://", "").replace("www.", "").replace(/\/$/, "");

  return (
    <>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="group inline-flex items-center gap-1.5 font-medium hover:underline"
        aria-label={`${title} project (opens in new tab)`}
      >
        {title}
        <span
          className="size-1.5 rounded-full bg-green-500 transition-transform group-hover:scale-125"
          title="Active project indicator"
          aria-hidden="true"
        />
      </a>
      <div
        className="hidden font-mono text-[10px] text-muted-foreground print:block print:mt-0.5"
        aria-hidden="true"
      >
        {displayUrl}
      </div>
    </>
  );
}

interface ProjectListProps {
  projects: readonly Project[];
}

/**
 * Renders a compact list of projects as rows separated by subtle dividers
 */
function ProjectList({ projects }: ProjectListProps) {
  return (
    <ul className="list-none divide-y divide-border/60 p-0">
      {projects.map((project) => (
        <li key={project.title} className="py-2.5 first:pt-1 last:pb-1">
          <h3 className="text-sm">
            <ProjectLink title={project.title} link={project.link?.href} />
          </h3>
          <p
            className="mt-1 text-pretty text-xs leading-relaxed text-foreground/70 print:mt-0.5 print:text-[10px] print:leading-snug"
            aria-label="Project description"
          >
            {project.description}
          </p>
        </li>
      ))}
    </ul>
  );
}

interface ProjectsProps {
  projects: (typeof RESUME_DATA)["projects"];
}

/**
 * Section component displaying all side projects as a single grouped list
 */
export function Projects({ projects }: ProjectsProps) {
  return (
    <Section
      className="scroll-mb-16 print-force-new-page print:space-y-3"
    >
      <h2 className="text-xl font-bold" id="side-projects">
        Side projects
      </h2>
      <ProjectList projects={projects} />
    </Section>
  );
}
