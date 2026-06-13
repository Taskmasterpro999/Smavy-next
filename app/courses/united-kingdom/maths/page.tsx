import Image from "next/image";
import Navbar from "../../../components/Navbar";

const yearButtons = [
  { label: "KS1 Y1", id: "ks1-year-1" },
  { label: "KS1 Y2", id: "ks1-year-2" },
  { label: "KS2 Y3", id: "ks2-year-3" },
  { label: "KS2 Y4", id: "ks2-year-4" },
  { label: "KS2 Y5", id: "ks2-year-5" },
  { label: "KS2 Y6", id: "ks2-year-6" },
  { label: "KS3 Y7", id: "ks3-year-7" },
  { label: "KS3 Y8", id: "ks3-year-8" },
  { label: "KS3 Y9", id: "ks3-year-9" },
  { label: "GCSE Y10", id: "gcse-year-10" },
  { label: "GCSE Y11", id: "gcse-year-11" },
  { label: "A-L Y12", id: "a-level-year-12" },
  { label: "A-L Y13", id: "a-level-year-13" },
];

const courseCards = [
  {
    id: "ks1-year-1",
    title: "KS1 Year 1 Maths",
    stage: "KS1",
    meta: "UK - KS1 Year 1:",
    desc: "NC Maths. Number, addition/subtraction, shape, space and measures. Building number sense and early arithmetic aligned to the National Curriculum.",
    topics: ["Counting to 100 - forwards, backwards, from any number", "Addition and subtraction within 20", "Multiplication as repeated addition - 2, 5, 10 times tables", "Shapes - 2D and 3D properties", "Measurement - length, mass, capacity and time"],
    outcome: "Students fluently count to 100, add and subtract within 20 and recognise 2D and 3D shapes.",
    download: "Download KS1 Y1",
  },
  {
    id: "ks1-year-2",
    title: "KS1 Year 2 Maths",
    stage: "KS1",
    meta: "UK - KS1 Year 2:",
    desc: "KS1 SATs - arithmetic and reasoning papers. Consolidating KS1 Maths for Year 2 SATs and the transition to KS2.",
    topics: ["Numbers to 100 - place value and ordering", "Addition and subtraction - formal written methods", "Times tables - 2, 5, 10", "Fractions - halves, quarters, thirds", "Geometry - properties of shapes and position", "Year 2 SATs preparation"],
    outcome: "Students apply formal addition and subtraction methods, recall times tables fluently and approach KS1 SATs with confidence.",
    download: "Download KS1 Y2",
  },
  {
    id: "ks2-year-3",
    title: "KS2 Year 3 Maths",
    stage: "KS2",
    meta: "UK - KS2 Year 3:",
    desc: "NC Maths. Multiplication tables check preparation. KS2 Maths foundations - multiplication tables and column methods.",
    topics: ["Times tables to 12 x 12", "Column addition and subtraction - 3-digit numbers", "Fractions - equivalent fractions, compare and order", "Area and perimeter - informal to formal", "Bar charts, tables and pictograms"],
    outcome: "Students recall all times tables to 12 x 12, perform column calculations accurately and compare equivalent fractions.",
    download: "Download KS2 Y3",
  },
  {
    id: "ks2-year-4",
    title: "KS2 Year 4 Maths",
    stage: "KS2",
    meta: "UK - KS2 Year 4:",
    desc: "NC Maths. Multiplication tables check year - all tables to 12. Deepening KS2 fluency - multiplication, fractions, decimals and angles.",
    topics: ["Column multiplication and short division", "Fractions - add, subtract and multiply", "Decimals - hundredths and converting from fractions", "Angles - acute, obtuse, reflex", "Roman numerals and negative numbers"],
    outcome: "Students perform column multiplication, add fractions with the same denominator and read decimals to hundredths.",
    download: "Download KS2 Y4",
  },
  {
    id: "ks2-year-5",
    title: "KS2 Year 5 Maths",
    stage: "KS2",
    meta: "UK - KS2 Year 5:",
    desc: "NC Maths. Direct preparation for Year 6 KS2 SATs. Upper KS2 - fractions, percentages and SATs readiness.",
    topics: ["Fractions - multiply fractions, mixed numbers", "Percentages of amounts", "Long multiplication and long division", "Geometry - area and perimeter of compound shapes", "Prime, square and cube numbers", "KS2 SATs preparation - arithmetic and reasoning"],
    outcome: "Students multiply fractions, calculate percentages and apply long multiplication and division in SATs-style questions.",
    download: "Download KS2 Y5",
  },
  {
    id: "ks2-year-6",
    title: "KS2 Year 6 Maths",
    stage: "KS2",
    meta: "UK - KS2 Year 6:",
    desc: "SATs - Arithmetic Paper 1, Reasoning Papers 2 and 3. Final KS2 year - SATs mastery in arithmetic and mathematical reasoning.",
    topics: ["Ratio and proportion", "Algebra - using formulae and simple equations", "Fractions, decimals and percentages - all conversions", "Area of triangles and parallelograms", "Statistics - mean, pie charts, line graphs", "KS2 SATs past paper practice"],
    outcome: "Students convert between fractions, decimals and percentages fluently and achieve expected or greater depth in KS2 SATs.",
    download: "Download KS2 Y6",
  },
  {
    id: "ks3-year-7",
    title: "KS3 Year 7 Maths",
    stage: "KS3",
    meta: "UK - KS3 Year 7:",
    desc: "NC Secondary Maths. Foundation for GCSE Maths. Secondary Maths foundations - number, algebra, geometry and probability.",
    topics: ["Negative numbers and order of operations", "Introduction to algebra - simplifying and substitution", "Sequences - term-to-term and nth-term rules", "Angles in parallel lines and triangles", "Probability - basic and relative frequency"],
    outcome: "Students substitute into algebraic expressions, find nth-term rules and calculate angles in parallel line diagrams.",
    download: "Download KS3 Y7",
  },
  {
    id: "ks3-year-8",
    title: "KS3 Year 8 Maths",
    stage: "KS3",
    meta: "UK - KS3 Year 8:",
    desc: "NC Secondary Maths. Pre-GCSE skill building. Deepening KS3 - equations, graphs and Pythagoras.",
    topics: ["Linear equations - solving with brackets", "Graphs - straight lines and y = mx + c", "Pythagoras' theorem", "Area and volume - prisms and cylinders", "Statistics - averages and spread from grouped data"],
    outcome: "Students solve linear equations including with brackets, plot straight-line graphs and apply Pythagoras' theorem.",
    download: "Download KS3 Y8",
  },
  {
    id: "ks3-year-9",
    title: "KS3 Year 9 Maths",
    stage: "KS3",
    meta: "UK - KS3 Year 9:",
    desc: "Pre-GCSE. Bridge to GCSE Foundation or Higher. Pre-GCSE bridge - simultaneous equations, trigonometry and statistics.",
    topics: ["Simultaneous equations - elimination and substitution", "Trigonometry - SOHCAHTOA", "Quadratic expressions - expanding and factorising", "Cumulative frequency and box plots", "Direct and inverse proportion"],
    outcome: "Students solve simultaneous equations, apply trigonometric ratios and factorise quadratics - ready for GCSE Maths.",
    download: "Download KS3 Y9",
  },
  {
    id: "gcse-year-10",
    title: "GCSE Year 10 Maths",
    stage: "GCSE",
    meta: "UK - GCSE Maths Year 1:",
    desc: "AQA / Edexcel / OCR. Foundation and Higher tiers. GCSE Maths Year 1 - algebra, geometry, statistics and number.",
    topics: ["Algebra - solving equations, inequalities, formulae", "Geometry - Pythagoras, trigonometry, circle theorems", "Statistics - histograms, cumulative frequency", "Number - surds, bounds and standard form (Higher)", "GCSE Maths past paper technique - AQA/Edexcel/OCR"],
    outcome: "Students solve algebraic equations, apply Pythagoras and trigonometry and interpret statistical diagrams in GCSE-style questions.",
    download: "Download GCSE Y10",
  },
  {
    id: "gcse-year-11",
    title: "GCSE Year 11 Maths",
    stage: "GCSE",
    meta: "UK - GCSE Maths Year 2:",
    desc: "Past papers and mark scheme technique. All exam boards. GCSE Maths final year - full past paper practice and exam mastery.",
    topics: ["Functions and graphs - quadratic and cubic", "Vectors and transformations", "Probability - tree diagrams and Venn diagrams", "Direct/inverse proportion and similarity", "Full past paper practice with mark scheme feedback"],
    outcome: "Students approach all GCSE Maths papers with confidence, maximising their grade with examiner-aware technique.",
    download: "Download GCSE Y11",
  },
  {
    id: "a-level-year-12",
    title: "A-Level Year 12 Maths",
    stage: "A-Level",
    meta: "UK - A-Level Maths Year 1:",
    desc: "AQA / Edexcel / OCR. All three components. A-Level Maths Year 1 - pure Maths, mechanics and statistics.",
    topics: ["Pure - proof, algebra, coordinate geometry, binomial expansion", "Calculus - differentiation and integration (Year 1)", "Trigonometry - identities and equations", "Mechanics - kinematics, forces, Newton's Laws", "Statistics - data presentation, probability, distributions"],
    outcome: "Students prove mathematical statements, differentiate and integrate polynomial functions and apply Newton's Laws to mechanics.",
    download: "Download A-L Y12",
  },
  {
    id: "a-level-year-13",
    title: "A-Level Year 13 Maths",
    stage: "A-Level",
    meta: "UK - A-Level Maths Year 2:",
    desc: "Past papers and A-Level exam technique. A-Level Maths Year 2 - advanced calculus, numerical methods and applied Maths.",
    topics: ["Pure - advanced integration, differential equations", "Vectors - 3D, lines and angles", "Mechanics - projectiles, moments, friction", "Statistics - hypothesis testing, normal distribution", "Past paper practice and exam technique"],
    outcome: "Students solve differential equations, apply hypothesis testing and achieve A-Level exam competency across pure, mechanics and statistics.",
    download: "Download A-L Y13",
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
    text: "Whether it is NAPLAN, VCE, GCSE or AP Calculus - our tutors know exactly which question types appear and how marks are awarded. Exam strategy is part of every session.",
  },
];

