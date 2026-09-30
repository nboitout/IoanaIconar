import type { Copy, Lang } from "@/lib/content";

export function Header({ lang, c }: { lang: Lang; c: Copy }) {
  const links = [
    ["#servicii", c.nav.services],
    ["#cum-lucram", c.nav.how],
    ["#echipa", c.nav.team],
    ["#clienti", c.nav.clients],
    ["#contact", c.nav.contact],
  ] as const;

  return (
    <header className="header">
      <div className="wrap header-inner">
        <a className="brand" href={`/${lang}`} aria-label="A&I Consulting">
          <span className="brand-mark" aria-hidden="true">
            A&amp;I
          </span>
          <span className="brand-sub">consulting</span>
        </a>

        <nav className="nav" aria-label="Principal">
          {links.map(([href, label]) => (
            <a key={href} href={href}>
              {label}
            </a>
          ))}
        </nav>

        <div className="header-actions">
          <a className="lang" href={c.switchTo.href} hrefLang={c.switchTo.short.toLowerCase()} aria-label={c.switchTo.label}>
            {c.switchTo.short}
          </a>
          <a className="btn btn-small" href="#contact">
            {c.nav.cta}
          </a>
          <details className="menu">
            <summary aria-label={c.nav.menu}>
              <span />
              <span />
            </summary>
            <div className="menu-panel">
              {links.map(([href, label]) => (
                <a key={href} href={href}>
                  {label}
                </a>
              ))}
            </div>
          </details>
        </div>
      </div>
    </header>
  );
}
