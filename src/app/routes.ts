import { createBrowserRouter } from "react-router";
import { RootLayout } from "./components/RootLayout";
import Home from "./pages/Home";
import Production from "./pages/Production";
import Distribution from "./pages/Distribution";
import Publishing from "./pages/Publishing";
import Tech from "./pages/Tech";
import Contact from "./pages/Contact";
import TermsOfService from "./pages/TermsOfService";
import PrivacyPolicy from "./pages/PrivacyPolicy";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "production",
        Component: Production,
      },
      {
        path: "distribution",
        Component: Distribution,
      },
      {
        path: "publishing",
        Component: Publishing,
      },
      {
        path: "tech",
        Component: Tech,
      },
      {
        path: "contact",
        Component: Contact,
      },
      {
        path: "terms-of-service",
        Component: TermsOfService,
      },
      {
        path: "privacy-policy",
        Component: PrivacyPolicy,
      },
    ],
  },
]);