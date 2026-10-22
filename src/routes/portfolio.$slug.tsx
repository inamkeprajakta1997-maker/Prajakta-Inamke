import { createFileRoute } from "@tanstack/react-router";
import { CaseStudyPage } from "@/components/pages";
import { projects } from "@/lib/portfolio-data";
export const Route = createFileRoute("/portfolio/$slug")({
  head: ({ params }) => {
    const p = projects.find((x) => x.slug === params.slug);
    const title = p
      ? `${p.name} ${"liveUrl" in p ? "Project" : "Case Study"} — Prajakta Inamke`
      : "Project Not Found — Prajakta Inamke";
    const description = p?.summary ?? "The requested portfolio case study could not be found.";
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
        ...(!p ? [{ name: "robots", content: "noindex" }] : []),
      ],
      links: [{ rel: "canonical", href: `/portfolio/${params.slug}` }],
    };
  },
  component: RouteComponent,
});
function RouteComponent() {
  const { slug } = Route.useParams();
  return <CaseStudyPage slug={slug} />;
}
