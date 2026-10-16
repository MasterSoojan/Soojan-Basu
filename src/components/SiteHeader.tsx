import { useEffect, useRef, useState } from "react";
import { profile } from "../content/portfolio";
import { useTheme } from "../hooks/useTheme";

const links = [
  ["experience", "Experience"],
  ["projects", "Projects"],
  ["skills", "Skills"],
  ["education", "Education"],
  ["contact", "Contact"],
] as const;

/**
 * Sticky command-bar header with accessible skip focus,
 * keyboard-trapped mobile drawer (Escape to close), and theme toggle.
 */
export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const navigation = useRef<HTMLElement>(null);
  const menu = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (open) navigation.current?.querySelector("a")?.focus();
  }, [open]);

  function visitSection(id: string) {
    setOpen(false);
    document.getElementById(id)?.focus({ preventScroll: true });
  }
  return (
    <header
      className="site-header"
      onKeyDown={(event) => {
        if (event.key === "Escape" && open) {
          setOpen(false);
          menu.current?.focus();
        }
      }}
    >
      <div className="header-inner">
        <a
          className="wordmark"
          href="#home"
          onClick={() => visitSection("home")}
          aria-label={`${profile.initials}. — ${profile.name}, home`}
        >
          {profile.initials}
          <span>.</span>
        </a>
        <nav
          id="main-nav"
          ref={navigation}
          className={open ? "navigation is-open" : "navigation"}
          aria-label="Main navigation"
        >
          {links.map(([id, label]) => (
            <a href={`#${id}`} key={id} onClick={() => visitSection(id)}>
              {label}
            </a>
          ))}
        </nav>
        <div className="header-actions">
          {/*
           * Theme Mode Toggle Button
           * Icon-only circular button matching the email copy interaction.
           * Invariant dimensions prevent header width shifting during theme transitions.
           */}
          <button
            type="button"
            className="theme-toggle"
            onClick={toggleTheme}
            title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          >
            {theme === "dark" ? (
              <svg
                className="theme-icon"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <circle cx="12" cy="12" r="5" />
                <line x1="12" y1="1" x2="12" y2="3" />
                <line x1="12" y1="21" x2="12" y2="23" />
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                <line x1="1" y1="12" x2="3" y2="12" />
                <line x1="21" y1="12" x2="23" y2="12" />
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
              </svg>
            ) : (
              <svg
                className="theme-icon"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            )}
          </button>
          <button
            id="menu-toggle"
            ref={menu}
            className="menu-toggle"
            aria-expanded={open}
            aria-controls="main-nav"
            onClick={() => setOpen(!open)}
          >
            Menu
          </button>
        </div>
      </div>
    </header>
  );
}
