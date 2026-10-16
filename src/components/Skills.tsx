import { skills } from "../content/portfolio";
import { SectionHeading } from "./SectionHeading";

/**
 * Technical toolkit section grouping languages, frameworks,
 * databases, and embedded capabilities into pill-tag cards.
 */
export function Skills() {
  return (
    <section id="skills" tabIndex={-1} aria-label="Technical capabilities">
      <SectionHeading
        number="03 / Toolkit"
        title="Technologies I build with."
      />
      <div className="two-column">
        {skills.map((group) => (
          <article className="panel skill-card" key={group.title}>
            <h3>{group.title}</h3>
            <ul className="tags">
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
