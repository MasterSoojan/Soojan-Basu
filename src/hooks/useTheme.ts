import { useEffect, useRef, useState } from "react";

type Theme = "light" | "dark";
const storageKey = "portfolio-theme";
const asTheme = (value: string | null | undefined): Theme | null =>
  value === "light" || value === "dark" ? value : null;

/** Follow the system until the visitor chooses; storage is an optional enhancement. */
export function useTheme() {
  const [theme, setTheme] = useState<Theme>(
    asTheme(document.documentElement.dataset.theme) ?? "dark",
  );
  const preference = useRef<Theme | null>(null);

  useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const apply = () => {
      const next = preference.current ?? (media.matches ? "dark" : "light");
      document.documentElement.dataset.theme = next;
      setTheme(next);
    };
    try {
      preference.current = asTheme(localStorage.getItem(storageKey));
    } catch {
      // No persistence: an explicit choice still lasts for this mounted visit.
    }
    apply();
    const syncStorage = (event: StorageEvent) => {
      if (event.key !== storageKey && event.key !== null) return;
      try {
        if (event.storageArea !== localStorage) return;
        preference.current = asTheme(localStorage.getItem(storageKey));
        apply();
      } catch {
        // Keep the in-memory preference if storage access becomes unavailable.
      }
    };
    media.addEventListener("change", apply);
    window.addEventListener("storage", syncStorage);
    return () => {
      media.removeEventListener("change", apply);
      window.removeEventListener("storage", syncStorage);
    };
  }, []);

  function toggleTheme() {
    const next = theme === "dark" ? "light" : "dark";
    preference.current = next;
    document.documentElement.dataset.theme = next;
    setTheme(next);
    try {
      localStorage.setItem(storageKey, next);
    } catch {
      // In-memory choice is independent of persistence and OS changes.
    }
  }
  return { theme, toggleTheme };
}
