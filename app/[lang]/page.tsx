import { notFound } from "next/navigation";
import { COPY, isLang } from "@/lib/content";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Proof } from "@/components/Proof";
import { Fit } from "@/components/Fit";
import { Services } from "@/components/Services";
import { How } from "@/components/How";
import { Monthly } from "@/components/Monthly";
import { Team } from "@/components/Team";
import { Clients } from "@/components/Clients";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default async function Page({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLang(lang)) notFound();
  const c = COPY[lang];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AccountingService",
    name: "A&I Consulting SRL",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Str. Salcâmului nr. 37A",
      addressLocality: "Cluj-Napoca",
      addressCountry: "RO",
    },
    email: "office@aiconsulting.ro",
    telephone: "+40737042178",
  };

  return (
    <>
      <a className="skip" href="#main">
        {lang === "ro" ? "Sari la conținut" : "Skip to content"}
      </a>
      <Header lang={lang} c={c} />
      <main id="main">
        <Hero c={c} />
        <Proof c={c} />
        <Fit c={c} />
        <Services c={c} />
        <How c={c} />
        <Monthly c={c} />
        <Team c={c} />
        <Clients c={c} />
        <Contact c={c} />
      </main>
      <Footer c={c} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  );
}
