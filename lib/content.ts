export const LANGS = ["ro", "en"] as const;
export type Lang = (typeof LANGS)[number];

export const isLang = (v: string): v is Lang => (LANGS as readonly string[]).includes(v);

export const CONTACT = {
  email: "office@aiconsulting.ro",
  address: "Str. Salcâmului nr. 37A, spațiu comercial 2, Cluj-Napoca",
  mapUrl:
    "https://www.google.com/maps/search/?api=1&query=Str.+Salc%C3%A2mului+37A+Cluj-Napoca",
  phones: {
    office: "+40 737 042 178",
    accounting: ["+40 730 524 194", "+40 723 318 635"],
    valuation: "+40 732 406 050",
  },
};

export const telHref = (p: string) => `tel:${p.replace(/\s/g, "")}`;

type Service = { id: string; name: string; benefit: string; includes: string[] };
type Person = { name: string; initials: string; role: string; detail: string };

export type Copy = {
  meta: { title: string; description: string };
  nav: { services: string; how: string; team: string; clients: string; contact: string; cta: string; menu: string };
  hero: {
    title: string;
    lead: string;
    cta: string;
    secondary: string;
    note: string;
  };
  report: {
    title: string;
    tag: string;
    client: string;
    rows: { label: string; value: string }[];
    figures: { label: string; value: string }[];
    noteTitle: string;
    note: string;
    disclaimer: string;
  };
  proof: { value: string; label: string }[];
  fit: { title: string; items: { name: string; text: string }[] };
  services: { title: string; lead: string; items: Service[]; ask: string };
  how: { title: string; steps: { title: string; text: string }[] };
  monthly: {
    title: string;
    lead: string;
    parts: { title: string; text: string }[];
    pilot: string;
    cta: string;
  };
  calendar: {
    title: string;
    intro: string;
    items: { code: string; text: string }[];
    footnote: string;
    day: string;
  };
  team: { title: string; lead: string; people: Person[]; photoNote: string };
  clients: { title: string; items: { quote: string; company: string; person: string }[] };
  contact: {
    title: string;
    lead: string;
    fields: {
      name: string;
      reach: string;
      reachHint: string;
      need: string;
      needPlaceholder: string;
      message: string;
    };
    needOptions: string[];
    submit: string;
    later: string;
    addressLabel: string;
    phonesLabel: string;
    phoneRows: { label: string }[];
    map: string;
    mailSubject: string;
    mailLabels: { name: string; reach: string; need: string; message: string };
  };
  footer: { rights: string; privacy: string; prototype: string };
  switchTo: { label: string; short: string; href: string };
  months: string[];
};

