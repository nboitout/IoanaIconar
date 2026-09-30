import type { Copy } from "@/lib/content";

export function Clients({ c }: { c: Copy }) {
  return (
    <section className="section clients" id="clienti">
      <div className="wrap">
        <h2 className="h2">{c.clients.title}</h2>
        <div className="quotes">
          {c.clients.items.map((q) => (
            <figure key={q.company}>
              <blockquote>{q.quote}</blockquote>
              <figcaption>
                <strong>{q.company}</strong>
                <span>{q.person}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
