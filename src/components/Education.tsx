import { achievements, education } from "../content/portfolio";
import { SectionHeading } from "./SectionHeading";

/**
 * Education and competitive achievements section rendering degree
 * credentials, CGPA grade, coursework, and hackathon outcomes.
 */
export function Education() {
  return (
    <section
      id="education"
      tabIndex={-1}
      aria-label="Education and achievements"
    >
      <SectionHeading
        number="04 / Education & achievements"
        title="Always learning. Always building."
      />
      <div className="two-column">
        <article className="panel education-card">
          <p className="eyebrow">{education.graduation}</p>
          <h3>{education.degree}</h3>
          <p>{education.institution}</p>
          <p className="grade">
            {education.cgpa} <span>CGPA</span>
          </p>
          <h4>Coursework</h4>
          <p className="muted">{education.coursework}</p>
        </article>
        <article className="panel education-card">
          <h3>Hackathons</h3>
          <ul className="achievements">
            {achievements.map((item) => (
              <li key={item.event}>
                <span className="eyebrow">{item.level}</span>
                <h4>{item.event}</h4>
                <p>{item.outcome}</p>
              </li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  );
}
