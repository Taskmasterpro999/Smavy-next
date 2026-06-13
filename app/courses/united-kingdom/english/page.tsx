import Image from "next/image";
import Navbar from "../../../components/Navbar";

const pdfHref = "/assets/images/English%20%E2%80%94%20United%20Kingdom.pdf";

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
  { label: "AS Y12", id: "a-level-year-12" },
  { label: "A2 Y13", id: "a-level-year-13" },
];

const courseCards = [
  {
    id: "ks1-year-1",
    title: "KS1 Year 1 English",
    stage: "KS1",
    meta: "UK - KS1 Year 1:",
    desc: "National Curriculum. Phonics screening check preparation. Building foundational literacy through systematic phonics aligned to the National Curriculum.",
    topics: ["Phonics - Phase 3 and 4 sounds (Letters and Sounds)", "Common exception (sight) words", "Reading aloud with increasing fluency", "Sentence writing with basic punctuation", "Oral retelling and listening skills"],
    outcome: "Students decode phonics-based texts, write simple sentences accurately and retell stories in sequence.",
    download: "Download KS1 Y1",
  },
  {
    id: "ks1-year-2",
    title: "KS1 Year 2 English",
    stage: "KS1",
    meta: "UK - KS1 Year 2:",
    desc: "KS1 SATs preparation. Reading paper and writing assessment. Consolidating KS1 literacy in preparation for Year 2 SATs and transition to KS2.",
    topics: ["Phonics - Phase 5 consolidation", "Handwriting and presentation standards", "Reading comprehension - inference and deduction", "Narrative and non-chronological report writing", "Grammar - expanded noun phrases, conjunctions"],
    outcome: "Students read fluently, write structured texts with variety and approach KS1 SATs with confidence.",
    download: "Download KS1 Y2",
  },
  {
    id: "ks2-year-3",
    title: "KS2 Year 3 English",
    stage: "KS2",
    meta: "UK - KS2 Year 3:",
    desc: "National Curriculum. Building towards KS2 SATs in Year 6. Building KS2 reading and writing skills - comprehension, grammar and varied text types.",
    topics: ["Reading comprehension - retrieval and inference", "Narrative and report writing", "Grammar - inverted commas, adverbials", "Spelling - statutory word lists Year 3/4", "Cursive handwriting development"],
    outcome: "Students write across a range of text types, apply grammar rules in context and read with genuine understanding.",
    download: "Download KS2 Y3",
  },
  {
    id: "ks2-year-4",
    title: "KS2 Year 4 English",
    stage: "KS2",
    meta: "UK - KS2 Year 4:",
    desc: "National Curriculum. Strong literacy focus alongside MTC. Developing extended writing and analytical reading at KS2 level.",
    topics: ["Extended narrative and persuasive writing", "Reading comprehension - language effect and structure", "Grammar - relative clauses, fronted adverbials", "Vocabulary - root words and affixes", "Poetry reading and writing"],
    outcome: "Students write extended pieces confidently, discuss author choices and apply advanced grammar structures.",
    download: "Download KS2 Y4",
  },
  {
    id: "ks2-year-5",
    title: "KS2 Year 5 English",
    stage: "KS2",
    meta: "UK - KS2 Year 5:",
    desc: "National Curriculum. Direct preparation for Year 6 KS2 SATs. Upper KS2 - advanced text types and SATs reading and writing readiness.",
    topics: ["SATs reading comprehension practice", "Persuasive and discursive writing", "Grammar - passive voice, modal verbs, subjunctive", "Vocabulary - technical and subject-specific words", "Evaluating and editing own writing"],
    outcome: "Students write to a high KS2 standard, discuss authorial intent confidently and edit work for accuracy.",
    download: "Download KS2 Y5",
  },
  {
    id: "ks2-year-6",
    title: "KS2 Year 6 English",
    stage: "KS2",
    meta: "UK - KS2 Year 6:",
    desc: "SATs - Reading paper, GPS paper and extended writing task. Final KS2 year - SATs mastery and secondary school transition readiness.",
    topics: ["KS2 SATs past papers - reading and GPS", "SPAG consolidation - punctuation, grammar, spelling", "Extended writing - narrative and non-fiction", "Reading - analysing language, structure and effect", "Secondary transition preparation"],
    outcome: "Students perform at expected or greater depth in KS2 SATs and transition as confident readers and writers.",
    download: "Download KS2 Y6",
  },
  {
    id: "ks3-year-7",
    title: "KS3 Year 7 English",
    stage: "KS3",
    meta: "UK - KS3 Year 7:",
    desc: "National Curriculum secondary English. GCSE readiness begins. Secondary English foundations - close reading, structured writing and literary devices.",
    topics: ["Close reading and text analysis", "Essay writing - structured paragraphs (PEEL)", "Literary devices - theme, character, narrative voice", "Comparing fiction and non-fiction texts", "Speaking and listening - presentations"],
    outcome: "Students write structured analytical paragraphs, identify literary devices and compare texts with developing confidence.",
    download: "Download KS3 Y7",
  },
  {
    id: "ks3-year-8",
    title: "KS3 Year 8 English",
    stage: "KS3",
    meta: "UK - KS3 Year 8:",
    desc: "Pre-GCSE skill building. AQA / Edexcel / OCR aligned. Deepening analytical skills - preparing for GCSE English Language and Literature.",
    topics: ["Extended essay writing - developing argument", "Unseen text analysis - language and structure", "Literary devices - symbolism, irony and context", "Creative writing - narrative and descriptive", "Grammar - complex sentences and varied punctuation"],
    outcome: "Students write multi-paragraph essays with clear argument and produce polished creative writing.",
    download: "Download KS3 Y8",
  },
  {
    id: "ks3-year-9",
    title: "KS3 Year 9 English",
    stage: "KS3",
    meta: "UK - KS3 Year 9:",
    desc: "Direct bridge to GCSE Year 10. All major exam boards. Pre-GCSE bridging year - GCSE-style responses and coursework introduction.",
    topics: ["GCSE-style reading comprehension responses", "GCSE-style transactional writing tasks", "Literary analysis - comparing set texts", "Spoken language preparation", "Controlled assessment readiness"],
    outcome: "Students produce GCSE-standard responses in both Language and Literature, understanding all assessment objectives.",
    download: "Download KS3 Y9",
  },
  {
    id: "gcse-year-10",
    title: "GCSE Year 10 English",
    stage: "GCSE",
    meta: "UK - GCSE Year 1:",
    desc: "AQA / Edexcel / OCR English Language and Literature. GCSE Year 1 - English Language and Literature component one.",
    topics: ["GCSE Language - creative and descriptive writing", "GCSE Language - reading literature and non-fiction", "GCSE Literature - set prose and poetry study", "Literary analysis - structure, language and form", "Timed GCSE-style exam responses with mark scheme feedback"],
    outcome: "Students produce GCSE-quality responses in Language and Literature, fully familiar with assessment objectives.",
    download: "Download GCSE Y10",
  },
  {
    id: "gcse-year-11",
    title: "GCSE Year 11 English",
    stage: "GCSE",
    meta: "UK - GCSE Year 2:",
    desc: "Full past paper practice and spoken language assessment. GCSE final year - exam mastery and spoken language assessment.",
    topics: ["GCSE Language Paper 1 and Paper 2 technique", "GCSE Literature - comparative essay writing", "Spoken Language assessment preparation", "Past paper practice with mark scheme feedback", "Revision strategy and exam time management"],
    outcome: "Students approach all GCSE English assessments with confidence, maximising their grade outcomes.",
    download: "Download GCSE Y11",
  },
  {
    id: "a-level-year-12",
    title: "A-Level Year 12 (AS) English",
    stage: "A-Level",
    meta: "UK - A-Level Year 1:",
    desc: "AQA / Edexcel / OCR Language and Literature components. A-Level Year 1 - text study, language investigation and NEA introduction.",
    topics: ["A-Level text study - prose, poetry and drama", "Language investigation coursework planning", "Comparative analysis - A-Level essay technique", "Unseen text analysis and annotation", "NEA independent project introduction"],
    outcome: "Students produce A-Level quality comparative essays and begin their language investigation.",
    download: "Download AS Y12",
  },
  {
    id: "a-level-year-13",
    title: "A-Level Year 13 (A2) English",
    stage: "A-Level",
    meta: "UK - A-Level Year 2:",
    desc: "Past papers, NEA completion and UCAS support. A-Level final year - exam mastery and NEA completion.",
    topics: ["A-Level exam essays - all text type components", "NEA completion to A-Level standard", "Comparative essay refinement", "Timed exam practice with A-Level mark schemes", "UCAS personal statement support"],
    outcome: "Students approach all A-Level assessments with confidence, complete NEA to a high standard and write compelling personal statements.",
    download: "Download A2 Y13",
  },
];

