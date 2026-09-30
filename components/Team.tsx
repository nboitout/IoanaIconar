import type { Copy } from "@/lib/content";

export function Team({ c }: { c: Copy }) {
  return (
    <section className="section" id="echipa">
      <div className="wrap">
        <div className="section-head">
          <h2 className="h2">{c.team.title}</h2>
          <p className="lead">{c.team.lead}</p>
        </div>
        <ul className="team">
          {c.team.people.map((p, i) => (
            <li key={p.name} className={i < 2 ? "person partner" : "person"}>
              <span className="avatar" aria-hidden="true">
                {p.initials}
              </span>
              <div>
                <h3>{p.name}</h3>
                <p className="role">{p.role}</p>
                <p className="detail">{p.detail}</p>
              </div>
            </li>
          ))}
        </ul>
        <p className="fine">{c.team.photoNote}</p>
      </div>
    </section>
  );
}
