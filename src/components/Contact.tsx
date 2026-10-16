import { useState } from "react";
import { profile } from "../content/portfolio";

/**
 * Call-to-action contact panel with direct email mailto links,
 * one-click clipboard copy button, resume download, and interactive badge.
 */
export function Contact() {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      if (navigator?.clipboard?.writeText) {
        await navigator.clipboard.writeText(profile.email);
      } else {
        const textArea = document.createElement("textarea");
        textArea.value = profile.email;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand("copy");
        document.body.removeChild(textArea);
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // In case of blocked clipboard permissions, direct mailto link is always accessible
    }
  }

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
      <div className="email-pill">
        <a
          className="email-pill-link"
          href={`mailto:${profile.email}`}
          title="Send email"
        >
          {profile.email}
        </a>
        <button
          type="button"
          className={`email-pill-copy ${copied ? "is-copied" : ""}`}
          onClick={handleCopy}
          title={copied ? "Copied to clipboard!" : "Copy email address"}
          aria-label={copied ? "Email address copied to clipboard" : "Copy email address"}
        >
          {copied ? (
            <svg
              className="copy-icon"
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
          ) : (
            <svg
              className="copy-icon"
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
              <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
            </svg>
          )}
        </button>
      </div>
      <div className="sr-only" aria-live="polite">
        {copied ? "Email address copied to clipboard" : ""}
      </div>
    </section>
  );
}

/**
 * Global site footer with copyright, location info, external profiles,
 * and keyboard-accessible scroll-to-top anchor.
 */
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
