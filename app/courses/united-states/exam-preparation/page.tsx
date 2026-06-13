import Image from "next/image";
import Navbar from "../../../components/Navbar";

const pdfHref = "/assets/images/Exam%20Preparation%20%E2%80%94%20United%20States.pdf";

const examButtons = [
  { label: "SAT", id: "sat" },
  { label: "ACT", id: "act" },
  { label: "AP Subjects", id: "ap-subjects" },
];

const examCards = [
  {
    id: "sat",
    title: "SAT Preparation",
    badge: "US College Admission",
    meta: "Grade 10-12 - USA & Worldwide",
    desc: "Comprehensive digital SAT preparation for both test sections. Our tutors are trained in the 2024 adaptive digital format - question styles, Desmos calculator integration and module-by-module strategy.",
    note: "US & Worldwide: The digital SAT (2024 format) is used for US university admissions and accepted by universities in AU, UK, Canada and globally. Covers Evidence-Based Reading & Writing and Math.",
    topics: ["SAT Reading & Writing - digital adaptive format strategies", "SAT Math - calculator and no-calculator sections", "Desmos graphing calculator - using the built-in tool effectively", "Evidence-based reading - passages and data interpretation", "Full digital SAT mock tests with section-by-section score analysis"],
    outcome: "Students achieve their target SAT score through systematic practice, strong command of digital test strategies and consistent improvement across both test sections.",
    download: "Download Course Guide",
  },
  {
    id: "act",
    title: "ACT Preparation",
    badge: "US College Admission",
    meta: "Grade 10-12 - USA",
    desc: "Full ACT preparation across all four required sections plus optional Writing. Includes the ACT's unique Science Reasoning section - which tests data interpretation, not science knowledge.",
    note: "US: The ACT is accepted by all US universities. Tests English, Mathematics, Reading and Science Reasoning - plus optional Writing. The Science Reasoning section is unique to ACT.",
    topics: ["ACT English - grammar, punctuation and rhetorical skills", "ACT Mathematics - pre-algebra through trigonometry", "ACT Reading - passages and paired text questions", "ACT Science Reasoning - data interpretation and experimental analysis", "ACT Writing - argument essay technique"],
    outcome: "Students achieve their target ACT composite score, with strong performance across all four required sections and the optional Writing component.",
    download: "Download Course Guide",
  },
  {
    id: "ap-subjects",
    title: "AP Subject Preparation",
    badge: "US College Admission",
    meta: "Grade 10-12 - USA",
    desc: "Subject-specific AP exam preparation with tutors trained in each AP course's free-response format, multiple-choice strategy and College Board scoring guidelines. All 38 AP subjects available.",
    note: "US: AP exams are offered in 38 subjects, scored 1-5. A score of 3+ typically earns college credit. Expert 1:1 preparation available for any AP subject.",
    topics: ["AP exam format - multiple choice and free-response strategy", "College Board scoring - how points are awarded per question type", "Subject-specific content review - all AP course topics", "Past AP free-response practice with detailed feedback", "Score 4 and 5 targeting - identifying highest-gain focus areas"],
    outcome: "Students achieve AP scores of 4 or 5 in their chosen subjects, earning college credit and demonstrating subject mastery at university-entry standard.",
    download: "Download Course Guide",
  },
];

const differenceCards = [
  {
    icon: "mark",
    title: "Mark Scheme Experts",
    text: "Our tutors know exactly how marks are awarded for every exam. Students learn to write what examiners are looking for - not just what they know.",
  },
  {
    icon: "timed",
    title: "Timed Mock Tests Every Session",
    text: "Exam performance is about timing and pressure as much as content. Every programme includes regular timed mock tests so students arrive at the real exam having already done it many times.",
  },
  {
    icon: "track",
    title: "Measurable Improvement",
    text: "We track score improvement across every mock test. Parents receive a session summary after every lesson showing exactly what improved and what comes next.",
  },
];

