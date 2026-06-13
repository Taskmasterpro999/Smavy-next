import Image from "next/image";
import Navbar from "../../../components/Navbar";

const yearButtons = [
  { label: "Year 1", id: "year-1" },
  { label: "Year 2", id: "year-2" },
  { label: "Year 3", id: "year-3" },
  { label: "Year 4", id: "year-4" },
  { label: "Year 5", id: "year-5" },
  { label: "Year 6", id: "year-6" },
  { label: "Year 7", id: "year-7" },
  { label: "Year 8", id: "year-8" },
  { label: "Year 9", id: "year-9" },
  { label: "Year 10", id: "year-10" },
  { label: "Year 11", id: "year-11" },
  { label: "Year 12", id: "year-12" },
];

const courseCards = [
  {
    id: "year-1",
    title: "Year 1 Maths",
    stage: "Primary",
    meta: "AU - ACARA Year 1:",
    desc: "Number and algebra, measurement and geometry. Concrete-representational-abstract progression. Building number sense and early arithmetic with concrete and visual methods.",
    topics: ["Counting to 100 - forwards and backwards", "Addition and subtraction to 20", "Simple patterns and sequences", "Length, mass and capacity - informal units", "Days, months and time - basic concepts"],
    outcome: "Students count, read and write numbers to 100, add and subtract within 20 and describe simple patterns.",
    download: "Download Year 1",
  },
  {
    id: "year-2",
    title: "Year 2 Maths",
    stage: "Primary",
    meta: "AU - ACARA Year 2:",
    desc: "Number to 1000, operations, fractions, shapes and time. Extending number sense to hundreds and introducing multiplication concepts.",
    topics: ["Numbers to 1000 - place value", "Addition and subtraction strategies - mental and written", "Introduction to multiplication and division", "2D and 3D shapes", "Time - hours, half-hours and quarter-hours"],
    outcome: "Students read and write numbers to 1000, apply mental addition strategies and describe 2D and 3D shapes accurately.",
    download: "Download Year 2",
  },
  {
    id: "year-3",
    title: "Year 3 Maths",
    stage: "Primary",
    meta: "AU - ACARA Year 3:",
    desc: "NAPLAN Year 3. Numeracy includes number, measurement and statistics. Developing fluency in multiplication, fractions and measurement.",
    topics: ["Multiplication and division facts - 2, 3, 5, 10 times tables", "Fractions - halves, quarters, thirds, eighths", "Perimeter and area - informal units", "Graphs and data - collecting and interpreting", "NAPLAN Year 3 preparation - numeracy"],
    outcome: "Students recall multiplication facts fluently, compare simple fractions and collect, display and interpret data.",
    download: "Download Year 3",
  },
  {
    id: "year-4",
    title: "Year 4 Maths",
    stage: "Primary",
    meta: "AU - ACARA Year 4:",
    desc: "All operations, decimals, geometry and data analysis. Consolidating operations and introducing decimals and geometric properties.",
    topics: ["Multiplication and division - all times tables", "Decimals and fractions - tenths and hundredths", "Angles - types and estimation", "Area and perimeter - formal units (cm2, m2)", "Data - mean, median, mode introduction"],
    outcome: "Students use efficient written algorithms for all four operations, read decimals to hundredths and calculate area and perimeter.",
    download: "Download Year 4",
  },
  {
    id: "year-5",
    title: "Year 5 Maths",
    stage: "Primary",
    meta: "AU - ACARA Year 5:",
    desc: "NAPLAN Year 5. Numeracy: number, algebra, measurement and statistics. Strengthening number skills and introducing pre-algebraic thinking.",
    topics: ["Whole numbers - place value to millions", "Fractions and decimals - all operations", "Order of operations - BODMAS", "Coordinates - Cartesian plane introduction", "NAPLAN Year 5 preparation - numeracy"],
    outcome: "Students apply BODMAS to multi-step calculations, compare and order fractions and decimals and plot coordinates.",
    download: "Download Year 5",
  },
  {
    id: "year-6",
    title: "Year 6 Maths",
    stage: "Primary",
    meta: "AU - ACARA Year 6:",
    desc: "Secondary transition. Pre-algebra, ratios, percentages and geometry. Upper primary Maths - negative numbers, ratios and algebraic patterns.",
    topics: ["Negative numbers - on a number line", "Ratios and proportional reasoning", "Percentages - finding percentage of a quantity", "Algebraic patterns - finding and describing rules", "Angles in triangles and quadrilaterals"],
    outcome: "Students work with negative numbers, apply ratio and percentage to real-world problems and describe algebraic patterns using rules.",
    download: "Download Year 6",
  },
  {
    id: "year-7",
    title: "Year 7 Maths",
    stage: "Middle",
    meta: "AU - NSW/VIC/QLD Stage 4:",
    desc: "First secondary year. NAPLAN Year 7 numeracy assessed. Secondary Maths foundations - integers, algebra and geometry.",
    topics: ["Integers - operations with negative numbers", "Introduction to algebra - expressions and equations", "Linear patterns and sequences", "Properties of angles - parallel lines and transversals", "Probability - theoretical and experimental"],
    outcome: "Students solve one-step equations, apply integer operations and calculate angles in parallel line diagrams.",
    download: "Download Year 7",
  },
  {
    id: "year-8",
    title: "Year 8 Maths",
    stage: "Middle",
    meta: "AU - NSW/VIC/QLD Stage 4:",
    desc: "Algebra, geometry, measurement and statistics. Building algebraic fluency and geometric reasoning.",
    topics: ["Linear equations - solving and graphing", "Simultaneous equations - introduction", "Pythagoras' theorem", "Area and volume of prisms and cylinders", "Statistics - mean, median, mode, range, outliers"],
    outcome: "Students solve linear equations, apply Pythagoras' theorem and calculate volumes of prisms and cylinders.",
    download: "Download Grade 8",
  },
  {
    id: "year-9",
    title: "Year 9 Maths",
    stage: "Middle",
    meta: "AU - NSW Stage 5 / VIC Year 9:",
    desc: "NAPLAN Year 9. Bridge to senior Mathematics pathways. Pre-senior Maths - functions, trigonometry and statistical analysis.",
    topics: ["Linear and non-linear functions", "Trigonometry - SOHCAHTOA in right-angled triangles", "Indices and scientific notation", "Financial Maths - interest, depreciation", "NAPLAN Year 9 preparation"],
    outcome: "Students apply trigonometric ratios, graph linear and non-linear functions and solve financial Maths problems.",
    download: "Download Grade 9",
  },
  {
    id: "year-10",
    title: "Year 10 Maths",
    stage: "Senior",
    meta: "AU - Year 10 / Pre-VCE/HSC/QCE:",
    desc: "Foundation for all senior Maths pathways. Foundation for VCE/HSC/QCE Mathematics - polynomials, probability and trigonometry.",
    topics: ["Polynomials - expanding, factorising", "Quadratic equations - factorising and formula", "Trigonometry - sine and cosine rules", "Circle theorems", "Bivariate data and scatterplots"],
    outcome: "Students factorise and solve quadratic equations, apply trigonometric rules to non-right triangles and analyse bivariate data.",
    download: "Download Year 10",
  },
  {
    id: "year-11",
    title: "Year 11 Maths",
    stage: "Senior",
    meta: "AU - VCE Maths Methods Unit 1&2 / HSC Preliminary:",
    desc: "SAC preparation. VCE/HSC/QCE Mathematics Year 11 - functions, calculus entry and statistics.",
    topics: ["Functions - domain, range, transformations (VCE Unit 1)", "Calculus - introduction to differentiation (Unit 2)", "Probability - conditional and independent events", "Sequences and series - arithmetic and geometric", "SAC preparation - multiple choice and problem solving"],
    outcome: "Students define functions, introduce differential calculus and solve probability problems at a VCE/HSC standard.",
    download: "Download Year 11",
  },
  {
    id: "year-12",
    title: "Year 12 Maths",
    stage: "Senior",
    meta: "AU - VCE Maths Methods Unit 3&4 / HSC Extension Maths:",
    desc: "Past papers and ATAR preparation. VCE/HSC/QCE Mathematics Year 12 - advanced calculus, probability and ATAR maximisation.",
    topics: ["Calculus - integration and applications (Unit 3&4)", "Probability distributions - binomial and normal", "Differential equations - introduction", "Linear algebra - vectors and matrices (Specialist)", "Past exam papers and ATAR strategy"],
    outcome: "Students integrate functions, apply probability distributions and write exam-quality solutions - maximising ATAR contribution.",
    download: "Download Year 12",
  },
];

