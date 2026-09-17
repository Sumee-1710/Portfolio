"use client";

import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { achievements } from "@/lib/data";
import { Trophy, Star } from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  trophy: <Trophy size={22} />,
  star:   <Star size={22} />,
};

const colors = ["#f59e0b", "#7c6af7"];

export default function Achievements() {
  const { ref, isVisible } = useIntersectionObserver();

  return (
    <section id="achievements" className="section">
      <div className="container">
        <div
          ref={ref}
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(24px)",
            transition: "opacity 0.6s ease, transform 0.6s ease",
          }}
        >
          <p className="section-label">Awards</p>
          <h2
            style={{
              fontSize: "clamp(1.6rem, 4vw, 2.4rem)",
              fontWeight: 700,
              letterSpacing: "-0.02em",
              marginBottom: 48,
            }}
          >
            Achievements
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
              gap: 20,
            }}
          >
            {achievements.map((ach, i) => {
              const color = colors[i % colors.length];
              return (
                <div
                  key={i}
                  className="card"
                  style={{
                    padding: "28px 30px",
                    position: "relative",
                    overflow: "hidden",
                    transition: "border-color 0.2s",
                  }}
                  onMouseEnter={(e) =>
                    ((e.currentTarget as HTMLElement).style.borderColor = color + "44")
                  }
                  onMouseLeave={(e) =>
                    ((e.currentTarget as HTMLElement).style.borderColor = "var(--border)")
                  }
                >
                  {/* Subtle background glow */}
                  <div
                    aria-hidden="true"
                    style={{
                      position: "absolute",
                      top: -40,
                      right: -40,
                      width: 130,
                      height: 130,
                      borderRadius: "50%",
                      background: `radial-gradient(circle, ${color}10 0%, transparent 70%)`,
                      pointerEvents: "none",
                    }}
                  />

                  {/* Icon */}
                  <div
                    style={{
                      width: 48,
                      height: 48,
                      borderRadius: 12,
                      background: color + "15",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color,
                      marginBottom: 16,
                    }}
                  >
                    {iconMap[ach.icon] ?? <Star size={22} />}
                  </div>

                  <h3
                    style={{
                      fontSize: "1rem",
                      fontWeight: 700,
                      color: "var(--text-primary)",
                      marginBottom: 10,
                    }}
                  >
                    {ach.title}
                  </h3>

                  <p
                    style={{
                      fontSize: "0.9rem",
                      color: "var(--text-secondary)",
                      lineHeight: 1.7,
                    }}
                  >
                    {ach.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
