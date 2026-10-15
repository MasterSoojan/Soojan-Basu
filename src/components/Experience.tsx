import { experience } from "../content/portfolio";
import { SectionHeading } from "./SectionHeading";

/**
 * Professional experience section rendering categorized deliverable cards
 * with technology tags, falling back to a bulleted list if highlights are absent.
 */
export function Experience() {
  return (
    <section id="experience" tabIndex={-1} aria-label="Professional experience">
      <SectionHeading
        number="01 / Experience"
        title="Practical work. Thoughtful engineering."
        description="Two internships with the AI Product team at Humanize Business Solutions."
      />
      <div className="experience-list">
        {experience.map((item) => (
          <article className="panel experience-card" key={item.id}>
            <div className="experience-meta">
              <span className="badge-pill">{item.dates}</span>
              <h3>{item.role}</h3>
              <p className="experience-company">{item.company}</p>
              <p className="experience-mode muted">{item.mode}</p>
            </div>
            <div className="experience-content">
              <div className="experience-header">
                <h4>{item.title}</h4>
                {item.summary && (
                  <p className="experience-summary">{item.summary}</p>
                )}
              </div>

              {item.highlights && item.highlights.length > 0 ? (
                <div
                  className="experience-highlights"
                  aria-label="Key deliverables and architecture"
                >
                  {item.highlights.map((highlight) => (
                    <div className="highlight-card" key={highlight.title}>
                      <div className="highlight-top">
                        <span className="highlight-badge">
                          {highlight.category}
                        </span>
                        <h5 className="highlight-title">{highlight.title}</h5>
                      </div>
                      <p className="highlight-desc">{highlight.description}</p>
                      {highlight.tags && highlight.tags.length > 0 && (
                        <div
                          className="highlight-tags"
                          aria-label="Component tools"
                        >
                          {highlight.tags.map((tag) => (
                            <span className="highlight-tag" key={tag}>
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              ) : (
                <ul className="detail-list">
                  {item.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              )}

              <div className="experience-footer">
                <span className="skills-label">Skills & Technologies</span>
                <ul className="tags" aria-label="Skills used">
                  {item.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
