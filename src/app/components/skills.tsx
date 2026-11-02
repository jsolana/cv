import type { LucideIcon } from "lucide-react";
import {
  Boxes,
  BrainCircuit,
  Cloud,
  Database,
  MessageSquareShare,
  ShieldCheck,
  Terminal,
  Waves,
} from "lucide-react";
import { Section } from "@/components/ui/section";
import type { RESUME_DATA } from "@/data/resume-data";
import { cn } from "@/lib/utils";

type SkillGroups = (typeof RESUME_DATA)["skills"];
type SkillGroup = SkillGroups[number];

/**
 * Maps each skill category to a consistent line icon
 */
const CATEGORY_ICONS: Record<string, LucideIcon> = {
  "Engineering & Architecture": Boxes,
  "AI & Developer Tooling": BrainCircuit,
  "Languages & Frameworks": Terminal,
  "Cloud Native & Infrastructure": Cloud,
  "Messaging & API Integration": MessageSquareShare,
  "Observability & Monitoring": Waves,
  "Data & Storage": Database,
  Security: ShieldCheck,
};

interface SkillChipProps {
  label: string;
  featured?: boolean;
}

/**
 * Compact chip for a single technology
 */
function SkillChip({ label, featured }: SkillChipProps) {
  return (
    <li>
      <span
        className={cn(
          "inline-block whitespace-nowrap rounded-md border px-1.5 py-0.5 text-[11px] leading-none font-mono text-foreground/80 transition-colors hover:border-foreground/30 hover:text-foreground print:text-[9px] print:px-1 print:py-px",
          featured
            ? "border-primary/25 bg-primary/5"
            : "border-border bg-secondary/50",
        )}
      >
        {label}
      </span>
    </li>
  );
}

interface SkillCardProps {
  group: SkillGroup;
}

/**
 * Card representing a competency domain: icon, title and tech chips
 */
function SkillCard({ group }: SkillCardProps) {
  const Icon = CATEGORY_ICONS[group.category];
  const featured = group.featured === true;

  return (
    <article
      className={cn(
        "flex flex-col gap-2 rounded-lg border bg-card p-3 transition-colors hover:border-foreground/25 print:p-2",
        featured && "border-primary/30",
      )}
      aria-label={`${group.category} skills`}
    >
      <div className="flex items-center gap-2">
        {Icon && (
          <Icon
            className={cn(
              "size-4 shrink-0 print:size-3",
              featured ? "text-primary" : "text-muted-foreground",
            )}
            aria-hidden="true"
          />
        )}
        <h3
          className={cn(
            "font-mono text-xs font-semibold uppercase tracking-wider leading-none print:text-[10px]",
            featured ? "text-foreground" : "text-foreground/75",
          )}
        >
          {group.category}
        </h3>
      </div>
      <ul className="flex list-none flex-wrap gap-1 p-0" aria-label="Technologies">
        {group.items.map((item) => (
          <SkillChip key={item} label={item} featured={featured} />
        ))}
      </ul>
    </article>
  );
}

interface SkillsProps {
  skills: SkillGroups;
  className?: string;
}

/**
 * Technical expertise section
 * Displays skills grouped into competency domains on a responsive card grid
 */
export function Skills({ skills, className }: SkillsProps) {
  return (
    <Section className={className}>
      <div>
        <h2 className="text-xl font-bold" id="skills-section">
          Technical Expertise
        </h2>
        <p className="font-mono text-xs text-muted-foreground print:text-[10px]">
          Engineering, Architecture &amp; Technology Stack
        </p>
      </div>
      <div
        className="grid grid-cols-1 gap-2 sm:grid-cols-2 print:grid-cols-2 print:gap-1.5"
        aria-label="Skill categories"
      >
        {skills.map((group) => (
          <SkillCard key={group.category} group={group} />
        ))}
      </div>
    </Section>
  );
}
