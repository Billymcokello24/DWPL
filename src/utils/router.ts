import type { Page } from "../App";

export interface RouteState {
  page: Page;
  solutionId?: string;
  serviceId?: string;
  industryId?: string;
  clientId?: string;
  memberId?: string;
}

export function parseRoute(hashOrPath: string): RouteState {
  const clean = hashOrPath.replace(/^#\/?/, "").replace(/^\//, "");
  if (!clean || clean === "home") {
    return { page: "home" };
  }

  const parts = clean.split("/");
  const routeName = parts[0]?.toLowerCase();
  const itemId = parts[1] ? decodeURIComponent(parts[1]) : undefined;

  switch (routeName) {
    case "about":
      return { page: "about" };
    case "solutions":
      return itemId ? { page: "solution-detail", solutionId: itemId } : { page: "solutions" };
    case "solution":
      return { page: "solution-detail", solutionId: itemId || "it-infrastructure" };
    case "services":
      return itemId ? { page: "service-detail", serviceId: itemId } : { page: "services" };
    case "service":
      return { page: "service-detail", serviceId: itemId || "consulting" };
    case "industries":
      return itemId ? { page: "industry-detail", industryId: itemId } : { page: "industries" };
    case "industry":
      return { page: "industry-detail", industryId: itemId || "government" };
    case "partners":
      return { page: "partners" };
    case "clients":
    case "client":
      return { page: "client-detail", clientId: itemId || "tom-mboya-university" };
    case "team":
    case "leadership":
      return { page: "team-detail", memberId: itemId || "david-wesonga" };
    case "projects":
      return { page: "projects" };
    case "resources":
      return { page: "resources" };
    case "support":
      return { page: "support" };
    case "careers":
      return { page: "careers" };
    case "contact":
      return { page: "contact" };
    default:
      return { page: "home" };
  }
}

export function getRouteUrl(page: Page, id?: string): string {
  switch (page) {
    case "home":
      return "#/";
    case "about":
      return "#/about";
    case "solutions":
      return "#/solutions";
    case "solution-detail":
      return `#/solutions/${id || "it-infrastructure"}`;
    case "services":
      return "#/services";
    case "service-detail":
      return `#/services/${id || "consulting"}`;
    case "industries":
      return "#/industries";
    case "industry-detail":
      return `#/industries/${id || "government"}`;
    case "partners":
      return "#/partners";
    case "client-detail":
      return `#/clients/${id || "tom-mboya-university"}`;
    case "team-detail":
      return `#/team/${id || "david-wesonga"}`;
    case "projects":
      return "#/projects";
    case "resources":
      return "#/resources";
    case "support":
      return "#/support";
    case "careers":
      return "#/careers";
    case "contact":
      return "#/contact";
    default:
      return "#/";
  }
}
