"use client";

import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { certifications } from "@/lib/data";
import { BadgeCheck, ExternalLink } from "lucide-react";

const issuerColors: Record<string, string> = {
  IBM:                    "#7c6af7",
  "Amazon Web Services":  "#f59e0b",
  Databricks:             "#ec4899",
};

export default function Certifications() {
  const { ref, isVisible } = useIntersectionObserver();

  return (
    <section id="certifications" className="section" style={{ background: "rgba(20,20,20,0.4)" }}>
      <div className="container">
        <div
          ref={ref}
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(24px)",
            transition: "opacity 0.6s ease, transform 0.6s ease",
          }}
        >
          <p className="section-label">Certifications</p>
          <h2
            style={{
              fontSize: "clamp(1.6rem, 4vw, 2.4rem)",
              fontWeight: 700,
              letterSpacing: "-0.02em",
              marginBottom: 48,
            }}
          >
            Certifications
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
              gap: 16,
            }}
          >
            {certifications.map((cert, i) => {
              const color = issuerColors[cert.issuer] ?? "#7c6af7";
              return (
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
                    ((e.currentTarget as HTMLElement).style.borderColor = color + "44")
                  }
                  onMouseLeave={(e) =>
                    ((e.currentTarget as HTMLElement).style.borderColor = "var(--border)")
                  }
                >
                  {/* Icon */}
                  <div
                    style={{
                      width: 36,
                      height: 36,
                      borderRadius: 8,
                      background: color + "15",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <BadgeCheck size={17} style={{ color }} />
                  </div>

                  {/* Text */}
                  <div style={{ flex: 1 }}>
                    <p
                      style={{
                        fontSize: "0.88rem",
                        fontWeight: 600,
                        color: "var(--text-primary)",
                        lineHeight: 1.4,
                        marginBottom: 5,
                      }}
                    >
                      {cert.title}
                    </p>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                      <span
                        style={{
                          fontSize: 12,
                          fontWeight: 500,
                          color,
                          background: color + "12",
                          padding: "1px 8px",
                          borderRadius: 4,
                        }}
                      >
                        {cert.issuer}
                      </span>
                      {cert.link && (
                        <a
                          href={cert.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`View ${cert.title} certificate`}
                          style={{ color: "var(--text-muted)", transition: "color 0.2s" }}
                          onMouseEnter={(e) =>
                            ((e.currentTarget as HTMLElement).style.color = color)
                          }
                          onMouseLeave={(e) =>
                            ((e.currentTarget as HTMLElement).style.color = "var(--text-muted)")
                          }
                        >
                          <ExternalLink size={13} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