const differenceCards = [
  {
    icon: "tailored",
    title: "Tailored to Each Student",
    text: "Every student learns English differently. Our tutors identify specific gaps - grammar, essay structure or reading fluency - and build a personalised plan from lesson one.",
  },
  {
    icon: "feedback",
    title: "Real Feedback on Writing",
    text: "Students submit written work during sessions and receive detailed, line-by-line feedback. Not generic comments - specific, actionable improvements every time.",
  },
  {
    icon: "exam",
    title: "Exam-Aware Teaching",
    text: "Our tutors know exactly what markers look for in each country's exams. Students learn not just the content, but how to present it for maximum marks.",
  },
];

const testimonials = [
  {
    name: "Rohan Kamble",
    role: "Parent - India",
    flag: "flag-india.svg",
    avatar: "/assets/images/nav/nav/image 7.png",
    text: "My son Aajoy attends English classes every Tuesdays and Thursdays with the tutor Ramesh Krishnan. The sessions are engaging, well structured and have helped him improve his confidence in reading and writing.",
  },
  {
    name: "Vandana Bains",
    role: "Parent - Australia",
    flag: "flag-australia.svg",
    avatar: "/assets/images/nav/nav/image 6.png",
    text: "My son is using Smavy online tutoring for last one year. His English tutor Amala Kurup has been patient, consistent and very helpful with his reading and writing skills.",
  },
  {
    name: "Bapeswara Gadicherla",
    role: "Student - Australia",
    flag: "flag-australia.svg",
    text: "Thanks Smavy for their platform and giving my child her favourite English teacher, Amala Kurup. Couldn't ask for a better teacher with such good skills and patience.",
  },
];

