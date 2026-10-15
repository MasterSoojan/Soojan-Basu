/** @jsxImportSource react */
// Preserve React JSX when this component is imported by the Node-side renderer
// test; Playwright otherwise rewrites JSX into its own component descriptors.
import { profile, education, experience } from "../content/portfolio";

/**
 * Hero introduction section with candidate headline, call-to-actions,
 * social links, high-contrast monogram/avatar frame, and quick facts.
 */
export function Hero() {
  return (
    <section
      id="home"
      tabIndex={-1}
      className="hero panel"
      aria-labelledby="hero-title"
    >
      <div className="hero-main">
        <div className="availability">
          <span aria-hidden="true" /> Open to developer opportunities
        </div>
        <p className="eyebrow">{profile.location}</p>
        <h1 id="hero-title">
          {profile.givenName} <span>{profile.familyName}.</span>
        </h1>
        <p className="hero-role">{profile.role}</p>
        <p className="hero-description">{profile.introduction}</p>
        <div className="actions">
          <a className="button primary" href="#projects">
            Explore my work ↗
          </a>
          <a className="button secondary" href={profile.resume} download>
            Download resume ↓
          </a>
        </div>
        <div className="social-links">
          <a href={profile.github} target="_blank" rel="noreferrer">
            GitHub ↗
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer">
            LinkedIn ↗
          </a>
          <a href={`mailto:${profile.email}`}>Email me ↗</a>
        </div>
      </div>
      <aside className="hero-aside" aria-label="At a glance">
        <div className="monogram" aria-hidden="true">
          {profile.avatarUrl ? (
            <img
              src={profile.avatarUrl}
              alt={profile.name}
              className="monogram-img"
            />
          ) : (
            <span className="monogram-letters">{profile.initials}</span>
          )}
        </div>
        <div className="glance">
          <span className="eyebrow">Currently</span>
          <strong>{experience[0].headlineRole}</strong>
          <span>{experience[0].shortCompany}</span>
        </div>
        <div className="glance">
          <span className="eyebrow">Studying</span>
          <strong>
            {education.shortDegree} · Class of {education.graduationYear}
          </strong>
          <span>{education.institution}</span>
        </div>
        <div className="glance">
          <span className="eyebrow">Building across</span>
          <strong>AI / Web / Hardware</strong>
          <span>From structured data to connected devices.</span>
        </div>
      </aside>
    </section>
  );
}
