import Image from "next/image";
import Navbar from "../../../components/Navbar";

const pdfHref = "/assets/images/Maths%20%E2%80%94%20IB%20Curriculum.pdf";

const yearButtons = [
  { label: "PYP 3-5", id: "pyp-ages-3-5" },
  { label: "PYP Y1-2", id: "pyp-years-1-2" },
  { label: "PYP Y3-4", id: "pyp-years-3-4" },
  { label: "PYP Y5-6", id: "pyp-years-5-6" },
  { label: "MYP Y1-3", id: "myp-years-1-3" },
  { label: "MYP Y4-5", id: "myp-years-4-5" },
  { label: "DP Y12", id: "dp-year-12" },
  { label: "DP Y13", id: "dp-year-13" },
];

const courseCards = [
  {
    id: "pyp-ages-3-5",
    title: "IB PYP Ages 3-5 Maths",
    stage: "PYP",
    meta: "IB PYP Early Years (Ages 3-5):",
    desc: "Mathematics integrated with transdisciplinary themes. Developing early number sense through play-based inquiry in the IB PYP framework.",
    topics: ["Counting, number recognition and quantity", "Sorting, matching and patterning", "Shape, space and position", "Measurement through comparison", "Mathematical language and reasoning"],
    outcome: "Learners use mathematics to explore and make sense of the world, recognising patterns and using number in meaningful contexts.",
    download: "Download PYP 3-5",
  },
  {
    id: "pyp-years-1-2",
    title: "IB PYP Years 1-2 Maths",
    stage: "PYP",
    meta: "IB PYP Years 1-2 (Ages 6-7):",
    desc: "Five mathematics strands: data handling, measurement, shape and space, pattern and function, number.",
    topics: ["Addition and subtraction to 20 / 100", "Place value and number patterns", "Measurement of length, mass and time", "2D and 3D shapes and spatial awareness", "Data - sorting, graphing and interpretation"],
    outcome: "Learners apply mathematical concepts confidently to solve simple problems and communicate their thinking with mathematical language.",
    download: "Download PYP Y1-2",
  },
  {
    id: "pyp-years-3-4",
    title: "IB PYP Years 3-4 Maths",
    stage: "PYP",
    meta: "IB PYP Years 3-4 (Ages 8-9):",
    desc: "Strong emphasis on conceptual understanding before procedural fluency, with inquiry-based problem solving.",
    topics: ["Multiplication and division strategies", "Fractions, decimals and simple percentages", "Measurement - area, perimeter, volume", "Angles, transformations and coordinate grids", "Data analysis and probability language"],
    outcome: "Learners solve multi-step problems, communicate mathematical reasoning clearly and apply mathematics across PYP inquiry themes.",
    download: "Download PYP Y3-4",
  },
  {
    id: "pyp-years-5-6",
    title: "IB PYP Years 5-6 Maths",
    stage: "PYP",
    meta: "IB PYP Years 5-6 (Ages 10-11):",
    desc: "Consolidating primary mathematics for the PYP Exhibition and transition to MYP.",
    topics: ["Operations with fractions, decimals and percentages", "Algebraic thinking and simple equations", "Geometry - area, volume, angles, constructions", "Ratio, rate and proportional reasoning", "Statistics and probability investigations"],
    outcome: "Learners apply mathematics confidently to real problems, use algebraic and geometric reasoning, and bridge effectively into MYP Mathematics.",
    download: "Download PYP Y5-6",
  },
  {
    id: "myp-years-1-3",
    title: "IB MYP Years 1-3 Maths",
    stage: "MYP",
    meta: "IB MYP Years 1-3 (Ages 11-14):",
    desc: "Developing algebraic, geometric and statistical thinking within the MYP framework with real-world global contexts.",
    topics: ["Number and algebra - equations, sequences, functions", "Geometry and trigonometry - properties, theorems", "Statistics and probability - data analysis", "MYP key concepts - form, logic, relationships", "Global contexts applied to mathematical problems"],
    outcome: "Students analyse patterns, apply algebraic techniques, and use mathematics as a tool for inquiry and problem-solving.",
    download: "Download MYP Y1-3",
  },
  {
    id: "myp-years-4-5",
    title: "IB MYP Years 4-5 Maths",
    stage: "MYP",
    meta: "IB MYP Years 4-5 (Ages 14-16):",
    desc: "Preparing for MYP eAssessment and DP mathematics with advanced algebraic and analytical skills.",
    topics: ["Quadratics, polynomials and rational functions", "Trigonometry and vectors", "Probability distributions and data analysis", "MYP Personal Project mathematical investigations", "eAssessment preparation"],
    outcome: "Students demonstrate mastery of MYP mathematics, complete a major investigation and prepare for the rigour of DP Mathematics.",
    download: "Download MYP Y4-5",
  },
  {
    id: "dp-year-12",
    title: "IB DP Year 12 Maths",
    stage: "DP",
    meta: "IB DP Year 12 / IB1 (Age 16-17):",
    desc: "IB DP Mathematics - Analysis & Approaches (AA) or Applications & Interpretation (AI) at SL or HL.",
    topics: ["Number and algebra, functions", "Geometry and trigonometry", "Statistics and probability", "Calculus for AA / applications for AI", "Exploration - Internal Assessment"],
    outcome: "Students develop mathematical reasoning, problem-solving and modelling skills to a high international standard, preparing for university-level mathematics.",
    download: "Download Y12",
  },
  {
    id: "dp-year-13",
    title: "IB DP Year 13 Maths",
    stage: "DP",
    meta: "IB DP Year 13 / IB2 (Age 17-18):",
    desc: "Final year of IB DP Mathematics - completing the Mathematical Exploration and preparing for external papers.",
    topics: ["Mathematical Exploration - 12-20 page investigation", "Paper 1 - no calculator, AA only", "Paper 2 - calculator allowed", "Paper 3 - HL only extended response", "Exam technique and timed past paper practice"],
    outcome: "Students submit a high-quality Mathematical Exploration and achieve mastery of the external IB examinations.",
    download: "Download Y13",
  },
];