const testimonials = [
  {
    name: "Binita Shrestha",
    role: "Parent - Australia",
    flag: "flag-australia.svg",
    text: "Thank you so much Nishana mam for being amazing with my daughter. After falling behind in maths, she has started to regain her confidence and the consistent, supportive approach has enhanced her learning greatly.",
  },
  {
    name: "Mishal Routhu",
    role: "Parent - USA",
    flag: "flag-us.svg",
    text: "Loved their classes. My son has improved a lot in Math after we have started their classes. Arpita our coordinator helped us arrange a tutor that suits my son's temperament.",
  },
  {
    name: "Flory Aaron",
    role: "Parent - USA",
    flag: "flag-us.svg",
    text: "I found this through online. We have an excellent teacher. My son is in grade 11, Canadian curriculum. Teacher is very knowledgeable and patient. Grade 11 math is now interesting.",
  },
];

const faqs = [
  ["How quickly will my child see improvement in Maths?", "Most students see noticeable improvement within 4-6 sessions. The first session identifies specific gaps, and subsequent sessions focus on rebuilding those foundations. Improvement is typically fastest when sessions are weekly and consistent."],
  ["Can tutors help with both homework and exam preparation?", "Yes - tutors regularly assist with specific homework tasks, school tests and major exam preparation in the same programme. Parents can direct the focus of each session based on what is most urgent."],
  ["What Maths subjects do you cover in senior years?", "We cover all senior Maths subjects including VCE Maths Methods, Specialist Maths and Further Maths (AU); GCSE and A-Level Maths and Further Maths (UK); AP Calculus AB/BC and AP Statistics (US). See the Senior band cards on this page for full details."],
  ["What is the free curriculum download?", "Each year level card includes a downloadable PDF showing exactly what topics are covered, skills developed and expected learning outcomes. Free, no sign-up required."],
  ["Can students in other countries get Maths tutoring?", "Yes - our Maths tutors assist students in Singapore, UAE, New Zealand, Canada, India and many other countries with concept explanation, homework help and exam preparation for any curriculum."],
  ["How do online Maths sessions work practically?", "Sessions use our purpose-built virtual classroom with a collaborative digital whiteboard, so students work through problems with the tutor in real time. Students can share their working and the tutor annotates directly. Sessions are recorded and available to review within one hour."],
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

export default function MathsUnitedKingdomPage() {
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
        Home <span className="mx-2 text-[#05b4bb]">/</span> Courses <span className="mx-2 text-[#05b4bb]">/</span> Academic Tutoring <span className="mx-2 text-[#05b4bb]">/</span> Maths - United Kingdom
      </div>
      <div className="mt-12 grid items-center gap-10 lg:grid-cols-[1.25fr_0.75fr]">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-[#46c7db]/70 bg-[#0a235f] px-4 py-2 text-[11px] font-bold text-[#48d8e8]">
            <Image src="/assets/images/flags/flag-uk.svg" alt="" width={18} height={18} className="h-[18px] w-[18px] rounded-full object-cover" />
            Academic Tutoring - United Kingdom
          </span>
          <h1 className="mt-6 max-w-[850px] text-[40px] font-black leading-[1.04] tracking-[0] md:text-[64px]">
            Online <span className="text-[#05B4BB]">Maths Tutoring</span>
            <br />
            Year 1-13
          </h1>
          <p className="mt-6 max-w-[760px] text-[15px] font-semibold leading-[1.6] text-white/78 md:text-[17px]">
            Expert 1:1 online Maths tutoring for UK students from Year 1 to Year 13. Number, algebra, geometry, statistics and calculus. 11-Plus Maths, KS2 SATs, GCSE Maths, A-Level Maths and Further Maths. Free first session.
          </p>
          <div className="mt-6 flex flex-wrap gap-3 text-[12px] font-bold text-white/72">
            {["Number & Algebra", "Geometry & Measurement", "Statistics & Probability", "Calculus & Advanced Maths", "11-Plus Maths", "KS2 SATs", "GCSE Maths", "A-Level Maths", "Further Maths"].map((item) => (
              <span key={item} className="rounded-full bg-white/10 px-4 py-2">{item}</span>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-5">
            <a className="inline-flex h-[56px] items-center gap-3 rounded-[19px] bg-[#F98925] px-8 text-[15px] font-black text-white" href="#trial">
              Book Free Trial <ArrowRightIcon />
            </a>
            <a className="inline-flex h-[56px] items-center rounded-[19px] border border-[#F98925] px-8 text-[15px] font-black text-[#F98925]" href="#years">View Year Levels</a>
          </div>
          <div className="mt-9 flex flex-wrap items-center gap-3 text-[12px] font-bold text-white/86">
            <span>Also available for:</span>
            {[
              ["Australia", "flag-australia.svg"],
              ["United States", "flag-us.svg"],
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
        <Image src="/assets/images/Image (Replace)-16.png" alt="Student in an online UK maths tutoring session" width={1240} height={460} priority className="h-auto w-full object-cover" />
      </div>
    </section>
  );
}

function HeroSummaryCard() {
  return (
    <div className="justify-self-center rounded-[28px] border border-[#6e83bd] bg-[#3c5597] p-7 shadow-[0_24px_70px_rgba(3,12,49,0.24)] md:w-[350px]">
      <h2 className="flex items-center gap-3 text-[17px] font-black">
        <span className="h-3 w-3 rounded-full bg-[#f6ca00]" />
        Maths - United Kingdom
      </h2>
      <div className="mt-6 space-y-4">
        {[["Year levels", "Year 1-13"], ["Session length", "1 hour"], ["Format", "1:1 only"], ["Country", "United Kingdom"], ["Free trial", "1 Per Subject"], ["Tutor rating", "4.8"]].map(([label, value]) => (
          <div key={label} className="flex justify-between border-b border-[#6f84bd]/70 pb-4 text-[12px] font-bold last:border-0 last:pb-0">
            <span className="text-white/55">{label}</span>
            <span className={label === "Tutor rating" ? "flex items-center gap-1.5 text-white" : label === "Free trial" ? "text-[#F98925]" : label === "Year levels" ? "text-[#05D8DE]" : label === "Country" ? "flex items-center gap-1.5 text-white" : "text-white"}>
              {label === "Country" && <Image src="/assets/images/flags/flag-uk.svg" alt="" width={15} height={15} className="h-[15px] w-[15px] rounded-full object-cover" />}
              {value}
              {label === "Tutor rating" && <StarSmallIcon />}
            </span>
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
        <LeftSectionHeader eyebrow="Course Structure" title="13 Individual Year Courses" highlight="United Kingdom - National Curriculum" />
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
  const isALevel = card.stage === "A-Level";
  const isGcse = card.stage === "GCSE";
  const isKs3 = card.stage === "KS3";

  return (
    <article id={card.id} className="scroll-mt-28 rounded-[14px] border border-transparent bg-white p-6 shadow-[0_12px_30px_rgba(18,35,99,0.06)] transition duration-300 target:-translate-y-1 target:border-[#F98925] target:ring-4 target:ring-[#F98925]/20 target:shadow-[0_18px_45px_rgba(249,137,37,0.18)]">
      <div className="flex items-center justify-between gap-3">
        <h3 className="text-[18px] font-black text-[#102877]">{card.title}</h3>
        <span className={`rounded-full px-3 py-1 text-[9px] font-black uppercase ${isALevel ? "bg-[#fff0eb] text-[#F98925]" : isGcse ? "bg-[#fff0eb] text-[#ff5f52]" : isKs3 ? "bg-[#fff7df] text-[#e6a400]" : "bg-[#eafff1] text-[#20b455]"}`}>{card.stage}</span>
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
        <a className="inline-flex flex-1 items-center justify-center gap-2 rounded-[10px] border border-[#F98925] px-3 py-3 text-center text-[11px] font-black text-[#F98925]" href="/assets/images/Maths%20%E2%80%94%20United%20Kingdom.pdf">
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

function ReviewsSection() {
  return (
    <section className="bg-white px-6 py-24">
      <CenteredPillHeader eyebrow="Parent Reviews" title="What Parents Say About Our Maths Tutors" />
      <div className="mx-auto mt-16 grid max-w-[1360px] gap-8 md:grid-cols-3">
        {testimonials.map((item) => (
          <article key={item.name} className="min-h-[360px] rounded-[24px] border border-[#dfe6f5] bg-white px-9 py-9">
            <div className="flex gap-2 text-[#f6c000]" aria-label="5 star rating">
              {[1, 2, 3, 4, 5].map((star) => (
                <StarReviewIcon key={star} />
              ))}
            </div>
            <p className="mt-7 text-[17px] font-bold leading-[1.45] text-[#57535e]">{item.text}</p>
            <div className="mt-8 flex items-center gap-5">
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[#08b7c2] text-white">
                <UserIcon />
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
          Start Maths Tutoring
          <br />
          <span className="text-[#F98925]">Today. Free Trial Per Subject.</span>
        </h2>
        <p className="mx-auto mt-5 max-w-[610px] text-[14px] font-medium leading-[1.6] text-white/76">
          Book a free 1-hour trial session with a matched Maths tutor for United Kingdom. No payment details required.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a className="inline-flex h-[54px] items-center gap-2 rounded-[18px] bg-[#F98925] px-8 text-[15px] font-black text-white" href="#trial">
            Request a Free Trial <ArrowRightIcon />
          </a>
          <a className="inline-flex h-[54px] items-center rounded-[18px] border border-[#F98925] px-8 text-[15px] font-black text-[#F98925]" href="/assets/images/Maths%20%E2%80%94%20United%20Kingdom.pdf">Download Curriculum Guide</a>
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

function StarReviewIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
      <path d="m10 2.2 2.25 4.55 5.02.73-3.63 3.54.86 5-4.5-2.36-4.5 2.36.86-5-3.63-3.54 5.02-.73Z" />
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

function UserIcon() {
  return (
    <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="8" r="3.2" fill="currentColor" />
      <path d="M5.5 19c.8-4 3.15-6 6.5-6s5.7 2 6.5 6" fill="currentColor" />
    </svg>
  );
}
