import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { App } from "./App.tsx";
import { BrowserRouter, Route, Routes } from "react-router";
import { HomePage } from "./features/home/HomePage.tsx";
import { AboutPage } from "./features/about/AboutPage.tsx";
import { ContactPage } from "./features/contact/ContactPage.tsx";
import { ServicesPage } from "./features/services/ServicesPage.tsx";
import { TeamPage } from "./features/team/TeamPage.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/team" element={<TeamPage />} />
        </Route>
      </Routes>
      <App />
    </BrowserRouter>
  </StrictMode>
);
