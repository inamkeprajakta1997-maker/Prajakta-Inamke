import { createFileRoute } from "@tanstack/react-router";
import { ServicesPage } from "@/components/pages";
export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Website Development Services — Prajakta Inamke" },
      {
        name: "description",
        content:
          "Business websites, e-commerce development, custom web applications, dashboards, redesign and ongoing website support.",
      },
      { property: "og:title", content: "Website Development Services — Prajakta Inamke" },
      {
        property: "og:description",
        content:
          "Web solutions built around your business, from focused websites to custom applications.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});
