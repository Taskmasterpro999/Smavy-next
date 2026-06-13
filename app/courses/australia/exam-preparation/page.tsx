import Image from "next/image";
import Navbar from "../../../components/Navbar";

const pdfHref = "/assets/images/Exam%20Preparation%20-%20AU.pdf";

const examButtons = [
  { label: "NAPLAN", id: "naplan" },
  { label: "Selective Entry", id: "selective-entry" },
  { label: "OC Prep", id: "oc-prep" },
  { label: "Scholarship", id: "scholarship" },
  { label: "ICAS", id: "icas" },
];

const examCards = [
  {
    id: "naplan",
    title: "NAPLAN Test Preparation",
    badge: "National Assessment",
    meta: "Year 3, 5, 7, 9 - All states",
    desc: "Targeted NAPLAN preparation across all four test domains. Students practise with official-style questions, learn time-management strategies and build confidence for Australia's national literacy and numeracy assessment.",
    note: "AU - All states: NAPLAN is assessed in Years 3, 5, 7 and 9 across all Australian states. Tests cover Writing, Reading, Language Conventions and Numeracy.",
    topics: ["Writing - narrative and persuasive text types for each year band", "Reading comprehension - retrieving, interpreting and evaluating texts", "Language conventions - spelling, grammar and punctuation", "Numeracy - number, measurement, geometry and statistics", "Timed practice tests under exam conditions"],
    outcome: "Students approach all four NAPLAN domains confidently, completing timed practice tests at or above the expected standard for their year level.",
    download: "Download Course Guide",
  },
  {
    id: "icas",
    title: "ICAS Exam Preparation",
    badge: "International Competitions",
    meta: "Year 3-10 - All states",
    desc: "Preparation for ICAS across all subject areas. Students practise with past ICAS questions and develop the higher-order thinking skills that ICAS rewards - going well beyond the school curriculum.",
    note: "AU - All states: ICAS tests are offered in English, Mathematics, Science, Writing and Digital Technologies. High Distinction medals are awarded to top scorers.",
    topics: ["ICAS English - comprehension and language questions", "ICAS Mathematics - problem-solving beyond classroom level", "ICAS Science - reasoning and scientific knowledge", "ICAS Writing - crafted written responses for top marks", "Past ICAS paper practice with subject-specific feedback"],
    outcome: "Students achieve High Distinction or Distinction in their chosen ICAS subjects, applying higher-order thinking strategies beyond the standard school curriculum.",
    download: "Download Course Guide",
  },
  {
    id: "oc-prep",
    title: "OC Exam Preparation (NSW)",
    badge: "OC & Selective Entry",
    meta: "Year 4-5 - NSW",
    desc: "Comprehensive preparation for the NSW OC Placement Test. Students master all three test sections with targeted skill-building and full mock tests in the exact OC format.",
    note: "NSW: The Opportunity Class Placement Test selects Year 5 students for selective Opportunity Classes. Sitting in Year 4 Term 3, it tests Reading, Mathematical Reasoning and Thinking Skills.",
    topics: ["Reading - comprehension, inference and vocabulary in context", "Mathematical Reasoning - problem-solving beyond the classroom", "Thinking Skills - verbal and non-verbal reasoning", "Exam timing - pacing strategies for the OC format", "Full mock OC tests with detailed per-section feedback"],
    outcome: "Students complete timed OC-style mock tests at a competitive score, applying systematic strategies across all three test sections.",
    download: "Download Course Guide",
  },
  {
    id: "selective-entry",
    title: "Selective Entry Preparation - Grade 7 (NSW)",
    badge: "OC & Selective Entry",
    meta: "Year 5-6 - NSW",
    desc: "Intensive preparation for the NSW Selective Entry test. Our tutors know the exact question types, difficulty calibration and marking criteria, building all four sections simultaneously.",
    note: "NSW: The NSW Selective High School Placement Test is one of Australia's most competitive exams. Sitting in Year 6, it assesses Reading, Mathematical Reasoning, Thinking Skills and Writing.",
    topics: ["Reading - literary and informational texts at selective difficulty", "Mathematical Reasoning - multi-step problems and data interpretation", "Thinking Skills - abstract, spatial and verbal reasoning", "Writing - persuasive and imaginative texts under time pressure", "Full Selective mock tests - NSW official format with scoring"],
    outcome: "Students perform at a competitive selective-entry standard across all four test sections, completing timed mock exams with the accuracy and speed required for top selective schools.",
    download: "Download Course Guide",
  },
  {
    id: "selective-vic",
    title: "Selective Entry Preparation - Grade 8 & 9 (VIC)",
    badge: "OC & Selective Entry",
    meta: "Year 7-8 - VIC",
    desc: "Targeted preparation for Victorian selective school entry. Covers all subject areas tested, with school-specific mock exams calibrated for Melbourne High, MacRob, Nossal and Suzanne Cory.",
    note: "VIC: Victoria's selective schools test in Year 7 for Year 8 entry and Year 8 for Year 9 entry. Tests cover Mathematics, English, Humanities and Science reasoning.",
    topics: ["Mathematics - problem-solving at VIC selective difficulty", "English - comprehension and analytical writing", "Humanities - geography, history and civics reasoning", "Science - scientific reasoning and data interpretation", "VIC selective mock tests - school-specific calibration"],
    outcome: "Students demonstrate selective-entry level performance across all four subject areas, prepared specifically for their target Victorian selective school.",
    download: "Download Course Guide",
  },
  {
    id: "selective-qld",
    title: "Selective Entry Preparation - Queensland",
    badge: "OC & Selective Entry",
    meta: "Developing - QLD",
    desc: "Comprehensive preparation for Queensland selective high school entry. Covers all test components used by QLD selective schools, with school-specific mock exams and targeted reasoning and academic skills development.",
    note: "QLD: Queensland selective schools include Brisbane State High School, Indooroopilly State High, QASMT and others. Entry is highly competitive, testing in Year 6 for Year 7 entry.",
    topics: ["Verbal Reasoning - QLD selective-style questions and strategies", "Numerical Reasoning - multi-step quantitative problems", "Abstract Reasoning - pattern and spatial reasoning", "Academic ability - English and Mathematics at selective level", "Full QLD selective mock tests with scoring feedback"],
    outcome: "Students perform at a competitive selective-entry standard for Queensland selective high schools across reasoning and academic ability domains.",
    download: "Download Course Guide",
  },
  {
    id: "selective-wa",
    title: "Selective Entry Preparation - WA (Perth)",
    badge: "OC & Selective Entry",
    meta: "Year 4-5 - WA",
    desc: "Comprehensive preparation for the WA Academic Selective Entrance Test. Students develop all three reasoning domains alongside English and Mathematics at selective-entry standard.",
    note: "WA: Western Australia's selective schools include Perth Modern School, John Curtin College of the Arts, Shenton College and specialist colleges. Entry is via the Academic Selective Entrance Test.",
    topics: ["Verbal Reasoning - ASET question types and strategies", "Numerical Reasoning - quantitative and logical problems", "Abstract Reasoning - pattern and matrix completion", "Full WA ASET mock tests - scoring and feedback", "WA selective school-specific preparation - Perth Modern, John Curtin and others"],
    outcome: "Students perform at WA selective entry standard on ASET mock tests, with strong reasoning skills across all domains and school-specific familiarity.",
    download: "Download Course Guide",
  },
  {
    id: "scholarship",
    title: "Scholarship Preparation (EDUTEST)",
    badge: "Scholarship Tests",
    meta: "Year 4-8 - All states",
    desc: "Comprehensive EDUTEST scholarship preparation covering all five test sections. Students practise with EDUTEST-style questions and develop the speed and accuracy required for a top scholarship result.",
    note: "AU - All states: EDUTEST exams are used by independent schools nationally for Year 5, 7 and 9 scholarship selection. Tests cover Verbal Reasoning, Numerical Reasoning, Abstract Reasoning, Reading and Mathematics.",
    topics: ["Verbal Reasoning - EDUTEST analogies and word problems", "Numerical Reasoning - quantitative problem-solving", "Abstract Reasoning - pattern completion and matrix questions", "Reading Comprehension - EDUTEST passage analysis", "Mathematics Achievement - curriculum-based problem solving"],
    outcome: "Students achieve competitive EDUTEST scholarship scores across all five sections, with systematic strategies for each question type.",
    download: "Download Course Guide",
  },
  {
    id: "scholarship-acer",
    title: "Scholarship Preparation (ACER)",
    badge: "Scholarship Tests",
    meta: "Year 4-8 - All states",
    desc: "Expert ACER scholarship preparation. ACER's unique question style requires higher-order thinking rather than rote recall - our tutors are trained specifically in ACER's approach.",
    note: "AU - All states: ACER exams are used by leading independent schools nationally for Year 5, 7 and 9 scholarship selection. Tests assess Written Expression, Mathematics and Humanities/Science reasoning.",
    topics: ["Written Expression - ACER-style creative and persuasive writing", "Mathematics - ACER problem-solving and data analysis", "Humanities - historical and geographical reasoning", "Science Reasoning - interpreting data and experimental scenarios", "Full ACER mock tests with detailed scoring feedback"],
    outcome: "Students produce scholarship-quality written responses and achieve competitive ACER scores in Mathematics and Humanities/Science reasoning.",
    download: "Download Course Guide",
  },
  {
    id: "scholarship-aas",
    title: "Scholarship Preparation (AAS)",
    badge: "Scholarship Tests",
    meta: "Year 4-8 - All states",
    desc: "Targeted AAS scholarship preparation covering all four test areas. Students develop the specific skills and question familiarity needed for AAS scholarship success.",
    note: "AU - All states: AAS scholarship exams are used by leading independent schools including GPS schools. Tests cover Reading, Mathematics, Written Expression and Thinking Skills.",
    topics: ["Reading Comprehension - AAS literary and informational texts", "Mathematics - AAS problem-solving at scholarship level", "Written Expression - crafted responses for AAS writing tasks", "Thinking Skills - reasoning and logic questions", "Full AAS mock tests with benchmark scoring"],
    outcome: "Students perform at scholarship level across all four AAS test sections with strong written expression and systematic reasoning strategies.",
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
  ["How far in advance should we start?", "For selective entry and scholarship exams we recommend 6-12 months before the test. For NAPLAN, 2-3 months of targeted preparation is typically sufficient."],
  ["Do you provide mock exam and practice papers?", "Yes - timed mock exams and past paper practice are part of every exam preparation programme. Tutors use official past papers where available and high-quality practice papers calibrated to the real exam where past papers are not public."],
  ["Can students prepare for multiple exams at once?", "Yes - students regularly prepare for NAPLAN and Selective Entry simultaneously, or scholarship tests across multiple schools. Each exam has its own dedicated tutor and session."],
  ["What is your success rate?", "Students who complete a full preparation programme of 20+ sessions have an 80%+ offer rate from their target schools. Results depend on the student's starting point and consistency of practice between sessions."],
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

export default function ExamPreparationAustraliaPage() {
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
        Home <span className="mx-2 text-[#05b4bb]">/</span> Courses <span className="mx-2 text-[#05b4bb]">/</span> Academic Tutoring <span className="mx-2 text-[#05b4bb]">/</span> Exam Preparation - Australia
      </div>
      <div className="mt-12 grid items-center gap-10 lg:grid-cols-[1.25fr_0.75fr]">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-[#46c7db]/70 bg-[#0a235f] px-4 py-2 text-[11px] font-bold text-[#48d8e8]">
            <Image src="/assets/images/flags/flag-australia.svg" alt="" width={18} height={18} className="h-[18px] w-[18px] rounded-full object-cover" />
            Exam Preparation - Australia
          </span>
          <h1 className="mt-6 max-w-[850px] text-[40px] font-black leading-[1.04] tracking-[0] md:text-[64px]">
            Exam Preparation
            <br />
            <span className="text-[#05B4BB]">Australia - Year 3-10</span>
          </h1>
          <p className="mt-6 max-w-[760px] text-[15px] font-semibold leading-[1.6] text-white/78 md:text-[17px]">
            Expert 1:1 online exam preparation for Australia students. Our tutors know every marking scheme, question type and scoring strategy for every exam we prepare students for.
          </p>
          <div className="mt-6 flex flex-wrap gap-3 text-[12px] font-bold text-white/72">
            {["OC NSW", "Selective NSW & VIC", "EDUTEST - ACER - AAS - QLD", "GATE WA", "ICAS", "NAPLAN"].map((item) => (
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
        <HeroSummaryCard />
      </div>
      <div className="mt-12 overflow-hidden rounded-[22px]">
        <Image src="/assets/images/Image (Replace)-12.png" alt="Student preparing for Australian exams with online tutoring support" width={1240} height={460} priority className="h-auto w-full object-cover" />
      </div>
    </section>
  );
}

function HeroSummaryCard() {
  return (
    <div className="justify-self-center rounded-[28px] border border-[#6e83bd] bg-[#3c5597] p-7 shadow-[0_24px_70px_rgba(3,12,49,0.24)] md:w-[350px]">
      <h2 className="flex items-center gap-3 text-[17px] font-black">
        <span className="h-3 w-3 rounded-full bg-[#f6ca00]" />
        Exam Prep - Australia
      </h2>
      <div className="mt-6 space-y-4">
        {[["Courses available", "10 exams"], ["Session length", "1 hour"], ["Format", "1:1 only"], ["Country", "Australia"], ["Free trial", "1 Per Subject"], ["Tutor rating", "4.8"]].map(([label, value]) => (
          <div key={label} className="flex justify-between border-b border-[#6f84bd]/70 pb-4 text-[12px] font-bold last:border-0 last:pb-0">
            <span className="text-white/55">{label}</span>
            <span className={label === "Tutor rating" ? "flex items-center gap-1.5 text-white" : label === "Free trial" ? "text-[#F98925]" : label === "Courses available" ? "text-[#05D8DE]" : label === "Country" ? "flex items-center gap-1.5 text-white" : "text-white"}>
              {label === "Country" && <Image src="/assets/images/flags/flag-australia.svg" alt="" width={15} height={15} className="h-[15px] w-[15px] rounded-full object-cover" />}
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
        <LeftSectionHeader eyebrow="Exam Preparation" title="Australia Exam Courses" highlight="NAPLAN, Selective Entry, OC, Scholarship and ICAS" />
        <p className="mt-5 max-w-[900px] text-[14px] font-medium leading-[1.6] text-[#6d7393]">
          NAPLAN national assessment, NSW OC and Selective Entry, VIC/QLD/WA selective school entry, scholarship tests from EDUTEST, ACER and AAS, and ICAS competitions.
        </p>
      </div>
      <div className="mx-auto mt-10 grid max-w-[1240px] gap-7 md:grid-cols-2 lg:grid-cols-3">
        {examCards.map((card) => (
          <ExamCard key={card.title} card={card} />
        ))}
      </div>
    </section>
  );
}

function ExamCard({ card }: { card: (typeof examCards)[number] }) {
  const isScholarship = card.id.startsWith("scholarship");
  const isSelective = card.id.startsWith("selective");

  return (
    <article id={card.id} className="scroll-mt-28 rounded-[18px] border border-transparent bg-white p-6 shadow-[0_12px_30px_rgba(18,35,99,0.06)] transition duration-300 target:-translate-y-1 target:border-[#F98925] target:ring-4 target:ring-[#F98925]/20 target:shadow-[0_18px_45px_rgba(249,137,37,0.18)]">
      <div className="flex items-start justify-between gap-3">
        <div>
          <span className="text-[11px] font-black text-[#ff5f52]">{card.badge}</span>
          <h3 className="mt-2 text-[21px] font-black leading-tight text-[#102877]">{card.title}</h3>
        </div>
        <span className={`rounded-full px-3 py-1 text-[9px] font-black uppercase ${isScholarship ? "bg-[#fff0eb] text-[#F98925]" : isSelective ? "bg-[#fff7df] text-[#e6a400]" : "bg-[#eafff1] text-[#20b455]"}`}>
          {card.id === "naplan" ? "NAPLAN" : card.id === "icas" ? "ICAS" : isScholarship ? "Scholarship" : "Selective"}
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
      <SectionHeader eyebrow="FAQs" title="Common Questions About Exam Preparation - Australia" />
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