const faqs = [
  ["How far in advance should we start?", "For SAT, ACT and AP exams, we recommend starting 6-12 months before the target test date where possible. A shorter 2-3 month plan can still work for focused score improvement when sessions are consistent."],
  ["Do you provide mock exam and practice papers?", "Yes - timed mock exams and past paper practice are part of every exam preparation programme. Tutors use official-style practice, scoring rubrics and section-by-section feedback."],
  ["Can students prepare for multiple exams at once?", "Yes - students often prepare for SAT and ACT together, or AP subjects alongside SAT/ACT. Each exam has a dedicated preparation plan and tutor focus."],
  ["What is your success rate?", "Students who complete a full preparation programme of 20+ sessions have an 80%+ offer rate from their target schools and universities. Results depend on the student's starting point and consistency of practice between sessions."],
];

const footerLinks = [
  { title: "Academic Courses", links: ["English Tutoring", "Maths Tutoring", "Science Tutoring", "General Ability", "Exam Preparation"] },
  { title: "Coding, Robotics & AI", links: ["Coding with Scratch", "Automated Ground Vehicle", "Automate with Arduino", "Python Programming", "Raspberry Pi & IoT", "Data Science & ML"] },
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
  { title: "About", links: ["Why Choose Smavy", "How It Works", "Pricing", "Become a Tutor", "Join Operations & Sales", "Contact Us"] },
];

export default function ExamPreparationUnitedStatesPage() {
  return (
    <main className="min-h-screen bg-white text-[#102877]">
      <Navbar />
      <div className="mx-auto max-w-[1440px] overflow-hidden border-x border-[#d8d8d8]">
        <Hero />
        <ExamNav />
        <ExamPrepSection />
        <DifferenceSection />
        <FaqSection />
        <CtaSection />
        <Footer />
      </div>
    </main>
  );
}

