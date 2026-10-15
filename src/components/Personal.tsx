import { personal } from "../content/portfolio";
import { SectionHeading } from "./SectionHeading";

/**
 * Personal section showcasing extracurricular pursuits, sports,
 * chess background, spoken languages, and everyday curiosities.
 */
export function Personal() {
  return (
    <section id="beyond-code" aria-label="Beyond code">
      <SectionHeading
        number="05 / Beyond code"
        title="A little more about me."
      />
      <div className="personal-grid">
        <article className="panel personal-card">
          <h3>On the field</h3>
          <p>{personal.cricket}</p>
        </article>
        <article className="panel personal-card">
          <h3>At the board</h3>
          <p>{personal.chess}</p>
        </article>
        <article className="panel personal-card">
          <h3>Everyday curiosities</h3>
          <p>{personal.interests.join(" · ")}</p>
          <h4>Languages</h4>
          <p>{personal.languages.join(" · ")}</p>
        </article>
      </div>
    </section>
  );
}
