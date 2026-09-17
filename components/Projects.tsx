"use client";

import { useState } from "react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { projects } from "@/lib/data";
import {
  ExternalLink,
  ChevronDown,
  ChevronUp,
  ArrowRight,
  CheckCircle2,
  BarChart2,
  Layers,
  Workflow,
} from "lucide-react";
import { GithubIcon } from "@/components/icons";

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[number];
  index: number;
}) {
  const [expanded, setExpanded] = useState(false);
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1 });

  return (
    <div
      ref={ref}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(28px)",
        transition: `opacity 0.6s ease ${index * 0.12}s, transform 0.6s ease ${index * 0.12}s`,
      }}
    >
      <div
        className="card"
        style={{
          overflow: "hidden",
          transition: "border-color 0.3s ease",
        }}
        onMouseEnter={(e) =>
          ((e.currentTarget as HTMLElement).style.borderColor = project.color + "44")
        }
        onMouseLeave={(e) =>
          ((e.currentTarget as HTMLElement).style.borderColor = "var(--border)")
        }
      >
        {/* Colour accent bar */}
        <div
          style={{
            height: 3,
            background: `linear-gradient(90deg, ${project.color}, transparent)`,
          }}
        />

        <div style={{ padding: "28px 30px" }}>
          {/* Header row */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
              flexWrap: "wrap",
              gap: 12,
              marginBottom: 16,
            }}
          >
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 6 }}>
                <h3
                  style={{
                    fontSize: "1.1rem",
                    fontWeight: 700,
                    color: "var(--text-primary)",
                  }}
                >
                  {project.name}
                </h3>
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8, alignItems: "center" }}>
                <span
                  style={{
                    fontSize: 12,
                    fontWeight: 500,
                    color: project.color,
                    background: project.color + "12",
                    border: `1px solid ${project.color}22`,
                    borderRadius: 4,
                    padding: "2px 9px",
                  }}
                >
                  {project.role}
                </span>
                <span style={{ fontSize: 12, color: "var(--text-muted)" }}>
                  {project.period}
                </span>
              </div>
            </div>

            {/* Links */}
            <div style={{ display: "flex", gap: 8 }}>
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${project.name} GitHub repository`}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 6,
                    padding: "6px 12px",
                    borderRadius: 6,
                    fontSize: 12,
                    fontWeight: 500,
                    color: "var(--text-secondary)",
                    background: "transparent",
                    border: "1px solid var(--border)",
                    textDecoration: "none",
                    transition: "border-color 0.2s, color 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "#444";
                    (e.currentTarget as HTMLElement).style.color = "var(--text-primary)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
                    (e.currentTarget as HTMLElement).style.color = "var(--text-secondary)";
                  }}
                >
                  <GithubIcon size={13} />
                  GitHub
                </a>
              )}
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${project.name} live demo`}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 6,
                    padding: "6px 12px",
                    borderRadius: 6,
                    fontSize: 12,
                    fontWeight: 500,
                    color: "#fff",
                    background: project.color,
                    border: "none",
                    textDecoration: "none",
                    transition: "opacity 0.2s",
                  }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.opacity = "0.85")}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.opacity = "1")}
                >
                  <ExternalLink size={13} />
                  Live Demo
                </a>
              )}
            </div>
          </div>

          {/* Summary */}
          <p
            style={{
              fontSize: "0.95rem",
              color: "var(--text-secondary)",
              lineHeight: 1.7,
              marginBottom: 20,
            }}
          >
            {project.summary}
          </p>

          {/* Metrics */}
          {project.metrics.length > 0 && (
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 12,
                marginBottom: 20,
              }}
            >
              {project.metrics.map((m) => (
                <div
                  key={m.label}
                  style={{
                    padding: "8px 16px",
                    borderRadius: 8,
                    background: project.color + "0d",
                    border: `1px solid ${project.color}22`,
                    textAlign: "center",
                  }}
                >
                  <div
                    style={{
                      fontSize: "1.15rem",
                      fontWeight: 700,
                      color: project.color,
                      lineHeight: 1,
                      marginBottom: 3,
                    }}
                  >
                    {m.value}
                  </div>
                  <div style={{ fontSize: 11, color: "var(--text-muted)" }}>{m.label}</div>
                </div>
              ))}
            </div>
          )}

          {/* Tech stack */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 20 }}>
            {project.tech.map((t) => (
              <span
                key={t}
                style={{
                  display: "inline-flex",
                  padding: "3px 10px",
                  borderRadius: 20,
                  fontSize: 11,
                  fontWeight: 500,
                  background: "rgba(255,255,255,0.04)",
                  color: "var(--text-secondary)",
                  border: "1px solid var(--border-subtle)",
                }}
              >
                {t}
              </span>
            ))}
          </div>

          {/* Expand / collapse */}
          <button
            onClick={() => setExpanded((v) => !v)}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              background: "transparent",
              border: "none",
              cursor: "pointer",
              fontSize: 13,
              fontWeight: 500,
              color: project.color,
              padding: 0,
              transition: "opacity 0.2s",
            }}
            aria-expanded={expanded}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.opacity = "0.75")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.opacity = "1")}
          >
            {expanded ? (
              <>
                <ChevronUp size={15} /> Hide details
              </>
            ) : (
              <>
                <ChevronDown size={15} /> View details
              </>
            )}
          </button>

          {/* Expanded details */}
          {expanded && (
            <div
              style={{
                marginTop: 24,
                paddingTop: 24,
                borderTop: "1px solid var(--border)",
                display: "flex",
                flexDirection: "column",
                gap: 28,
              }}
            >
              {/* Problem */}
              <DetailBlock
                icon={<Layers size={15} />}
                title="Problem"
                color={project.color}
              >
                <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)", lineHeight: 1.7 }}>
                  {project.problem}
                </p>
              </DetailBlock>

              {/* Approach */}
              <DetailBlock
                icon={<Workflow size={15} />}
                title="Approach"
                color={project.color}
              >
                <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)", lineHeight: 1.7 }}>
                  {project.approach}
                </p>
              </DetailBlock>

              {/* Workflow — only if it exists */}
              {"workflow" in project && Array.isArray((project as any).workflow) && (
                <DetailBlock
                  icon={<ArrowRight size={15} />}
                  title="Pipeline"
                  color={project.color}
                >
                  <ol style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 8 }}>
                    {((project as any).workflow as string[]).map((step: string, i: number) => (
                      <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
                        <span
                          style={{
                            flexShrink: 0,
                            width: 20,
                            height: 20,
                            borderRadius: "50%",
                            background: project.color + "20",
                            color: project.color,
                            fontSize: 11,
                            fontWeight: 700,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            marginTop: 1,
                          }}
                        >
                          {i + 1}
                        </span>
                        <span style={{ fontSize: "0.9rem", color: "var(--text-secondary)", lineHeight: 1.6 }}>
                          {step}
                        </span>
                      </li>
                    ))}
                  </ol>
                </DetailBlock>
              )}

              {/* Key features */}
              <DetailBlock
                icon={<CheckCircle2 size={15} />}
                title="Key Features"
                color={project.color}
              >
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 8 }}>
                  {project.features.map((f, i) => (
                    <li key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                      <span
                        style={{
                          width: 5,
                          height: 5,
                          borderRadius: "50%",
                          background: project.color,
                          flexShrink: 0,
                          marginTop: 8,
                        }}
                      />
                      <span style={{ fontSize: "0.9rem", color: "var(--text-secondary)", lineHeight: 1.7 }}>
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>
              </DetailBlock>

              {/* Results */}
              {project.metrics.length > 0 && (
                <DetailBlock
                  icon={<BarChart2 size={15} />}
                  title="Results"
                  color={project.color}
                >
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
                    {project.metrics.map((m) => (
                      <div
                        key={m.label}
                        style={{
                          padding: "10px 18px",
                          borderRadius: 8,
                          background: project.color + "0d",
                          border: `1px solid ${project.color}22`,
                        }}
                      >
                        <div
                          style={{
                            fontSize: "1.2rem",
                            fontWeight: 700,
                            color: project.color,
                            marginBottom: 2,
                          }}
                        >
                          {m.value}
                        </div>
                        <div style={{ fontSize: 11, color: "var(--text-muted)" }}>
                          {m.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </DetailBlock>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function DetailBlock({
  icon,
  title,
  color,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  color: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 8,
          marginBottom: 12,
          color,
        }}
      >
        {icon}
        <span style={{ fontSize: 13, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.06em" }}>
          {title}
        </span>
      </div>
      {children}
    </div>
  );
}

export default function Projects() {
  const { ref, isVisible } = useIntersectionObserver();

  return (
    <section id="projects" className="section" style={{ background: "rgba(20,20,20,0.4)" }}>
      <div className="container">
        <div
          ref={ref}
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(24px)",
            transition: "opacity 0.6s ease, transform 0.6s ease",
          }}
        >
          <p className="section-label">Portfolio</p>
          <h2
            style={{
              fontSize: "clamp(1.6rem, 4vw, 2.4rem)",
              fontWeight: 700,
              letterSpacing: "-0.02em",
              marginBottom: 12,
            }}
          >
            Projects
          </h2>
          <p
            style={{
              color: "var(--text-secondary)",
              fontSize: "0.95rem",
              marginBottom: 48,
              maxWidth: 540,
            }}
          >
            End-to-end AI/ML, data engineering, and generative AI projects. Click{" "}
            <strong style={{ color: "var(--text-primary)" }}>View details</strong> on any card for a
            deep dive into the problem, approach, and results.
          </p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