const ro: Copy = {
  meta: {
    title: "A&I Consulting | Contabilitate, salarizare și consultanță financiară în Cluj-Napoca",
    description:
      "Firmă de contabilitate autorizată CECCAR din Cluj-Napoca. Contabilitate, salarizare, consultanță financiară, începere de afacere și evaluări, cu cifrele explicate în fiecare lună.",
  },
  nav: {
    services: "Servicii",
    how: "Cum lucrăm",
    team: "Echipa",
    clients: "Clienți",
    contact: "Contact",
    cta: "Cere ofertă",
    menu: "Meniu",
  },
  hero: {
    title: "Contabilizăm business-ul, nu doar hârtiile.",
    lead: "Contabilitate, salarizare și consultanță financiară pentru firme din Cluj-Napoca. Știi cu cine lucrezi, ce primești în fiecare lună și ce înseamnă cifrele pentru afacerea ta.",
    cta: "Cere ofertă",
    secondary: "Vezi cum arată un raport lunar",
    note: "Firmă autorizată CECCAR, în Cluj-Napoca din 2008.",
  },
  report: {
    title: "Raportul lunii",
    tag: "Exemplu",
    client: "Firmă IT, 12 salariați, august",
    rows: [
      { label: "Documente primite", value: "46 din 46" },
      { label: "Salarii calculate", value: "12 din 12" },
      { label: "Declarații depuse", value: "D300 și D112, la termen" },
    ],
    figures: [
      { label: "Încasări", value: "184.300 lei" },
      { label: "Cheltuieli", value: "151.900 lei" },
      { label: "Rezultat", value: "32.400 lei" },
    ],
    noteTitle: "Nota contabilului",
    note: "Încasările au crescut față de iulie, dar TVA-ul de plată a crescut mai mult: două facturi mari au fost emise la sfârșitul lunii. Propunem să rezervați suma din timp.",
    disclaimer: "Cifre de exemplu, pentru ilustrare.",
  },
  proof: [
    { value: "Peste 300", label: "de clienți ai firmei" },
    { value: "Din 2008", label: "în Cluj-Napoca" },
    { value: "CECCAR", label: "experți contabili autorizați" },
    { value: "UNEVAR", label: "evaluator autorizat în echipă" },
  ],
  fit: {
    title: "Lucrăm cel mai bine cu firme care vor un partener, nu doar o declarație depusă",
    items: [
      {
        name: "Firme IT și de servicii",
        text: "Evidență contabilă și salarizare pentru echipe mici, cu clienți care ne recomandă din experiență.",
      },
      {
        name: "Producție și firme cu personal",
        text: "Contabilitate, state de plată și analiză de costuri într-un singur loc, cu o echipă care cunoaște activitatea ta.",
      },
      {
        name: "Afaceri la început de drum",
        text: "Te ajutăm să alegi forma juridică, să înregistrezi firma și să începi corect, din prima lună.",
      },
    ],
  },
  services: {
    title: "Servicii",
    lead: "Cinci servicii, aceeași echipă. Le poți lua împreună sau separat.",
    ask: "Cere ofertă",
    items: [
      {
        id: "contabilitate",
        name: "Contabilitate",
        benefit: "Evidență completă, declarații la termen și rapoarte pe care le înțelegi.",
        includes: ["Evidență contabilă", "Declarații fiscale", "Situații financiare", "Raportare de gestiune"],
      },
      {
        id: "salarizare",
        name: "Salarizare și personal",
        benefit: "Contracte, state de plată și dosare de personal, gestionate de aceeași echipă.",
        includes: ["Contracte de muncă", "State de plată", "Evidența salariaților", "Declarații salariale"],
      },
      {
        id: "financiar",
        name: "Consultanță financiară",
        benefit: "Fluxul de numerar, bugetul și indicatorii care te ajută să iei decizii.",
        includes: ["Analiza fluxului de numerar", "Buget și previziuni", "Analiză de costuri"],
      },
      {
        id: "start",
        name: "Începere afacere",
        benefit: "De la alegerea formei juridice până la primele declarații.",
        includes: ["Alegerea formei juridice", "Înregistrarea firmei", "Prima lună de activitate"],
      },
      {
        id: "evaluari",
        name: "Evaluări",
        benefit: "Evaluări de bunuri imobile și mobile, făcute de evaluator autorizat.",
        includes: ["Bunuri imobile", "Bunuri mobile", "Expertize tehnice judiciare"],
      },
    ],
  },
  how: {
    title: "Cum lucrăm",
    steps: [
      { title: "Ne cunoaștem", text: "Discutăm despre afacerea ta și primești o ofertă cu serviciile și prețul lunar, clar." },
      { title: "Preluăm dosarul", text: "Preluăm evidența de la contabilul anterior și stabilim cine îți este persoana de contact." },
      { title: "Închidem luna", text: "Ne trimiți documentele. Noi înregistrăm, calculăm și depunem declarațiile la termen." },
      { title: "Îți explicăm cifrele", text: "Primești raportul lunii și o explicație scrisă a schimbărilor importante." },
    ],
  },
  monthly: {
    title: "Dincolo de declarații: cifrele lunii, explicate",
    lead: "Pentru clienții care vor mai mult decât conformitate, punem la un loc contabilitatea și consultanța într-un raport lunar.",
    parts: [
      { title: "Tablou de bord lunar", text: "Încasări, cheltuieli și rezultat, pe o singură pagină." },
      { title: "Explicația contabilului", text: "Ce s-a schimbat față de luna trecută și de ce contează." },
      { title: "Discuție despre numerar", text: "Un apel scurt în care stabilim ce facem cu banii lunii următoare." },
    ],
    pilot: "Serviciu în pilot cu câțiva clienți. Întreabă dacă se potrivește firmei tale.",
    cta: "Întreabă despre raportul lunar",
  },
  calendar: {
    title: "Termene fiscale în această lună",
    intro: "Pentru plătitorii lunari:",
    items: [
      { code: "D300", text: "Decont de TVA" },
      { code: "D112", text: "Declarația privind contribuțiile și impozitul pe salarii" },
    ],
    footnote: "Termenele diferă pentru plătitorii trimestriali sau semestriali. Îți spunem noi pe ale tale.",
    day: "până pe 25",
  },
  team: {
    title: "Echipa",
    lead: "Doi parteneri care conduc firma și specialiști pe fiecare domeniu. Ai un nume și un număr de telefon, nu un număr de tichet.",
    photoNote: "Fotografiile echipei se adaugă în versiunea finală.",
    people: [
      {
        name: "Ioana Costea",
        initials: "IC",
        role: "Partener manager",
        detail: "Expert contabil asociat, membru CECCAR din 2008. După șapte ani în instituții financiar-bancare, a construit A&I Consulting din 2010.",
      },
      {
        name: "Ioana Varga",
        initials: "IV",
        role: "Partener manager",
        detail: "Expert contabil asociat, membru CECCAR din 2008, și expert evaluator UNEVAR. În firmă de la înființarea din 2008.",
      },
      {
        name: "Adrian Beșleaga",
        initials: "AB",
        role: "Manager operațiuni",
        detail: "Practician în insolvență din 2012. Absolvent al Facultății de Științe Economice și Gestiunea Afacerilor, UBB Cluj-Napoca.",
      },
      {
        name: "Angelo Varga",
        initials: "AV",
        role: "Expert evaluator",
        detail: "Evaluator de proprietăți imobiliare și bunuri mobile din 2006, expert tehnic judiciar autorizat din 2014.",
      },
      {
        name: "Crina Cheșa",
        initials: "CC",
        role: "Asistent executiv",
        detail: "Coordonează programările și relația zilnică cu clienții. Absolventă a Facultății de Științe Economice, UBB Cluj-Napoca.",
      },
    ],
  },
  clients: {
    title: "Ce spun clienții",
    items: [
      {
        quote: "O firmă cu soluții organizaționale adecvate, implementate cu sprijinul unei echipe dedicate și bine pregătite în domeniu.",
        company: "Dimeco SRL",
        person: "Corina Farczadi, Management producție",
      },
      {
        quote: "O firmă serioasă cu profesioniști în domeniul contabilității și experiență pentru firmele IT, meritoriu de recomandat.",
        company: "Punktgenau SRL",
        person: "Balea Simina, Manager",
      },
    ],
  },
  contact: {
    title: "Spune-ne pe scurt ce ai nevoie",
    lead: "Ne ajung trei rânduri ca să revenim. Detaliile firmei (CUI, sediu, TVA) le cerem după prima discuție.",
    fields: {
      name: "Nume",
      reach: "Telefon sau email",
      reachHint: "Cum să te contactăm",
      need: "Ce te interesează",
      needPlaceholder: "Alege un serviciu",
      message: "Mesaj (opțional)",
    },
    needOptions: [
      "Contabilitate",
      "Salarizare și personal",
      "Consultanță financiară",
      "Începere afacere",
      "Evaluări",
      "Raportul lunar",
      "Nu știu încă",
    ],
    submit: "Trimite prin email",
    later: "Se deschide aplicația ta de email cu mesajul completat.",
    addressLabel: "Adresa",
    phonesLabel: "Telefon",
    phoneRows: [{ label: "Birou" }, { label: "Contabilitate" }, { label: "Evaluări" }],
    map: "Vezi pe hartă",
    mailSubject: "Cerere de ofertă",
    mailLabels: { name: "Nume", reach: "Contact", need: "Interes", message: "Mesaj" },
  },
  footer: {
    rights: "A&I Consulting SRL",
    privacy: "Politica de confidențialitate",
    prototype: "Prototip de design realizat în programul Business Forward. Nu este site-ul oficial.",
  },
  switchTo: { label: "Read in English", short: "EN", href: "/en" },
  months: ["ianuarie", "februarie", "martie", "aprilie", "mai", "iunie", "iulie", "august", "septembrie", "octombrie", "noiembrie", "decembrie"],
};

