import type { Copy } from "@/lib/content";

export function Fit({ c }: { c: Copy }) {
  return (
    <section className="section fit">
      <div className="wrap">
        <h2 className="h2 measure">{c.fit.title}</h2>
        <div className="fit-grid">
          {c.fit.items.map((i) => (
            <div key={i.name}>
              <h3>{i.name}</h3>
              <p>{i.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
