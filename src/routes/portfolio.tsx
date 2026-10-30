import { createFileRoute, Outlet, useMatch, redirect } from "@tanstack/react-router";
import { PortfolioPage } from "@/components/pages";
export const Route = createFileRoute("/portfolio")({
  beforeLoad: ({ location }) => {
    if (location.pathname.replace(/\/$/, "") === "/portfolio") {
      throw redirect({ to: "/", hash: "portfolio" });
    }
  },
  head: () => ({
    meta: [
      { title: "Web Development Portfolio — Prajakta Inamke" },
      {
        name: "description",
        content:
          "Selected business websites, e-commerce experiences, custom web applications, portals and dashboards.",
      },
      { property: "og:title", content: "Web Development Portfolio — Prajakta Inamke" },
      {
        property: "og:description",
        content: "Explore selected websites and digital products built for real business use.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/portfolio" }],
  }),
  component: PortfolioRoute,
});

function PortfolioRoute() {
  const projectMatch = useMatch({ from: "/portfolio/$slug", shouldThrow: false });
  return projectMatch ? <Outlet /> : <PortfolioPage />;
}
