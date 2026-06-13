import Image from "next/image";
import Navbar from "../../../components/Navbar";

const pdfHref = "/assets/images/General%20Ability%20%E2%80%94%20United%20States.pdf";

const bandButtons = [
  { label: "Elementary (Grade 3-5)", id: "elementary" },
  { label: "Middle School (Grade 6-8)", id: "middle-school" },
  { label: "High School (Grade 6-8)", id: "high-school" },
];

const courseCards = [
  {
    id: "elementary",
    title: "Developing the core reasoning skills required for gifted testing",
    stage: "Foundation",
    meta: "US: Builds foundational reasoning skills for gifted programme testing and ISEE Lower Level preparation from Grade 5.",
    desc: "Developing the core reasoning skills required for gifted and talented programme entry and competitive private school testing.",
    topics: ["Verbal reasoning - analogies, synonyms, antonyms", "Quantitative reasoning - number patterns and relationships", "Non-verbal reasoning - figural analogies and patterns", "Reading comprehension - inference and main idea", "Timed practice - building accuracy and speed"],
    outcome: "Students apply verbal and quantitative reasoning strategies, complete figural sequences and approach gifted programme assessments with confidence.",
  },
  {
    id: "isee-lower",
    title: "Targeted preparation for ISEE Lower Level and gifted programme testing",
    stage: "Developing",
    meta: "US: ISEE Lower Level (Grades 5-6 entry), SSAT Elementary Level, gifted and talented programme testing, state G&T assessments.",
    desc: "Targeted preparation for ISEE Lower Level and gifted programme testing. All four ISEE sections practised at exam difficulty with timed mock tests.",
    topics: ["ISEE verbal reasoning - synonyms and sentence completion", "ISEE quantitative reasoning - word problems and relationships", "ISEE reading comprehension - main idea and inference", "ISEE mathematics achievement - Grade 4-5 content", "Full ISEE Lower Level mock exam practice"],
    outcome: "Students complete ISEE Lower Level practice tests with accuracy, applying systematic strategies across all four test sections.",
  },
  {
    id: "middle-school",
    title: "Intensive preparation for ISEE Middle Level and competitive entry",
    stage: "Intermediate",
    meta: "US: ISEE Middle Level (Grades 7-8 entry), SSAT Middle Level, competitive private and charter school applications.",
    desc: "Intensive preparation for ISEE Middle Level and competitive middle school entry. All test sections practised with increasing difficulty and timed conditions.",
    topics: ["ISEE verbal reasoning - advanced analogies and vocabulary", "ISEE quantitative reasoning - complex word problems", "ISEE reading comprehension - analysing complex passages", "ISEE mathematics achievement - Grade 6-7 content", "Mock exam practice - ISEE and SSAT Middle Level formats"],
    outcome: "Students perform at a competitive level on ISEE and SSAT Middle Level practice tests, with strong vocabulary and quantitative reasoning.",
  },
  {
    id: "amc-mathcounts",
    title: "Developing higher-order mathematical reasoning for competitions",
    stage: "Intermediate",
    meta: "US: AMC 8, MATHCOUNTS competition, gifted programme assessments and pre-high school competitive testing.",
    desc: "Developing higher-order mathematical reasoning for AMC 8 and MATHCOUNTS, alongside general reasoning skills for competitive school applications.",
    topics: ["AMC 8 - creative problem-solving strategies", "MATHCOUNTS preparation - mental maths and speed", "Logical reasoning - deductive and inductive thinking", "Spatial reasoning - advanced geometric visualisation", "Critical thinking - argument analysis foundations"],
    outcome: "Students perform strongly in AMC 8 and MATHCOUNTS competitions, applying creative problem-solving strategies with confidence.",
  },
  {
    id: "high-school",
    title: "Advanced reasoning preparation for ISEE Upper Level and PSAT",
    stage: "Advanced",
    meta: "US: ISEE Upper Level (Grades 9-12 entry), PSAT preparation, AMC 10, selective high school and magnet programme entry.",
    desc: "Advanced reasoning preparation for ISEE Upper Level, PSAT and competitive high school programme entry.",
    topics: ["ISEE Upper Level - all four sections at full difficulty", "PSAT - evidence-based reading, writing and maths", "AMC 10 - advanced mathematical reasoning and problem-solving", "Critical reading - complex argument and evidence analysis", "SSAT Upper Level - vocabulary and quantitative sections"],
    outcome: "Students perform at a competitive level on ISEE Upper Level, PSAT and AMC 10, with strong reasoning skills across all domains.",
  },
];

