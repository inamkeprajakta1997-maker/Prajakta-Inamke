import { createFileRoute } from "@tanstack/react-router";
import { HomePage } from "@/components/pages";
import { z } from "zod";

export const Route = createFileRoute("/")({
  validateSearch: z.object({ service: z.string().max(100).optional() }),
  head: () => ({
    meta: [
      { title: "Prajakta Inamke — Freelance Web Developer" },
      {
        name: "description",
        content:
          "Freelance web developer building modern business websites, e-commerce platforms and custom web applications.",
      },
      { property: "og:title", content: "Prajakta Inamke — Freelance Web Developer" },
      {
        property: "og:description",
        content: "Modern websites and custom web applications built from idea to launch.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Person",
              name: "Prajakta Inamke",
              jobTitle: "Web Developer",
              knowsAbout: [
                "React",
                "WordPress",
                "E-commerce Development",
                "Custom Web Applications",
              ],
            },
            { "@type": "WebSite", name: "Prajakta Inamke", url: "/" },
            {
              "@type": "ProfessionalService",
              name: "Prajakta Inamke — Web Development",
              description: "Website development services for businesses and organizations",
              areaServed: "Worldwide",
            },
          ],
        }),
      },
    ],
  }),
  component: HomePage,
});
