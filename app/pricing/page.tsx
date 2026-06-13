import Image from "next/image";
import Navbar from "../components/Navbar";

const priceHighlights = [
  "1 free trial per subject",
  "From A$12 per session",
  "Save more with bulk packs",
  "No lock-in contracts",
  "Local currency pricing",
];

const glanceRows = [
  ["Starting from", "A$12 / session"],
  ["Up to", "A$20 / session"],
  ["Currencies", "AUD - GBP - USD"],
  ["Session length", "1 hour"],
  ["Bulk packs", "Save more"],
  ["Free trial", "1 Per Subject"],
  ["Lock-in", "None"],
];

const rateNotes = [
  "Rate depends on year level and subject",
  "Primary years from the lower end",
  "Senior and exam prep at the upper end",
  "Pricing in A$, GBP, US$ or local currency",
];

const discountNotes = [
  "Pack of 40 sessions - bulk discount applied",
  "Pack of 80 sessions - greater saving",
  "Pack of 100 sessions - significant discount",
  "Pack of 120 sessions - maximum savings",
];

const packs = [
  ["Starter Pack", "40", "Discount Applied", "bg-[#05b45b]"],
  ["Value Pack", "80", "More Savings", "bg-[#f98925]"],
  ["Premium Pack", "100", "Significant Savings", "bg-[#f6ca00]"],
  ["Ultimate Pack", "120", "Maximum Savings", "bg-[#1ecb65]"],
];

const factors = [
  {
    icon: "year",
    title: "Year Level",
    text: "Primary school tutoring starts at the lower end of the range. Middle school, senior and exam preparation sessions are priced at the upper end, reflecting the specialist expertise required.",
  },
  {
    icon: "tutor",
    title: "Tutor Experience",
    text: "Rates depend on tutor experience. Graduate tutors start at the lower end of the range. Highly experienced tutors, subject specialists and senior examiners are at the upper end - reflecting years of proven teaching results with students.",
  },
  {
    icon: "course",
    title: "Course & Subject",
    text: "Academic tutoring, exam preparation, coding, robotics and AI courses are all priced appropriately for the specialist skills and resources involved. Coding and robotics courses reflect the hardware expertise required.",
  },
  {
    icon: "country",
    title: "Your Country",
    text: "Pricing is available in Australian Dollars (A$), British Pounds (\u00a3), US Dollars (US$) and other currencies. Rates are set to be locally competitive while reflecting the quality of tuition provided.",
  },
];

const faqs = [
  [
    "How does the free trial work?",
    "Yes - one free 1-hour trial session per subject. If the matched tutor isn't the right fit, we assign a different tutor for another free trial - and we keep going until you're completely satisfied. No payment details required at any point during the trial process.",
  ],
  [
    "Can I get a quote for my child's specific needs?",
    "Yes - contact us with your child's year level, subject and country and we'll provide an exact per-session rate and bulk pack pricing. Use the enquiry form on our home page or contact us directly.",
  ],
  [
    "What currencies do you accept?",
    "We accept Australian Dollars (A$), British Pounds (\u00a3), US Dollars (US$) and other major currencies. Pricing is set in the local currency of your country at locally competitive rates.",
  ],
  [
    "Do bulk packs expire?",
    "Bulk session packs have a generous validity period. Contact us for the current expiry terms for each pack size - we always aim to accommodate families whose schedules change.",
  ],
  [
    "Is there a lock-in contract?",
    "No - there is no lock-in contract. Bulk packs are a prepaid purchase at a discounted rate. You choose when and how often to use your sessions within the validity period.",
  ],
  [
    "What if we need to change tutors?",
    "Tutor changes are always free. If your matched tutor doesn't meet your expectations, we reassign at no cost. Any unused sessions remain in your pack and transfer to your new tutor immediately.",
  ],
];

const quoteBenefits = [
  "Exact per-session rate for your year level and subject",
  "Bulk pack options and savings breakdown",
  "Response within 24 hours",
  "Free demo session booking included",
];