const differenceCards = [
  {
    icon: "concept",
    title: "AA vs AI Guidance",
    text: "Unsure whether to take Analysis & Approaches or Applications & Interpretation? Our tutors help you choose the right course for your university goals.",
  },
  {
    icon: "data",
    title: "Exploration IA Support",
    text: "Detailed help with your 12-20 page Mathematical Exploration - topic selection, methodology, presentation and reflection.",
  },
  {
    icon: "exam",
    title: "GDC & Technology",
    text: "Full support with TI-Nspire and Casio graphing calculator skills - essential for IB Maths Papers 2 and 3.",
  },
];

const faqs = [
  ["Do you teach PYP, MYP and DP Maths?", "Yes. The programme covers early PYP numeracy, MYP Mathematics and IB DP Mathematics AA or AI at SL and HL."],
  ["Can you help choose between AA and AI?", "Yes. Tutors explain the difference between Analysis & Approaches and Applications & Interpretation, then help match the course to the student's school pathway and university goals."],
  ["Do you support the Mathematical Exploration IA?", "Yes. Students get help with topic selection, research direction, mathematical method, structure, presentation, reflection and final refinement."],
  ["Do you teach graphing calculator skills?", "Yes. Tutors support TI-Nspire and Casio graphing calculator workflows for IB Maths Papers 2 and 3."],
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

export default function MathsIBCurriculumPage() {
  return (
    <main className="min-h-screen bg-white text-[#102877]">
      <Navbar />
      <div className="mx-auto max-w-[1440px] overflow-hidden border-x border-[#d8d8d8]">
        <Hero />
        <YearNav />
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
        Home <span className="mx-3 text-white/80">&gt;</span> Courses <span className="mx-3 text-white/80">&gt;</span> Academic Tutoring <span className="mx-3 text-white/80">&gt;</span> <span className="text-[#05D8DE]">IB</span>
      </div>
      <div className="mt-12 grid items-center gap-10 lg:grid-cols-[1.25fr_0.75fr]">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-[#46c7db]/80 bg-[#0a235f] px-3.5 py-2 text-[11px] font-black text-[#66e3e9]">
            <GlobeBadgeIcon />
            IB Curriculum · PYP · MYP · DP AA / AI
          </span>
          <h1 className="mt-8 max-w-[820px] text-[46px] font-black leading-[1.04] tracking-[0] md:text-[62px]">
            IB Maths Tutoring
            <br />
            <span className="text-[#05B4BB]">PYP · MYP · DP</span>
          </h1>
          <p className="mt-7 max-w-[720px] text-[17px] font-semibold leading-[1.22] text-white/78 md:text-[20px]">
            Expert 1:1 online Maths tutoring for students in the IB PYP, MYP and Diploma Programme. From early numeracy through to DP Mathematics: Analysis & Approaches and Applications & Interpretation at SL or HL.
          </p>
          <div className="mt-6 flex flex-wrap gap-3 text-[11px] font-black text-white">
            {["PYP Ages 3-11", "MYP Ages 11-16", "DP AA & AI", "Exploration IA", "All Papers 1-3"].map((item) => (
              <span key={item} className="rounded-full border border-white/10 bg-white/12 px-3.5 py-2 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.05)]">{item}</span>
            ))}
          </div>
          <div className="mt-9 flex flex-wrap gap-3">
            <a className="inline-flex h-[58px] items-center gap-3 rounded-[21px] bg-[#F98925] px-8 text-[20px] font-black text-white" href="#trial">
              Book Free Trial <ArrowRightIcon />
            </a>
            <a className="inline-flex h-[58px] items-center rounded-[21px] border-2 border-[#F98925] px-8 text-[19px] font-black text-[#F98925]" href="#trial">Speak to Our Team</a>
          </div>
        </div>
        <HeroSummaryCard />
      </div>
      <div className="mt-16 overflow-hidden rounded-[22px]">
        <Image src="/assets/images/Image (Replace)-24.png" alt="IB maths student learning online with graphing calculator" width={1240} height={460} priority className="h-auto w-full object-cover" />
      </div>
    </section>
  );
}

function HeroSummaryCard() {
  return (
    <div className="justify-self-center rounded-[34px] border border-[#6e83bd] bg-[#3c5597] px-7 py-8 shadow-[0_24px_70px_rgba(3,12,49,0.24)] md:w-[372px]">
      <h2 className="flex items-center gap-3 text-[20px] font-black">
        <span className="h-3 w-3 rounded-full bg-[#f6ca00]" />
        IB Maths with Smavy
      </h2>
      <div className="mt-6 space-y-0">
        {[
          ["Programmes", "PYP · MYP · DP"],
          ["DP Courses", "AA & AI"],
          ["Levels", "SL & HL"],
          ["Format", "1:1 online"],
          ["Worldwide", "All IB schools"],
        ].map(([label, value]) => (
          <div key={label} className="flex justify-between gap-4 border-b border-[#6f84bd]/70 py-4 text-[14px] font-black last:border-0 last:pb-0">
            <span className="text-white/52">{label}</span>
            <span className={label === "Programmes" ? "text-[#05D8DE]" : label === "Worldwide" ? "text-[#F98925]" : "text-white"}>{value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function YearNav() {
  return (
    <section className="bg-white px-6 py-9">
      <div className="mx-auto flex max-w-[1240px] flex-wrap justify-center gap-3">
        {yearButtons.map((year) => (
          <a key={year.id} href={`#${year.id}`} className="rounded-full border border-[#dde5f5] bg-white px-5 py-2 text-[11px] font-black text-[#102877] shadow-[0_7px_16px_rgba(18,35,99,0.04)] transition hover:border-[#F98925] hover:text-[#F98925]">
            {year.label}
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
        <LeftSectionHeader eyebrow="Course Structure" title="8 Individual Year Courses" highlight="IB Curriculum · IB PYP · MYP · DP" />
        <p className="mt-5 max-w-[860px] text-[14px] font-medium leading-[1.6] text-[#6d7393]">
          Each year has its own focused Maths course with curriculum alignment, key topics and learning outcomes. Pick your child&apos;s year below or use the programme buttons above.
        </p>
      </div>
      <div className="mx-auto mt-10 grid max-w-[1240px] gap-7 md:grid-cols-2 lg:grid-cols-3">
        {courseCards.map((card) => (
          <CourseCard key={card.title} card={card} />
        ))}
      </div>
    </section>
  );
}

function CourseCard({ card }: { card: (typeof courseCards)[number] }) {
  const isDp = card.stage === "DP";
  const isMyp = card.stage === "MYP";

  return (
    <article id={card.id} className="scroll-mt-28 rounded-[14px] border border-transparent bg-white p-6 shadow-[0_12px_30px_rgba(18,35,99,0.06)] transition duration-300 target:-translate-y-1 target:border-[#F98925] target:ring-4 target:ring-[#F98925]/20 target:shadow-[0_18px_45px_rgba(249,137,37,0.18)]">
      <div className="flex items-center justify-between gap-3">
        <h3 className="text-[18px] font-black text-[#102877]">{card.title}</h3>
        <span className={`rounded-full px-3 py-1 text-[9px] font-black uppercase ${isDp ? "bg-[#fff0eb] text-[#F98925]" : isMyp ? "bg-[#fff7df] text-[#e6a400]" : "bg-[#eafff1] text-[#20b455]"}`}>{card.stage}</span>
      </div>
      <div className="mt-5 rounded-[8px] bg-[#e9fbff] p-4">
        <p className="text-[12px] font-black text-[#05B4BB]">{card.meta}</p>
        <p className="mt-2 text-[12px] font-semibold leading-[1.45] text-[#5f6689]">{card.desc}</p>
      </div>
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
        <a className="flex-1 rounded-[10px] border border-[#F98925] px-3 py-3 text-center text-[11px] font-black text-[#F98925]" href={pdfHref}>{card.download}</a>
        <a className="flex-1 rounded-[10px] bg-[#F98925] px-3 py-3 text-center text-[11px] font-black text-white" href="#trial">Book Free Trial</a>
      </div>
    </article>
  );
}

function DifferenceSection() {
  return (
    <section className="bg-[#f5f7ff] px-6 py-24">
      <div className="mx-auto max-w-[1240px]">
        <LeftSectionHeader eyebrow="IB Tutoring" title="Why Smavy for IB Maths" />
      </div>
      <div className="mx-auto mt-16 grid max-w-[1240px] gap-9 md:grid-cols-3">
        {differenceCards.map((card) => (
          <article key={card.title} className="min-h-[262px] rounded-[24px] border border-[#dfe6f5] bg-white px-9 py-9">
            <MathsDifferenceIcon type={card.icon} />
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
      <SectionHeader eyebrow="FAQs" title="Common Questions About Online IB Maths" />
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
          Ready to Excel in
          <br />
          <span className="text-[#F98925]">IB Maths?</span>
        </h2>
        <p className="mx-auto mt-5 max-w-[610px] text-[14px] font-medium leading-[1.6] text-white/76">
          Book your free 1-hour trial session with an IB-experienced Maths tutor.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a className="inline-flex h-[54px] items-center gap-2 rounded-[18px] bg-[#F98925] px-8 text-[15px] font-black text-white" href="#trial">
            Request a Free Trial <ArrowRightIcon />
          </a>
          <a className="inline-flex h-[54px] items-center rounded-[18px] border border-[#F98925] px-8 text-[15px] font-black text-[#F98925]" href="/courses/ib-curriculum/science">See IB Science</a>
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

function MathsDifferenceIcon({ type }: { type: string }) {
  if (type === "concept") {
    return (
      <span className="flex h-[39px] w-[39px] items-center justify-center rounded-[11px] bg-[#ff7f20] text-white">
        <svg className="h-[25px] w-[25px]" viewBox="0 0 32 32" fill="none" aria-hidden="true">
          <circle cx="14" cy="14" r="7.5" stroke="currentColor" strokeWidth="3" />
          <path d="m19.5 19.5 5 5" stroke="currentColor" strokeLinecap="round" strokeWidth="3.2" />
        </svg>
      </span>
    );
  }

  if (type === "data") {
    return (
      <span className="flex h-[39px] w-[39px] items-center justify-center rounded-[11px] bg-[#20b455] text-white">
        <svg className="h-[25px] w-[25px]" viewBox="0 0 32 32" fill="none" aria-hidden="true">
          <path d="M6.5 19.5h3.7l2.8 5.3L17.9 8h8.2" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
          <path d="m20.5 15 5.5 8M26 15l-5.5 8" stroke="currentColor" strokeLinecap="round" strokeWidth="2.7" />
        </svg>
      </span>
    );
  }

  return (
    <span className="flex h-[39px] w-[39px] items-center justify-center rounded-[11px] bg-[#08b7c2] text-white">
      <svg className="h-[25px] w-[25px]" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <path d="M7 22V11.5c0-2 1.2-3.5 3-3.5 1.5 0 2.5 1 3.1 2.8l4 11.4c.5 1.5 1.4 2.3 2.7 2.3 1.8 0 3.2-1.5 3.2-3.8V10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
      </svg>
    </span>
  );
}

function GlobeBadgeIcon() {
  return (
    <span className="flex h-[18px] w-[18px] items-center justify-center rounded-full bg-white text-[#102877]">
      <svg className="h-[13px] w-[13px]" viewBox="0 0 16 16" fill="none" aria-hidden="true">
        <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.8" />
        <path d="M2.5 8h11M8 2c1.6 1.7 2.4 3.7 2.4 6S9.6 12.3 8 14M8 2C6.4 3.7 5.6 5.7 5.6 8s.8 4.3 2.4 6" stroke="currentColor" strokeLinecap="round" strokeWidth="1.35" />
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

function DownSmallIcon() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="m4 6 4 4 4-4" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
    </svg>
  );
}
