import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { socialLinks } from "@/lib/portfolio-data";

const nav = [
  ["Home", "/"],
  ["About", "/about"],
  ["Services", "/services"],
  ["Portfolio", "/portfolio"],
  ["Experience", "/experience"],
  ["Contact", "/contact"],
] as const;

export function SiteShell({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);
  return (
    <div className="min-h-screen overflow-x-clip bg-background text-foreground">
      <header className="sticky top-0 z-50 border-b border-border/80 bg-background/95 backdrop-blur">
        <div className="content-shell flex h-20 items-center justify-between">
          <Link to="/" className="flex items-center gap-3" aria-label="Prajakta Inamke home">
            <span className="brand-logo brand-logo-header" aria-hidden="true">
              <img src="/logo-transparent.png" alt="" width="1254" height="1254" />
            </span>
          </Link>
          <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary navigation">
            {nav.map(([label, to]) => (
              <Link
                key={to}
                to={to}
                activeOptions={{ exact: to === "/" }}
                className="nav-link"
                activeProps={{ className: "nav-link-active" }}
              >
                {label}
              </Link>
            ))}
          </nav>
          <div className="hidden lg:block">
            <Button asChild>
              <Link to="/contact">
                Start a Project <ArrowUpRight />
              </Link>
            </Button>
          </div>
          <button
            type="button"
            className="flex size-11 items-center justify-center rounded-full border border-border lg:hidden"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-label={open ? "Close navigation" : "Open navigation"}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
        {open ? (
          <div className="fixed inset-x-0 top-20 h-[calc(100dvh-5rem)] overflow-y-auto bg-background lg:hidden">
            <nav
              className="content-shell flex min-h-full flex-col justify-center gap-2 py-6"
              aria-label="Mobile navigation"
            >
              {nav.map(([label, to], index) => (
                <Link
                  key={to}
                  to={to}
                  onClick={() => setOpen(false)}
                  className="border-b border-border py-4 font-display text-3xl"
                  style={{ animationDelay: `${index * 45}ms` }}
                >
                  {label}
                </Link>
              ))}
              <Button asChild size="lg" className="mt-7">
                <Link to="/contact" onClick={() => setOpen(false)}>
                  Start a Project <ArrowUpRight />
                </Link>
              </Button>
            </nav>
          </div>
        ) : null}
      </header>
      <main>{children}</main>
      <footer className="border-t border-border bg-surface-strong py-12 md:py-16">
        <div className="content-shell grid gap-10 md:grid-cols-[1.2fr_1fr_1fr]">
          <div>
            <Link to="/" className="footer-brand" aria-label="Prajakta Inamke home">
              <span className="brand-logo brand-logo-footer" aria-hidden="true">
                <img
                  src="/logo-transparent.png"
                  alt=""
                  width="1254"
                  height="1254"
                  loading="lazy"
                />
              </span>
              <span className="font-display text-2xl">Prajakta Inamke</span>
            </Link>
            <p className="mt-3 max-w-sm text-sm leading-6 text-muted-foreground">
              Web Developer & Web Solutions Specialist
            </p>
            <p className="mt-6 inline-flex items-center gap-2 text-sm font-medium">
              <span className="size-2 rounded-full bg-status" /> Available for freelance
              collaborations.
            </p>
          </div>
          <div>
            <p className="footer-label">Navigate</p>
            <div className="mt-4 grid grid-cols-2 gap-3">
              {nav.slice(1).map(([label, to]) => (
                <Link
                  key={to}
                  to={to}
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <p className="footer-label">Connect</p>
            <div className="mt-4 flex flex-col gap-3">
              <a
                className="external-link"
                href={socialLinks.linkedin}
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn <ArrowUpRight />
              </a>
              <a
                className="external-link"
                href={socialLinks.github}
                target="_blank"
                rel="noreferrer"
              >
                GitHub <ArrowUpRight />
              </a>
            </div>
          </div>
        </div>
        <div className="content-shell mt-12 border-t border-border pt-6 text-xs text-muted-foreground">
          © {new Date().getFullYear()} Prajakta Inamke. Built with care.
        </div>
      </footer>
    </div>
  );
}
