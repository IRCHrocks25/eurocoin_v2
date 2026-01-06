import { createBrowserRouter } from "react-router";
import { Home } from "./components/Home";
import { AboutUs } from "./components/AboutUs";
import { Technology } from "./components/Technology";
import { WhyUs } from "./components/WhyUs";
import { ContactUs } from "./components/ContactUs";
import { Visionaries } from "./components/Visionaries";
import { FAQ } from "./components/FAQ";
import { OpenPlatform } from "./components/OpenPlatform";
import { Blogs } from "./components/Blogs";
import { HowEurocoinWorks } from "./components/HowEurocoinWorks";
import { AdvantageOfEurocoin } from "./components/AdvantageOfEurocoin";
import { UseCasesAndSolution } from "./components/UseCasesAndSolution";
import { EurocoinTeam } from "./components/EurocoinTeam";
import { PartnersAndIntegrations } from "./components/PartnersAndIntegrations";
import { ComplianceAndSecurity } from "./components/ComplianceAndSecurity";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
  },
  {
    path: "/blogs",
    Component: Blogs,
  },
  {
    path: "/about-us",
    Component: AboutUs,
  },
  {
    path: "/technology",
    Component: Technology,
  },
  {
    path: "/how-eurocoin-works",
    Component: HowEurocoinWorks,
  },
  {
    path: "/why-us",
    Component: WhyUs,
  },
  {
    path: "/contact-us",
    Component: ContactUs,
  },
  {
    path: "/visionaries",
    Component: Visionaries,
  },
  {
    path: "/open-platform",
    Component: OpenPlatform,
  },
  {
    path: "/advantage-of-eurocoin",
    Component: AdvantageOfEurocoin,
  },
  {
    path: "/use-cases-and-solution",
    Component: UseCasesAndSolution,
  },
  {
    path: "/eurocoin-team",
    Component: EurocoinTeam,
  },
  {
    path: "/partners-integrations",
    Component: PartnersAndIntegrations,
  },
  {
    path: "/compliance-security",
    Component: ComplianceAndSecurity,
  },
  {
    path: "/faq",
    Component: FAQ,
  },
]);