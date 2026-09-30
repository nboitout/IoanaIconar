import type { Copy } from "@/lib/content";
import { FiscalCalendar } from "./FiscalCalendar";

export function Monthly({ c }: { c: Copy }) {
  return (
    <section className="section monthly" id="raport">
      <div className="wrap monthly-grid">
        <div>
          <h2 className="h2">{c.monthly.title}</h2>
          <p className="lead">{c.monthly.lead}</p>
          <ul className="parts">
            {c.monthly.parts.map((p) => (
              <li key={p.title}>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </li>
            ))}
          </ul>
          <p className="pilot">{c.monthly.pilot}</p>
          <a className="btn btn-light" href="#contact" data-service="raport">
            {c.monthly.cta}
          </a>
        </div>
        <FiscalCalendar c={c} />
      </div>
    </section>
  );
}
