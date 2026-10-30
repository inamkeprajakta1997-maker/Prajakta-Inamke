import { Link } from "@tanstack/react-router";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { LiveProject, Project } from "@/lib/portfolio-data";
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
  embedded = false,
}: {
  eyebrow: string;
  title: string;
  text: string;
  embedded?: boolean;
}) {
  const Heading = embedded ? "h2" : "h1";
  return (
    <header className="page-intro section-shell">
      <div className="content-shell">
        <Eyebrow>{eyebrow}</Eyebrow>
        <Heading className={cn(embedded ? "section-title" : "display-title", "max-w-5xl")}>
          {title}
        </Heading>
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
      to="/"
      hash={to.slice(1)}
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
  if ("liveUrl" in project) {
    return (
      <article className={cn("project-card group min-w-0", featured && "md:col-span-2")}>
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="block overflow-hidden rounded-[var(--radius)] bg-muted focus-visible:outline-2 focus-visible:outline-offset-4"
          aria-label={`View ${project.name} live website (opens in a new tab)`}
        >
          <LiveProjectImage project={project} featured={featured} eager={eager} />
        </a>
        <div className="mt-5 border-t border-border pt-5">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-accent-foreground">
            {project.categoryLabel}
          </p>
          <h3 className="mt-2 font-display text-2xl text-foreground">{project.name}</h3>
          <p className="mt-2 max-w-xl text-sm leading-6 text-muted-foreground">{project.summary}</p>
          <ul className="mt-4 flex flex-wrap gap-2" aria-label={`${project.name} categories`}>
            {project.tags.map((tag) => (
              <li
                key={tag}
                className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground"
              >
                {tag}
              </li>
            ))}
          </ul>
          <Button asChild variant="outline" className="mt-5 max-w-full">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View Live Website: ${project.name} (opens in a new tab)`}
            >
              View Live Website <ExternalLink aria-hidden="true" />
            </a>
          </Button>
        </div>
      </article>
    );
  }
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

export function LiveProjectImage({
  project,
  featured = false,
  eager = false,
}: {
  project: LiveProject;
  featured?: boolean;
  eager?: boolean;
}) {
  return (
    <img
      src={project.image}
      alt={project.imageAlt}
      width={1440}
      height={960}
      loading={eager ? "eager" : "lazy"}
      decoding="async"
      className={cn(
        "aspect-[3/2] w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.025] motion-reduce:transform-none motion-reduce:transition-none",
        featured && "md:aspect-[2/1]",
      )}
    />
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
              <Link to="/" hash="contact">
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
