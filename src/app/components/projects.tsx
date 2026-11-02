import type { LucideIcon } from "lucide-react";
import {
  Boxes,
  BrainCircuit,
  Dna,
  Gamepad2,
  GraduationCap,
  Package,
  Server,
  Workflow,
} from "lucide-react";
import { Section } from "@/components/ui/section";
import type { RESUME_DATA } from "@/data/resume-data";

type Project = (typeof RESUME_DATA)["projects"][number];

/**
 * Maps each project to a consistent line icon
 */
const PROJECT_ICONS: Record<string, LucideIcon> = {
  Genetix: Dna,
  Outbox: Package,
  ".NET Observability & Event-Driven Libraries": Boxes,
  "AI Assistant for Backstage (RAG + TechDocs)": BrainCircuit,
  "Backstage CLI & MCP Server": Server,
  "n8n Node for Backstage": Workflow,
  "Reinforcement Learning Fundamentals": GraduationCap,
  "Point & Click Toolkit (pctk)": Gamepad2,
};

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

  const displayUrl = link
    .replace("https://", "")
    .replace("www.", "")
    .replace(/\/$/, "");

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
      {projects.map((project) => {
        const Icon = PROJECT_ICONS[project.title];
        return (
          <li
            key={project.title}
            className="flex gap-x-2.5 py-2.5 first:pt-1 last:pb-1"
          >
            {Icon && (
              <Icon
                className="mt-0.5 size-4 shrink-0 text-muted-foreground"
                aria-hidden="true"
              />
            )}
            <div className="min-w-0">
              <h3 className="text-sm">
                <ProjectLink title={project.title} link={project.link?.href} />
              </h3>
              <p
                className="mt-1 text-pretty text-xs leading-relaxed text-foreground/70 print:mt-0.5 print:text-[10px] print:leading-snug"
                aria-label="Project description"
              >
                {project.description}
              </p>
            </div>
          </li>
        );
      })}
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
    <Section className="scroll-mb-16 print-force-new-page print:space-y-3">
      <h2 className="text-xl font-bold" id="side-projects">
        Side projects
      </h2>
      <ProjectList projects={projects} />
    </Section>
  );
}
