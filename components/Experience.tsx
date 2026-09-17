"use client";

import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { experience } from "@/lib/data";
import { Briefcase, MapPin, Calendar, CheckCircle2 } from "lucide-react";

export default function Experience() {
  const { ref, isVisible } = useIntersectionObserver();

  return (
    <section id="experience" className="section">
      <div className="container">
        <div
          ref={ref}
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(24px)",
            transition: "opacity 0.6s ease, transform 0.6s ease",
          }}
        >
          <p className="section-label">Work Experience</p>
          <h2
            style={{
              fontSize: "clamp(1.6rem, 4vw, 2.4rem)",
              fontWeight: 700,
              letterSpacing: "-0.02em",
              marginBottom: 48,
            }}
          >
            Professional Experience
          </h2>

          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            {experience.map((job, idx) => (
              <div
                key={idx}
                className="card"
                style={{ padding: "32px 36px" }}
              >
                {/* Header */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    flexWrap: "wrap",
                    gap: 16,
                    marginBottom: 24,
                  }}
                >
                  <div>
                    <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 6 }}>
                      <div
                        style={{
                          width: 36,
                          height: 36,
                          borderRadius: 8,
                          background: "var(--accent-dim)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <Briefcase size={16} style={{ color: "var(--accent-light)" }} />
                      </div>
                      <div>
                        <h3
                          style={{
                            fontSize: "1.05rem",
                            fontWeight: 700,
                            color: "var(--text-primary)",
                          }}
                        >
                          {job.role}
                        </h3>
                        <span
                          style={{
                            fontSize: 12,
                            fontWeight: 500,
                            color: "var(--accent-light)",
                            background: "var(--accent-dim)",
                            padding: "1px 8px",
                            borderRadius: 4,
                          }}
                        >
                          {job.type}
                        </span>
                      </div>
                    </div>

                    <p
                      style={{
                        fontSize: "1rem",
                        fontWeight: 600,
                        color: "var(--text-secondary)",
                        marginBottom: 8,
                      }}
                    >
                      {job.company}
                    </p>

                    <div style={{ display: "flex", flexWrap: "wrap", gap: 16 }}>
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
                        {job.period}
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
                        <MapPin size={12} />
                        {job.location}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Bullets */}
                <ul
                  style={{
                    listStyle: "none",
                    padding: 0,
                    margin: "0 0 24px 0",
                    display: "flex",
                    flexDirection: "column",
                    gap: 12,
                  }}
                >
                  {job.bullets.map((bullet, i) => (
                    <li
                      key={i}
                      style={{ display: "flex", gap: 12, alignItems: "flex-start" }}
                    >
                      <CheckCircle2
                        size={15}
                        style={{ color: "var(--green)", flexShrink: 0, marginTop: 2 }}
                      />
                      <span style={{ fontSize: "0.95rem", color: "var(--text-secondary)", lineHeight: 1.6 }}>
                        {bullet}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Tech stack */}
                <div
                  style={{
                    paddingTop: 20,
                    borderTop: "1px solid var(--border)",
                    display: "flex",
                    flexWrap: "wrap",
                    gap: 8,
                    alignItems: "center",
                  }}
                >
                  <span
                    style={{
                      fontSize: 11,
                      fontWeight: 600,
                      color: "var(--text-muted)",
                      letterSpacing: "0.06em",
                      textTransform: "uppercase",
                      marginRight: 4,
                    }}
                  >
                    Stack
                  </span>
                  {job.tech.map((t) => (
                    <span key={t} className="tag">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