function Hero() {
  return (
    <section className="bg-[#102877] px-6 pb-14 pt-7 text-white md:px-14 lg:px-[96px]">
      <div className="text-[11px] font-bold text-white/55">
        Home <span className="mx-2 text-[#05b4bb]">/</span> Courses <span className="mx-2 text-[#05b4bb]">/</span> Academic Tutoring <span className="mx-2 text-[#05b4bb]">/</span> Exam Preparation - United States
      </div>
      <div className="mt-12 grid items-center gap-10 lg:grid-cols-[1.25fr_0.75fr]">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-[#46c7db]/70 bg-[#0a235f] px-4 py-2 text-[11px] font-bold text-[#48d8e8]">
            <Image src="/assets/images/flags/flag-us.svg" alt="" width={18} height={18} className="h-[18px] w-[18px] rounded-full object-cover" />
            Exam Preparation - United States
          </span>
          <h1 className="mt-6 max-w-[850px] text-[40px] font-black leading-[1.04] tracking-[0] md:text-[64px]">
            Exam Preparation <span className="text-[#05B4BB]">United States</span>
            <br />
            Grade 10-12
          </h1>
          <p className="mt-6 max-w-[760px] text-[15px] font-semibold leading-[1.6] text-white/78 md:text-[17px]">
            Expert 1:1 online exam preparation for United States students. Our tutors know every marking scheme, question type and scoring strategy for every exam we prepare students for.
          </p>
          <div className="mt-6 flex flex-wrap gap-3 text-[12px] font-bold text-white/72">
            {["Digital SAT (2024 format)", "ACT - all 4 sections", "AP Subjects - all 38"].map((item) => (
              <span key={item} className="rounded-full bg-white/10 px-4 py-2">{item}</span>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-5">
            <a className="inline-flex h-[56px] items-center gap-3 rounded-[19px] bg-[#F98925] px-8 text-[15px] font-black text-white" href="#trial">
              Book Free Trial <ArrowRightIcon />
            </a>
            <a className="inline-flex h-[56px] items-center rounded-[19px] border border-[#F98925] px-8 text-[15px] font-black text-[#F98925]" href="#exams">Browse All Exams</a>
          </div>
          <div className="mt-9 flex flex-wrap items-center gap-3 text-[12px] font-bold text-white/86">
            <span>Also available for:</span>
            {[
              ["Australia", "flag-australia.svg"],
              ["United Kingdom", "flag-uk.svg"],
            ].map(([country, flag]) => (
              <span key={country} className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2">
                <Image src={`/assets/images/flags/${flag}`} alt="" width={18} height={18} className="h-[18px] w-[18px] rounded-full object-cover" />
                {country}
              </span>
            ))}
          </div>
        </div>
        <HeroSummaryCard />
      </div>
      <div className="mt-12 overflow-hidden rounded-[22px]">
        <Image src="/assets/images/Image (Replace)-13.png" alt="Student preparing for US exams with online tutoring support" width={1240} height={460} priority className="h-auto w-full object-cover" />
      </div>
    </section>
  );
}

function HeroSummaryCard() {
  return (
    <div className="justify-self-center rounded-[28px] border border-[#6e83bd] bg-[#3c5597] p-7 shadow-[0_24px_70px_rgba(3,12,49,0.24)] md:w-[350px]">
      <h2 className="flex items-center gap-3 text-[17px] font-black">
        <span className="h-3 w-3 rounded-full bg-[#f6ca00]" />
        Exam Prep - United States
      </h2>
      <div className="mt-6 space-y-4">
        {[["Courses available", "3 exams"], ["Session length", "1 hour"], ["Format", "1:1 only"], ["Country", "United States"], ["Free trial", "1 Per Subject"], ["Tutor rating", "4.8"]].map(([label, value]) => (
          <div key={label} className="flex justify-between border-b border-[#6f84bd]/70 pb-4 text-[12px] font-bold last:border-0 last:pb-0">
            <span className="text-white/55">{label}</span>
            <span className={label === "Tutor rating" ? "flex items-center gap-1.5 text-white" : label === "Free trial" ? "text-[#F98925]" : label === "Courses available" ? "text-[#05D8DE]" : label === "Country" ? "flex items-center gap-1.5 text-white" : "text-white"}>
              {label === "Country" && <Image src="/assets/images/flags/flag-us.svg" alt="" width={15} height={15} className="h-[15px] w-[15px] rounded-full object-cover" />}
              {value}
              {label === "Tutor rating" && <StarSmallIcon />}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function ExamNav() {
  return (
    <section className="bg-white px-6 py-9">
      <div className="mx-auto flex max-w-[900px] flex-wrap justify-center gap-3">
        {examButtons.map((exam) => (
          <a key={exam.id} href={`#${exam.id}`} className="rounded-full border border-[#dde5f5] bg-white px-7 py-2 text-[11px] font-black text-[#102877] shadow-[0_7px_16px_rgba(18,35,99,0.04)] transition hover:border-[#F98925] hover:text-[#F98925]">
            {exam.label}
          </a>
        ))}
      </div>
    </section>
  );
}

function ExamPrepSection() {
  return (
    <section id="exams" className="bg-[#f5f7ff] px-6 py-22">
      <div className="mx-auto max-w-[1240px]">
        <LeftSectionHeader eyebrow="US College Admission" title="SAT, ACT and AP Preparation" highlight="United States Exam Courses" />
        <p className="mt-5 max-w-[880px] text-[14px] font-medium leading-[1.6] text-[#6d7393]">
          The three key US college admissions assessments - expert 1:1 preparation for every section and subject.
        </p>
      </div>
      <div className="mx-auto mt-10 grid max-w-[1240px] gap-7 lg:grid-cols-3">
        {examCards.map((card) => (
          <ExamCard key={card.title} card={card} />
        ))}
      </div>
    </section>
  );
}

function ExamCard({ card }: { card: (typeof examCards)[number] }) {
  const isAp = card.id === "ap-subjects";
  const isAct = card.id === "act";

  return (
    <article id={card.id} className="scroll-mt-28 rounded-[18px] border border-transparent bg-white p-6 shadow-[0_12px_30px_rgba(18,35,99,0.06)] transition duration-300 target:-translate-y-1 target:border-[#F98925] target:ring-4 target:ring-[#F98925]/20 target:shadow-[0_18px_45px_rgba(249,137,37,0.18)]">
      <div className="flex items-start justify-between gap-3">
        <div>
          <span className="text-[11px] font-black text-[#ff5f52]">{card.badge}</span>
          <h3 className="mt-2 text-[21px] font-black leading-tight text-[#102877]">{card.title}</h3>
        </div>
        <span className={`rounded-full px-3 py-1 text-[9px] font-black uppercase ${isAp ? "bg-[#fff0eb] text-[#F98925]" : isAct ? "bg-[#fff7df] text-[#e6a400]" : "bg-[#eafff1] text-[#20b455]"}`}>
          {card.id === "ap-subjects" ? "AP" : card.id}
        </span>
      </div>
      <p className="mt-3 text-[12px] font-black text-[#05B4BB]">{card.meta}</p>
      <div className="mt-5 rounded-[8px] bg-[#e9fbff] p-4">
        <p className="text-[12px] font-semibold leading-[1.45] text-[#5f6689]">{card.note}</p>
      </div>
      <p className="mt-5 text-[13px] font-semibold leading-[1.55] text-[#4f5577]">{card.desc}</p>
      <h4 className="mt-5 text-[12px] font-black text-[#102877]">Key Topics Covered:</h4>
      <ul className="mt-3 space-y-2">
        {card.topics.map((topic) => (
          <li key={topic} className="flex gap-2 text-[12px] font-semibold leading-[1.35] text-[#4f5577]">
            <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[#05B4BB]" />
            {topic}
          </li>
        ))}
      </ul>
      <div className="mt-5 rounded-[8px] bg-[#f5f7ff] p-4">
        <h4 className="text-[12px] font-black text-[#102877]">Learning Outcomes:</h4>
        <p className="mt-2 text-[12px] font-semibold leading-[1.45] text-[#6d7393]">{card.outcome}</p>
      </div>
      <div className="mt-5 flex gap-3">
        <a className="inline-flex flex-1 items-center justify-center gap-2 rounded-[10px] border border-[#F98925] px-3 py-3 text-center text-[11px] font-black text-[#F98925]" href={pdfHref}>
          <DownloadIcon />
          {card.download}
        </a>
        <a className="inline-flex flex-1 items-center justify-center rounded-[10px] bg-[#F98925] px-3 py-3 text-center text-[11px] font-black text-white" href="#trial">Book Free Trial</a>
      </div>
    </article>
  );
}

function DifferenceSection() {
  return (
    <section className="bg-[#f5f7ff] px-6 py-24">
      <div className="mx-auto max-w-[1240px]">
        <LeftSectionHeader eyebrow="Why Smavy Exam Prep" title="What Makes Our Exam Preparation Different" />
      </div>
      <div className="mx-auto mt-16 grid max-w-[1240px] gap-9 md:grid-cols-3">
        {differenceCards.map((card) => (
          <article key={card.title} className="min-h-[262px] rounded-[24px] border border-[#dfe6f5] bg-white px-9 py-9">
            <ExamDifferenceIcon type={card.icon} />
            <h3 className="mt-7 text-[25px] font-black leading-tight text-[#102877]">{card.title}</h3>
            <p className="mt-3 text-[17px] font-semibold leading-[1.45] text-[#4d4954]">{card.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function FaqSection() {
  return (
    <section className="bg-[#f5f7ff] px-6 py-22">
      <SectionHeader eyebrow="FAQs" title="Common Questions About Exam Preparation - United States" />
      <div className="mx-auto mt-11 max-w-[820px] space-y-4">
        {faqs.map(([question, answer]) => (
          <details key={question} className="group rounded-[14px] bg-white px-6 py-5 shadow-[0_10px_26px_rgba(18,35,99,0.04)]" open={question === faqs[0][0]}>
            <summary className="flex cursor-pointer list-none items-center justify-between gap-5 text-[14px] font-black text-[#102877]">
              <span>{question}</span>
              <span className="text-[#6d7393] transition group-open:rotate-180">
                <DownSmallIcon />
              </span>
            </summary>
            <p className="mt-3 text-[12.5px] font-medium leading-[1.6] text-[#6d7393]">{answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

function CtaSection() {
  return (
    <section id="trial" className="relative overflow-hidden bg-[#102877] px-6 py-24 text-center text-white">
      <div className="absolute bottom-[-120px] left-[-70px] h-[330px] w-[330px] rounded-full bg-white/6" />
      <div className="relative mx-auto max-w-[900px]">
        <h2 className="text-[38px] font-black leading-[1.12] tracking-[0] md:text-[58px]">
          Start Exam Preparation
          <br />
          <span className="text-[#F98925]">Today. Free Trial Per Subject.</span>
        </h2>
        <p className="mx-auto mt-5 max-w-[610px] text-[14px] font-medium leading-[1.6] text-white/76">
          Book a free 1-hour introductory session. Our tutor will assess your child&apos;s starting point and build a preparation plan for their specific exam.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a className="inline-flex h-[54px] items-center gap-2 rounded-[18px] bg-[#F98925] px-8 text-[15px] font-black text-white" href="#trial">
            Request a Free Trial <ArrowRightIcon />
          </a>
          <a className="inline-flex h-[54px] items-center rounded-[18px] border border-[#F98925] px-8 text-[15px] font-black text-[#F98925]" href="#exams">Browse All Exams</a>
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
                        <Image src={`/assets/images/flags/${link[1]}`} alt="" width={16} height={16} className="h-4 w-4 rounded-full object-cover" />
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
    <div className="mx-auto max-w-[840px] text-center">
      <span className="inline-flex rounded-full bg-[#fff1ef] px-4 py-2 text-[11px] font-black text-[#F98925]">{eyebrow}</span>
      <h2 className="mt-5 text-[32px] font-black leading-[1.16] tracking-[0] text-[#102877] md:text-[48px]">{title}</h2>
    </div>
  );
}

function LeftSectionHeader({ eyebrow, title, highlight }: { eyebrow: string; title: string; highlight?: string }) {
  return (
    <div className="text-left">
      <span className="inline-flex items-center gap-2 rounded-full bg-[#fff1ef] px-4 py-2 text-[11px] font-black text-[#ff5f52]">
        <span className="h-1.5 w-1.5 rounded-full bg-[#ff5f52]" />
        {eyebrow}
      </span>
      <h2 className="mt-5 text-[32px] font-black leading-[1.16] tracking-[0] text-[#102877] md:text-[48px]">
        {title}
        {highlight && (
          <>
            <br />
            <span className="text-[#05B4BB]">{highlight}</span>
          </>
        )}
      </h2>
    </div>
  );
}

function ExamDifferenceIcon({ type }: { type: string }) {
  const color = type === "mark" ? "bg-[#ff7f20]" : type === "timed" ? "bg-[#20b455]" : "bg-[#08b7c2]";

  return (
    <span className={`flex h-[49px] w-[49px] items-center justify-center rounded-[14px] ${color} text-white`}>
      <svg className="h-[25px] w-[25px]" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        {type === "mark" ? (
          <>
            <path d="M5.5 5.5h13v13h-13z" stroke="currentColor" strokeLinejoin="round" strokeWidth="2.2" />
            <path d="m8.3 12 2.4 2.4 5-5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.4" />
          </>
        ) : type === "timed" ? (
          <>
            <circle cx="12" cy="12.5" r="7.2" stroke="currentColor" strokeWidth="2.2" />
            <path d="M9.5 4.2h5M12 8.8v4.2l3 1.8" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" />
          </>
        ) : (
          <>
            <path d="M5 16.5h14M6.7 13.5l3.1-3.1 2.6 2.2 4.8-5.7" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" />
            <path d="M17.2 6.9h-4.1M17.2 6.9v4.1" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" />
          </>
        )}
      </svg>
    </span>
  );
}

function ArrowRightIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="M4 10h12M11 5l5 5-5 5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.6" />
    </svg>
  );
}

function DownloadIcon() {
  return (
    <svg className="h-3.5 w-3.5" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M8 2v7M5 6l3 3 3-3M3 13h10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
    </svg>
  );
}

function StarSmallIcon() {
  return (
    <svg className="h-3.5 w-3.5 text-[#f6ca00]" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
      <path d="m8 1.8 1.8 3.65 4.03.59-2.92 2.84.69 4.02L8 11.01 4.4 12.9l.69-4.02-2.92-2.84 4.03-.59L8 1.8Z" />
    </svg>
  );
}

function DownSmallIcon() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="m4 6 4 4 4-4" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
    </svg>
  );
}
