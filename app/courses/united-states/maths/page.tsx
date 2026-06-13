import Image from "next/image";
import Navbar from "../../../components/Navbar";

const pdfHref = "/assets/images/Maths%20%E2%80%94%20United%20States.pdf";

const yearButtons = [
  { label: "Kinder", id: "kindergarten" },
  { label: "G1", id: "grade-1" },
  { label: "G2", id: "grade-2" },
  { label: "G3", id: "grade-3" },
  { label: "G4", id: "grade-4" },
  { label: "G5", id: "grade-5" },
  { label: "G6", id: "grade-6" },
  { label: "G7", id: "grade-7" },
  { label: "G8", id: "grade-8" },
  { label: "Alg1 G9", id: "algebra-1-grade-9" },
  { label: "Geom G10", id: "geometry-grade-10" },
  { label: "PreCalc G11", id: "precalculus-grade-11" },
  { label: "AP Calc G12", id: "ap-calculus-grade-12" },
];

const courseCards = [
  {
    id: "kindergarten",
    title: "Kindergarten Math",
    stage: "Elementary",
    meta: "US - Common Core Math Kindergarten:",
    desc: "Counting and cardinality, operations, geometry. Building number sense, counting and shapes aligned to Common Core Standards.",
    topics: ["Counting to 100 by 1s and 10s", "Comparing numbers - more, less, equal", "Addition and subtraction to 10", "2D shapes - squares, triangles, circle", "Measurement - length and weight comparison"],
    outcome: "Students count to 100, compare numbers and add and subtract within 10 confidently.",
    download: "Download Kinder",
  },
  {
    id: "grade-1",
    title: "Grade 1 Math",
    stage: "Elementary",
    meta: "US - Common Core Math Grade 1:",
    desc: "Operations, place value, measurement, geometry. Developing early number operations and place value.",
    topics: ["Place value - tens and ones", "Addition and subtraction within 20 (fluency)", "Introduction to measurement - length in units", "Telling time - to the hour and half-hour", "Sorting and classifying shapes"],
    outcome: "Students add and subtract within 20 fluently, understand tens and ones and tell time to the half-hour.",
    download: "Download G1",
  },
  {
    id: "grade-2",
    title: "Grade 2 Math",
    stage: "Elementary",
    meta: "US - Common Core Math Grade 2:",
    desc: "Number operations, measurement, data and geometry. Building arithmetic fluency and introducing multiplication concepts.",
    topics: ["Numbers to 1000 - place value and comparison", "Addition and subtraction within 1000", "Introduction to multiplication - equal groups", "Measurement - rulers, centimetres, inches", "Graphs - picture graphs and bar graphs"],
    outcome: "Students add and subtract within 1000, represent multiplication with equal groups and read measurement tools.",
    download: "Download G2",
  },
  {
    id: "grade-3",
    title: "Grade 3 Math",
    stage: "Elementary",
    meta: "US - Common Core Math Grade 3:",
    desc: "Multiplication, division and fractions - third grade standards.",
    topics: ["Multiplication and division - products and quotients within 100", "Fractions - unit fractions on a number line", "Area - unit squares", "Perimeter of polygons", "Time - elapsed time to the minute"],
    outcome: "Students multiply and divide within 100, understand unit fractions and calculate area and perimeter of simple polygons.",
    download: "Download G3",
  },
  {
    id: "grade-4",
    title: "Grade 4 Math",
    stage: "Elementary",
    meta: "US - Common Core Math Grade 4:",
    desc: "Multi-digit operations, fractions, decimals, geometry. Deepening number operations - multi-digit arithmetic and fractions.",
    topics: ["Multi-digit multiplication and division", "Equivalent fractions and comparing fractions", "Decimals - tenths and hundredths", "Angles - measuring with a protractor", "Factors and multiples - prime and composite numbers"],
    outcome: "Students multiply multi-digit numbers, compare fractions and decimals and measure angles with a protractor.",
    download: "Download G4",
  },
  {
    id: "grade-5",
    title: "Grade 5 Math",
    stage: "Elementary",
    meta: "US - Common Core Math Grade 5:",
    desc: "Fractions, decimals, volume and coordinate geometry. Upper elementary - fractions, decimals and introduction to coordinate geometry.",
    topics: ["Fractions - all four operations", "Decimals - multiplication and division", "Volume of rectangular prisms", "Coordinate plane - plotting points", "Order of operations - parentheses, exponents"],
    outcome: "Students add, subtract, multiply and divide fractions, calculate volume and apply order of operations confidently.",
    download: "Download G5",
  },
  {
    id: "grade-6",
    title: "Grade 6 Math",
    stage: "Middle",
    meta: "US - Common Core Math Grade 6:",
    desc: "Ratios, expressions and statistics - Grade 6 Common Core.",
    topics: ["Ratios and unit rates", "Dividing fractions by fractions", "Algebraic expressions - writing and evaluating", "One-step equations and inequalities", "Statistics - mean, median, mode, variability"],
    outcome: "Students write and evaluate algebraic expressions, solve one-step equations and calculate statistical measures.",
    download: "Download G6",
  },
  {
    id: "grade-7",
    title: "Grade 7 Math",
    stage: "Middle",
    meta: "US - Common Core Math Grade 7:",
    desc: "Proportional relationships, geometry and probability - Grade 7.",
    topics: ["Proportional relationships and percentages", "Rational number operations - all four operations", "Expressions and equations - multi-step problems", "Geometry - area, surface area and volume", "Probability - simple and compound events"],
    outcome: "Students solve multi-step proportion problems, calculate surface area and volume and find simple and compound probabilities.",
    download: "Download G7",
  },
  {
    id: "grade-8",
    title: "Grade 8 Math",
    stage: "Middle",
    meta: "US - Common Core Math Grade 8:",
    desc: "Functions, linear algebra, geometry. Pre-Algebra and foundations of linear algebra - Grade 8.",
    topics: ["Exponents and scientific notation", "Functions - input-output relationships", "Linear equations - slope and y-intercept", "Simultaneous equations - graphical and algebraic", "Pythagorean theorem and its converse", "Introduction to transformations"],
    outcome: "Students graph linear functions, solve simultaneous equations and apply the Pythagorean theorem confidently.",
    download: "Download G8",
  },
  {
    id: "algebra-1-grade-9",
    title: "Algebra 1 (Grade 9) Math",
    stage: "High School",
    meta: "US - Algebra 1 (Grade 9):",
    desc: "Core high school Algebra. Algebra 1 - linear and quadratic functions, systems of equations.",
    topics: ["Linear functions - slope, graphing, point-slope form", "Systems of linear equations - graphical and algebraic", "Quadratic functions - factoring, vertex form", "Exponential functions - growth and decay", "Statistics - scatter plots and regression"],
    outcome: "Students graph linear and quadratic functions, solve systems of equations and interpret exponential models.",
    download: "Download Alg1 G9",
  },
  {
    id: "geometry-grade-10",
    title: "Geometry (Grade 10) Math",
    stage: "High School",
    meta: "US - Geometry (Grade 10):",
    desc: "SAT Math geometry content. Geometry - proofs, trigonometry and coordinate geometry.",
    topics: ["Congruence and similarity - proofs", "Trigonometric ratios - SOHCAHTOA", "Circles - arc length, sector area, theorems", "Coordinate geometry - distance, midpoint, equations", "Volume of 3D solids - prisms, cones, spheres"],
    outcome: "Students construct geometric proofs, apply trigonometric ratios and calculate volumes of complex 3D solids.",
    download: "Download Geom G10",
  },
  {
    id: "precalculus-grade-11",
    title: "Pre-Calculus (Grade 11) Math",
    stage: "High School",
    meta: "US - Pre-Calculus / AP Statistics (Grade 11):",
    desc: "SAT Math preparation and AP Statistics. Pre-Calculus and AP Statistics - advanced functions, probability and statistics.",
    topics: ["Polynomial and rational functions", "Trigonometry - unit circle, identities", "Sequences and series - arithmetic, geometric", "Limits - introduction to calculus concepts", "AP Statistics - data analysis, probability, inference"],
    outcome: "Students analyse polynomial and trigonometric functions, evaluate limits and apply statistical inference in AP Statistics.",
    download: "Download PreCalc G11",
  },
  {
    id: "ap-calculus-grade-12",
    title: "AP Calculus (Grade 12) Math",
    stage: "High School",
    meta: "US - AP Calculus AB/BC (Grade 12):",
    desc: "AP exam preparation. AP Calculus AB or BC - differential and integral calculus.",
    topics: ["Limits and continuity - formal definitions", "Differentiation - chain rule, implicit differentiation", "Integration - u-substitution, area between curves", "AP Calculus BC - sequences and series, polar coordinates", "AP exam free-response and multiple choice technique"],
    outcome: "Students differentiate and integrate using all standard techniques and produce AP-quality solutions across all exam formats.",
    download: "Download Calc G12",
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
    name: "naresh neladri",
    role: "Parent - Australia",
    flag: "flag-australia.svg",
    avatar: "/assets/images/nav/nav/image 11.png",
    text: "My son started going to this tuition 6 months ago and I can see a lot of improvement in his Math and English skills. The tutors are very knowledgeable and the platform is very easy to use.",
  },
  {
    name: "Geetha Botta",
    role: "Parent - Australia",
    flag: "flag-australia.svg",
    text: "Smavy is very good with helping kids achieve more. My son's English teacher Sapna and Maths teacher Shreya help him so much and allow him to apply himself with more confidence during school.",
  },
  {
    name: "Rajeev Kumar",
    role: "Parent - India",
    flag: "flag-india.svg",
    avatar: "/assets/images/nav/nav/image 12-1.png",
    text: "Smavy has been tutoring my year 13 and also my year 7 children. Teaching by RajaSoundari for science and Neethu for Maths are truly outstanding. The support staff are very helpful and always available.",
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

export default function MathsUnitedStatesPage() {
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
        Home <span className="mx-2 text-[#05b4bb]">/</span> Courses <span className="mx-2 text-[#05b4bb]">/</span> Academic Tutoring <span className="mx-2 text-[#05b4bb]">/</span> Maths - United States
      </div>
      <div className="mt-12 grid items-center gap-10 lg:grid-cols-[1.25fr_0.75fr]">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-[#46c7db]/70 bg-[#0a235f] px-4 py-2 text-[11px] font-bold text-[#48d8e8]">
            <Image src="/assets/images/flags/flag-us.svg" alt="" width={18} height={18} className="h-[18px] w-[18px] rounded-full object-cover" />
            Academic Tutoring - United States
          </span>
          <h1 className="mt-6 max-w-[850px] text-[40px] font-black leading-[1.04] tracking-[0] md:text-[64px]">
            Online <span className="text-[#05B4BB]">Maths Tutoring</span>
            <br />
            Year K-12
          </h1>
          <p className="mt-6 max-w-[760px] text-[15px] font-semibold leading-[1.6] text-white/78 md:text-[17px]">
            Expert 1:1 online Math tutoring for US students from Kindergarten to Grade 12. Common Core Math, SAT Math, ACT Math, AP Calculus AB/BC and AP Statistics preparation. Free first session.
          </p>
          <div className="mt-6 flex flex-wrap gap-3 text-[12px] font-bold text-white/72">
            {["Number & Algebra", "Geometry & Measurement", "Statistics & Probability", "Calculus & Advanced Maths", "SAT Math", "ACT Math", "AP Calculus AB/BC", "AP Statistics", "Common Core"].map((item) => (
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
        <Image src="/assets/images/Image (Replace)-20.png" alt="Student working through US math tutoring problems online" width={1240} height={460} priority className="h-auto w-full object-cover" />
      </div>
    </section>
  );
}

function HeroSummaryCard() {
  return (
    <div className="justify-self-center rounded-[28px] border border-[#6e83bd] bg-[#3c5597] p-7 shadow-[0_24px_70px_rgba(3,12,49,0.24)] md:w-[350px]">
      <h2 className="flex items-center gap-3 text-[17px] font-black">
        <span className="h-3 w-3 rounded-full bg-[#f6ca00]" />
        Maths - United States
      </h2>
      <div className="mt-6 space-y-4">
        {[["Year levels", "Grade K-12"], ["Session length", "1 hour"], ["Format", "1:1 only"], ["Country", "United States"], ["Free trial", "1 Per Subject"], ["Tutor rating", "4.8"]].map(([label, value]) => (
          <div key={label} className="flex justify-between border-b border-[#6f84bd]/70 pb-4 text-[12px] font-bold last:border-0 last:pb-0">
            <span className="text-white/55">{label}</span>
            <span className={label === "Tutor rating" ? "flex items-center gap-1.5 text-white" : label === "Free trial" ? "text-[#F98925]" : label === "Year levels" ? "text-[#05D8DE]" : label === "Country" ? "flex items-center gap-1.5 text-white" : "text-white"}>
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
        <LeftSectionHeader eyebrow="Course Structure" title="13 Individual Year Courses" highlight="United States - Common Core" />
        <p className="mt-5 max-w-[860px] text-[14px] font-medium leading-[1.6] text-[#6d7393]">
          Each year has its own focused Math course with curriculum alignment, key topics and learning outcomes. Pick your child&apos;s year below or use the year buttons above.
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
  const isHigh = card.stage === "High School";
  const isMiddle = card.stage === "Middle";

  return (
    <article id={card.id} className="scroll-mt-28 rounded-[14px] border border-transparent bg-white p-6 shadow-[0_12px_30px_rgba(18,35,99,0.06)] transition duration-300 target:-translate-y-1 target:border-[#F98925] target:ring-4 target:ring-[#F98925]/20 target:shadow-[0_18px_45px_rgba(249,137,37,0.18)]">
      <div className="flex items-center justify-between gap-3">
        <h3 className="text-[18px] font-black text-[#102877]">{card.title}</h3>
        <span className={`rounded-full px-3 py-1 text-[9px] font-black uppercase ${isHigh ? "bg-[#fff0eb] text-[#F98925]" : isMiddle ? "bg-[#fff7df] text-[#e6a400]" : "bg-[#eafff1] text-[#20b455]"}`}>{card.stage}</span>
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
              {item.avatar ? (
                <Image src={item.avatar} alt="" width={56} height={56} className="h-14 w-14 rounded-full object-cover" />
              ) : (
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[#20b455] text-white">
                  <UserIcon />
                </span>
              )}
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
          Book a free 1-hour trial session with a matched Maths tutor for United States. No payment details required.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a className="inline-flex h-[54px] items-center gap-2 rounded-[18px] bg-[#F98925] px-8 text-[15px] font-black text-white" href="#trial">
            Request a Free Trial <ArrowRightIcon />
          </a>
          <a className="inline-flex h-[54px] items-center rounded-[18px] border border-[#F98925] px-8 text-[15px] font-black text-[#F98925]" href={pdfHref}>Download Curriculum Guide</a>
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

function CenteredPillHeader({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="mx-auto max-w-[840px] text-center">
      <span className="inline-flex items-center gap-2 rounded-full bg-[#fff1ef] px-4 py-2 text-[11px] font-black text-[#ff5f52]">
        <span className="h-1.5 w-1.5 rounded-full bg-[#ff5f52]" />
        {eyebrow}
      </span>
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
