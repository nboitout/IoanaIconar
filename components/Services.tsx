import type { Copy } from "@/lib/content";

export function Services({ c }: { c: Copy }) {
  return (
    <section className="section" id="servicii">
      <div className="wrap">
        <div className="section-head">
          <h2 className="h2">{c.services.title}</h2>
          <p className="lead">{c.services.lead}</p>
        </div>
        <ul className="services">
          {c.services.items.map((s) => (
            <li key={s.id} className="service">
              <h3>{s.name}</h3>
              <div>
                <p className="service-benefit">{s.benefit}</p>
                <ul className="includes">
                  {s.includes.map((x) => (
                    <li key={x}>{x}</li>
                  ))}
                </ul>
              </div>
              <a className="link" href="#contact" data-service={s.id}>
                {c.services.ask}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
