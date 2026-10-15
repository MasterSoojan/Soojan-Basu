import { projects } from "../content/portfolio";
import { SectionHeading } from "./SectionHeading";

/**
 * Selected projects showcase rendering project art, description,
 * key contributions, and tech stack tags.
 */
export function Projects() {
  return (
    <section id="projects" tabIndex={-1} aria-label="Selected projects">
      <SectionHeading
        number="02 / Selected projects"
        title="Ideas made tangible."
        description="My contributions across web applications, mobile development, and embedded systems."
      />
      <div className="project-grid">
        {projects.map((project) => (
          <article className="panel project-card" key={project.id}>
            <div
              className={`project-art project-art-${project.id}`}
              aria-hidden="true"
            >
              <span>{project.label}</span>
              <strong>{project.graphic}</strong>
              <div className="circuit-line" />
            </div>
            <div className="project-body">
              <p className="eyebrow">{project.category}</p>
              <h3>{project.title}</h3>
              <p>{project.summary}</p>
              <ul className="detail-list">
                {project.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
              <ul className="tags" aria-label="Technology stack">
                {project.stack.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
