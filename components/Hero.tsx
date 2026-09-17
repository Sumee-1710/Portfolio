"use client";

import { useEffect, useState, useRef } from "react";
import { personal } from "@/lib/data";
import { Download, ArrowDown, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";

const roles = [
  "AI/ML Developer",
  "Data Analyst",
  "Python Developer",
  "Generative AI Developer",
  "Machine Learning Engineer",
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [visible, setVisible] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Fade-in on mount
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  // Typewriter
  useEffect(() => {
    const current = roles[roleIndex];
    const speed = isDeleting ? 40 : 80;
    const pause = 1800;

    if (!isDeleting && displayText === current) {
      timeoutRef.current = setTimeout(() => setIsDeleting(true), pause);
    } else if (isDeleting && displayText === "") {
      setIsDeleting(false);
      setRoleIndex((i) => (i + 1) % roles.length);
    } else {
      timeoutRef.current = setTimeout(() => {
        setDisplayText(
          isDeleting
            ? current.slice(0, displayText.length - 1)
            : current.slice(0, displayText.length + 1)
        );
      }, speed);
    }
    return () => { if (timeoutRef.current) clearTimeout(timeoutRef.current); };
  }, [displayText, isDeleting, roleIndex]);

  return (
    <section
      id="hero"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
        paddingTop: 80,
      }}
    >
      {/* Background gradient blobs */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "10%",
          left: "50%",
          transform: "translateX(-50%)",
          width: 600,
          height: 600,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(124,106,247,0.07) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          bottom: "10%",
          right: "5%",
          width: 400,
          height: 400,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(52,211,153,0.05) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div
        className="container"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(20px)",
          transition: "opacity 0.8s ease, transform 0.8s ease",
        }}
      >
        {/* Status badge */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            padding: "5px 14px",
            borderRadius: 20,
            border: "1px solid rgba(52,211,153,0.25)",
            background: "rgba(52,211,153,0.06)",
            marginBottom: 32,
          }}
        >
          <span
            style={{
              width: 7,
              height: 7,
              borderRadius: "50%",
              background: "var(--green)",
              display: "inline-block",
              animation: "pulse-glow 2s ease-in-out infinite",
            }}
          />
          <span style={{ fontSize: 12, fontWeight: 500, color: "var(--green)" }}>
            Open to opportunities
          </span>
        </div>

        {/* Name */}
        <h1
          style={{
            fontSize: "clamp(2.4rem, 6vw, 4.2rem)",
            fontWeight: 700,
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
            marginBottom: 16,
          }}
        >
          <span className="gradient-text">Sumeet Powar</span>
        </h1>

        {/* Typewriter role */}
        <div
          style={{
            height: 42,
            display: "flex",
            alignItems: "center",
            marginBottom: 24,
          }}
        >
          <span
            style={{
              fontSize: "clamp(1.1rem, 3vw, 1.5rem)",
              fontWeight: 500,
              color: "var(--accent-light)",
            }}
          >
            {displayText}
            <span
              className="cursor-blink"
              style={{
                display: "inline-block",
                width: 2,
                height: "1em",
                background: "var(--accent-light)",
                marginLeft: 2,
                verticalAlign: "text-bottom",
              }}
            />
          </span>
        </div>

        {/* Tagline */}
        <p
          style={{
            fontSize: "clamp(0.95rem, 2vw, 1.1rem)",
            color: "var(--text-secondary)",
            lineHeight: 1.7,
            maxWidth: 600,
            marginBottom: 40,
          }}
        >
          {personal.tagline}
        </p>

        {/* CTA buttons */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginBottom: 48 }}>
          <a href="#projects" className="btn-primary">
            View Projects
            <ArrowDown size={15} />
          </a>
          <a href={personal.resumeFile} download className="btn-secondary">
            <Download size={15} />
            Download Resume
          </a>
          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
            aria-label="GitHub profile"
          >
            <GithubIcon size={15} />
            GitHub
          </a>
          <a
            href={personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
            aria-label="LinkedIn profile"
          >
            <LinkedinIcon size={15} />
            LinkedIn
          </a>
        </div>

        {/* Quick stats */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 32,
            paddingTop: 32,
            borderTop: "1px solid var(--border)",
          }}
        >
          {[
            { value: "3+",   label: "End-to-end projects" },
            { value: "87%",  label: "ML model accuracy (internship)" },
            { value: "50K+", label: "Records analysed" },
            { value: "2026", label: "B.Tech Grad (AI & Analytics)" },
          ].map((stat) => (
            <div key={stat.label}>
              <div
                style={{
                  fontSize: "clamp(1.3rem, 3vw, 1.8rem)",
                  fontWeight: 700,
                  color: "var(--text-primary)",
                  letterSpacing: "-0.02em",
                }}
              >
                {stat.value}
              </div>
              <div style={{ fontSize: 12, color: "var(--text-secondary)", marginTop: 2 }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll cue */}
      <a
        href="#about"
        aria-label="Scroll to About"
        style={{
          position: "absolute",
          bottom: 36,
          left: "50%",
          transform: "translateX(-50%)",
          color: "var(--text-muted)",
          transition: "color 0.2s",
          animation: "fadeIn 1s ease 1.5s both",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text-secondary)")}
        onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
      >
        <ArrowDown size={20} />
      </a>
    </section>
  );
}