const footerLinks = [
  {
    title: "Academic Courses",
    links: ["English Tutoring", "Maths Tutoring", "Science Tutoring", "General Ability", "Exam Preparation"],
  },
  {
    title: "Coding, Robotics & AI",
    links: ["Coding with Scratch", "Automated Ground Vehicle", "Automate with Arduino", "Python Programming", "Raspberry Pi & IoT", "Data Science & ML"],
  },
  {
    title: "Countries",
    links: [
      ["Australia", "flag-australia.svg"],
      ["United Kingdom", "flag-uk.svg"],
      ["United States", "flag-us.svg"],
      ["IB Curriculum", "flag-ib.svg"],
      ["India", "flag-india.svg"],
      ["Singapore", "flag-singapore.svg"],
      ["UAE", "flag-uae.svg"],
      ["New Zealand", "flag-new-zealand.svg"],
      ["Canada", "flag-canada.svg"],
      ["WorldWide", "flag-worldwide.svg"],
    ],
  },
  {
    title: "About",
    links: ["Why Choose Smavy", "How It Works", "Pricing", "Become a Tutor", "Join Operations & Sales", "Contact Us"],
  },
];

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-white text-[#102877]">
      <Navbar />
      <div className="mx-auto max-w-[1440px] overflow-hidden border-x border-[#d8d8d8]">
        <HeroSection />
        <PricingWorksSection />
        <FactorsSection />
        <FaqSection />
        <QuoteSection />
        <CtaSection />
        <Footer />
      </div>
    </main>
  );
}

