import type { Copy } from "@/lib/content";

export function Proof({ c }: { c: Copy }) {
  return (
    <section className="proof" aria-label="A&I Consulting">
      <dl className="wrap proof-grid">
        {c.proof.map((p) => (
          <div key={p.value}>
            <dt>{p.value}</dt>
            <dd>{p.label}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
