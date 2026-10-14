import { experience } from "../content/portfolio";
import { SectionHeading } from "./SectionHeading";
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
              <p className="eyebrow">{item.dates}</p>
              <h3>{item.role}</h3>
              <p>{item.company}</p>
              <p className="muted">{item.mode}</p>
            </div>
            <div>
              <h4>{item.title}</h4>
              <ul className="detail-list">
                {item.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
              <ul className="tags" aria-label="Skills used">
                {item.tags.map((tag) => (
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
