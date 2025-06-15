import {
  type RouteConfig,
  index,
  layout,
  route,
} from "@react-router/dev/routes";

export default [
  layout("./features/shared/components/utility/Layout.tsx", [
    index("./features/home/components/HomePage.tsx"),
    route("about", "./features/about/components/AboutPage.tsx"),
    route("services", "./features/services/components/ServicesPage.tsx"),
    route("contact", "./features/contact/components/ContactPage.tsx"),
    route("our-team", "./features/team/components/TeamPage.tsx"),
    route("*?", "./features/shared/components/navigation/CatchAll.tsx"),
  ]),
] satisfies RouteConfig;