const en: Copy = {
  meta: {
    title: "A&I Consulting | Accounting, payroll and financial consulting in Cluj-Napoca",
    description:
      "CECCAR-authorised accounting firm in Cluj-Napoca. Accounting, payroll, financial consulting, business start-up and valuations, with your numbers explained every month.",
  },
  nav: {
    services: "Services",
    how: "How we work",
    team: "Team",
    clients: "Clients",
    contact: "Contact",
    cta: "Request a quote",
    menu: "Menu",
  },
  hero: {
    title: "We account for your business, not just the paperwork.",
    lead: "Accounting, payroll and financial consulting for companies in Cluj-Napoca. You know who you work with, what you receive each month and what the numbers mean for your business.",
    cta: "Request a quote",
    secondary: "See what a monthly report looks like",
    note: "CECCAR-authorised firm, in Cluj-Napoca since 2008.",
  },
  report: {
    title: "Monthly report",
    tag: "Example",
    client: "IT company, 12 employees, August",
    rows: [
      { label: "Documents received", value: "46 of 46" },
      { label: "Salaries calculated", value: "12 of 12" },
      { label: "Returns filed", value: "D300 and D112, on time" },
    ],
    figures: [
      { label: "Income", value: "184,300 lei" },
      { label: "Expenses", value: "151,900 lei" },
      { label: "Result", value: "32,400 lei" },
    ],
    noteTitle: "Accountant’s note",
    note: "Income rose against July, but VAT payable rose more: two large invoices were issued at month end. We suggest setting the amount aside in advance.",
    disclaimer: "Sample figures, for illustration.",
  },
  proof: [
    { value: "Over 300", label: "client companies" },
    { value: "Since 2008", label: "in Cluj-Napoca" },
    { value: "CECCAR", label: "authorised chartered accountants" },
    { value: "UNEVAR", label: "authorised valuer on the team" },
  ],
  fit: {
    title: "We work best with companies that want a partner, not just a return filed",
    items: [
      {
        name: "IT and service companies",
        text: "Accounting and payroll for small teams, with clients who recommend us from experience.",
      },
      {
        name: "Manufacturing and companies with staff",
        text: "Accounting, payroll and cost analysis in one place, with a team that knows your operations.",
      },
      {
        name: "Businesses just starting out",
        text: "We help you choose a legal form, register the company and start correctly from month one.",
      },
    ],
  },
  services: {
    title: "Services",
    lead: "Five services, one team. Take them together or separately.",
    ask: "Request a quote",
    items: [
      {
        id: "contabilitate",
        name: "Accounting",
        benefit: "Complete records, returns filed on time and reports you can understand.",
        includes: ["Bookkeeping", "Tax returns", "Financial statements", "Management reporting"],
      },
      {
        id: "salarizare",
        name: "Payroll and HR administration",
        benefit: "Contracts, payroll and personnel files, handled by the same team.",
        includes: ["Employment contracts", "Payroll", "Employee register", "Payroll returns"],
      },
      {
        id: "financiar",
        name: "Financial consulting",
        benefit: "Cash flow, budgets and the indicators that help you decide.",
        includes: ["Cash-flow analysis", "Budget and forecasts", "Cost analysis"],
      },
      {
        id: "start",
        name: "Business start-up",
        benefit: "From choosing the legal form to your first returns.",
        includes: ["Choosing the legal form", "Company registration", "The first month of activity"],
      },
      {
        id: "evaluari",
        name: "Valuations",
        benefit: "Property and movable-asset valuations by an authorised valuer.",
        includes: ["Real estate", "Movable assets", "Court-appointed technical expertise"],
      },
    ],
  },
  how: {
    title: "How we work",
    steps: [
      { title: "We get to know you", text: "We talk about your business and you receive a quote with the services and the monthly price, clearly set out." },
      { title: "We take over the file", text: "We take the records from your previous accountant and agree who your contact person is." },
      { title: "We close the month", text: "You send us the documents. We record, calculate and file returns on time." },
      { title: "We explain the numbers", text: "You receive the month’s report and a written explanation of what changed." },
    ],
  },
  monthly: {
    title: "Beyond compliance: your month’s numbers, explained",
    lead: "For clients who want more than compliance, we bring accounting and advice together in one monthly report.",
    parts: [
      { title: "Monthly dashboard", text: "Income, expenses and result on a single page." },
      { title: "Your accountant’s explanation", text: "What changed since last month and why it matters." },
      { title: "A cash conversation", text: "A short call to agree what to do with next month’s money." },
    ],
    pilot: "In pilot with a few clients. Ask whether it suits your company.",
    cta: "Ask about the monthly report",
  },
  calendar: {
    title: "Tax deadlines this month",
    intro: "For monthly filers:",
    items: [
      { code: "D300", text: "VAT return" },
      { code: "D112", text: "Return on payroll contributions and income tax" },
    ],
    footnote: "Deadlines differ for quarterly or half-yearly filers. We tell you yours.",
    day: "by the 25th",
  },
  team: {
    title: "Team",
    lead: "Two managing partners and a specialist for each area. You get a name and a phone number, not a ticket number.",
    photoNote: "Team photos are added in the final version.",
    people: [
      {
        name: "Ioana Costea",
        initials: "IC",
        role: "Managing partner",
        detail: "Associate chartered accountant, CECCAR member since 2008. After seven years in banking and finance, she built A&I Consulting from 2010.",
      },
      {
        name: "Ioana Varga",
        initials: "IV",
        role: "Managing partner",
        detail: "Associate chartered accountant, CECCAR member since 2008, and UNEVAR valuer. With the firm since its founding in 2008.",
      },
      {
        name: "Adrian Beșleaga",
        initials: "AB",
        role: "Operations manager",
        detail: "Insolvency practitioner since 2012. Graduate of the Faculty of Economics and Business Administration, Babeș-Bolyai University.",
      },
      {
        name: "Angelo Varga",
        initials: "AV",
        role: "Valuation expert",
        detail: "Property and movable-asset valuer since 2006, accredited judicial technical expert since 2014.",
      },
      {
        name: "Crina Cheșa",
        initials: "CC",
        role: "Executive assistant",
        detail: "Coordinates appointments and day-to-day client contact. Graduate of the Faculty of Economics and Business Administration, Babeș-Bolyai University.",
      },
    ],
  },
  clients: {
    title: "What clients say",
    items: [
      {
        quote: "A firm with suitable organisational solutions, implemented with the support of a dedicated and well-trained team.",
        company: "Dimeco SRL",
        person: "Corina Farczadi, Production Management",
      },
      {
        quote: "A serious firm with accounting professionals and experience with IT companies, well worth recommending.",
        company: "Punktgenau SRL",
        person: "Balea Simina, Manager",
      },
    ],
  },
  contact: {
    title: "Tell us briefly what you need",
    lead: "Three lines are enough for us to get back to you. We ask for company details (tax ID, registered office, VAT status) after the first conversation.",
    fields: {
      name: "Name",
      reach: "Phone or email",
      reachHint: "How we should reach you",
      need: "What you need",
      needPlaceholder: "Choose a service",
      message: "Message (optional)",
    },
    needOptions: [
      "Accounting",
      "Payroll and HR administration",
      "Financial consulting",
      "Business start-up",
      "Valuations",
      "The monthly report",
      "Not sure yet",
    ],
    submit: "Send by email",
    later: "Opens your email app with the message filled in.",
    addressLabel: "Address",
    phonesLabel: "Phone",
    phoneRows: [{ label: "Office" }, { label: "Accounting" }, { label: "Valuations" }],
    map: "View on map",
    mailSubject: "Quote request",
    mailLabels: { name: "Name", reach: "Contact", need: "Interest", message: "Message" },
  },
  footer: {
    rights: "A&I Consulting SRL",
    privacy: "Privacy policy",
    prototype: "Design prototype created in the Business Forward programme. Not the official website.",
  },
  switchTo: { label: "Citește în română", short: "RO", href: "/ro" },
  months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
};

export const COPY: Record<Lang, Copy> = { ro, en };