function HeroSection() {
  return (
    <section className="bg-[#102877] px-6 pb-24 pt-7 text-white md:px-14 lg:px-[96px]">
      <div className="text-[11px] font-bold text-white/55">
        Home <span className="mx-2 text-[#05b4bb]">/</span> Pricing
      </div>
      <div className="mt-16 grid items-center gap-12 lg:grid-cols-[1.25fr_0.75fr]">
        <div>
          <span className="inline-flex rounded-full border border-[#46c7db]/25 bg-[#0a235f] px-4 py-2 text-[11px] font-bold text-[#48d8e8]">
            Transparent Pricing - No Hidden Fees - Free Trial Per Subject
          </span>
          <h1 className="mt-6 max-w-[760px] text-[42px] font-black leading-[1.04] tracking-[0] md:text-[66px]">
            Affordable <span className="text-[#05B4BB]">1:1 Online</span>
            <br />
            Tutoring Pricing
          </h1>
          <p className="mt-6 max-w-[740px] text-[15px] font-semibold leading-[1.55] text-white/78 md:text-[17px]">
            Expert 1:1 online tutoring from <span className="text-[#05B4BB]">A$12 per session</span> or the equivalent in your local currency. Rates vary by year level, subject and tutor experience. Bulk class packs unlock significant discounts, with no lock-in and no hidden fees.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            {priceHighlights.map((item) => (
              <span key={item} className="rounded-full bg-white/10 px-4 py-2 text-[12px] font-bold text-white/68">
                {item}
              </span>
            ))}
          </div>
          <div className="mt-9 flex flex-wrap gap-5">
            <a className="inline-flex h-[58px] items-center rounded-[20px] bg-[#F98925] px-8 text-[16px] font-bold text-white shadow-[0_16px_35px_rgba(0,0,0,0.18)]" href="#quote">
              Get a Price Quote {"->"}
            </a>
            <a className="inline-flex h-[58px] items-center rounded-[20px] border border-[#F98925] px-8 text-[16px] font-bold text-[#F98925]" href="#packs">
              Browse Courses
            </a>
          </div>
        </div>
        <div className="justify-self-center rounded-[34px] bg-white/14 p-7 shadow-[0_24px_70px_rgba(3,12,49,0.24)] md:w-[390px]">
          <h2 className="flex items-center gap-3 text-[18px] font-bold">
            <span className="h-3 w-3 rounded-full bg-[#f6ca00]" />
            Pricing at a glance
          </h2>
          <div className="mt-6 space-y-4">
            {glanceRows.map(([label, value]) => (
              <div key={label} className="flex items-center justify-between border-b border-white/12 pb-4 text-[13px] font-bold last:border-0 last:pb-0">
                <span className="text-white/50">{label}</span>
                <span className={label === "Starting from" ? "text-[#05B4BB]" : label === "Free trial" ? "text-[#F98925]" : "text-white"}>
                  {value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function PricingWorksSection() {
  return (
    <section id="packs" className="bg-[#f5f7ff] px-6 py-24">
      <SectionHeader eyebrow="How Pricing Works" title="Pricing That Scales With Your Needs" />
      <p className="mx-auto mt-5 max-w-[900px] text-center text-[14px] font-medium leading-[1.6] text-[#6d7393]">
        Pricing varies by year level, subject and country. The more sessions you purchase together, the lower the cost per session. Contact us for an exact quote for your child&apos;s specific needs.
      </p>
      <div className="mx-auto mt-11 grid max-w-[1220px] gap-0 overflow-hidden rounded-[18px] md:grid-cols-2">
        <InfoPanel label="Per Session Rate" title="A$12" subtitle="per 1-hour session - equivalent in your currency" notes={rateNotes} color="green" />
        <InfoPanel label="Bulk Pack Discounts" title="Save more the more you book" subtitle="Bulk packs of 40, 80, 100 and 120 sessions - discount increases with pack size" notes={discountNotes} color="orange" />
      </div>
      <div className="mx-auto mt-8 max-w-[1220px] rounded-[18px] bg-[#102877] p-8">
        <div className="grid gap-7 md:grid-cols-4">
          {packs.map(([label, amount, badge, badgeColor]) => (
            <article key={label} className="rounded-[12px] bg-white/16 px-6 py-7 text-center text-white">
              <p className="text-[9px] font-black uppercase text-white/42">{label}</p>
              <p className="mt-3 text-[48px] font-black leading-none">{amount}</p>
              <p className="mt-1 text-[10px] font-bold text-white/50">sessions</p>
              <span className={`mt-5 inline-flex rounded-full px-4 py-2 text-[10px] font-black text-white ${badgeColor}`}>
                {badge}
              </span>
            </article>
          ))}
        </div>
      </div>
      <p className="mx-auto mt-8 max-w-[900px] text-center text-[14px] font-semibold text-[#6d7393]">
        Exact pricing varies by year level, course and country. <span className="text-[#05B4BB]">Contact us for your personalised quote {"->"}</span>
      </p>
    </section>
  );
}

function InfoPanel({
  label,
  title,
  subtitle,
  notes,
  color,
}: {
  label: string;
  title: string;
  subtitle: string;
  notes: string[];
  color: "green" | "orange";
}) {
  const accent = color === "green" ? "text-[#20b455]" : "text-[#F98925]";
  const dot = color === "green" ? "bg-[#20b455]" : "bg-[#F98925]";

  return (
    <article className={`border-t-4 ${color === "green" ? "border-[#20b455]" : "border-[#F98925]"} bg-white p-9`}>
      <p className={`text-[10px] font-black uppercase ${accent}`}>{label}</p>
      <h3 className="mt-6 text-[34px] font-black leading-tight text-[#102877]">{title}</h3>
      <p className="mt-1 text-[12px] font-semibold text-[#7b82a0]">{subtitle}</p>
      <ul className="mt-7 space-y-4">
        {notes.map((note) => (
          <li key={note} className="flex items-start gap-3 text-[13px] font-semibold text-[#5f6689]">
            <span className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${dot} text-[11px] font-bold text-white`}>✓</span>
            <span>{note}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}

function FactorsSection() {
  return (
    <section className="bg-white px-6 py-24">
      <SectionHeader eyebrow="Pricing Factors" title="What Affects the Session Price?" />
      <div className="mx-auto mt-12 grid max-w-[1304px] gap-[31px] md:grid-cols-2 lg:grid-cols-4">
        {factors.map((item) => (
          <article key={item.title} className="min-h-[316px] rounded-[22px] border border-[#dfe6f5] bg-white px-[30px] py-[31px]">
            <PricingFactorIcon type={item.icon} />
            <h3 className="mt-[18px] text-[21px] font-black leading-tight text-[#102877]">{item.title}</h3>
            <p className="mt-[10px] text-[15px] font-semibold leading-[1.45] text-[#3f3b46]">{item.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function PricingFactorIcon({ type }: { type: string }) {
  const iconClass = "h-[42px] w-[42px]";
  const stroke = "#3f3b46";
  const soft = "#f3f4f7";
  const accent = "#f98925";

  if (type === "year") {
    return (
      <svg className={iconClass} viewBox="0 0 48 48" aria-hidden="true">
        <path d="M13 22h22v15H13z" fill={soft} stroke={stroke} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.3" />
        <path d="M17 22v-5h14v5" fill="none" stroke={stroke} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.3" />
        <path d="M10 25h28v7H10z" fill="#fff" stroke={stroke} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.3" />
        <path d="M20 32h8M24 14c3.2-3.6 7.2-.8 5.2 2.8-1.6 2.9-5.2 3.8-5.2 3.8s-3.6-.9-5.2-3.8C16.8 13.2 20.8 10.4 24 14Z" fill={accent} stroke={stroke} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
        <path d="M24 11V7M22 7h4" stroke={stroke} strokeLinecap="round" strokeWidth="2.1" />
      </svg>
    );
  }

  if (type === "tutor") {
    return (
      <svg className={iconClass} viewBox="0 0 48 48" aria-hidden="true">
        <path d="M17 18h14v9a7 7 0 0 1-14 0z" fill={soft} stroke={stroke} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.3" />
        <path d="M14 20h-3c0 5 3 8 6 8M34 20h3c0 5-3 8-6 8" fill="none" stroke={stroke} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.3" />
        <path d="M24 34v6M17 40h14M19 44h10" stroke={stroke} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.3" />
        <path d="M24 11c3.1-4 7.8-1 5.6 3-1.7 3.1-5.6 4.2-5.6 4.2s-3.9-1.1-5.6-4.2c-2.2-4 2.5-7 5.6-3Z" fill={accent} stroke={stroke} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
        <path d="M12 42v-6c0-3.2 2.7-5.2 6-5.2M36 42v-6c0-3.2-2.7-5.2-6-5.2" fill="none" stroke={stroke} strokeLinecap="round" strokeWidth="2.3" />
      </svg>
    );
  }

  if (type === "course") {
    return (
      <svg className={iconClass} viewBox="0 0 48 48" aria-hidden="true">
        <path d="M10 8h28v35H10z" fill={soft} stroke={stroke} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.3" />
        <path d="M15 14h7v7h-7zM27 14h6M27 20h6M15 27h7M15 33h7M27 27h6v9h-6z" fill="#fff" stroke={stroke} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.9" />
        <path d="M38 12h3v27h-3" fill="none" stroke={stroke} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.3" />
        <path d="M18.5 17.5h7M30 31.5h7" stroke={accent} strokeLinecap="round" strokeWidth="2.1" />
      </svg>
    );
  }

  return (
    <svg className={iconClass} viewBox="0 0 48 48" aria-hidden="true">
      <circle cx="24" cy="21" r="15" fill={soft} stroke={stroke} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.3" />
      <path d="M13 17c4 1 5-4 8-3 2 .7 2 3.5 4 4.2 2.5.9 4.3-2 8.5-1.2M17 29c2.8-2.5 5.6-1.8 7.5.2 1.4 1.4 3.9 1.6 6.5-.2M24 6c-2.8 3.6-4.2 8.5-4.2 15s1.4 11.4 4.2 15M24 6c2.8 3.6 4.2 8.5 4.2 15 0 6.3-1.4 11.4-4.2 15" fill="none" stroke={stroke} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
      <path d="M15 12c2 2.6 5.7 1.4 7.3 4M30 10c-.4 3.5 3 4.2 5.4 5.6M13 24c3 1.5 4.6 4.2 4 7.2" fill="none" stroke={accent} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.1" />
      <path d="M24 36v5M16 42h16" stroke={stroke} strokeLinecap="round" strokeWidth="2.3" />
    </svg>
  );
}

function FaqSection() {
  return (
    <section className="bg-[#f5f7ff] px-6 py-24">
      <SectionHeader eyebrow="FAQs" title="Pricing Questions Answered" />
      <div className="mx-auto mt-11 max-w-[790px] space-y-4">
        {faqs.map(([question, answer]) => (
          <details key={question} className="group rounded-[14px] bg-white px-6 py-5 shadow-[0_10px_26px_rgba(18,35,99,0.04)]" open={question === faqs[0][0]}>
            <summary className="flex cursor-pointer list-none items-center justify-between gap-5 text-[14px] font-black text-[#102877]">
              <span>{question}</span>
              <span className="text-[16px] text-[#6d7393] group-open:rotate-180">⌄</span>
            </summary>
            <p className="mt-3 text-[12.5px] font-medium leading-[1.6] text-[#6d7393]">{answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

function QuoteSection() {
  return (
    <section id="quote" className="bg-white px-6 py-24 md:px-14 lg:px-[96px]">
      <div className="mx-auto grid max-w-[1220px] items-center gap-12 lg:grid-cols-[1fr_0.95fr]">
        <div>
          <span className="text-[11px] font-black text-[#F98925]">Get Your Price Quote</span>
          <h2 className="mt-6 max-w-[560px] text-[38px] font-black leading-[1.14] tracking-[0] text-[#102877] md:text-[52px]">
            Get an Exact Quote for Your Child
          </h2>
          <p className="mt-6 max-w-[580px] text-[15px] font-medium leading-[1.6] text-[#5f6689]">
            Tell us your child&apos;s year level, subject and country and we&apos;ll send you exact per-session pricing and bulk pack options within 24 hours.
          </p>
          <div className="mt-10 rounded-[18px] bg-[#f5f7ff] p-8">
            <h3 className="text-[15px] font-black text-[#102877]">What You&apos;ll Receive</h3>
            <ul className="mt-6 space-y-4">
              {quoteBenefits.map((benefit) => (
                <li key={benefit} className="flex items-center gap-3 text-[13px] font-semibold text-[#5f6689]">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#20b455] text-[11px] font-bold text-white">✓</span>
                  {benefit}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <form className="rounded-[28px] bg-[#102877] p-8 text-white shadow-[0_22px_60px_rgba(16,40,119,0.22)]">
          <h3 className="flex items-center gap-3 text-[20px] font-black">
            <span className="h-3 w-3 rounded-full bg-[#f6ca00]" />
            Quick Price Enquiry
          </h3>
          <p className="mt-2 text-[12px] font-medium text-white/54">
            Fill in the form and we&apos;ll get back to you with exact pricing within 24 hours.
          </p>
          <div className="mt-8 space-y-5">
            <FormField label="What's your name?" placeholder="Your Full name" />
            <FormField label="What's your phone number?" placeholder="xxxx-xxx-xxxx" />
            <FormField label="What's your email address?" placeholder="your@email.com" />
            <FormField label="Year level, subject & country" placeholder="e.g. Year 7 Maths, Australia" />
          </div>
          <button className="mt-7 h-[58px] w-full rounded-[16px] bg-[#F98925] text-[16px] font-black text-white" type="button">
            Get My Price Quote {"->"}
          </button>
          <p className="mt-5 text-center text-[11px] font-medium leading-[1.5] text-white/48">
            No payment details. No commitment. We&apos;ll only use your details to respond to your enquiry.
          </p>
        </form>
      </div>
    </section>
  );
}

function FormField({ label, placeholder }: { label: string; placeholder: string }) {
  return (
    <label className="block">
      <span className="text-[12px] font-bold text-white/84">{label}</span>
      <input className="mt-2 h-[48px] w-full rounded-[9px] bg-white/16 px-5 text-[13px] font-semibold text-white outline-none placeholder:text-white/42" placeholder={placeholder} />
    </label>
  );
}

function CtaSection() {
  return (
    <section className="relative overflow-hidden bg-[#102877] px-6 py-24 text-center text-white">
      <div className="absolute bottom-[-120px] left-[-70px] h-[330px] w-[330px] rounded-full bg-white/6" />
      <div className="absolute right-[20%] top-[-160px] h-[390px] w-[390px] rounded-full bg-white/5" />
      <div className="relative mx-auto max-w-[900px]">
        <h2 className="text-[38px] font-black leading-[1.12] tracking-[0] md:text-[58px]">
          First Session is Always
          <br />
          <span className="text-[#F98925]">Free. No Payment Needed.</span>
        </h2>
        <p className="mx-auto mt-5 max-w-[560px] text-[14px] font-medium leading-[1.6] text-white/76">
          Book your free 1-hour demo session. No credit card. No commitment. Just great tutoring.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a className="inline-flex h-[54px] items-center rounded-[18px] bg-[#F98925] px-8 text-[15px] font-black text-white" href="#quote">
            Book Free Demo Session {"->"}
          </a>
          <a className="inline-flex h-[54px] items-center rounded-[18px] border border-[#F98925] px-8 text-[15px] font-black text-[#F98925]" href="#quote">
            Contact Us For Pricing
          </a>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 grid h-[5px] w-full grid-cols-4">
        <span className="bg-[#F98925]" />
        <span className="bg-[#20b455]" />
        <span className="bg-[#00b8d8]" />
        <span className="bg-[#f6ca00]" />
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-[#102877] px-6 pb-10 pt-14 text-white">
      <div className="mx-auto grid max-w-[1220px] gap-10 lg:grid-cols-[1.35fr_repeat(4,1fr)]">
        <div>
          <Image src="/assets/images/smavy-logo.png" alt="Smavy Academy" width={166} height={42} className="h-auto w-[166px]" />
          <p className="mt-7 max-w-[300px] text-[13px] font-semibold leading-[1.55] text-white/76">
            A Smart Choice for a Savvy You. Expert 1:1 online tutoring in Australia, UK, USA, IB schools and worldwide.
          </p>
          <div className="mt-8 flex gap-3">
            {["in", "x", "f", "yt"].map((item) => (
              <span key={item} className="flex h-10 w-10 items-center justify-center rounded-[8px] border border-white/18 bg-white/12 text-[14px] font-bold">
                {item}
              </span>
            ))}
          </div>
          <div className="mt-9">
            <h3 className="text-[12px] font-black uppercase tracking-[0.08em] text-white/86">Get In Touch</h3>
            <ul className="mt-5 space-y-3 text-[12px] font-semibold text-white/68">
              <li>hello@smavy.com</li>
              <li>WhatsApp - wa.link/hybwn0</li>
              <li>+61 480 045 848</li>
              <li>+91 76958 53385</li>
              <li>UK: +44 20 3349 5911</li>
              <li>US: +1 214 308 0807</li>
            </ul>
          </div>
        </div>
        {footerLinks.map((group) => (
          <div key={group.title}>
            <h3 className="text-[12px] font-black uppercase tracking-[0.08em] text-white">{group.title}</h3>
            <ul className="mt-5 space-y-3">
              {group.links.map((link) => (
                <li key={Array.isArray(link) ? link[0] : link}>
                  <a href="#" className="flex items-center gap-2 text-[12px] font-medium text-white/64 transition hover:text-white">
                    {Array.isArray(link) ? (
                      <>
                        <Image
                          src={`/assets/images/flags/${link[1]}`}
                          alt=""
                          width={16}
                          height={16}
                          className="h-4 w-4 rounded-full object-contain"
                        />
                        <span>{link[0]}</span>
                      </>
                    ) : (
                      link
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="mx-auto mt-12 flex max-w-[1220px] flex-wrap justify-between gap-4 border-t border-white/10 pt-7 text-[11px] font-medium text-white/50">
        <span>2026 Smavy Private Limited</span>
        <span>Terms of Use - Refund Policy - Privacy Policy</span>
      </div>
    </footer>
  );
}

function SectionHeader({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="mx-auto max-w-[820px] text-center">
      <span className="inline-flex rounded-full bg-[#fff1ef] px-4 py-2 text-[11px] font-black text-[#F98925]">
        {eyebrow}
      </span>
      <h2 className="mt-5 text-[32px] font-black leading-[1.16] tracking-[0] text-[#102877] md:text-[48px]">
        {title}
      </h2>
    </div>
  );
}
