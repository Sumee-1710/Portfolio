"use client";

import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { personal } from "@/lib/data";
import { Mail, MapPin, Send } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";

export default function Contact() {
  const { ref, isVisible } = useIntersectionObserver();

  const contacts = [
    {
      icon: <Mail size={18} />,
      label: "Email",
      value: personal.email,
      href: `mailto:${personal.email}`,
      color: "#7c6af7",
    },
    {
      icon: <GithubIcon size={18} />,
      label: "GitHub",
      value: "github.com/Sumee-1710",
      href: personal.github,
      color: "#f0f0f0",
      external: true,
    },
    {
      icon: <LinkedinIcon size={18} />,
      label: "LinkedIn",
      value: "linkedin.com/in/sumeet-powar",
      href: personal.linkedin,
      color: "#38bdf8",
      external: true,
    },
    {
      icon: <MapPin size={18} />,
      label: "Location",
      value: personal.location,
      href: null,
      color: "#34d399",
    },
  ];

  return (
    <section id="contact" className="section" style={{ background: "rgba(20,20,20,0.4)" }}>
      <div className="container">
        <div
          ref={ref}
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(24px)",
            transition: "opacity 0.6s ease, transform 0.6s ease",
          }}
        >
          <p className="section-label">Contact</p>
          <h2
            style={{
              fontSize: "clamp(1.6rem, 4vw, 2.4rem)",
              fontWeight: 700,
              letterSpacing: "-0.02em",
              marginBottom: 12,
            }}
          >
            Get in Touch
          </h2>
          <p
            style={{
              color: "var(--text-secondary)",
              fontSize: "0.95rem",
              maxWidth: 480,
              lineHeight: 1.7,
              marginBottom: 48,
            }}
          >
            I'm actively looking for entry-level opportunities in Data Science, ML Engineering,
            Data Analytics, and AI/ML development. Feel free to reach out.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 16,
              maxWidth: 640,
            }}
            className="contact-grid"
          >
            {contacts.map((c, i) => (
              <div
                key={i}
                className="card"
                style={{
                  padding: "20px 22px",
                  display: "flex",
                  gap: 14,
                  alignItems: "flex-start",
                  transition: "border-color 0.2s",
                }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLElement).style.borderColor = c.color + "44")
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLElement).style.borderColor = "var(--border)")
                }
              >
                <div
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: 8,
                    background: c.color + "14",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    color: c.color,
                  }}
                >
                  {c.icon}
                </div>
                <div>
                  <p style={{ fontSize: 11, color: "var(--text-muted)", fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: 4 }}>
                    {c.label}
                  </p>
                  {c.href ? (
                    <a
                      href={c.href}
                      target={c.external ? "_blank" : undefined}
                      rel={c.external ? "noopener noreferrer" : undefined}
                      style={{
                        fontSize: 13,
                        fontWeight: 500,
                        color: "var(--text-secondary)",
                        textDecoration: "none",
                        transition: "color 0.2s",
                        wordBreak: "break-all",
                      }}
                      onMouseEnter={(e) =>
                        ((e.currentTarget as HTMLElement).style.color = c.color)
                      }
                      onMouseLeave={(e) =>
                        ((e.currentTarget as HTMLElement).style.color = "var(--text-secondary)")
                      }
                    >
                      {c.value}
                    </a>
                  ) : (
                    <span style={{ fontSize: 13, fontWeight: 500, color: "var(--text-secondary)" }}>
                      {c.value}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div style={{ marginTop: 40 }}>
            <a
              href={`mailto:${personal.email}`}
              className="btn-primary"
              style={{ fontSize: 14, padding: "12px 28px" }}
            >
              <Send size={15} />
              Send me an email
            </a>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div style={{ marginTop: 80, paddingTop: 28, borderTop: "1px solid var(--border)" }}>
        <div className="container">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: 12,
            }}
          >
            <p style={{ fontSize: 13, color: "var(--text-muted)" }}>
              © 2026 Sumeet Powar. All rights reserved.
            </p>
            <div style={{ display: "flex", gap: 16 }}>
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                style={{ color: "var(--text-muted)", transition: "color 0.2s" }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLElement).style.color = "var(--text-primary)")
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLElement).style.color = "var(--text-muted)")
                }
              >
                <GithubIcon size={16} />
              </a>
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                style={{ color: "var(--text-muted)", transition: "color 0.2s" }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLElement).style.color = "var(--text-primary)")
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLElement).style.color = "var(--text-muted)")
                }
              >
                <LinkedinIcon size={16} />
              </a>
              <a
                href={`mailto:${personal.email}`}
                aria-label="Email"
                style={{ color: "var(--text-muted)", transition: "color 0.2s" }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLElement).style.color = "var(--text-primary)")
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLElement).style.color = "var(--text-muted)")
                }
              >
                <Mail size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 520px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
