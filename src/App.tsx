import { useState, useEffect, useCallback } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import SolutionsPage from "./pages/SolutionsPage";
import SolutionDetailPage from "./pages/SolutionDetailPage";
import ServicesPage from "./pages/ServicesPage";
import ServiceDetailPage from "./pages/ServiceDetailPage";
import IndustriesPage from "./pages/IndustriesPage";
import IndustryDetailPage from "./pages/IndustryDetailPage";
import PartnersPage from "./pages/PartnersPage";
import ProjectsPage from "./pages/ProjectsPage";
import ResourcesPage from "./pages/ResourcesPage";
import SupportPage from "./pages/SupportPage";
import CareersPage from "./pages/CareersPage";
import ContactPage from "./pages/ContactPage";
import ClientDetailPage from "./pages/ClientDetailPage";
import TeamDetailPage from "./pages/TeamDetailPage";
import { parseRoute, getRouteUrl } from "./utils/router";

export type Page =
  | "home"
  | "about"
  | "solutions"
  | "solution-detail"
  | "services"
  | "service-detail"
  | "industries"
  | "industry-detail"
  | "partners"
  | "client-detail"
  | "team-detail"
  | "projects"
  | "resources"
  | "support"
  | "careers"
  | "contact";

export type Theme = "dark" | "light";

export default function App() {
  const [page, setPage] = useState<Page>("home");
  const [selectedSolution, setSelectedSolution] = useState<string>("it-infrastructure");
  const [selectedIndustry, setSelectedIndustry] = useState<string>("government");
  const [selectedService, setSelectedService] = useState<string>("consulting");
  const [selectedClient, setSelectedClient] = useState<string>("tom-mboya-university");
  const [selectedMember, setSelectedMember] = useState<string>("david-wesonga");

  const [theme, setTheme] = useState<Theme>(() => {
    const saved = localStorage.getItem("dwpl-theme");
    return (saved === "light" || saved === "dark") ? saved : "light";
  });

  // Sync route from URL location hash or pathname
  const syncRouteFromLocation = useCallback(() => {
    const currentLoc = window.location.hash || window.location.pathname;
    const route = parseRoute(currentLoc);

    setPage(route.page);
    if (route.solutionId) setSelectedSolution(route.solutionId);
    if (route.serviceId) setSelectedService(route.serviceId);
    if (route.industryId) setSelectedIndustry(route.industryId);
    if (route.clientId) setSelectedClient(route.clientId);
    if (route.memberId) setSelectedMember(route.memberId);
  }, []);

  useEffect(() => {
    syncRouteFromLocation();

    const handleHashChange = () => {
      syncRouteFromLocation();
    };

    window.addEventListener("hashchange", handleHashChange);
    window.addEventListener("popstate", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
      window.removeEventListener("popstate", handleHashChange);
    };
  }, [syncRouteFromLocation]);

  useEffect(() => {
    localStorage.setItem("dwpl-theme", theme);
    const root = document.documentElement;
    if (theme === "light") {
      root.classList.add("light");
      root.classList.remove("dark");
    } else {
      root.classList.add("dark");
      root.classList.remove("light");
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  const navigate = (to: Page, itemId?: string) => {
    if (to === "solution-detail" && itemId) setSelectedSolution(itemId);
    if (to === "industry-detail" && itemId) setSelectedIndustry(itemId);
    if (to === "service-detail" && itemId) setSelectedService(itemId);
    if (to === "client-detail" && itemId) setSelectedClient(itemId);
    if (to === "team-detail" && itemId) setSelectedMember(itemId);

    setPage(to);

    const targetHash = getRouteUrl(to, itemId);
    if (window.location.hash !== targetHash) {
      window.history.pushState(null, "", targetHash);
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen transition-colors duration-300" style={{ background: "var(--bg)", color: "var(--text-main)" }}>
      <Navbar currentPage={page} navigate={navigate} theme={theme} toggleTheme={toggleTheme} />

      <main>
        {page === "home" && <HomePage navigate={navigate} />}
        {page === "about" && <AboutPage navigate={navigate} />}
        {page === "solutions" && <SolutionsPage navigate={navigate} />}
        {page === "solution-detail" && (
          <SolutionDetailPage solutionId={selectedSolution} navigate={navigate} />
        )}
        {page === "services" && <ServicesPage navigate={navigate} />}
        {page === "service-detail" && (
          <ServiceDetailPage serviceId={selectedService} navigate={navigate} />
        )}
        {page === "industries" && <IndustriesPage navigate={navigate} />}
        {page === "industry-detail" && (
          <IndustryDetailPage industryId={selectedIndustry} navigate={navigate} />
        )}
        {page === "partners" && <PartnersPage navigate={navigate} />}
        {page === "client-detail" && (
          <ClientDetailPage id={selectedClient} navigate={navigate} />
        )}
        {page === "team-detail" && (
          <TeamDetailPage id={selectedMember} navigate={navigate} />
        )}
        {page === "projects" && <ProjectsPage navigate={navigate} />}
        {page === "resources" && <ResourcesPage navigate={navigate} />}
        {page === "support" && <SupportPage navigate={navigate} />}
        {page === "careers" && <CareersPage navigate={navigate} />}
        {page === "contact" && <ContactPage navigate={navigate} />}
      </main>

      <Footer navigate={navigate} />
    </div>
  );
}
