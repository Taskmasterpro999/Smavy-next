import Image from "next/image";
import Navbar from "../../../components/Navbar";

const pdfHref = "/assets/images/English%20%E2%80%94%20United%20States.pdf";

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
  { label: "G9", id: "grade-9" },
  { label: "G10", id: "grade-10" },
  { label: "G11", id: "grade-11" },
  { label: "G12", id: "grade-12" },
];

const courseCards = [
  {
    id: "kindergarten",
    title: "Kindergarten English",
    stage: "Elementary",
    meta: "US - Common Core ELA Kindergarten:",
    desc: "Phonological awareness and foundational literacy. Building pre-literacy foundations - phonological awareness, oral language and print concepts.",
    topics: ["Phonological awareness - rhyme and alliteration", "Letter recognition - upper and lower case", "Print concepts - left to right, top to bottom", "Oral language and storytelling", "Pre-writing - fine motor and letter formation"],
    outcome: "Students recognise most letters, understand print concepts and communicate ideas in simple spoken sentences.",
    download: "Download Kinder",
  },
  {
    id: "grade-1",
    title: "Grade 1 English",
    stage: "Elementary",
    meta: "US - Common Core ELA Grade 1:",
    desc: "Phonics and foundational reading skills. Systematic phonics and early reading aligned to Common Core ELA standards.",
    topics: ["Phonics - consonant blends and digraphs", "Sight words - Dolch list Levels 1-2", "Reading fluency with decodable readers", "Opinion writing - basic sentence structure", "Comprehension - asking and answering questions"],
    outcome: "Students read grade-level texts fluently, write simple opinion sentences and retell stories accurately.",
    download: "Download G1",
  },
  {
    id: "grade-2",
    title: "Grade 2 English",
    stage: "Elementary",
    meta: "US - Common Core ELA Grade 2:",
    desc: "Transition to independent reading. Consolidating phonics and building independent reading and writing.",
    topics: ["Phonics - vowel teams and diphthongs", "Reading fluency and expression", "Narrative writing - structured short pieces", "Grammar - nouns, verbs, pronouns", "Informational text comprehension"],
    outcome: "Students read independently, write structured short narratives and informational texts accurately.",
    download: "Download G2",
  },
  {
    id: "grade-3",
    title: "Grade 3 English",
    stage: "Elementary",
    meta: "US - Common Core ELA Grade 3:",
    desc: "Informational writing and text analysis introduced. Deepening comprehension and expanding writing to informational and opinion formats.",
    topics: ["Reading comprehension - main idea and key details", "Opinion and informational writing", "Grammar - conjunctions, adverbs, tense", "Vocabulary - using context clues", "Introduction to research and note-taking"],
    outcome: "Students write multi-paragraph opinion and informational texts and analyse grade-level content.",
    download: "Download G3",
  },
  {
    id: "grade-4",
    title: "Grade 4 English",
    stage: "Elementary",
    meta: "US - Common Core ELA Grade 4:",
    desc: "Literary analysis and essay structure introduced. Building academic writing and literary analysis foundations.",
    topics: ["Literary analysis - character, setting, theme", "Narrative and informational writing", "Grammar - relative clauses and modifiers", "Figurative language - simile, metaphor", "Researching and citing sources"],
    outcome: "Students write structured literary analysis paragraphs and multi-paragraph informational essays.",
    download: "Download G4",
  },
  {
    id: "grade-5",
    title: "Grade 5 English",
    stage: "Elementary",
    meta: "US - Common Core ELA Grade 5:",
    desc: "Argumentative writing and complex text analysis. Advanced reading comprehension and structured persuasive writing.",
    topics: ["Persuasive essay with evidence", "Point of view and author purpose analysis", "Grammar - punctuation for effect", "Vocabulary - roots and affixes", "Informational research project"],
    outcome: "Students write well-supported persuasive essays, analyse author purpose and use academic vocabulary confidently.",
    download: "Download G5",
  },
  {
    id: "grade-6",
    title: "Grade 6 English",
    stage: "Middle",
    meta: "US - Common Core ELA Grade 6:",
    desc: "Argument writing and literary analysis entry level. Transition to middle school - argument writing and literary analysis foundations.",
    topics: ["Argument writing - claim, evidence, reasoning", "Literary analysis - themes and motifs", "Grammar - complex sentence structures", "Textual evidence in written responses", "Research writing with citations"],
    outcome: "Students write structured arguments with textual evidence and produce foundational literary analysis essays.",
    download: "Download G6",
  },
  {
    id: "grade-7",
    title: "Grade 7 English",
    stage: "Middle",
    meta: "US - Common Core ELA Grade 7:",
    desc: "Comparative analysis and argument development. Deepening analytical writing and close reading at middle school level.",
    topics: ["Text analysis - comparing literary and informational texts", "Argument writing - developing counter-arguments", "Grammar - parallel structure and varied syntax", "Vocabulary in context", "Research paper writing foundations"],
    outcome: "Students write comparative essays, develop counter-arguments and produce organised research writing.",
    download: "Download G7",
  },
  {
    id: "grade-8",
    title: "Grade 8 English",
    stage: "Middle",
    meta: "US - Common Core ELA Grade 8:",
    desc: "High school preparation and complex literary analysis. Advanced middle school - high school English preparation.",
    topics: ["Evidence-based argument writing", "Literary analysis - symbol, irony and motif", "Grammar for style - semicolons and dashes", "Analysing author craft and text structure", "Research writing with citations"],
    outcome: "Students produce sophisticated argument essays and analyse author craft in complex literary texts.",
    download: "Download G8",
  },
  {
    id: "grade-9",
    title: "Grade 9 English",
    stage: "High School",
    meta: "US - Common Core ELA Grade 9:",
    desc: "Formal essay writing and literary analysis foundation. High school foundations - literary analysis and formal essay writing.",
    topics: ["Literary analysis - complex themes and author intent", "Formal essay - introduction, body, conclusion", "Grammar for style and clarity", "Close reading of classic and contemporary texts", "Oral presentations and Socratic discussions"],
    outcome: "Students write formal literary analysis essays independently and engage with complex texts confidently.",
    download: "Download G9",
  },
  {
    id: "grade-10",
    title: "Grade 10 English",
    stage: "High School",
    meta: "US - Common Core ELA Grade 10:",
    desc: "Pre-AP preparation and SAT readiness. Sophisticated analysis and persuasive writing.",
    topics: ["AP English preparation - language analysis", "Rhetorical analysis - ethos, pathos, logos", "Synthesis essay writing using multiple sources", "Grammar in style - varying sentence structures", "SAT Reading and Writing section preparation"],
    outcome: "Students apply rhetorical analysis confidently and write synthesis essays using multiple sources.",
    download: "Download G10",
  },
  {
    id: "grade-11",
    title: "Grade 11 English",
    stage: "High School",
    meta: "US - AP English Language & Composition:",
    desc: "SAT/ACT support included. AP English Language and Composition - argument and analysis.",
    topics: ["AP Lang - rhetorical analysis essays", "AP Lang - argument essay technique", "AP Lang - synthesis essay", "SAT/ACT reading and writing sections", "Timed essay practice with AP rubric scoring"],
    outcome: "Students produce AP-quality essays across all three AP Lang task types with confidence and accuracy.",
    download: "Download G11",
  },
  {
    id: "grade-12",
    title: "Grade 12 English",
    stage: "High School",
    meta: "US - AP English Literature & Composition:",
    desc: "College application essay support included. AP English Literature and senior year mastery.",
    topics: ["AP Lit - poetry, prose and drama analysis", "AP Lit - free-response essays", "College application essay writing", "SAT/ACT final preparation", "Independent reading and literary response"],
    outcome: "Students approach AP Literature assessments with strong analytical technique and develop compelling college application essays.",
    download: "Download G12",
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
    name: "Aditi Patalay",
    role: "Parent - Australia",
    flag: "flag-australia.svg",
    avatar: "/assets/images/nav/nav/image 9.png",
    text: "Amala teacher is the sweetest and most dedicated tutor! My children not only learned English grammar perfectly but also started loving the subject. Thank you Smavy.",
  },
  {
    name: "Kavitha Rathinaswamy",
    role: "Parent - Australia",
    flag: "flag-australia.svg",
    text: "My son Aajoy attends English classes with Ramesh Krishnan. After many classes I have seen clear growth in his grades, writing and vocabulary through assessments and tests.",
  },
  {
    name: "Vandana Bains",
    role: "Parent - Australia",
    flag: "flag-australia.svg",
    avatar: "/assets/images/nav/nav/image 6.png",
    text: "We have been with Smavy for nearly a year now, and our son has made tremendous progress in his reading skills thanks to his English tutor, Pradeepa. She is patient, knowledgeable and engaging.",
  },
];

