"use client";

import { useEffect, useState } from "react";
import type { Copy } from "@/lib/content";

const SERVICE_IDS = ["contabilitate", "salarizare", "financiar", "start", "evaluari", "raport"];

export function ContactForm({ c, email }: { c: Copy; email: string }) {
  const t = c.contact;
  const [need, setNeed] = useState("");

  // Service links elsewhere on the page pre-select the matching option.
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const el = (e.target as HTMLElement).closest<HTMLElement>("[data-service]");
      const idx = el ? SERVICE_IDS.indexOf(el.dataset.service ?? "") : -1;
      if (idx >= 0) setNeed(t.needOptions[idx]);
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, [t.needOptions]);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const L = t.mailLabels;
    const lines = [
      `${L.name}: ${f.get("name")}`,
      `${L.reach}: ${f.get("reach")}`,
      `${L.need}: ${f.get("need")}`,
      f.get("message") ? `\n${L.message}: ${f.get("message")}` : "",
    ].filter(Boolean);
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(t.mailSubject)}&body=${encodeURIComponent(lines.join("\n"))}`;
  }

  return (
    <form className="form" onSubmit={onSubmit}>
      <label>
        <span>{t.fields.name}</span>
        <input name="name" required autoComplete="name" />
      </label>
      <label>
        <span>{t.fields.reach}</span>
        <input name="reach" required autoComplete="email" placeholder={t.fields.reachHint} />
      </label>
      <label>
        <span>{t.fields.need}</span>
        <select name="need" required value={need} onChange={(e) => setNeed(e.target.value)}>
          <option value="" disabled>
            {t.fields.needPlaceholder}
          </option>
          {t.needOptions.map((o) => (
            <option key={o} value={o}>
              {o}
            </option>
          ))}
        </select>
      </label>
      <label>
        <span>{t.fields.message}</span>
        <textarea name="message" rows={3} />
      </label>
      <div className="form-actions">
        <button className="btn" type="submit">
          {t.submit}
        </button>
        <p className="fine">{t.later}</p>
      </div>
    </form>
  );
}