const differenceCards = [
  {
    icon: "diagnosis",
    title: "Gap-First Diagnosis",
    text: "Every Maths student starts with a gap analysis. We identify exactly which concepts are missing - rather than teaching what they already know - and build the plan from there.",
  },
  {
    icon: "working",
    title: "Working-Out Culture",
    text: "Our tutors insist on full working at every step. Students who show working recover marks, develop better mathematical reasoning and make far fewer careless errors.",
  },
  {
    icon: "exam",
    title: "Exam Technique Built In",
    text: "Whether it's NAPLAN, VCE, GCSE or AP Calculus - our tutors know exactly which question types appear and how marks are awarded. Exam strategy is part of every session.",
  },
];

const testimonials = [
  {
    name: "Binita Shrestha",
    role: "Parent - Australia",
    flag: "flag-australia.svg",
    text: "My child Mahib is doing well in math this year thanks to the Maths teacher Ms Shalini Chandra. Lessons are engaging with a mix of activities which makes it easier for my child to understand. Maths feels fun and achievable.",
  },
  {
    name: "musheer ahmed",
    role: "Parent - Australia",
    flag: "flag-australia.svg",
    text: "Thank you so much Nishana mam for being amazing with my daughter. After falling behind in maths, she has started to regain her confidence and the consistent supportive approach has enhanced her learning greatly.",
  },
  {
    name: "Karen N.",
    role: "Student - India",
    flag: "flag-india.svg",
    text: "Priyanka Thapa is my math teacher and she is very good. She teaches me very well and explains it when I do not understand how to do a math problem.",
  },
];

