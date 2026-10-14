import { profile } from "../content/portfolio";
export function Contact() {
  return (
    <section
      id="contact"
      tabIndex={-1}
      className="panel contact-card"
      aria-labelledby="contact-title"
    >
      <p className="eyebrow">06 / Let's connect</p>
      <h2 id="contact-title">
        Have something
        <br />
        <span>worth building?</span>
      </h2>
      <p>
        I'm looking for software engineering and developer opportunities where I
        can put my foundations into practice.
      </p>
      <div className="actions">
        <a className="button primary" href={`mailto:${profile.email}`}>
          Start a conversation ↗
        </a>
        <a className="button secondary" href={profile.resume} download>
          Download resume ↓
        </a>
      </div>
      <a className="email-link" href={`mailto:${profile.email}`}>
        {profile.email}
      </a>
    </section>
  );
}
export function SiteFooter() {
  return (
    <footer className="site-footer">
      <p>
        © {new Date().getFullYear()} {profile.name}{" "}
        <span>· {profile.location}</span>
      </p>
      <div>
        <a href={profile.github} target="_blank" rel="noreferrer">
          GitHub ↗
        </a>
        <a href={profile.linkedin} target="_blank" rel="noreferrer">
          LinkedIn ↗
        </a>
        <a href="#home">Back to top ↑</a>
      </div>
    </footer>
  );
}