const faqs = [
  ["What year levels do you offer English tutoring for?", "We offer 1:1 English tutoring for Year 1-13 in United Kingdom, including IB Diploma. Each year level has a downloadable curriculum guide on this page."],
  ["Can you help with specific school assignments?", "Yes - tutors regularly help with essays, reading responses, creative writing pieces and comprehension exercises. Just bring the task to your session."],
  ["What does a typical English tutoring session look like?", "Sessions begin with reviewing previous homework, followed by focused instruction on a specific skill, then guided practice with immediate tutor feedback. Sessions are 1 hour."],
  ["What is the free curriculum download?", "Each year level card includes a downloadable PDF curriculum guide showing exactly what topics are covered, skills developed and the expected learning outcomes. Free, no sign-up required."],
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

export default function EnglishUnitedKingdomPage() {
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
        Home <span className="mx-2 text-[#05b4bb]">/</span> Courses <span className="mx-2 text-[#05b4bb]">/</span> Academic Tutoring <span className="mx-2 text-[#05b4bb]">/</span> English - United Kingdom
      </div>
      <div className="mt-12 grid items-center gap-10 lg:grid-cols-[1.25fr_0.75fr]">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-[#46c7db]/70 bg-[#0a235f] px-4 py-2 text-[11px] font-bold text-[#48d8e8]">
            <Image src="/assets/images/flags/flag-uk.svg" alt="" width={18} height={18} className="h-[18px] w-[18px] rounded-full object-cover" />
            Academic Tutoring - United Kingdom
          </span>
          <h1 className="mt-6 max-w-[850px] text-[40px] font-black leading-[1.04] tracking-[0] md:text-[64px]">
            Online <span className="text-[#05B4BB]">English Tutoring</span>
            <br />
            Year 1-13
          </h1>
          <p className="mt-6 max-w-[760px] text-[15px] font-semibold leading-[1.6] text-white/78 md:text-[17px]">
            Expert 1:1 English tutors helping United Kingdom students master reading, writing, comprehension, grammar and literature - from early literacy through to advanced analytical writing.
          </p>
          <div className="mt-6 flex flex-wrap gap-3 text-[12px] font-bold text-white/72">
            {["Reading & Comprehension", "Creative & Analytical Writing", "Grammar & Vocabulary", "Literature & Texts", "Exam Preparation"].map((item) => (
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
        <Image src="/assets/images/Image (Replace)-15.png" alt="Student in an online UK English tutoring session" width={1240} height={460} priority className="h-auto w-full object-cover" />
      </div>
    </section>
  );
}

function HeroSummaryCard() {
  return (
    <div className="justify-self-center rounded-[28px] border border-[#6e83bd] bg-[#3c5597] p-7 shadow-[0_24px_70px_rgba(3,12,49,0.24)] md:w-[350px]">
      <h2 className="flex items-center gap-3 text-[17px] font-black">
        <span className="h-3 w-3 rounded-full bg-[#f6ca00]" />
        English - United Kingdom
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
          Each year has its own focused English course with curriculum alignment, key topics and learning outcomes. Pick your child&apos;s year below or use the year buttons above.
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
        <LeftSectionHeader eyebrow="Why Smavy English" title="What Makes Our English Tutoring Different" />
      </div>
      <div className="mx-auto mt-16 grid max-w-[1240px] gap-9 md:grid-cols-3">
        {differenceCards.map((card) => (
          <article key={card.title} className="min-h-[262px] rounded-[24px] border border-[#dfe6f5] bg-white px-9 py-9">
            <EnglishDifferenceIcon type={card.icon} />
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
      <CenteredPillHeader eyebrow="Parent Reviews" title="What Parents Say About Our English Tutors" />
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
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[#08b7c2] text-white">
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
      <SectionHeader eyebrow="FAQs" title="Common Questions About Online English Tutoring" />
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
          Start English Tutoring
          <br />
          <span className="text-[#F98925]">Today. Free Trial Per Subject.</span>
        </h2>
        <p className="mx-auto mt-5 max-w-[610px] text-[14px] font-medium leading-[1.6] text-white/76">
          Book a free 1-hour trial session with a matched English tutor for United Kingdom. No payment details required.
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

function EnglishDifferenceIcon({ type }: { type: string }) {
  const color = type === "tailored" ? "bg-[#ff7f20]" : type === "feedback" ? "bg-[#20b455]" : "bg-[#08b7c2]";

  return (
    <span className={`flex h-[49px] w-[49px] items-center justify-center rounded-[14px] ${color} text-white`}>
      <svg className="h-[25px] w-[25px]" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        {type === "tailored" ? (
          <>
            <circle cx="12" cy="12" r="7.5" stroke="currentColor" strokeWidth="2.4" />
            <circle cx="12" cy="12" r="3.7" stroke="currentColor" strokeWidth="2.4" />
            <circle cx="12" cy="12" r="1.3" fill="currentColor" />
          </>
        ) : type === "feedback" ? (
          <>
            <path d="M6.2 5.3h8.2a1.4 1.4 0 0 1 1.4 1.4v10.6a1.4 1.4 0 0 1-1.4 1.4H6.2a1.4 1.4 0 0 1-1.4-1.4V6.7a1.4 1.4 0 0 1 1.4-1.4Z" stroke="currentColor" strokeLinejoin="round" strokeWidth="2.2" />
            <path d="M9.1 14.4 17.5 6l2.1 2.1-8.4 8.4-3 .9Z" fill="currentColor" />
            <path d="m16.1 7.4 2.1 2.1" stroke="#20b455" strokeLinecap="round" strokeWidth="1.5" />
          </>
        ) : (
          <>
            <path d="M5.4 5.2h4.4v13.6H5.4zM9.8 5.2h4.4v13.6H9.8z" stroke="currentColor" strokeLinejoin="round" strokeWidth="2" />
            <path d="m15 5.8 3.1-.9 3.4 12.7-3.1.9z" stroke="currentColor" strokeLinejoin="round" strokeWidth="2" />
            <path d="M7.6 8v8M12 8v8M17.3 8.5l2 7.3" stroke="currentColor" strokeLinecap="round" strokeWidth="1.8" />
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