const differenceCards = [
  {
    icon: "skill",
    title: "Skill-Based, Not Rote",
    text: "Most students try to improve by memorising answers. We teach the underlying reasoning strategies - so students can tackle any novel question type they haven't seen before.",
  },
  {
    icon: "timed",
    title: "Timed Practice Built In",
    text: "Speed and accuracy are equally important. Every session includes timed practice with debrief - students learn to pace themselves and make better decisions under pressure.",
  },
  {
    icon: "exam",
    title: "Exam-Specific Preparation",
    text: "Our tutors are trained in the specific format, difficulty and marking of each US exam - ISEE, SSAT, AMC, MATHCOUNTS, PSAT and gifted programme testing - not generic reasoning content.",
  },
];

const faqs = [
  ["Can General Ability be improved with tutoring?", "Yes - significantly. While there is an innate component, familiarity with question types, understanding of reasoning strategies and consistent timed practice produce substantial improvements. Most students improve 15-25 percentile points over a 3-month programme."],
  ["When should we start preparation?", "For most competitive exams in United States, starting 6-12 months before the exam produces the best results. Gradual skill-building consistently outperforms intensive last-minute cramming. See each year band card for specific timing recommendations."],
  ["Is the content the same across AU, UK and US?", "The core reasoning skills are the same worldwide. The specific exam formats, question types and difficulty calibration differ by country and exam. Our tutors are trained in the exact formats used in each country's competitive assessments."],
  ["How does 1:1 tutoring work for General Ability?", "Each session focuses on a specific reasoning skill, followed by guided practice on exam-style questions and a timed practice set. After each session the tutor identifies the student's weak areas and plans the next session accordingly. All sessions are recorded for review."],
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

export default function UnitedStatesGeneralAbilityPage() {
  return (
    <main className="min-h-screen bg-white text-[#102877]">
      <Navbar />
      <div className="mx-auto max-w-[1440px] overflow-hidden border-x border-[#d8d8d8]">
        <Hero />
        <BandNav />
        <CourseStructure />
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
        Home <span className="mx-2 text-[#05b4bb]">/</span> Courses <span className="mx-2 text-[#05b4bb]">/</span> Academic Tutoring <span className="mx-2 text-[#05b4bb]">/</span> General Ability - United States
      </div>
      <div className="mt-12 grid items-center gap-10 lg:grid-cols-[1.25fr_0.75fr]">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-[#46c7db]/70 bg-[#0a235f] px-4 py-2 text-[11px] font-bold text-[#48d8e8]">
            <Image src="/assets/images/flags/flag-us.svg" alt="" width={18} height={18} className="h-[18px] w-[18px] rounded-full object-cover" />
            Academic Tutoring - United States
          </span>
          <h1 className="mt-6 max-w-[900px] text-[40px] font-black leading-[1.04] tracking-[0] md:text-[64px]">
            Online <span className="text-[#05B4BB]">General Ability</span>
            <br />
            Tutoring - Grade 3-8
          </h1>
          <p className="mt-6 max-w-[790px] text-[15px] font-semibold leading-[1.6] text-white/78 md:text-[17px]">
            Build the verbal reasoning, numerical reasoning, abstract thinking and spatial skills that drive performance in competitive exams. Expert 1:1 tutors trained specifically in United States&apos;s most competitive assessments.
          </p>
          <div className="mt-6 flex flex-wrap gap-3 text-[12px] font-bold text-white/72">
            {["Verbal Reasoning", "Numerical Reasoning", "Abstract & Non-Verbal Reasoning", "Spatial Reasoning"].map((item) => (
              <span key={item} className="rounded-full bg-white/10 px-4 py-2">{item}</span>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-5">
            <a className="inline-flex h-[56px] items-center gap-3 rounded-[19px] bg-[#F98925] px-8 text-[15px] font-black text-white" href="#trial">
              Book Free Trial <ArrowRightIcon />
            </a>
            <a className="inline-flex h-[56px] items-center gap-3 rounded-[19px] border border-[#F98925] px-8 text-[15px] font-black text-[#F98925]" href="#years">
              View Year Levels <DownIcon />
            </a>
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
        <Image src="/assets/images/Image (Replace)-22.png" alt="Student preparing for US general ability reasoning tests" width={1240} height={460} priority className="h-auto w-full object-cover" />
      </div>
    </section>
  );
}

function HeroSummaryCard() {
  return (
    <div className="justify-self-center rounded-[28px] border border-[#6e83bd] bg-[#3c5597] p-7 shadow-[0_24px_70px_rgba(3,12,49,0.24)] md:w-[350px]">
      <h2 className="flex items-center gap-3 text-[17px] font-black">
        <span className="h-3 w-3 rounded-full bg-[#f6ca00]" />
        General Ability - United States
      </h2>
      <div className="mt-6 space-y-4">
        {[["Year levels", "Grade 3-8"], ["Session length", "1 hour"], ["Format", "1:1 only"], ["Country", "Worldwide"], ["Free trial", "1 Per Subject"], ["Tutor rating", "4.8"]].map(([label, value]) => (
          <div key={label} className="flex justify-between border-b border-[#6f84bd]/70 pb-4 text-[12px] font-bold last:border-0 last:pb-0">
            <span className="text-white/55">{label}</span>
            <span className={label === "Tutor rating" ? "flex items-center gap-1.5 text-white" : label === "Free trial" ? "text-[#F98925]" : label === "Year levels" ? "text-[#05D8DE]" : label === "Country" ? "flex items-center gap-1.5 text-white" : "text-white"}>
              {label === "Country" && <GlobeSmallIcon />}
              {value}
              {label === "Tutor rating" && <StarSmallIcon />}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function BandNav() {
  return (
    <section className="bg-white px-6 py-9">
      <div className="mx-auto flex max-w-[1240px] flex-wrap justify-center gap-3">
        {bandButtons.map((band) => (
          <a key={band.id} href={`#${band.id}`} className="rounded-full border border-[#dde5f5] bg-white px-5 py-2 text-[11px] font-black text-[#102877] shadow-[0_7px_16px_rgba(18,35,99,0.04)] transition hover:border-[#F98925] hover:text-[#F98925]">
            {band.label}
          </a>
        ))}
      </div>
    </section>
  );
}

function CourseStructure() {
  return (
    <section id="years" className="bg-[#f5f7ff] px-6 py-22">
      <div className="mx-auto max-w-[1240px]">
        <LeftSectionHeader eyebrow="Course Structure" title="General Ability by Year Level" highlight="United States" />
        <p className="mt-5 max-w-[930px] text-[14px] font-medium leading-[1.6] text-[#6d7393]">
          Each band focuses on the specific exams and reasoning demands relevant to that year group in United States. The core skills - verbal, numerical, abstract and spatial reasoning - are developed progressively across all levels.
        </p>
      </div>
      <div className="mx-auto mt-10 grid max-w-[1240px] gap-7 md:grid-cols-2">
        {courseCards.map((card) => (
          <CourseCard key={card.title} card={card} />
        ))}
      </div>
    </section>
  );
}

function CourseCard({ card }: { card: (typeof courseCards)[number] }) {
  const isFoundation = card.stage === "Foundation";

  return (
    <article id={card.id} className="scroll-mt-28 rounded-[14px] border border-transparent bg-white p-6 shadow-[0_12px_30px_rgba(18,35,99,0.06)] transition duration-300 target:-translate-y-1 target:border-[#F98925] target:ring-4 target:ring-[#F98925]/20 target:shadow-[0_18px_45px_rgba(249,137,37,0.18)]">
      <div className="flex items-start justify-between gap-3">
        <h3 className="max-w-[390px] text-[18px] font-black leading-tight text-[#102877]">{card.title}</h3>
        <span className={`shrink-0 rounded-full px-3 py-1 text-[9px] font-black uppercase ${isFoundation ? "bg-[#eafff1] text-[#20b455]" : card.stage === "Developing" ? "bg-[#e9fbff] text-[#05B4BB]" : card.stage === "Advanced" ? "bg-[#fff0eb] text-[#F98925]" : "bg-[#fff0eb] text-[#F98925]"}`}>{card.stage}</span>
      </div>
      <div className="mt-5 rounded-[8px] bg-[#e9fbff] p-4">
        <p className="text-[12px] font-black text-[#05B4BB]">{card.meta}</p>
      </div>
      <p className="mt-5 text-[12px] font-semibold leading-[1.45] text-[#5f6689]">{card.desc}</p>
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
          Download Curriculum
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
        <LeftSectionHeader eyebrow="Why Smavy General Ability" title="What Makes Our General Ability Tutoring Different" />
      </div>
      <div className="mx-auto mt-16 grid max-w-[1240px] gap-9 md:grid-cols-3">
        {differenceCards.map((card) => (
          <article key={card.title} className="min-h-[220px] rounded-[14px] border border-[#dfe6f5] bg-white px-9 py-9">
            <GeneralAbilityIcon type={card.icon} />
            <h3 className="mt-7 text-[20px] font-black leading-tight text-[#102877]">{card.title}</h3>
            <p className="mt-3 text-[13px] font-semibold leading-[1.45] text-[#4d4954]">{card.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function FaqSection() {
  return (
    <section className="bg-[#f5f7ff] px-6 py-22">
      <SectionHeader eyebrow="FAQs" title="General Ability Tutoring Questions - United States" />
      <div className="mx-auto mt-11 max-w-[1130px] space-y-4">
        {faqs.map(([question, answer]) => (
          <article key={question} className="rounded-[28px] border border-[#e0e8fb] bg-white px-8 py-8 shadow-[0_10px_26px_rgba(18,35,99,0.03)]">
            <div className="flex items-start justify-between gap-5 text-[17px] font-black text-[#102877]">
              <span>{question}</span>
              <svg className="mt-1 h-4 w-4 shrink-0 text-[#3b3940]" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
                <path d="M8 4.5 13 10H3z" />
              </svg>
            </div>
            <p className="mt-4 max-w-[980px] text-[17px] font-medium leading-[1.55] text-[#4d4954]">{answer}</p>
          </article>
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
          Start General Ability Tutoring
          <br />
          <span className="text-[#F98925]">Today. Free Trial Per Subject.</span>
        </h2>
        <p className="mx-auto mt-5 max-w-[610px] text-[14px] font-medium leading-[1.6] text-white/76">
          Book a free 1-hour trial session with a matched General Ability tutor for United States. No payment details required.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a className="inline-flex h-[54px] items-center gap-2 rounded-[18px] bg-[#F98925] px-8 text-[15px] font-black text-white" href="#trial">
            Request a Free Trial <ArrowRightIcon />
          </a>
          <a className="inline-flex h-[54px] items-center rounded-[18px] border border-[#F98925] px-8 text-[15px] font-black text-[#F98925]" href="#years">View Course Structure</a>
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
                        <Image src={`/assets/images/flags/${link[1]}`} alt="" width={18} height={18} className="h-[18px] w-[18px] rounded-full object-cover" />
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

function GeneralAbilityIcon({ type }: { type: string }) {
  const color = type === "skill" ? "bg-[#ff7f20]" : type === "timed" ? "bg-[#20b455]" : "bg-[#08b7c2]";

  return (
    <span className={`flex h-[49px] w-[49px] items-center justify-center rounded-[14px] ${color} text-white`}>
      <svg className="h-[25px] w-[25px]" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        {type === "skill" ? (
          <>
            <circle cx="10.5" cy="10.5" r="6.1" stroke="currentColor" strokeWidth="2.4" />
            <path d="M15.2 15.2 20 20" stroke="currentColor" strokeLinecap="round" strokeWidth="2.4" />
          </>
        ) : type === "timed" ? (
          <>
            <circle cx="12" cy="12" r="7.4" fill="white" />
            <path d="M12 7.6v4.5l2.9 1.8" stroke="#20b455" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" />
          </>
        ) : (
          <>
            <circle cx="12" cy="12" r="7.4" stroke="currentColor" strokeWidth="2.4" />
            <circle cx="12" cy="12" r="3.4" stroke="currentColor" strokeWidth="2.4" />
            <circle cx="12" cy="12" r="1.2" fill="currentColor" />
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

function DownIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="M10 4v12M5 11l5 5 5-5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.6" />
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

function GlobeSmallIcon() {
  return (
    <svg className="h-3.5 w-3.5 text-[#05D8DE]" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <circle cx="8" cy="8" r="6" fill="currentColor" />
      <path d="M2.8 6.5h3.1l1.1 1.7-.8 1.4 2.1 1.5.5 2.3M9.8 2.8l-.7 1.8 1.9 1.1h2.2M10 8.4l1.5.4.8 1.5" stroke="#102877" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.1" />
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