const faqs = [
  ["How quickly will my child see improvement in Maths?", "Most students see noticeable improvement within 4-6 sessions. The first session identifies specific gaps, and subsequent sessions focus on rebuilding those foundations. Improvement is typically fastest when sessions are weekly and consistent."],
  ["Can tutors help with both homework and exam preparation?", "Yes - tutors regularly assist with specific homework tasks, school tests and major exam preparation in the same programme. Parents can direct the focus of each session based on what is most urgent."],
  ["What Maths subjects do you cover in senior years?", "We cover all senior Maths subjects including VCE Maths Methods, Specialist Maths and Further Maths(AU); GCSE and A-Level Maths and Further Maths (UK); AP Calculus AB/BC and AP Statistics (US)."],
  ["What is the free curriculum download?", "Each year level card includes a downloadable PDF showing exactly what topics are covered, skills developed and expected learning outcomes. Free, no sign-up required."],
  ["Can students in other countries get Maths tutoring?", "Yes - our Maths tutors assist students in Singapore, UAE, New Zealand, Canada, India and many other countries with concept explanation, homework help and exam preparation for any curriculum."],
  ["How do online Maths sessions work practically?", "Sessions use our purpose-built virtual classroom with a collaborative digital whiteboard, so students work through problems with the tutor in real time. Students can share their working and the tutor annotates directly."],
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

export default function MathsAustraliaPage() {
  return (
    <main className="min-h-screen bg-white text-[#102877]">
      <Navbar />
      <div className="mx-auto max-w-[1440px] overflow-hidden border-x border-[#d8d8d8]">
        <Hero />
        <YearNav />
        <CourseStructure />
        <DifferenceSection />
        <ReviewsSection />
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
        Home <span className="mx-2 text-[#05b4bb]">/</span> Courses <span className="mx-2 text-[#05b4bb]">/</span> Academic Tutoring <span className="mx-2 text-[#05b4bb]">/</span> Maths - Australia
      </div>
      <div className="mt-12 grid items-center gap-10 lg:grid-cols-[1.25fr_0.75fr]">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-[#46c7db]/70 bg-[#0a235f] px-4 py-2 text-[11px] font-bold text-[#48d8e8]">
            <Image src="/assets/images/flags/flag-australia.svg" alt="" width={18} height={18} className="h-[18px] w-[18px] rounded-full object-cover" />
            Academic Tutoring - Australia
          </span>
          <h1 className="mt-6 max-w-[850px] text-[40px] font-black leading-[1.04] tracking-[0] md:text-[64px]">
            Online <span className="text-[#05B4BB]">Maths Tutoring</span>
            <br />
            Year 1-12
          </h1>
          <p className="mt-6 max-w-[760px] text-[15px] font-semibold leading-[1.6] text-white/78 md:text-[17px]">
            Expert 1:1 online Maths tutoring for Australian students from Year 1 to Year 12. Number, algebra, geometry, statistics and calculus. NAPLAN, Selective Entry, VCE Maths Methods, HSC Extension Maths, QCE preparation. Free first session.
          </p>
          <div className="mt-6 flex flex-wrap gap-3 text-[12px] font-bold text-white/72">
            {["Number & Algebra", "Geometry & Measurement", "Statistics & Probability", "Calculus & Advanced Maths", "NAPLAN", "Selective Entry", "VCE Maths Methods", "HSC Extension", "QCE Specialist Maths"].map((item) => (
              <span key={item} className="rounded-full bg-white/10 px-4 py-2">{item}</span>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-5">
            <a className="inline-flex h-[56px] items-center gap-3 rounded-[19px] bg-[#F98925] px-8 text-[15px] font-black text-white" href="#trial">
              Book Free Trial
              <svg className="h-5 w-5" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <path d="M4 10h12M11 5l5 5-5 5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.6" />
              </svg>
            </a>
            <a className="inline-flex h-[56px] items-center gap-3 rounded-[19px] border border-[#F98925] px-8 text-[15px] font-black text-[#F98925]" href="#years">
              View Year Levels
              <svg className="h-5 w-5" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <path d="M10 4v12M5 11l5 5 5-5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.6" />
              </svg>
            </a>
          </div>
          <div className="mt-9 flex flex-wrap items-center gap-3 text-[12px] font-bold text-white/86">
            <span>Also available for:</span>
            {[
              ["United Kingdom", "flag-uk.svg"],
              ["United States", "flag-us.svg"],
            ].map(([country, flag]) => (
              <span key={country} className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2">
                <Image src={`/assets/images/flags/${flag}`} alt="" width={18} height={18} className="h-[18px] w-[18px] rounded-full object-cover" />
                {country}
              </span>
            ))}
          </div>
        </div>
        <div className="justify-self-center rounded-[28px] bg-white/14 p-7 shadow-[0_24px_70px_rgba(3,12,49,0.24)] md:w-[350px]">
          <h2 className="flex items-center gap-3 text-[17px] font-black">
            <span className="h-3 w-3 rounded-full bg-[#f6ca00]" />
            Maths - Australia
          </h2>
          <div className="mt-6 space-y-4">
            {[["Year levels", "Year 1-12"], ["Session length", "1 hour"], ["Format", "1:1 only"], ["Country", "Australia"], ["Free trial", "1 Per Subject"], ["Tutor rating", "4.8"]].map(([label, value]) => (
              <div key={label} className="flex justify-between border-b border-white/12 pb-4 text-[12px] font-bold last:border-0 last:pb-0">
                <span className="text-white/50">{label}</span>
                <span className={label === "Tutor rating" ? "flex items-center gap-1 text-[#f6ca00]" : label === "Free trial" ? "text-[#F98925]" : "text-white"}>
                  {label === "Country" && <Image src="/assets/images/flags/flag-australia.svg" alt="" width={15} height={15} className="mr-1 inline h-[15px] w-[15px] rounded-full object-cover" />}
                  {value}
                  {label === "Tutor rating" && <span className="text-[13px] leading-none">*</span>}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-12 overflow-hidden rounded-[22px]">
        <Image src="/assets/images/Image (Replace)-9.png" alt="Student in an online maths tutoring session" width={1240} height={460} priority className="h-auto w-full object-cover" />
      </div>
    </section>
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
        <LeftSectionHeader eyebrow="Course Structure" title="12 Individual Year Courses" highlight="Australia - ACARA" />
        <p className="mt-5 max-w-[860px] text-[14px] font-medium leading-[1.6] text-[#6d7393]">
          Each year has its own focused Maths course with curriculum alignment, key topics and learning outcomes. Pick your child&apos;s year below or use the year buttons above.
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
  const isSenior = card.stage === "Senior";
  const isMiddle = card.stage === "Middle";

  return (
    <article id={card.id} className="scroll-mt-28 rounded-[14px] border border-transparent bg-white p-6 shadow-[0_12px_30px_rgba(18,35,99,0.06)] transition duration-300 target:-translate-y-1 target:border-[#F98925] target:ring-4 target:ring-[#F98925]/20 target:shadow-[0_18px_45px_rgba(249,137,37,0.18)]">
      <div className="flex items-center justify-between gap-3">
        <h3 className="text-[18px] font-black text-[#102877]">{card.title}</h3>
        <span className={`rounded-full px-3 py-1 text-[9px] font-black uppercase ${isSenior ? "bg-[#fff0eb] text-[#F98925]" : isMiddle ? "bg-[#fff7df] text-[#e6a400]" : "bg-[#eafff1] text-[#20b455]"}`}>{card.stage}</span>
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
        <a className="inline-flex flex-1 items-center justify-center gap-2 rounded-[10px] border border-[#F98925] px-3 py-3 text-center text-[11px] font-black text-[#F98925]" href="/assets/images/Maths%20%E2%80%94%20Australia.pdf">
          <svg className="h-3.5 w-3.5" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M8 2v7M5 6l3 3 3-3M3 13h10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
          </svg>
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
        <LeftSectionHeader eyebrow="Why Smavy Maths" title="What Makes Our Maths Tutoring Different" />
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

function MathsDifferenceIcon({ type }: { type: string }) {
  const color = type === "diagnosis" ? "bg-[#ff7f20]" : type === "working" ? "bg-[#20b455]" : "bg-[#08b7c2]";
  return (
    <span className={`flex h-[49px] w-[49px] items-center justify-center rounded-[14px] ${color} text-white`}>
      <svg className="h-[25px] w-[25px]" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        {type === "diagnosis" ? (
          <>
            <circle cx="12" cy="12" r="9" fill="white" />
            <path d="M9.35 9.15A2.75 2.75 0 0 1 12 7.25c1.55 0 2.75.98 2.75 2.35 0 1.18-.72 1.78-1.58 2.35-.72.47-1.17.9-1.17 1.8" stroke="#ff7f20" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.9" />
            <circle cx="12" cy="17" r="1" fill="#ff7f20" />
          </>
        ) : type === "working" ? (
          <>
            <path d="M6.5 5.5h8.25L18 8.75V18.5H6.5z" stroke="currentColor" strokeLinejoin="round" strokeWidth="2.2" />
            <path d="M14.75 5.5v3.25H18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" />
            <path d="M9.3 13.35 11 15.05l4-4.1" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" />
          </>
        ) : (
          <>
            <circle cx="12" cy="12" r="8.2" stroke="currentColor" strokeWidth="2.2" />
            <circle cx="12" cy="12" r="3.8" stroke="currentColor" strokeWidth="2.2" />
            <circle cx="12" cy="12" r="1.2" fill="currentColor" />
          </>
        )}
      </svg>
    </span>
  );
}

function ReviewsSection() {
  return (
    <section className="bg-white px-6 py-24">
      <CenteredPillHeader eyebrow="Parent Reviews" title="What Parents Say About Our Maths Tutors" />
      <div className="mx-auto mt-16 grid max-w-[1360px] gap-8 md:grid-cols-3">
        {testimonials.map((item) => (
          <article key={item.name} className="min-h-[360px] rounded-[24px] border border-[#dfe6f5] bg-white px-9 py-9">
            <div className="flex gap-2 text-[24px] leading-none text-[#f6c000]" aria-label="5 star rating">
              {[1, 2, 3, 4, 5].map((star) => (
                <span key={star}>*</span>
              ))}
            </div>
            <p className="mt-7 text-[17px] font-bold leading-[1.45] text-[#57535e]">{item.text}</p>
            <div className="mt-8 flex items-center gap-5">
              <span className={`flex h-14 w-14 items-center justify-center rounded-full ${item.flag === "flag-india.svg" ? "bg-[#20b455]" : item.name === "musheer ahmed" ? "bg-[#F98925]" : "bg-[#08b7c2]"} text-white`}>
                <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <circle cx="12" cy="8" r="3.2" fill="currentColor" />
                  <path d="M5.5 19c.8-4 3.15-6 6.5-6s5.7 2 6.5 6" fill="currentColor" />
                </svg>
              </span>
              <span>
                <span className="block text-[17px] font-black text-[#57535e]">{item.name}</span>
                <span className="mt-1 flex items-center gap-1.5 text-[13px] font-semibold text-[#9aa0b8]">
                  {item.role}
                  <Image src={`/assets/images/flags/${item.flag}`} alt="" width={14} height={14} className="h-3.5 w-3.5 rounded-full object-cover" />
                </span>
              </span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function FaqSection() {
  return (
    <section className="bg-[#f5f7ff] px-6 py-22">
      <SectionHeader eyebrow="FAQs" title="Common Questions About Online Maths Tutoring" />
      <div className="mx-auto mt-11 max-w-[820px] space-y-4">
        {faqs.map(([question, answer]) => (
          <details key={question} className="group rounded-[14px] bg-white px-6 py-5 shadow-[0_10px_26px_rgba(18,35,99,0.04)]" open={question === faqs[0][0]}>
            <summary className="flex cursor-pointer list-none items-center justify-between gap-5 text-[14px] font-black text-[#102877]">
              <span>{question}</span>
              <span className="text-[16px] text-[#6d7393] group-open:rotate-180">v</span>
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
          Start Maths Tutoring
          <br />
          <span className="text-[#F98925]">Today. Free Trial Per Subject.</span>
        </h2>
        <p className="mx-auto mt-5 max-w-[610px] text-[14px] font-medium leading-[1.6] text-white/76">
          Book a free 1-hour trial session with a matched Maths tutor for Australia. No payment details required.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a className="inline-flex h-[54px] items-center rounded-[18px] bg-[#F98925] px-8 text-[15px] font-black text-white" href="#trial">Request a Free Trial {"->"}</a>
          <a className="inline-flex h-[54px] items-center rounded-[18px] border border-[#F98925] px-8 text-[15px] font-black text-[#F98925]" href="/assets/images/Maths%20%E2%80%94%20Australia.pdf">Download Curriculum Guide</a>
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
                        <Image src={`/assets/images/flags/${link[1]}`} alt="" width={16} height={16} className="h-4 w-4 rounded-full object-contain" />
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

function SectionHeader({ eyebrow, title, highlight }: { eyebrow: string; title: string; highlight?: string }) {
  return (
    <div className="mx-auto max-w-[840px] text-center">
      <span className="inline-flex rounded-full bg-[#fff1ef] px-4 py-2 text-[11px] font-black text-[#F98925]">{eyebrow}</span>
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

function CenteredPillHeader({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="mx-auto max-w-[840px] text-center">
      <span className="inline-flex items-center gap-2 rounded-full bg-[#fff1ef] px-4 py-2 text-[11px] font-black text-[#ff5f52]">
        <span className="h-1.5 w-1.5 rounded-full bg-[#ff5f52]" />
        {eyebrow}
      </span>
      <h2 className="mt-5 text-[32px] font-black leading-[1.16] tracking-[0] text-[#102877] md:text-[48px]">
        {title}
      </h2>
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
