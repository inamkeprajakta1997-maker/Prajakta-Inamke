import { useMemo, useState } from "react";
import { Link, useSearch } from "@tanstack/react-router";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  ChevronLeft,
  ChevronRight,
  CircleCheck,
  ExternalLink,
} from "lucide-react";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  ArrowLink,
  Eyebrow,
  FinalCta,
  PageIntro,
  ProjectCard,
  SectionHeading,
} from "@/components/portfolio-ui";
import { projects, services, socialLinks, techGroups } from "@/lib/portfolio-data";

const process = [
  "Discovery",
  "Planning",
  "UI Implementation",
  "Development",
  "Testing",
  "Deployment",
  "Support",
];
const testimonials = [
  {
    quote:
      "Prajakta brought structure to a complicated brief and kept every decision tied to what our customers actually needed.",
    name: "Sample Client",
    company: "Professional Services Business",
    type: "Business website — placeholder testimonial",
  },
  {
    quote:
      "The new workflow is clearer for our team and considerably easier for customers to use on mobile.",
    name: "Sample Client",
    company: "Growing Operations Team",
    type: "Web application — placeholder testimonial",
  },
  {
    quote:
      "We always knew what was happening, what needed a decision and what would be delivered next.",
    name: "Sample Client",
    company: "Independent Retail Brand",
    type: "E-commerce — placeholder testimonial",
  },
];

