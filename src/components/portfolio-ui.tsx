import { Link } from "@tanstack/react-router";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Project } from "@/lib/portfolio-data";
import { socialLinks } from "@/lib/portfolio-data";
import { cn } from "@/lib/utils";

export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-5 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-accent-foreground before:h-px before:w-8 before:bg-accent">
      {children}
    </p>
  );
}

export function PageIntro({
  eyebrow,
  title,
  text,
}: {
  eyebrow: string;
  title: string;
  text: string;
}) {
  return (
    <header className="page-intro section-shell">
      <div className="content-shell">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="display-title max-w-5xl">{title}</h1>
        <p className="mt-7 max-w-2xl text-lg leading-8 text-muted-foreground">{text}</p>
      </div>
    </header>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  text,
  className,
}: {
  eyebrow?: string;
  title: string;
  text?: string;
  className?: string;
}) {
  return (
    <div className={cn("mb-10 md:mb-14", className)}>
      {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
      <h2 className="section-title max-w-3xl">{title}</h2>
      {text ? (
        <p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground md:text-lg">
          {text}
        </p>
      ) : null}
    </div>
  );
}

export function ArrowLink({
  to,
  children,
  search,
}: {
  to: "/about" | "/services" | "/portfolio" | "/contact";
  children: React.ReactNode;
  search?: Record<string, string>;
}) {
  return (
    <Link
      to={to}
      search={search as never}
      className="group inline-flex items-center gap-2 border-b border-foreground/30 pb-1 text-sm font-semibold text-foreground transition-colors hover:border-accent hover:text-accent-foreground"
    >
      {children}
      <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
    </Link>
  );
}

export function ProjectCard({
  project,
  featured = false,
  eager = false,
}: {
  project: Project;
  featured?: boolean;
  eager?: boolean;
}) {
  return (
    <article className={cn("project-card group", featured && "md:col-span-2")}>
      <Link
        to="/portfolio/$slug"
        params={{ slug: project.slug }}
        className="block overflow-hidden rounded-[var(--radius)] bg-muted"
        aria-label={`View ${project.name} case study`}
      >
        <img
          src={project.image}
          alt={`${project.name} website presentation`}
          width={1200}
          height={800}
          loading={eager ? "eager" : "lazy"}
          className={cn(
            "aspect-[3/2] w-full object-cover transition duration-700 group-hover:scale-[1.025]",
            featured && "md:aspect-[2/1]",
          )}
        />
      </Link>
      <div className="mt-5 grid gap-3 border-t border-border pt-5 sm:grid-cols-[1fr_auto]">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-accent-foreground">
            {project.category}
          </p>
          <h3 className="mt-2 font-display text-2xl text-foreground">{project.name}</h3>
          <p className="mt-2 max-w-xl text-sm leading-6 text-muted-foreground">{project.summary}</p>
          <p className="mt-3 text-xs text-muted-foreground">{project.tech.join(" · ")}</p>
        </div>
        <Link
          to="/portfolio/$slug"
          params={{ slug: project.slug }}
          className="mt-1 inline-flex size-11 items-center justify-center rounded-full border border-border transition-colors hover:border-accent hover:bg-accent hover:text-accent-foreground"
          aria-label={`View ${project.name}`}
        >
          <ArrowRight className="size-4" />
        </Link>
      </div>
    </article>
  );
}

export function FinalCta() {
  return (
    <section className="section-shell">
      <div className="content-shell">
        <div className="cta-panel">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary-foreground/70">
            Start a conversation
          </p>
          <h2 className="mt-5 max-w-3xl font-display text-4xl leading-tight text-primary-foreground md:text-6xl">
            Have a project in mind?
          </h2>
          <p className="mt-5 max-w-xl text-base leading-7 text-primary-foreground/75">
            Tell me what you’re planning, and let’s explore how we can turn it into a reliable
            digital product.
          </p>
          <div className="mobile-cta-row mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg" variant="secondary">
              <Link to="/contact">
                Start a Project <ArrowRight />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href={socialLinks.linkedin} target="_blank" rel="noreferrer">
                Connect on LinkedIn <ExternalLink />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
