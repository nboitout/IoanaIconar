import type { Copy } from "@/lib/content";

export function Footer({ c }: { c: Copy }) {
  return (
    <footer className="footer">
      <div className="wrap footer-inner">
        <p>© 2026 {c.footer.rights}</p>
        <a href="#" className="link">
          {c.footer.privacy}
        </a>
        <p className="proto">{c.footer.prototype}</p>
      </div>
    </footer>
  );
}
