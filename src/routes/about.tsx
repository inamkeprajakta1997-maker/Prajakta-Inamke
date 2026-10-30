import { createFileRoute, redirect } from "@tanstack/react-router";
import { AboutPage } from "@/components/pages";
export const Route = createFileRoute("/about")({
  beforeLoad: () => {
    throw redirect({ to: "/", hash: "about" });
  },
  head: () => ({
    meta: [
      { title: "About Prajakta Inamke — Web Developer" },
      {
        name: "description",
        content:
          "Learn about Prajakta Inamke's approach to web development, project ownership, technical expertise and client collaboration.",
      },
      { property: "og:title", content: "About Prajakta Inamke — Web Developer" },
      {
        property: "og:description",
        content: "Web development experience with equal focus on design, technology and business.",
      },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});
