import { SiteHeader } from "./components/SiteHeader";
import { Hero } from "./components/Hero";
import { Experience } from "./components/Experience";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { Education } from "./components/Education";
import { Personal } from "./components/Personal";
import { Contact, SiteFooter } from "./components/Contact";

export default function App() {
  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <SiteHeader />
      <main id="main" className="page-shell" tabIndex={-1}>
        <Hero />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Personal />
        <Contact />
      </main>
      <SiteFooter />
    </>
  );
}
