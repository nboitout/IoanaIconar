import type { Copy } from "@/lib/content";
import { CONTACT, telHref } from "@/lib/content";
import { ContactForm } from "./ContactForm";

export function Contact({ c }: { c: Copy }) {
  const t = c.contact;
  const phones: [string, string[]][] = [
    [t.phoneRows[0].label, [CONTACT.phones.office]],
    [t.phoneRows[1].label, CONTACT.phones.accounting],
    [t.phoneRows[2].label, [CONTACT.phones.valuation]],
  ];

  return (
    <section className="section contact" id="contact">
      <div className="wrap contact-grid">
        <div>
          <h2 className="h2">{t.title}</h2>
          <p className="lead">{t.lead}</p>
          <ContactForm c={c} email={CONTACT.email} />
        </div>
        <div className="details">
          <h3>{t.addressLabel}</h3>
          <p>
            {CONTACT.address}
            <br />
            <a className="link" href={CONTACT.mapUrl} target="_blank" rel="noopener noreferrer">
              {t.map}
            </a>
          </p>
          <h3>{t.phonesLabel}</h3>
          <dl className="phones">
            {phones.map(([label, nums]) => (
              <div key={label}>
                <dt>{label}</dt>
                <dd>
                  {nums.map((n) => (
                    <a key={n} href={telHref(n)}>
                      {n}
                    </a>
                  ))}
                </dd>
              </div>
            ))}
          </dl>
          <h3>Email</h3>
          <p>
            <a className="link" href={`mailto:${CONTACT.email}`}>
              {CONTACT.email}
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
