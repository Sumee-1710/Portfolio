"use client";

import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { education } from "@/lib/data";
import { GraduationCap, MapPin, Calendar } from "lucide-react";

export default function Education() {
  const { ref, isVisible } = useIntersectionObserver();

  return (
    <section id="education" className="section">
      <div className="container">
        <div
          ref={ref}
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(24px)",
            transition: "opacity 0.6s ease, transform 0.6s ease",
          }}
        >
          <p className="section-label">Education</p>
          <h2
            style={{
              fontSize: "clamp(1.6rem, 4vw, 2.4rem)",
              fontWeight: 700,
              letterSpacing: "-0.02em",
              marginBottom: 48,
            }}
          >
            Education
          </h2>

          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {education.map((edu, i) => (
              <div
                key={i}
                className="card"
                style={{ padding: "28px 32px" }}
              >
                <div
                  style={{
                    display: "flex",
                    gap: 18,
                    alignItems: "flex-start",
                    flexWrap: "wrap",
                  }}
                >
                  {/* Icon */}
                  <div
                    style={{
                      width: 44,
                      height: 44,
                      borderRadius: 10,
                      background: "var(--accent-dim)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <GraduationCap size={20} style={{ color: "var(--accent-light)" }} />
                  </div>

                  {/* Info */}
                  <div style={{ flex: 1 }}>
                    <h3
                      style={{
                        fontSize: "1.05rem",
                        fontWeight: 700,
                        color: "var(--text-primary)",
                        marginBottom: 4,
                      }}
                    >
                      {edu.institution}
                    </h3>

                    <p
                      style={{
                        fontSize: "0.95rem",
                        fontWeight: 500,
                        color: "var(--accent-light)",
                        marginBottom: 10,
                      }}
                    >
                      {edu.degree}
                    </p>

                    <div style={{ display: "flex", flexWrap: "wrap", gap: 16, marginBottom: 12 }}>
                      <span
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: 5,
                          fontSize: 13,
                          color: "var(--text-muted)",
                        }}
                      >
                        <MapPin size={12} />
                        {edu.location}
                      </span>
                      <span
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: 5,
                          fontSize: 13,
                          color: "var(--text-muted)",
                        }}
                      >
                        <Calendar size={12} />
                        {edu.period}
                      </span>
                    </div>

                    <span
                      style={{
                        display: "inline-flex",
                        padding: "3px 11px",
                        borderRadius: 20,
                        fontSize: 12,
                        fontWeight: 500,
                        background: "var(--accent-dim)",
                        color: "var(--accent-light)",
                        border: "1px solid rgba(124,106,247,0.2)",
                      }}
                    >
                      {edu.note}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