const faqs = [
  ["What year levels do you offer English tutoring for?", "We offer 1:1 English tutoring for Grade K-12 in United States, including IB Diploma. Each year level has a downloadable curriculum guide on this page."],
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

export default function EnglishUnitedStatesPage() {
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
        Home <span className="mx-2 text-[#05b4bb]">/</span> Courses <span className="mx-2 text-[#05b4bb]">/</span> Academic Tutoring <span className="mx-2 text-[#05b4bb]">/</span> English - United States
      </div>
      <div className="mt-12 grid items-center gap-10 lg:grid-cols-[1.25fr_0.75fr]">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-[#46c7db]/70 bg-[#0a235f] px-4 py-2 text-[11px] font-bold text-[#48d8e8]">
            <Image src="/assets/images/flags/flag-us.svg" alt="" width={18} height={18} className="h-[18px] w-[18px] rounded-full object-cover" />
            Academic Tutoring - United States
          </span>
          <h1 className="mt-6 max-w-[850px] text-[40px] font-black leading-[1.04] tracking-[0] md:text-[64px]">
            Online <span className="text-[#05B4BB]">English Tutoring</span>
            <br />
            Year K-12
          </h1>
          <p className="mt-6 max-w-[760px] text-[15px] font-semibold leading-[1.6] text-white/78 md:text-[17px]">
            Expert 1:1 English tutors helping United States students master reading, writing, comprehension, grammar and literature - from early literacy through to advanced analytical writing.
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
        <Image src="/assets/images/Image (Replace)-19.png" alt="Student in an online US English tutoring session" width={1240} height={460} priority className="h-auto w-full object-cover" />
      </div>
    </section>
  );
}

function HeroSummaryCard() {
  return (
    <div className="justify-self-center rounded-[28px] border border-[#6e83bd] bg-[#3c5597] p-7 shadow-[0_24px_70px_rgba(3,12,49,0.24)] md:w-[350px]">
      <h2 className="flex items-center gap-3 text-[17px] font-black">
        <span className="h-3 w-3 rounded-full bg-[#f6ca00]" />
        English - United States
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
        <LeftSectionHeader eyebrow="Course Structure" title="13 Individual Year Courses" highlight="United States - Common Core ELA" />
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
          Book a free 1-hour trial session with a matched English tutor for United States. No payment details required.
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
