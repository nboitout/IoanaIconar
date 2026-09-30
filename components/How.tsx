import type { Copy } from "@/lib/content";

export function How({ c }: { c: Copy }) {
  return (
    <section className="section how" id="cum-lucram">
      <div className="wrap">
        <h2 className="h2">{c.how.title}</h2>
        <ol className="steps">
          {c.how.steps.map((s, i) => (
            <li key={s.title}>
              <span className="step-n" aria-hidden="true">
                {i + 1}
              </span>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
