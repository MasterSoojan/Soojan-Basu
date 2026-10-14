import { useEffect, useRef, useState } from "react";
import { profile } from "../content/portfolio";
import { useTheme } from "../hooks/useTheme";

const links = [
  ["experience", "Experience"],
  ["projects", "Projects"],
  ["skills", "Skills"],
  ["education", "Education"],
  ["contact", "Contact"],
];

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
          <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          >
            <span aria-hidden="true">{theme === "dark" ? "☀" : "☾"}</span>
            <span>{theme === "dark" ? "Light" : "Dark"}</span>
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
