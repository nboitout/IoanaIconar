import type { CSSProperties } from "react";
import type { Copy } from "@/lib/content";

function Check() {
  return (
    <svg className="tick" viewBox="0 0 20 20" width="20" height="20" aria-hidden="true">
      <circle cx="10" cy="10" r="10" className="tick-bg" />
      <path
        d="M5.5 10.4l3 3 6-6.4"
        className="tick-path"
        fill="none"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Hero({ c }: { c: Copy }) {
  const r = c.report;
  return (
    <section className="hero">
      <div className="wrap hero-grid">
        <div className="hero-copy">
          <h1>{c.hero.title}</h1>
          <p className="lead">{c.hero.lead}</p>
          <div className="hero-actions">
            <a className="btn" href="#contact">
              {c.hero.cta}
            </a>
            <a className="link" href="#raport">
              {c.hero.secondary}
            </a>
          </div>
          <p className="hero-note">{c.hero.note}</p>
        </div>

        <div className="hero-visual">
          <div className="disc" aria-hidden="true" />
          <article className="report" aria-label={r.title}>
            <header className="report-head">
              <div>
                <h2 className="report-title">{r.title}</h2>
                <p className="report-client">{r.client}</p>
              </div>
              <span className="pill">{r.tag}</span>
            </header>

            <ul className="report-rows">
              {r.rows.map((row, i) => (
                <li key={row.label} style={{ "--i": i } as CSSProperties}>
                  <Check />
                  <span className="row-label">{row.label}</span>
                  <span className="row-value">{row.value}</span>
                </li>
              ))}
            </ul>

            <dl className="figures">
              {r.figures.map((f) => (
                <div key={f.label}>
                  <dt>{f.label}</dt>
                  <dd>{f.value}</dd>
                </div>
              ))}
            </dl>

            <div className="note">
              <h3>{r.noteTitle}</h3>
              <p>{r.note}</p>
            </div>
            <p className="report-disclaimer">{r.disclaimer}</p>
          </article>
        </div>
      </div>
    </section>
  );
}
