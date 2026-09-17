"use client";

import { useState, useEffect, useCallback } from "react";
import { personal } from "@/lib/data";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "About",           href: "#about" },
  { label: "Skills",          href: "#skills" },
  { label: "Experience",      href: "#experience" },
  { label: "Projects",        href: "#projects" },
  { label: "Education",       href: "#education" },
  { label: "Certifications",  href: "#certifications" },
  { label: "Achievements",    href: "#achievements" },
  { label: "Contact",         href: "#contact" },
];

export default function Navbar() {
  const [scrolled,    setScrolled]    = useState(false);
  const [active,      setActive]      = useState("");
  const [menuOpen,    setMenuOpen]    = useState(false);

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 20);

    // Highlight active section
    const sections = navLinks.map((l) => l.href.slice(1));
    for (let i = sections.length - 1; i >= 0; i--) {
      const el = document.getElementById(sections[i]);
      if (el && window.scrollY >= el.offsetTop - 100) {
        setActive(sections[i]);
        break;
      }
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  // Close mobile menu on resize
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setMenuOpen(false); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const handleLinkClick = () => setMenuOpen(false);

  return (
    <>
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          transition: "background 0.3s ease, border-color 0.3s ease",
          background: scrolled ? "rgba(13,13,13,0.92)" : "transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(12px)" : "none",
          borderBottom: scrolled ? "1px solid #1c1c1c" : "1px solid transparent",
        }}
      >
        <div className="container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: 68 }}>
          {/* Logo */}
          <a
            href="#hero"
            style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: 10 }}
            aria-label="Back to top"
          >
            <span
              style={{
                width: 32,
                height: 32,
                borderRadius: 8,
                background: "var(--accent)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 14,
                fontWeight: 700,
                color: "#fff",
                flexShrink: 0,
              }}
            >
              SP
            </span>
            <span style={{ fontWeight: 600, fontSize: 15, color: "var(--text-primary)" }}>
              Sumeet Powar
            </span>
          </a>

          {/* Desktop nav */}
          <nav aria-label="Main navigation" style={{ display: "flex", gap: 4 }} className="hidden-mobile">
            {navLinks.map((link) => {
              const id = link.href.slice(1);
              return (
                <a
                  key={link.href}
                  href={link.href}
                  style={{
                    padding: "6px 12px",
                    borderRadius: 6,
                    fontSize: 13,
                    fontWeight: 500,
                    textDecoration: "none",
                    transition: "color 0.2s, background 0.2s",
                    color: active === id ? "var(--accent-light)" : "var(--text-secondary)",
                    background: active === id ? "var(--accent-dim)" : "transparent",
                  }}
                  onMouseEnter={(e) => {
                    if (active !== id) {
                      (e.target as HTMLElement).style.color = "var(--text-primary)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (active !== id) {
                      (e.target as HTMLElement).style.color = "var(--text-secondary)";
                    }
                  }}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* CTA */}
          <div style={{ display: "flex", alignItems: "center", gap: 10 }} className="hidden-mobile">
            <a
              href={personal.resumeFile}
              download
              className="btn-secondary"
              style={{ padding: "7px 16px", fontSize: 13 }}
            >
              Resume
            </a>
            <a
              href={`mailto:${personal.email}`}
              className="btn-primary"
              style={{ padding: "7px 16px", fontSize: 13 }}
            >
              Hire Me
            </a>
          </div>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            className="show-mobile"
            style={{
              background: "transparent",
              border: "1px solid var(--border)",
              borderRadius: 8,
              padding: "7px 8px",
              cursor: "pointer",
              color: "var(--text-primary)",
              display: "none",
            }}
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div
            style={{
              background: "rgba(13,13,13,0.97)",
              backdropFilter: "blur(12px)",
              borderTop: "1px solid var(--border)",
              padding: "16px 24px 20px",
            }}
          >
            <nav style={{ display: "flex", flexDirection: "column", gap: 4 }}>
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={handleLinkClick}
                  style={{
                    padding: "10px 12px",
                    borderRadius: 8,
                    fontSize: 14,
                    fontWeight: 500,
                    textDecoration: "none",
                    color: "var(--text-secondary)",
                    transition: "color 0.2s, background 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    (e.target as HTMLElement).style.color = "var(--text-primary)";
                    (e.target as HTMLElement).style.background = "var(--accent-dim)";
                  }}
                  onMouseLeave={(e) => {
                    (e.target as HTMLElement).style.color = "var(--text-secondary)";
                    (e.target as HTMLElement).style.background = "transparent";
                  }}
                >
                  {link.label}
                </a>
              ))}
              <div style={{ display: "flex", gap: 10, marginTop: 12 }}>
                <a
                  href={personal.resumeFile}
                  download
                  onClick={handleLinkClick}
                  className="btn-secondary"
                  style={{ fontSize: 13, flex: 1, justifyContent: "center" }}
                >
                  Resume
                </a>
                <a
                  href={`mailto:${personal.email}`}
                  onClick={handleLinkClick}
                  className="btn-primary"
                  style={{ fontSize: 13, flex: 1, justifyContent: "center" }}
                >
                  Hire Me
                </a>
              </div>
            </nav>
          </div>
        )}
      </header>

      <style>{`
        @media (max-width: 767px) {
          .hidden-mobile { display: none !important; }
          .show-mobile   { display: flex !important; }
        }
      `}</style>
    </>
  );
}
