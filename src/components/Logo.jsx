import React from "react";
import { Link } from "react-router-dom";
import "../index.css";

// Text-first logo for "ネコTV" with integrated cat ear on the first character.
// Props: to, compact, showBadge, inlineEar
export default function Logo({
  to = "/home",
  compact = false,
  showBadge = true,
  inlineEar = true,
}) {
  return (
    <Link
      to={to}
      className={`logo-wrapper ${compact ? "compact" : ""}`}
      aria-label="ネコTV — home"
    >
      {showBadge && (
        <span className="logo-badge" aria-hidden="true">
          <svg
            viewBox="0 0 64 64"
            width="28"
            height="28"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-hidden="true"
          >
            <g transform="translate(2,2)">
              <path
                d="M30 4c-3 0-6 2-8 4-2-2-5-4-8-4-5 0-12 6-12 14 0 12 10 22 20 22s20-10 20-22c0-8-7-14-12-14z"
                fill="currentColor"
              />
              <circle cx="14" cy="24" r="3" fill="#fff" opacity="0.95" />
              <circle cx="26" cy="24" r="3" fill="#fff" opacity="0.95" />
              <path
                d="M18 30c2 2 6 2 8 0"
                stroke="#fff"
                strokeWidth="2"
                strokeLinecap="round"
                fill="none"
                opacity="0.9"
              />
            </g>
          </svg>
        </span>
      )}

      <h1 className="logo-text" aria-hidden="false">
        <span className={`logo-char ne ${inlineEar ? "has-ear" : ""}`}>
          ネ
          {inlineEar && (
            <svg
              className="ear"
              viewBox="0 0 24 24"
              width="16"
              height="16"
              aria-hidden="true"
              focusable="false"
            >
              <path d="M2 20 L12 4 L22 20 Z" fill="currentColor" />
            </svg>
          )}
        </span>
        <span className="logo-char rest">コTV</span>
      </h1>
    </Link>
  );
}
