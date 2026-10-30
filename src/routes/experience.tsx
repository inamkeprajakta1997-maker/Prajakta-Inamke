import { createFileRoute, redirect } from "@tanstack/react-router";
import { ExperiencePage } from "@/components/pages";
export const Route = createFileRoute("/experience")({
  beforeLoad: () => {
    throw redirect({ to: "/", hash: "experience" });
  },
  head: () => ({
    meta: [
      { title: "Web Development Experience — Prajakta Inamke" },
      {
        name: "description",
        content:
          "Professional web development, project leadership, client communication, deployment and ongoing support experience.",
      },
      { property: "og:title", content: "Web Development Experience — Prajakta Inamke" },
      {
        property: "og:description",
        content: "Experience built through real projects, ownership and practical delivery.",
      },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/experience" }],
  }),
  component: ExperiencePage,
});
