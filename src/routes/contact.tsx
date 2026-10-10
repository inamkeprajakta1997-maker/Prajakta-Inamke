import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";
import { ContactPage } from "@/components/pages";
export const Route = createFileRoute("/contact")({
  validateSearch: z.object({ service: z.string().max(100).optional() }),
  head: () => ({
    meta: [
      { title: "Start a Web Project — Prajakta Inamke" },
      {
        name: "description",
        content:
          "Discuss a business website, e-commerce platform, custom web application, dashboard, redesign or support project.",
      },
      { property: "og:title", content: "Start a Web Project — Prajakta Inamke" },
      {
        property: "og:description",
        content: "Tell Prajakta about your website or web application project.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});
