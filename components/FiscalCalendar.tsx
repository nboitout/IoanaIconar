"use client";

import { useEffect, useState } from "react";
import type { Copy } from "@/lib/content";

export function FiscalCalendar({ c }: { c: Copy }) {
  const [month, setMonth] = useState<string | null>(null);
  useEffect(() => setMonth(c.months[new Date().getMonth()]), [c.months]);

  return (
    <aside className="calendar" aria-label={c.calendar.title}>
      <h3>
        {c.calendar.title}
        {month ? `: ${month}` : ""}
      </h3>
      <p className="calendar-intro">{c.calendar.intro}</p>
      <ul>
        {c.calendar.items.map((i) => (
          <li key={i.code}>
            <span className="code">{i.code}</span>
            <span>{i.text}</span>
            <span className="due">{c.calendar.day}</span>
          </li>
        ))}
      </ul>
      <p className="calendar-foot">{c.calendar.footnote}</p>
    </aside>
  );
}
