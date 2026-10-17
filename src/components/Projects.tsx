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
              <div className="project-footer">
                <ul className="tags" aria-label="Technology stack">
                  {project.stack.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
                {(project.repoUrl || project.liveUrl) && (
                  <div className="project-actions">
                    {project.repoUrl && (
                      <a
                        href={project.repoUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="project-action-link repo-link"
                        aria-label={`${project.title} source code on GitHub`}
                      >
                        <svg
                          className="action-icon"
                          width="13"
                          height="13"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden="true"
                        >
                          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                        </svg>
                        <strong className="action-text">GitHub ↗</strong>
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="project-action-link live-link"
                        aria-label={`${project.title} live deployment`}
                      >
                        <span className="live-dot" aria-hidden="true" />
                        <strong className="action-text">Live Demo ↗</strong>
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
