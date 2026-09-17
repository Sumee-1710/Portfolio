"use client";

import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { about, personal } from "@/lib/data";
import { MapPin, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";

export default function About() {
  const { ref, isVisible } = useIntersectionObserver();

  return (
    <section id="about" className="section">
      <div className="container">
        <div
          ref={ref}
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(24px)",
            transition: "opacity 0.6s ease, transform 0.6s ease",
          }}
        >
          <p className="section-label">About Me</p>
          <h2
            style={{
              fontSize: "clamp(1.6rem, 4vw, 2.4rem)",
              fontWeight: 700,
              letterSpacing: "-0.02em",
              marginBottom: 48,
              maxWidth: 640,
            }}
          >
            AI/ML &amp; Data Professional Turning Data Into{" "}
            <span style={{ color: "var(--accent-light)" }}>
              Practical Solutions
            </span>
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr auto",
              gap: 48,
              alignItems: "start",
            }}
            className="about-grid"
          >
            {/* Text */}
            <div style={{ maxWidth: 620 }}>
              {about.paragraphs.map((p, i) => (
                <p
                  key={i}
                  style={{
                    fontSize: "1rem",
                    color: "var(--text-secondary)",
                    lineHeight: 1.8,
                    marginBottom: i < about.paragraphs.length - 1 ? 20 : 0,
                  }}
                >
                  {p}
                </p>
              ))}
            </div>

            {/* Info card */}
            <div
              className="card"
              style={{
                padding: "24px 28px",
                minWidth: 220,
                flexShrink: 0,
              }}
            >
              <p
                style={{
                  fontSize: 11,
                  fontWeight: 600,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: "var(--text-muted)",
                  marginBottom: 16,
                }}
              >
                Quick Info
              </p>

              {[
                {
                  icon: <MapPin size={14} />,
                  label: personal.location,
                },
                {
                  icon: <Mail size={14} />,
                  label: personal.email,
                  href: `mailto:${personal.email}`,
                },
                {
                  icon: <GithubIcon size={14} />,
                  label: "GitHub",
                  href: personal.github,
                  external: true,
                },
                {
                  icon: <LinkedinIcon size={14} />,
                  label: "LinkedIn",
                  href: personal.linkedin,
                  external: true,
                },
              ].map((item, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                    marginBottom: i < 3 ? 12 : 0,
                    color: "var(--text-secondary)",
                    fontSize: 13,
                  }}
                >
                  <span style={{ color: "var(--accent)", flexShrink: 0 }}>{item.icon}</span>
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.external ? "_blank" : undefined}
                      rel={item.external ? "noopener noreferrer" : undefined}
                      style={{
                        color: "var(--text-secondary)",
                        textDecoration: "none",
                        transition: "color 0.2s",
                      }}
                      onMouseEnter={(e) =>
                        ((e.target as HTMLElement).style.color = "var(--text-primary)")
                      }
                      onMouseLeave={(e) =>
                        ((e.target as HTMLElement).style.color = "var(--text-secondary)")
                      }
                    >
                      {item.label}
                    </a>
                  ) : (
                    <span>{item.label}</span>
                  )}
                </div>
              ))}

              <div
                style={{
                  marginTop: 20,
                  paddingTop: 20,
                  borderTop: "1px solid var(--border)",
                }}
              >
                <a
                  href={personal.resumeFile}
                  download
                  className="btn-primary"
                  style={{ width: "100%", justifyContent: "center", fontSize: 13 }}
                >
                  Download Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .about-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