export function HomePage() {
  const [testimonial, setTestimonial] = useState(0);
  return (
    <>
      <section className="section-shell overflow-hidden pb-14 pt-16 md:pb-24 md:pt-24">
        <div className="content-shell grid items-center gap-14 lg:grid-cols-[1.02fr_.98fr]">
          <div>
            <div className="mb-7 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
              <span className="size-2 rounded-full bg-status" />
              Available for selected freelance projects
            </div>
            <h1 className="display-title">
              I build digital experiences that turn ideas into working products.
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-8 text-muted-foreground">
              I’m Prajakta Inamke, a web developer specializing in modern business websites,
              e-commerce platforms and custom web applications.
            </p>
            <div className="mobile-cta-row mt-9 flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link to="/portfolio">
                  View My Work <ArrowRight />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/contact">Start a Project</Link>
              </Button>
            </div>
            <p className="mt-9 text-xs font-medium text-muted-foreground">
              React <span className="mx-2 text-accent">•</span> Next.js{" "}
              <span className="mx-2 text-accent">•</span> WordPress{" "}
              <span className="mx-2 text-accent">•</span> PHP{" "}
              <span className="mx-2 text-accent">•</span> MySQL{" "}
              <span className="mx-2 text-accent">•</span> Node.js
            </p>
          </div>
          <div className="hero-composition">
            <div className="browser-frame">
              <div className="browser-bar">
                <i />
                <i />
                <i />
              </div>
              <img
                src={projects[0].image}
                alt="Selected e-commerce website work"
                width={1200}
                height={800}
              />
            </div>
            <div className="hero-detail">
              <span>Selected project</span>
              <strong>{projects[0].name}</strong>
              <Link
                to="/portfolio/$slug"
                params={{ slug: projects[0].slug }}
                aria-label="View Atelier Living case study"
              >
                <ArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="border-y border-border">
        <div className="content-shell flex flex-wrap justify-between gap-x-8 gap-y-4 py-6 text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">
          {[
            "Business Websites",
            "E-commerce",
            "Custom Web Apps",
            "Admin Dashboards",
            "Website Redesign",
          ].map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </section>
      <section className="section-shell">
        <div className="content-shell grid gap-10 md:grid-cols-[.7fr_1.3fr]">
          <Eyebrow>How I work</Eyebrow>
          <div>
            <h2 className="section-title">Development that goes beyond good-looking websites.</h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
              I work across design implementation, frontend development, backend functionality,
              admin systems, deployment and ongoing support—so the finished product works for your
              business, not just the launch day.
            </p>
            <div className="mt-8">
              <ArrowLink to="/about">Learn More About Me</ArrowLink>
            </div>
          </div>
        </div>
      </section>
      <section className="section-shell bg-surface-strong">
        <div className="content-shell">
          <SectionHeading eyebrow="Services" title="What I Can Build For You" />
          <div className="grid border-t border-border md:grid-cols-2">
            {services.slice(0, 4).map((service) => (
              <div key={service.id} className="service-preview">
                <span>{service.number}</span>
                <h3>{service.shortTitle}</h3>
                <p>{service.overview}</p>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <ArrowLink to="/services">Explore All Services</ArrowLink>
          </div>
        </div>
      </section>
      <section className="section-shell">
        <div className="content-shell">
          <SectionHeading
            eyebrow="Portfolio"
            title="Selected Work"
            text="A selection of websites and digital products shaped around clear business goals and dependable everyday use."
          />
          <div className="grid gap-x-8 gap-y-16 md:grid-cols-2">
            {projects.slice(0, 4).map((project, index) => (
              <ProjectCard
                key={project.slug}
                project={project}
                featured={index === 0 || index === 3}
              />
            ))}
          </div>
          <div className="mt-12">
            <ArrowLink to="/portfolio">View All Projects</ArrowLink>
          </div>
        </div>
      </section>
      <section className="section-shell border-y border-border bg-surface-strong">
        <div className="content-shell">
          <SectionHeading eyebrow="Process" title="From Idea to Launch" />
          <ol className="process-line">
            {process.map((item, index) => (
              <li key={item}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{item}</strong>
                {index < process.length - 1 ? <ArrowRight /> : null}
              </li>
            ))}
          </ol>
        </div>
      </section>
      <section className="section-shell">
        <div className="content-shell">
          <SectionHeading eyebrow="Capabilities" title="Tools & Technologies" />
          <div className="tech-grid">
            {techGroups.map((group) => (
              <div key={group.name}>
                <h3>{group.name}</h3>
                <div>
                  {group.items.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section-shell bg-primary text-primary-foreground">
        <div className="content-shell">
          <SectionHeading
            eyebrow="Partnership"
            title="A dependable development partner, not just a pair of hands."
          />
          <div className="editorial-grid">
            {[
              "End-to-End Development",
              "Business-Focused Approach",
              "Responsive & Performance Focused",
              "Post-Launch Support",
            ].map((item, i) => (
              <div key={item}>
                <span>0{i + 1}</span>
                <h3>{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section-shell">
        <div className="content-shell grid gap-10 lg:grid-cols-[.8fr_1.2fr]">
          <SectionHeading
            eyebrow="Client perspective"
            title="What Clients Say"
            text="Temporary sample feedback is shown here until verified client testimonials are supplied."
          />
          <div className="testimonial">
            <p>“{testimonials[testimonial].quote}”</p>
            <div className="mt-8 flex items-end justify-between gap-5">
              <div>
                <strong>{testimonials[testimonial].name}</strong>
                <span>{testimonials[testimonial].company}</span>
                <small>{testimonials[testimonial].type}</small>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() =>
                    setTestimonial((testimonial - 1 + testimonials.length) % testimonials.length)
                  }
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft />
                </button>
                <button
                  onClick={() => setTestimonial((testimonial + 1) % testimonials.length)}
                  aria-label="Next testimonial"
                >
                  <ChevronRight />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <FinalCta />
    </>
  );
}

export function AboutPage() {
  return (
    <>
      <PageIntro
        eyebrow="About Prajakta"
        title="Building digital solutions with equal focus on design, technology and business."
        text="I bring the clarity of a consultant and the practical ownership of a developer to every engagement."
      />
      <section className="section-shell pt-0">
        <div className="content-shell grid gap-12 lg:grid-cols-[.8fr_1.2fr]">
          <figure className="portrait-photo">
            <img
              src="/profile-photo-clean.png"
              alt="Prajakta Inamke, web developer and web solutions specialist"
              width="1072"
              height="1472"
              loading="eager"
            />
          </figure>
          <div className="space-y-14">
            <div>
              <Eyebrow>My Story</Eyebrow>
              <h2 className="section-title">
                More than development — I manage the complete web journey.
              </h2>
              <p className="body-copy">
                I’m Prajakta Inamke, a Web Developer and Head of Webakoof, with hands-on experience
                in building and managing business websites, e-commerce platforms, custom web
                applications and admin dashboards.
              </p>
              <p className="body-copy">
                My work goes beyond writing code. I understand client requirements, plan the right
                technical approach, coordinate development, manage hosting and deployment, and
                support projects after launch. Alongside leading web projects and a development
                team, I continue to work hands-on on selected projects from concept to production.
              </p>
            </div>
            <div>
              <Eyebrow>Development Philosophy</Eyebrow>
              <p className="body-copy">
                I believe a successful website should do more than look good. It should be easy to
                use, technically reliable and built around real business requirements. My approach
                focuses on clean development, practical solutions, clear communication and long-term
                maintainability.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="section-shell bg-surface-strong">
        <div className="content-shell">
          <SectionHeading
            eyebrow="Professional journey"
            title="Experience shaped by responsibility."
          />
          <div className="timeline">
            {[
              [
                "Foundation",
                "Built broad capability across websites, content systems, frontend interfaces and server-side functionality.",
              ],
              [
                "Ownership",
                "Moved from isolated tasks to handling complete requirements, delivery planning, deployment and support.",
              ],
              [
                "Leadership",
                "Coordinated work across teams, kept clients informed and translated priorities into achievable releases.",
              ],
              [
                "Independent practice",
                "Now partnering directly with businesses on focused websites and web applications from idea to launch.",
              ],
            ].map(([title, text], i) => (
              <div key={title}>
                <span>0{i + 1}</span>
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section-shell">
        <div className="content-shell grid gap-12 md:grid-cols-2">
          <div>
            <SectionHeading eyebrow="How I work" title="Clear decisions. Consistent delivery." />
            <p className="body-copy">
              I define the problem before the solution, keep communication direct, make progress
              visible and test the details that affect trust—from mobile layouts to forms,
              deployment and performance.
            </p>
          </div>
          <div>
            <SectionHeading
              eyebrow="Technical expertise"
              title="Strong across the full website lifecycle."
            />
            <div className="skill-list">
              {[
                "Interface development",
                "Backend functionality",
                "Content management",
                "Database design",
                "Hosting & DNS",
                "Ongoing maintenance",
              ].map((item) => (
                <span key={item}>
                  <Check />
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
      <FinalCta />
    </>
  );
}

export function ServicesPage() {
  return (
    <>
      <PageIntro
        eyebrow="Services"
        title="Web solutions built around your business."
        text="From a focused company website to a custom operational platform, each engagement starts with what the product needs to achieve."
      />
      <section className="pb-20 md:pb-28">
        <div className="content-shell divide-y divide-border border-y border-border">
          {services.map((service) => (
            <article key={service.id} id={service.id} className="service-detail">
              <div>
                <span>{service.number}</span>
                <h2>{service.title}</h2>
                <p>{service.overview}</p>
              </div>
              <div className="service-columns">
                <div>
                  <h3>Best suited for</h3>
                  <p>{service.suited}</p>
                  <h3>Typical functionality</h3>
                  <p>{service.functionality}</p>
                </div>
                <div>
                  <h3>Key capabilities</h3>
                  <ul>
                    {service.capabilities.map((item) => (
                      <li key={item}>
                        <Check />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Button asChild variant="outline">
                    <Link to="/contact" search={{ service: service.shortTitle }}>
                      Discuss This Project <ArrowRight />
                    </Link>
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
      <FinalCta />
    </>
  );
}

const categories = [
  "All",
  "Business Websites",
  "E-commerce",
  "Web Applications",
  "Portals",
  "Dashboards",
] as const;
export function PortfolioPage() {
  const [filter, setFilter] = useState<(typeof categories)[number]>("All");
  const visible =
    filter === "All" ? projects : projects.filter((project) => project.category === filter);
  return (
    <>
      <PageIntro
        eyebrow="Portfolio"
        title="Selected digital work, built for real use."
        text="Explore business websites, commerce experiences, portals and operational tools—each shaped around a clear practical outcome."
      />
      <section className="pb-24">
        <div className="content-shell">
          <div className="filter-row mb-12 flex gap-2" role="group" aria-label="Filter projects">
            {categories.map((category) => (
              <Button
                key={category}
                variant={filter === category ? "default" : "outline"}
                size="sm"
                onClick={() => setFilter(category)}
              >
                {category}
              </Button>
            ))}
          </div>
          <div className="grid gap-x-8 gap-y-16 md:grid-cols-2">
            {visible.map((project, index) => (
              <ProjectCard key={project.slug} project={project} featured={index % 3 === 0} />
            ))}
          </div>
        </div>
      </section>
      <FinalCta />
    </>
  );
}

export function CaseStudyPage({ slug }: { slug: string }) {
  const index = projects.findIndex((item) => item.slug === slug);
  const project = projects[index];
  if (!project)
    return (
      <div className="section-shell">
        <div className="content-shell">
          <Eyebrow>Project not found</Eyebrow>
          <h1 className="display-title">This case study isn’t available.</h1>
          <div className="mt-8">
            <Button asChild>
              <Link to="/portfolio">
                <ArrowLeft /> Back to Portfolio
              </Link>
            </Button>
          </div>
        </div>
      </div>
    );
  const previous = projects[(index - 1 + projects.length) % projects.length];
  const next = projects[(index + 1) % projects.length];
  return (
    <>
      <section className="section-shell pb-12">
        <div className="content-shell">
          <Link
            to="/portfolio"
            className="mb-10 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft /> Portfolio
          </Link>
          <Eyebrow>{project.category}</Eyebrow>
          <h1 className="display-title max-w-5xl">{project.name}</h1>
          <p className="mt-6 max-w-2xl text-xl leading-8 text-muted-foreground">
            {project.summary}
          </p>
          <div className="case-meta">
            <div>
              <span>Client / Industry</span>
              <strong>
                {project.client}
                <br />
                {project.industry}
              </strong>
            </div>
            <div>
              <span>Project category</span>
              <strong>{project.category}</strong>
            </div>
            <div>
              <span>Technology</span>
              <strong>{project.tech.join(" · ")}</strong>
            </div>
          </div>
        </div>
      </section>
      <div className="content-shell">
        <img
          src={project.image}
          alt={`${project.name} project screens`}
          width={1200}
          height={800}
          className="w-full rounded-[var(--radius)] object-cover"
        />
      </div>
      <section className="section-shell">
        <div className="content-shell case-sections">
          <div>
            <Eyebrow>Project overview</Eyebrow>
            <p>{project.summary}</p>
          </div>
          <div>
            <h2>The Challenge</h2>
            <p>{project.challenge}</p>
          </div>
          <div>
            <h2>The Approach</h2>
            <p>{project.approach}</p>
          </div>
          <div>
            <h2>The Solution</h2>
            <p>{project.solution}</p>
          </div>
          <div>
            <h2>Key Features</h2>
            <ul>
              {project.features.map((feature) => (
                <li key={feature}>
                  <Check />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2>Technology Used</h2>
            <p>{project.tech.join(" · ")}</p>
          </div>
          <div>
            <h2>Outcome</h2>
            <p>{project.outcome}</p>
          </div>
        </div>
      </section>
      <nav
        className="content-shell grid border-y border-border md:grid-cols-2"
        aria-label="Case studies"
      >
        <Link to="/portfolio/$slug" params={{ slug: previous.slug }} className="case-nav">
          <ArrowLeft />
          <span>
            <small>Previous project</small>
            {previous.name}
          </span>
        </Link>
        <Link
          to="/portfolio/$slug"
          params={{ slug: next.slug }}
          className="case-nav justify-end text-right"
        >
          <span>
            <small>Next project</small>
            {next.name}
          </span>
          <ArrowRight />
        </Link>
      </nav>
      <FinalCta />
    </>
  );
}

export function ExperiencePage() {
  const capabilities = [
    "Requirement gathering",
    "Project planning",
    "Website development",
    "Team coordination",
    "Client communication",
    "Deployment",
    "Hosting & DNS",
    "Website maintenance",
  ];
  return (
    <>
      <PageIntro
        eyebrow="Experience"
        title="Experience built through real projects."
        text="Practical delivery experience across development, leadership, project coordination and the client conversations that keep work moving."
      />
      <section className="section-shell pt-0">
        <div className="content-shell grid gap-14 lg:grid-cols-[1.15fr_.85fr]">
          <div className="timeline">
            {[
              [
                "Professional Experience",
                "Delivered responsive websites and applications across business, commerce and operational contexts.",
              ],
              [
                "Development Ownership",
                "Handled features from requirements and technical planning through testing, release and support.",
              ],
              [
                "Leadership Experience",
                "Coordinated contributors, clarified priorities and kept quality consistent across delivery.",
              ],
              [
                "Client Partnership",
                "Translated business needs into practical scope, communicated trade-offs and maintained momentum.",
              ],
            ].map(([title, text], i) => (
              <div key={title}>
                <span>0{i + 1}</span>
                <div>
                  <h2>{title}</h2>
                  <p>{text}</p>
                </div>
              </div>
            ))}
          </div>
          <aside className="experience-aside">
            <Eyebrow>Across every engagement</Eyebrow>
            <div className="skill-list">
              {capabilities.map((item) => (
                <span key={item}>
                  <Check />
                  {item}
                </span>
              ))}
            </div>
          </aside>
        </div>
      </section>
      <section className="section-shell bg-surface-strong">
        <div className="content-shell">
          <SectionHeading eyebrow="Technical experience" title="A practical, adaptable toolkit." />
          <div className="tech-grid">
            {techGroups.map((group) => (
              <div key={group.name}>
                <h3>{group.name}</h3>
                <div>
                  {group.items.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <FinalCta />
    </>
  );
}

const enquirySchema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(100),
  company: z.string().trim().max(100),
  email: z.string().trim().email("Enter a valid email address").max(255),
  phone: z.string().trim().max(20),
  service: z.string().min(1, "Choose what you need"),
  budget: z.string().min(1, "Choose a project budget"),
  timeline: z.string().trim().min(2, "Add your preferred timeline").max(100),
  description: z.string().trim().min(20, "Please share at least 20 characters").max(2000),
});
export function ContactPage() {
  const search = useSearch({ from: "/contact" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);
  function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const values = Object.fromEntries(new FormData(event.currentTarget));
    const parsed = enquirySchema.safeParse(values);
    if (!parsed.success) {
      setErrors(
        Object.fromEntries(
          parsed.error.issues.map((issue) => [String(issue.path[0]), issue.message]),
        ),
      );
      return;
    }
    setErrors({});
    setSent(true);
    event.currentTarget.reset();
  }
  return (
    <>
      <PageIntro
        eyebrow="Project enquiry"
        title="Let’s build something useful."
        text="Tell me a little about your project and I’ll get back to you."
      />
      <section className="pb-24">
        <div className="content-shell grid gap-12 lg:grid-cols-[.7fr_1.3fr]">
          <div>
            <h2 className="font-display text-3xl">A good starting point</h2>
            <p className="mt-5 text-base leading-7 text-muted-foreground">
              Share what you need, what success looks like and any timeframe you have in mind. You
              don’t need a finished technical brief.
            </p>
            <div className="mt-10 border-t border-border pt-6">
              <p className="text-sm text-muted-foreground">Prefer LinkedIn?</p>
              <a
                className="mt-3 inline-flex items-center gap-2 font-semibold"
                href={socialLinks.linkedin}
                target="_blank"
                rel="noreferrer"
              >
                Connect with me there <ExternalLink className="size-4" />
              </a>
            </div>
          </div>
          {sent ? (
            <div className="success-panel">
              <CircleCheck />
              <h2>Enquiry ready</h2>
              <p>
                Thank you. This demonstration confirms the form passed validation. Connect on
                LinkedIn to send the project details directly.
              </p>
              <Button asChild>
                <a href={socialLinks.linkedin} target="_blank" rel="noreferrer">
                  Continue on LinkedIn <ExternalLink />
                </a>
              </Button>
            </div>
          ) : (
            <form onSubmit={submit} noValidate className="enquiry-form">
              <div className="form-grid">
                <Field label="Name" name="name" error={errors.name} required />
                <Field label="Company / Brand" name="company" error={errors.company} />
                <Field label="Email" name="email" type="email" error={errors.email} required />
                <Field label="Phone Number" name="phone" type="tel" error={errors.phone} />
              </div>
              <SelectField
                label="What do you need?"
                name="service"
                defaultValue={typeof search.service === "string" ? search.service : ""}
                options={services.map((s) => s.shortTitle).concat("Other")}
                error={errors.service}
              />
              <SelectField
                label="Project Budget"
                name="budget"
                options={[
                  "Under ₹25,000",
                  "₹25,000 – ₹50,000",
                  "₹50,000 – ₹1,00,000",
                  "₹1,00,000+",
                ]}
                error={errors.budget}
              />
              <Field
                label="Preferred Timeline"
                name="timeline"
                error={errors.timeline}
                required
                placeholder="For example, within 8–10 weeks"
              />
              <label className="form-field">
                <span>Project Description *</span>
                <Textarea
                  name="description"
                  rows={7}
                  placeholder="What are you planning, who is it for, and what should it help them do?"
                  aria-invalid={Boolean(errors.description)}
                />
                {errors.description ? <small>{errors.description}</small> : null}
              </label>
              <Button type="submit" size="lg">
                Send Project Enquiry <ArrowRight />
              </Button>
              <p className="text-xs leading-5 text-muted-foreground">
                This portfolio preview validates your details but does not send email yet. No
                information is stored.
              </p>
            </form>
          )}
        </div>
      </section>
    </>
  );
}

function Field({
  label,
  name,
  error,
  ...props
}: { label: string; name: string; error?: string } & React.ComponentProps<typeof Input>) {
  return (
    <label className="form-field">
      <span>
        {label}
        {props.required ? " *" : ""}
      </span>
      <Input name={name} aria-invalid={Boolean(error)} {...props} />
      {error ? <small>{error}</small> : null}
    </label>
  );
}
function SelectField({
  label,
  name,
  options,
  error,
  defaultValue = "",
}: {
  label: string;
  name: string;
  options: string[];
  error?: string;
  defaultValue?: string;
}) {
  return (
    <label className="form-field">
      <span>{label} *</span>
      <select name={name} defaultValue={defaultValue} aria-invalid={Boolean(error)}>
        <option value="" disabled>
          Select an option
        </option>
        {options.map((option) => (
          <option key={option}>{option}</option>
        ))}
      </select>
      {error ? <small>{error}</small> : null}
    </label>
  );
}
