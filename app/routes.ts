import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

export default [
  layout("./features/shared/components/utility/Layout.jsx", [
    index("./features/home/components/HomePage.jsx"),
    route("about", "./features/about/components/AboutPage.jsx"),
    route("services", "./features/services/components/ServicesPage.jsx"),
    route("body-care", "./features/bodycare/components/BodyCarePage.jsx"),
    route("contact", "./features/contact/components/ContactPage.jsx"),
    route("our-team", "./features/team/components/TeamPage.jsx"),
    route("*?", "./features/shared/components/navigation/CatchAll.jsx"),
  ]),
] satisfies RouteConfig;