import React from "react";
import { Link } from "react-router-dom";

// AdvancedLogo.jsx
// - Text-first logo for “ネコTV” with integrated cat ear on the first character.
// - Props: to, compact, showBadge (left circular badge), inlineEar (small ear attached to 'ネ')
// - Uses CSS variables for easy theming: --logo-primary, --logo-accent, --logo-ink

export default function AdvancedLogo({ to = "/home", compact = false, showBadge = true, inlineEar = true }) {
  return (
    <Link to={to} className={`advanced-logo ${compact ? "compact" : ""}`} aria-label="ネコTV — home">
      {showBadge && (
        <span className="logo-badge" aria-hidden="true">
          <svg viewBox="0 0 64 64" width="28" height="28" xmlns="http://www.w3.org/2000/svg" role="img" aria-hidden="true">
            <g transform="translate(2,2)">
              <path d="M30 4c-3 0-6 2-8 4-2-2-5-4-8-4-5 0-12 6-12 14 0 12 10 22 20 22s20-10 20-22c0-8-7-14-12-14z" fill="currentColor" />
              <circle cx="14" cy="24" r="3" fill="#fff" opacity="0.95" />
              <circle cx="26" cy="24" r="3" fill="#fff" opacity="0.95" />
              <path d="M18 30c2 2 6 2 8 0" stroke="#fff" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.9" />
            </g>
          </svg>
        </span>
      )}

      <h1 className="logo-text" aria-hidden="false">
        <span className={`logo-char ne ${inlineEar ? "has-ear" : ""}`}>
          ネ
          {inlineEar && (
            <svg className="ear" viewBox="0 0 24 24" width="16" height="16" aria-hidden="true" focusable="false">
              <path d="M2 20 L12 4 L22 20 Z" fill="currentColor" />
            </svg>
          )}
        </span>
        <span className="logo-char rest">コTV</span>
      </h1>

      <style>{`
        .advanced-logo {
          --logo-primary: #7dd3fc;
          --logo-accent: #a78bfa;
          --logo-ink: #0b1020;
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          text-decoration: none;
          user-select: none;
        }

        /* Left badge (optional) */
        .logo-badge {
          display: inline-grid;
          place-items: center;
          width: 2.25rem;
          height: 2.25rem;
          border-radius: 9999px;
          background: linear-gradient(135deg, var(--logo-accent), var(--logo-primary));
          box-shadow: 0 8px 22px rgba(0,0,0,0.35), inset 0 -4px 10px rgba(255,255,255,0.06);
          transform-origin: center;
          transition: transform 300ms cubic-bezier(.2,.9,.3,1), box-shadow 300ms ease;
          color: #0b1020;
        }

        .advanced-logo:hover .logo-badge {
          transform: translateY(-4px) rotate(-8deg) scale(1.02);
          box-shadow: 0 14px 36px rgba(0,0,0,0.48), inset 0 -6px 14px rgba(255,255,255,0.06);
        }

        /* Text-first styling */
        .logo-text {
          display: inline-flex;
          align-items: center;
          gap: 0.08rem;
          margin: 0;
        }

        .logo-char {
          font-family: "Nunito", system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial;
          font-weight: 900;
          line-height: 1;
          letter-spacing: 0.02em;
          font-size: 1.25rem;
          position: relative;
          display: inline-flex;
          align-items: center;
          -webkit-font-smoothing: antialiased;
        }

        /* Main gradient text with subtle depth */
        .logo-char.rest, .logo-char.ne {
          background: linear-gradient(90deg, #ffffff 10%, var(--logo-primary) 50%, var(--logo-accent) 100%);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          text-shadow: 0 6px 18px rgba(2,6,23,0.55), 0 1px 0 rgba(255,255,255,0.03);
        }

        /* Small cat-ear SVG attached to the first character */
        .logo-char.ne.has-ear {
          padding-right: 0.2rem;
        }
        .logo-char.ne .ear {
          position: absolute;
          top: -6px;
          left: -8px;
          width: 18px;
          height: 18px;
          transform: rotate(-12deg);
          color: var(--logo-accent);
          filter: drop-shadow(0 6px 10px rgba(2,6,23,0.45));
          transition: transform 260ms ease, color 260ms ease;
        }

        .advanced-logo:hover .logo-char.ne .ear {
          transform: translateY(-2px) rotate(-6deg) scale(1.05);
        }

        /* tiny shining sweep on full text */
        .logo-text::after {
          content: "";
          position: absolute;
          inset: 0 0 auto 0;
          height: 100%;
          width: 100%;
          pointer-events: none;
          mix-blend-mode: screen;
          background: linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.06) 45%, rgba(255,255,255,0.12) 50%, rgba(255,255,255,0.06) 55%, transparent 100%);
          transform: translateX(-160%);
          animation: textShine 3.6s linear infinite;
          border-radius: 3px;
        }

        @keyframes textShine {
          0% { transform: translateX(-160%); }
          50% { transform: translateX(10%); }
          100% { transform: translateX(160%); }
        }

        .advanced-logo:hover .logo-char { transform: translateY(-2px) scale(1.02); }

        .advanced-logo.compact .logo-char { font-size: 1rem }
        .advanced-logo.compact .logo-badge { width: 1.6rem; height: 1.6rem }

        @media (prefers-reduced-motion: reduce) {
          .logo-text::after, .logo-badge, .logo-char.ne .ear { animation: none; transition: none }
        }

        @media (max-width: 480px) {
          .logo-char { font-size: 1rem }
        }
      `}</style>
    </Link>
  );
}

export default Logo;
