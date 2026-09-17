"use client";

import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { skills } from "@/lib/data";

const categoryColors: Record<string, string> = {
  "Programming":                     "#7c6af7",
  "Databases & Data":                "#a78bfa",
  "Machine Learning & Data Science": "#34d399",
  "Generative AI & NLP":             "#ec4899",
  "Computer Vision":                 "#f59e0b",
  "Applications & BI":               "#38bdf8",
  "Cloud & Tools":                   "#6b7280",
  "Languages":                       "#84cc16",
};

export default function Skills() {
  const { ref, isVisible } = useIntersectionObserver();

  return (
    <section id="skills" className="section" style={{ background: "rgba(20,20,20,0.4)" }}>
      <div className="container">
        <div
          ref={ref}
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(24px)",
            transition: "opacity 0.6s ease, transform 0.6s ease",
          }}
        >
          <p className="section-label">Technical Skills</p>
          <h2
            style={{
              fontSize: "clamp(1.6rem, 4vw, 2.4rem)",
              fontWeight: 700,
              letterSpacing: "-0.02em",
              marginBottom: 12,
            }}
          >
            Skills &amp; Technologies
          </h2>
          <p
            style={{
              color: "var(--text-secondary)",
              fontSize: "0.95rem",
              marginBottom: 48,
              maxWidth: 540,
            }}
          >
            Skills applied across projects, internship, and coursework — organised by domain.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
              gap: 20,
            }}
          >
            {skills.map((group) => {
              const color = categoryColors[group.category] ?? "#7c6af7";

              return (
                <div
                  key={group.category}
                  className="card"
                  style={{ padding: "20px 22px" }}
                >
                  {/* Category header */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 10,
                      marginBottom: 16,
                    }}
                  >
                    <span
                      style={{
                        width: 8,
                        height: 8,
                        borderRadius: "50%",
                        background: color,
                        flexShrink: 0,
                      }}
                    />
                    <span
                      style={{
                        fontSize: 13,
                        fontWeight: 600,
                        color: "var(--text-primary)",
                      }}
                    >
                      {group.category}
                    </span>
                  </div>

                  {/* Skill tags */}
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                    {group.items.map((skill) => (
                      <span
                        key={skill}
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          padding: "4px 11px",
                          borderRadius: 6,
                          fontSize: 12,
                          fontWeight: 500,
                          background: `${color}10`,
                          color: color,
                          border: `1px solid ${color}22`,
                          transition: "background 0.2s, border-color 0.2s",
                        }}
                        onMouseEnter={(e) => {
                          (e.currentTarget as HTMLElement).style.background = `${color}20`;
                          (e.currentTarget as HTMLElement).style.borderColor = `${color}44`;
                        }}
                        onMouseLeave={(e) => {
                          (e.currentTarget as HTMLElement).style.background = `${color}10`;
                          (e.currentTarget as HTMLElement).style.borderColor = `${color}22`;
                        }}
                      >
                        {skill}
                      </span>
                    ))}
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
